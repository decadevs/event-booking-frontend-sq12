import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { eventStyles } from "./eventStyle";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Buttons/Buttons";
import "./index.css";
import Dropdown from "../../components/Drop_Down/DropDown";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineUpload } from "react-icons/hi";

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
    {
      label: (
        <>
          <h5>VVIP Ticket</h5>
          <p>100 available</p>
        </>
      ),
      value: "vvip",
    },
    {
      label: (
        <>
          <h5>VIP Ticket</h5>
          <p>85 available</p>
        </>
      ),
      value: "vip",
    },
    {
      label: (
        <>
          <h5>Regular Ticket</h5>
          <p>150 available</p>
        </>
      ),
      value: "regular",
    },
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

  //UPLOAD FILES
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFile(file);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setFile(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

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
            <p
              style={{
                borderBottom: "1px solid rgba(37, 45, 66, 0.29)",
                height: "2em",
              }}
            >
              Upload Event Banner
            </p>

            <div>
              <button>
                <HiOutlineUpload
                  style={{ color: "000000", width: "90%", height: "6em" }}
                />
                <input
                  type="file"
                  onChange={handleUpload}
                  placeholder="click to upload"
                />
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  style={{
                    width: "300px",
                    height: "300px",
                  }}
                >
                  {file ? (
                    <p>{file.name}</p>
                  ) : (
                    <>
                      <p>Upload from file </p>
                      <p>or click here to drag image</p>
                      <p>PNG or JPEG only</p>
                    </>
                  )}
                </div>
              </button>
            </div>
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
              <div className={eventClasses.calendarIconDiv}>
                <p style={{ position: "absolute", width: "100%", top: "0px" }}>
                  Event Starts
                </p>
                <FaCalendarAlt className={eventClasses.calendarIcon} />
                <input
                  // value={eventStarts}
                  className={eventClasses.datetimeInput}
                  type="date"
                />
              </div>

              <div className={eventClasses.calendarIconDiv}>
                <p style={{ position: "absolute", width: "100%", top: "0px" }}>
                  Event Ends
                </p>
                <FaCalendarAlt className={eventClasses.calendarIcon} />
                <input
                  // value={eventStarts}
                  className={eventClasses.datetimeInput}
                  type="date"
                />
              </div>

              <div className={eventClasses.calendarIconDiv}>
                <p style={{ position: "absolute", width: "100%", top: "0px" }}>
                  Start Time
                </p>
                <FaCalendarAlt className={eventClasses.calendarIcon} />
                <input
                  // value={eventStarts}
                  className={eventClasses.datetimeInput}
                  type="time"
                />
              </div>

              <div className={eventClasses.calendarIconDiv}>
                <p style={{ position: "absolute", width: "100%", top: "0px" }}>
                  End Time
                </p>
                <FaCalendarAlt className={eventClasses.calendarIcon} />
                <input
                  // value={eventStarts}
                  className={eventClasses.datetimeInput}
                  type="time"
                />
              </div>
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