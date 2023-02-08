import styled from 'styled-components'
import {FilterAltOutlined, OpenInNewOutlined} from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EventImg from '../../assets/userallevent/image2.png'

const Container = styled.div`
    width: auto;
    margin: 0;
    padding: 0;
    @media (max-width: 768px){
      width: 100%;
    } 
`;
const Wrapper = styled.div`
  display: flex;
`
const EventHeaderLeft = styled.div`
  flex: 1;
  text-align:left;
  font-size: 26px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #252D42;
  margin: 10px;
`
const EventHeaderRight = styled.div`
  flex: 1;
`
const HeaderRightItems = styled.div`
display:flex;
float: right;
border: 1px #667085 solid;

`
const Items = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const EventStatistics = styled.p`
text-align: left;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
letter-spacing: 0.15px;
color: #667085;
margin: 10px;
`
const CardContainer = styled.div`
display: flex;
background: #fff;
border-radius:6px;
@media (max-width: 768px){
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
} 
`
const Image = styled.img`
flex: 1;
width: 100%;
object-fit: cover;
margin: 20px;
@media (max-width: 768px){
  width: auto;
  object-fit: cover;
} 
`
const Second = styled.div`
flex: 1;
`
const CardDetails = styled.div`
margin: 20px 10px;
font-size:14px;
`
const CardItem = styled.p`
text-align:left;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
color: #667085;
margin:0;
padding: 0;
`
const CardItemBold = styled.p`
text-align:left;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
color: #252D42;
margin:0;
padding: 0;
`
const Third = styled.div`
flex: 1;
`
const Fourth = styled.div`
flex: 1;
text-align: right;
margin-right: 20px;
@media (max-width: 768px){
  text-align: left;
  display: flex;
} 
`


const AllEventsCreated = () => {
  return (
    <Container>
    {/* First Bold header */}
      <Wrapper>
        <EventHeaderLeft>
            All events created
        </EventHeaderLeft>
        <EventHeaderRight>
            <HeaderRightItems>
              <Items>
                <FilterAltOutlined />
              </Items>
              <Items> Filter </Items>
              <Items style={{borderLeft:"1px solid #667085", paddingLeft:"10px"}}> Date </Items>
            </HeaderRightItems>
        </EventHeaderRight>
      </Wrapper>
    {/* Second Light header */}
      <EventStatistics>
        4 events created so far
      </EventStatistics>
    {/* Card Start */}
      <CardContainer>
        {/* Card Image */}
        <Image src={EventImg}/>
        {/* Card Title, Organizer, Ticket*/}
        <Second>
          <CardDetails>
            <CardItem>Event Title</CardItem>
            <CardItemBold>Eko All Night Pool Party Festival</CardItemBold>
          </CardDetails>
          <CardDetails>
            <CardItem>Organizer</CardItem>
            <CardItemBold>ACMA People’s platform</CardItemBold>
          </CardDetails>
          <CardDetails>
            <CardItem>Ticket Class</CardItem>
            <CardItemBold>VVIP, VIP & Regular</CardItemBold>
          </CardDetails>
        </Second>
        {/* Card Category, Location date */}
        <Third>
          <CardDetails>
            <CardItem>Category</CardItem>
            <CardItemBold>Event & Lifestyle</CardItemBold>
          </CardDetails>
          <CardDetails>
            <CardItem>Location</CardItem>
            <CardItemBold>2b, Herbert Macaulay Road, Yaba, Lagos</CardItemBold>
          </CardDetails>
          <CardDetails>
            <CardItem>Date & Time</CardItem>
            <CardItemBold>VVIP, VIP & Regular</CardItemBold>
          </CardDetails>
        </Third>
        {/* Card Active Button and View Link */}
        <Fourth>
          <CardDetails>
            <Button
              variant='contained'
              color='primary'
              style={{fontFamily: "Inter",
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
          </CardDetails>
          <CardDetails>
                <Link to={'/login'} style={{
                  textDecoration:"underline",
                  color:"#FF5722",
                  fontSize:"12px",
                  }}>
                    View Tickets sold
                </Link>
          </CardDetails>
          <CardDetails>
            <OpenInNewOutlined style={{color:"#667085"}}/>
          </CardDetails>
        </Fourth>
      </CardContainer>
      {/* Card Ends */}
    </Container>
  )
}

export default AllEventsCreated
