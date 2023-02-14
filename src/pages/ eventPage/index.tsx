import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { eventStyles } from './eventStyle'
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Buttons/Buttons";
import "./index.css";
import Dropdown from "../../components/Drop_Down/DropDown";
import { SelectChangeEvent } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { FaCalendarAlt } from 'react-icons/fa';
import { RxUpload } from "react-icons/rx";
import { CalendarInput } from "./eventDate"


export const EventPage = () => {
  const eventClasses = eventStyles();

  //state
  const [eventTitle, setEventTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [ticketClass, setTicketClass] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  //data and time
  const [eventStarts, setEventStarts] = useState("");
  const [eventEnds, setEventEnds] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");


    const ticketOptions = [
      { label: "VVIP Ticket", value: "vvip" },
      { label: "VIP Ticket", value: "vip" },
      { label: "Regular Ticket", value: "regular" },
    ];
  
    const categoryOptions = [
      { label: "food & Drinks", value: "food" },
      { label: "Firm,Media & Entertainment", value: "Media" },
      { label: "Event & Lifestyle", value: "Event" },
      { label: "Special Interest", value: "Special" },
      { label: "Religious & Spirituality", value: "Religious" },
      { label: "Technology", value: "Technology" },
      { label: "Government & Politics", value: "Government" },
    ];

  return (
    <div className={eventClasses.eventContainer}>
      <div className={eventClasses.eventMain}>
        <div className={`${eventClasses.iconInfo}`}>
          <AiOutlineInfoCircle style={{ color: "932F19" }} />
          <p>
            Note that for every ticket sold, there would be a 9.99% deduction.
          </p>
        </div>
        <div className={eventClasses.eventHeader}>
          <h2>Basic Info</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>

        <div className={eventClasses.inputField}>
          <div className={eventClasses.inputData}>
            <InputField
              name="name"
              type={"text"}
              label="Event Name"
              value={eventTitle}
              id={""}
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </div>

          <div className={eventClasses.inputData}>
            <InputField
              name="name"
              type={"text"}
              label="Organizer"
              value={organizer}
              id={""}
              onChange={(e) => setOrganizer(e.target.value)}
            />
          </div>

          <div className={eventClasses.ticket_category}>
            <Dropdown
              label={"Ticket Class"}
              value={ticketClass}
              options={ticketOptions}
              onChange={(e) => setTicketClass(e.target.value)}
              formSx={{ width: "100%" }}
            />

            <Dropdown
              label={"Category"}
              value={selectedCategory}
              options={categoryOptions}
              onChange={(e) => setSelectedCategory(e.target.value)}
              formSx={{ width: "100%" }}
            />
          </div>
        </div>

        <div className={eventClasses.eventUpload}>
          <div className={eventClasses.uploadField}>
            <p>Upload Event Banner</p>
          </div>
        </div>

        <div className={eventClasses.location}>
          <h2>
            Location <br />{" "}
            <span className={eventClasses.locationSpan}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </h2>
          <div className={eventClasses.eventsBtn}>
            <Button
              content="Online"
              styleType="secondary"
              height="3.5em"
              width="10%"
              onClick={() => window.alert("Continue")}
              type={"submit"}
            />

            <Button
              content="Venue"
              styleType="warning"
              height="3.5em"
              width="10%"
              onClick={() => window.alert("Continue")}
              type={"submit"}
            />
          </div>
        </div>

        <div className={eventClasses.Date_Time}>
          <h2>Date & Time</h2>
          <p style={{ marginTop: "0.4rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className={eventClasses.Date_TimeInputField}>
            <form className={eventClasses.EventDateForm}>
              {/* <InputField
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(37, 45, 66, 0.29)",
                  borderRadius: "4px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                name="name"
                type={"date"}
                label="Event Starts"
                value={""}
                id={""}
                onChange={(e) => setOrganizer(e.target.value)}
              /> */}
              <input
                // value={eventStarts}
                type={"date"}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(37, 45, 66, 0.29)",
                  borderRadius: "4px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                placeholder="Event Starts"
              />
              <input
                // value={eventEnds}
                type={"date"}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(37, 45, 66, 0.29)",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
                placeholder="Event Ends"
              />
              <input
                // value={startTime}
                type={"time"}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(37, 45, 66, 0.29)",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
                placeholder="Start Time"
              />
              <input
                // value={endTime}
                type={"time"}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(37, 45, 66, 0.29)",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
                placeholder="End Time"
              />
              {/* <CalendarInput /> */}

            </form>
          </div>
        </div>

        <div className={eventClasses.save_continue}>
          <Button
            content="Save & Continue"
            styleType="primary"
            height="4.5em"
            width="100%"
            onClick={() => window.alert("Continue")}
            type={"submit"}
          />
        </div>
      </div>
    </div>
  );
};
