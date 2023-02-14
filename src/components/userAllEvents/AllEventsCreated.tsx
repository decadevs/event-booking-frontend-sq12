import styled from "styled-components";
import { FilterAltOutlined, OpenInNewOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import EventImg from "../../assets/userallevent/image2.png";
import Modal from "react-modal";
import React from "react";
import TicketsSummary from "./TicketsSummary";
import { AllEvents, Event } from "./data";

const Container = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  display: flex;
`;
const EventHeaderLeft = styled.div`
  flex: 1;
  text-align: left;
  font-size: 26px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #252d42;
  margin: 10px;
`;
const EventHeaderRight = styled.div`
  flex: 1;
`;
const HeaderRightItems = styled.div`
  display: flex;
  float: right;
  border: 1px #667085 solid;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const EventStatistics = styled.p`
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.15px;
  color: #667085;
  margin: 10px;
`;
const CardContainer = styled.div`
  display: flex;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
`;
const Image = styled.img`
  flex: 1;
  width: 100%;
  object-fit: cover;
  margin: 20px;
  @media (max-width: 768px) {
    width: auto;
    object-fit: cover;
  }
`;
const Second = styled.div`
  flex: 1;
`;
const CardDetails = styled.div`
  margin: 20px 10px;
  font-size: 14px;
`;
const CardItem = styled.p`
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  color: #667085;
  margin: 0;
  padding: 0;
`;
const CardItemBold = styled.p`
  text-align: left;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  color: #252d42;
  margin: 0;
  padding: 0;
`;
const Third = styled.div`
  flex: 1;
`;
const Fourth = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 20px;
  @media (max-width: 768px) {
    text-align: left;
    display: flex;
  }
`;

const AllEventsCreated = () => {
  //modal states and open-close functions
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [openModalID, setOpenModalID] = React.useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleOpenModal = (id: string) => {
    setOpenModalID(id);
    openModal();
  };
  //modal states ends

  const checkStatus = (endDate: string, endTime: string) => {
    let year;
    let month;
    let day;
    let hours;
    let splittedDate = endDate.split('/');
    day = Number(splittedDate.at(0));
    month = Number(splittedDate.at(1));
    year = Number(splittedDate.at(2));
    hours = Number(endTime.substring(0, 1))
    let time = endTime.substring(1)
    if(time === 'pm'){
      hours += 12; 
    }
    let eventEndDate = new Date(year, month-1, day, hours);
    console.log(eventEndDate)
    if(new Date() >= eventEndDate){
      return false
    }
    return true
  }
  return (
    <>
      <Container>
        {/* First Bold header */}
        <Wrapper>
          <EventHeaderLeft>All events created</EventHeaderLeft>
          <EventHeaderRight>
            <HeaderRightItems>
              <Items>
                <FilterAltOutlined />
              </Items>
              <Items> Filter </Items>
              <Items
                style={{ borderLeft: "1px solid #667085", paddingLeft: "10px" }}
              >
                {" "}
                Date{" "}
              </Items>
            </HeaderRightItems>
          </EventHeaderRight>
        </Wrapper>
        {/* Second Light header */}
        <EventStatistics>4 events created so far</EventStatistics>
        {/* Card Start */}

        {AllEvents.map((event: Event) => (
          <CardContainer key={event.id}>
            {/* Card Image */}
            <Image src={EventImg} />
            {/* Card Title, Organizer, Ticket*/}
            <Second>
              <CardDetails>
                <CardItem>Event Title</CardItem>
                <CardItemBold>{event.EventTitle}</CardItemBold>
              </CardDetails>
              <CardDetails>
                <CardItem>Organizer</CardItem>
                <CardItemBold>{event.Organizer}</CardItemBold>
              </CardDetails>
              <CardDetails>
                <CardItem>Ticket Class</CardItem>
                <CardItemBold>{event.TicketClass}</CardItemBold>
              </CardDetails>
            </Second>
            {/* Card Category, Location date */}
            <Third>
              <CardDetails>
                <CardItem>Category</CardItem>
                <CardItemBold>{event.Category}</CardItemBold>
              </CardDetails>
              <CardDetails>
                <CardItem>Location</CardItem>
                <CardItemBold>{event.Location}</CardItemBold>
              </CardDetails>
              <CardDetails>
                <CardItem>Date & Time</CardItem>
                <CardItemBold>{`${event.DateTime.startDate} - ${event.DateTime.endDate} ${event.DateTime.startTime} - ${event.DateTime.endTime}`}</CardItemBold>
              </CardDetails>
            </Third>
            {/* Card Active Button and View Link */}
            <Fourth>
              <CardDetails>
                {checkStatus(event.DateTime.endDate, event.DateTime.endTime) === true ?
                    <Button
                    variant="contained"
                    color="primary"
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "12px",
                      lineHeight: "140%",
                      color: "#34A853",
                      background: "rgba(52, 168, 83, 0.2)",
                      borderRadius: "50px",
                    }}
                  >
                    Active
                  </Button>
                  :
                  <Button
                  variant="contained"
                  color="primary"
                  style={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "140%",
                    color: "#34A853",
                    background: "rgba(52, 168, 83, 0.2)",
                    borderRadius: "50px",
                  }}
                  disabled={true}
                >
                  Closed
                </Button>
                }
              
              </CardDetails>
              <CardDetails>
                <Link
                  to={"#"}
                  style={{
                    textDecoration: "underline",
                    color: "#FF5722",
                    fontSize: "12px",
                  }}
                  onClick={() => handleOpenModal(event.id)}
                >
                  View Tickets sold
                </Link>
              </CardDetails>
              <CardDetails>
                <OpenInNewOutlined style={{ color: "#667085" }} />
              </CardDetails>
            </Fourth>
          </CardContainer>
        ))}

        {/* Card Ends */}
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <TicketsSummary id={openModalID} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default AllEventsCreated;
