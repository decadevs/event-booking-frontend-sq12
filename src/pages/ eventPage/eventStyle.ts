import { makeStyles, styled } from "@material-ui/core";

export const eventStyles = makeStyles((theme) => ({
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
  location: {
    marginBottom: "90px",
    "& h2": {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "2em",
      color: "#252D42",
    },
  },

  Date_Time: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  Date_TimeInputField: {
    display: "grid",
    positionItems: "center",
    width: "100%",
  },

  EventDateForm: {
    marginTop: "2em",
    marginBottom: "10em",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2em",
    width: "50%",
    height: "12em",
  },

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
    position: "relative",
    flexDirection: "column",
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
    marginTop: "0px",
    "& p": {
      marginTop: "0px",
      width: "100%",
      display: "flex",
      height: "20%",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "1.5em",
      lineHeight: "2em",
      letterSpacing: "-0.288889px",
      color: "#1D2125",
    },
  },

  ticket_category: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2em",
    width: "100%",
  },

  "@media (max-width:690px)": {
    // 768px
    iconInfo: {
      display: "none",
    },
    eventHeader: {
      "& p": {
        fontSize: "0.8em",
      },
    },
    eventUpload: {
      // height: "13em",
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
    EventDateForm: {
      width: "100%",
    },

    ticket_category: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "100%",
    },
  },

  calendarIconDiv: {
    background: "#FFFFFF",
    border: "1px solid rgba(37, 45, 66, 0.29)",
    borderRadius: "4px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    justifyItems: "space-between",
    position: "relative",
  },

  datetimeInput: {
    background: "#FFFFFF",
    borderStyle: "none",
    borderRadius: "4px",
    height: "100%",
    width: "100%",
    textAlign: "center",
  },

  calendarIcon: {
    position: "absolute",
    left: "12%",
    height: "24px",
    width: "24px",
  },

  uploadfileInput: {
    display: "none",
  },
}));

export const FormField = styled("form")({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  flexDirection: "column",
});

export const FormLabel = styled("label")({
  display: "grid",
  placeItems: "center",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
});
export const FormInput = styled("input")({
  cursor: "pointer",
  opacity: 0,
  display: "none",
  position: "absolute",
  top: "0",
  right: "0",
  margin: "0",
  padding: "0",
  fontSize: "20px",
  filter: "alpha(opacity=0)",
});
export const FormSpan = styled("span")({
  display: "inlineBlock",
  width: "100%",
  padding: "0 10px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  borderRadius: "4px",
  boxSizing: "border-box",
});
