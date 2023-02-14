// import React from "react";
// import { makeStyles } from "@material-ui/core";
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import "./index.css";

// const eventStyles = makeStyles((theme) => ({
//   eventContainer: {
//     width: "100%",
//     fontSize: "",
//     height: "auto",
//     backgroundColor: "#E5E5E5",
//     display: "grid",
//     placeItems: "center",
//   },
//   eventMain: {
//     width: "90%",
//     backgroundColor: "inherit",
//     display: "flex",
//     justifyContent: "center",
//     flexDirection: "column",
//   },
//   iconInfo: {
//     backgroundColor: "#FEFBE8",
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     paddingLeft: "1em",
//     margin: "2em 0 2em 0",
//     height: "3.9em",
//     border: "1px solid #932F19",
//     borderRadius: "0.3em",
//     gap: "1em",
//     "& p": {
//       fontFamily: "Inter",
//       fontStyle: "normal",
//       fontWeight: "600",
//       fontSize: "16px",
//       lineHeight: "140%",
//       letterSpacing: "0.15px",
//       color: "#932F19",
//     },
//   },
//   eventHeader: {
//     "& h2": {
//       fontFamily: "Manrope",
//       fontStyle: "normal",
//       fontWeight: "800",
//       fontSize: "32px",
//       lineHeight: "44px",
//       color: "#252D42",
//     },
//     "& p": {
//       fontFamily: "Manrope",
//       fontStyle: "normal",
//       fontWeight: "400",
//       fontSize: "16px",
//       lineHeight: "27px",
//       color: "#252D42",
//     },
//   },
//   "@media (max-width:600px)": {
//       iconInfo: {
//         display: 'none'
//       },
//       eventHeader: {
//           '& p': {
//               fontSize: '0.8em'
//           }
//       }
//   },
// }));

// export const EventPage = () => {
//   const eventClasses = eventStyles();
//   return (
//     <div className={eventClasses.eventContainer}>
//       <div className={eventClasses.eventMain}>
//         <div className={`${eventClasses.iconInfo}`}>
//           <AiOutlineInfoCircle style={{ color: "932F19" }} />
//           <p>
//             Note that for every ticket sold, there would be a 9.99% deduction.
//           </p>
//         </div>
//         <div className={eventClasses.eventHeader}>
//           <h2>Basic Info</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Buttons/Buttons";
import "./index.css";

const eventStyles = makeStyles((theme) => ({
  eventContainer: {
    width: "100%",
    fontSize: "",
    height: "auto",
    backgroundColor: "#E5E5E5",
    display: "grid",
    placeItems: "center",
    // marginBottom: "3rem",
  },
  eventMain: {
    width: "90%",
    backgroundColor: "inherit",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  iconInfo: {
    backgroundColor: "#FEFBE8",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "1em",
    margin: "2em 0 2em 0",
    height: "3.9em",
    border: "1px solid #932F19",
    borderRadius: "0.3em",
    gap: "1em",
    "& p": {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "0.15px",
      color: "#932F19",
    },
  },
  eventHeader: {
    "& h2": {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "32px",
      lineHeight: "44px",
      color: "#252D42",
    },
    "& p": {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "27px",
      color: "#252D42",
    },
  },
  location: {
    // marginTop: "90px",
    marginBottom: "90px",
    "& h2": {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "2em",
      // lineHeight: '2.7em',
      color: "#252D42",
    },
  },

  Date_Time: {},

  save_continue: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3em",
  },
  inputField: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2em",
    width: "100%",
  },
  inputData: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  eventsBtn: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "1em",
  },
  locationSpan: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "27px",
    color: "#252D42",
  },
  eventUpload: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "30.3em",
    border: "1px solid rgba(37, 45, 66, 0.29)",
    marginTop: "2em",
  },
  uploadField: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
    // paddingTop: '2em',
    marginTop: "0px",
    "& p": {
      marginTop: "0px",
      width: "100%",
      display: "flex",
      height: "20%",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: "1px solid rgba(37, 45, 66, 0.29)",
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "1.5em",
      lineHeight: "2em",
      letterSpacing: "-0.288889px",
      color: "#1D2125",
    },
  },
  "@media (max-width:768px)": {
    iconInfo: {
      display: "none",
    },
    eventHeader: {
      "& p": {
        fontSize: "0.8em",
      },
    },
    eventUpload: {
      height: "13em",
    },
    eventsBtn: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      "& Button": {
        width: "100% !important",
      },
    },
    uploadField: {
      "& p": {
        fontSize: "0.8em",
        lineHeight: "1.18em",
      },
    },
    location: {
      height: "9.75em",
      "& h2": {
        fontSize: "0.8em",
        lineHeight: "1.18em",
        color: "#252D42",
        fontWeight: 800,
      },
    },
    locationSpan: {
      fontSize: "0.8em",
      lineHeight: "1.6em",
    },
  },
}));

export const EventPage = () => {
  const eventClasses = eventStyles();

  //state
  const [eventTitle, setEventTitle] = useState("");
  const [organizer, setOrganizer] = useState("");

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
              label="Event Name"
              style={{
                position: "relative",
                width: "100%",
                height: "2rem",
                // left: "112px",
                // marginTop: "20px",
                color: "#000 !important",
              }}
              type={"text"}
              value={eventTitle}
              name="name"
              placeholder=""
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </div>
          <div className={eventClasses.inputData}>
            <InputField
              label="Event Name"
              style={{
                // position: "absolute",
                width: "100%",
                height: "2rem",
                // left: "112px",
                // marginTop: "20px",
                color: "#000",
              }}
              type={"text"}
              value={eventTitle}
              name="name"
              placeholder=""
              onChange={(e) => setEventTitle(e.target.value)}
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
            {/* <button
              className=""
              onClick={() => console.log("You clicked on the online!")}
              style={{
                width: "10rem",
                height: "3.2rem",
                left: "112px",
                top: "1427px",
                marginTop: "3rem",
                marginRight: "2rem",
                background: "rgba(0, 50, 47, 0.05)",
                borderRadius: "0.3rem",
              }}
              type={"submit"}
            >
              Online
            </button> */}
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
            {/* <button
              className=""
              onClick={() => console.log("You clicked on the venue!")}
              style={{
                width: "10rem",
                height: "3.2rem",
                left: "112px",
                top: "1427px",
                marginTop: "3rem",
                marginLeft: "2rem",
                background: "#FFFFFF",
                borderRadius: "0.3rem",
                border: "1px solid rgba(37, 45, 66, 0.29)",
              }}
              type={"submit"}
            >
              Venue
            </button> */}
          </div>
        </div>

        <div className={eventClasses.Date_Time}>
          <h2>Date & Time</h2>
          <p style={{ marginTop: "0.4rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* <SlCalender style={{ color: "#000000" }} /> */}
          <div></div>
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
