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
import InputField from "../../components/InputField/InputField";
import "./index.css";

const eventStyles = makeStyles((theme) => ({
  eventContainer: {
    width: "100%",
    fontSize: "",
    height: "auto",
    backgroundColor: "#E5E5E5",
    display: "grid",
    placeItems: "center",
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
  "@media (max-width:600px)": {
    iconInfo: {
      display: "none",
    },
    eventHeader: {
      "& p": {
        fontSize: "0.8em",
      },
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
        <div>
          <label>Event Title</label>
          <InputField
            style={{
              position: "absolute",
              width: "52rem",
              height: "3rem",
              left: "112px",
              marginTop: "20px",
            }}
            type={"text"}
            value={eventTitle}
            name="name"
            placeholder=""
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
