import { makeStyles, Theme } from "@material-ui/core/styles";
export const stlyedSelection = makeStyles((theme) => ({
    mainContainer: {
      width: "100%",
      paddingBottom: "10em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#E5E5E5",
    },
    mainContainer1: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "90%",
    },
    headingContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    mapBtn: {
      backgroundColor: "rgba(0, 50, 47, 0.05)",
      marginTop: "2em",
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#000000",
      justifyContent: "center",
      alignItems: "center",
      width: "122px",
      height: "42px",
      background: "rgba(0, 50, 47, 0.05)",
      borderRadius: "4px",
    },
    intro: {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "44px",
      color: "#000000",
      height: "100px",
    },
    tick: {
      height: "70px",
      left: "112px",
      top: "780px",
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontHeight: 700,
      fontSize: "24px",
      lineHeight: "33px",
      color: "#000000",
    },
    eachTicket: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    line: {
      width: "100%",
      height: "0px",
      left: " 0px",
      top: "129px",
      border: "1px solid #C4C4C4",
    },
    ticketSelection: {
      left: "0px",
      top: "0px",
      background: "#FFFFFF",
      justifyContent: "space-between",
      display: "flex",
      height: "60px",
    },
    btnSelect: {
      background: "#FFFFFF",
      display: "flex",
      flexDirection: 'column',
      fontSize: "25px",
    //   textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0px",
      border: "0px solid #C4C4C4",
    //   marginTop: "0.7em",
      width: "2em",
      cursor: "pointer",
    },
    qty: {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "27px",
      color: "#252D42",
    },
    continueBtn: {
      width: "250px",
      height: "56px",
      left: "475px",
      top: "454px",
      background: "#FF5722",
      borderRadius: "6px",
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "27px",
      color: "#FFFFFF",
    },
    continue: {
      height: "9em",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      background: "rgba(0, 50, 47, 0.05)",
    },
    firstName: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      width: "100% !important",
    },
    formControl: {
      width: "571px",
      height: " 70px",
      left: "112px",
      top: "660px",
      background: "#F8F9FA",
      border: "1px solid rgba(37, 45, 66, 0.29)",
      borderRadius: "4px",
      boxSizing: "border-box",
      paddingLeft: "10px",
    },
    selection: {},
    eventName: {},
    header2: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      padding: "20px",
      background: "#FFFFFF",
    },
    header1: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#FFFFFF",
      flexDirection: "row",
    },
    headerBtns: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: "50px",
    },
    eventHead: {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "33px",
      color: "#252D42",
      marginTop: "0.4em",
    },
    eventCreateBtn: {
      width: "146px",
      height: "54px",
      left: "1198px",
      top: "18px",
      background: "#FF5722",
      borderRadius: "4px",
      color: "#FFFFFF",
    },
    eventBanner: {
      width: "100%",
    },
    imgDiv: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    eventHightlight: {
      display: "flex",
      position: "absolute",
      color: "#FFFFFF",
      top: "10%",
      left: "1%",
      marginLeft: "5em",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    goBack: {
      display: "flex",
      gap: "5px",
    },
    informationBanner: {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "3em",
      lineHeight: "76px",
      color: "#FFFFFF",
    },
    bannerInfo: {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "50px",
      lineHeight: "76px",
      color: "#FFFFFF",
    },
    navbarIcon: {
      display: "none",
    },
    nav: {
      position: "relative",
      display: "inline-block",
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "16px",
      fontSize: "16px",
      border: "none",
      cursor: "pointer",
    },
    menuAppBar:{
    //   height: "20em",
      marginTop: "5.6em",
      MarginRight: 0,
      position: 'absolute'
    },
    menuAppIcons:{
        width: "20em",
        height: "3.5em",
        fontSize: "1em"
    },
    formContainer: {
        height: "auto",
        display: "grid",
        // flexDirection: "row",
        gridTemplateColumns: '1fr 1fr',
        marginBottom: "40px",
        gap: '3em',
        // justifyContent: "space-between",
        width: "100%",
        '& InputField': {
            width: '100%',
            fontSize:'1.5em',
            fontWeight: 'normal',
            outline: 'none !important',
        }
      },
    inputs: {
        width: "50%",
    },
    "@media (max-width: 768px)": {
      mainContainer: {
        display: "flex",
        flexDirection: "column",
      },
      firstName: {
        display: "grid",
        gridTemplateColumns: "1fr",
      },
      headerBtns: {
        display: "none",
      },
      eachTicket: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
      },
      intro: {
        fontFamily: "Manrope",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "44px",
        color: "#000000",
        height: "100px",
      },
      informationBanner: {
        fontSize: "2em !important",
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
      },
      eventHightlight: {
        display: "flex",
        marginLeft: "1em",
      },
      navbarIcon: {
        display: "block",
        cursor: "pointer",
        // marginLeft: "85%"
      },
      mapBtn: {},
      selection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      eventName: {
        paddingLeft: "1em",
      },
      goBack: {
        display: "none",
        gap: "5px",
      },
      eventBanner: {
        width: "100%",
        height: "100%",
      },
    },
  }));