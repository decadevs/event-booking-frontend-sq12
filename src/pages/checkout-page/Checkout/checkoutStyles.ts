import { makeStyles, Theme } from "@material-ui/core/styles";
export const styledCheckout = makeStyles((theme) => ({
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
  eventHead: {
        fontFamily: "Manrope",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "33px",
        color: "#252D42",
        marginTop: "0.4em",
      },
      menuAppIcons:{
        width: "20em",
        height: "3.5em",
        fontSize: "1em"
    },
    headerBtns: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "50px",
      },
  eventCreateBtn: {
        width: "146px",
        height: "54px",
        left: "1198px",
        top: "18px",
        background: "#FF5722",
        borderRadius: "4px",
        color: "#FFFFFF",
        border: "none",
      },
      navbarIcon: {
        display: "none",
      },
   menuAppBar:{
      //   height: "20em",
        marginTop: "5.6em",
        MarginRight: 0,
        position: 'absolute'
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
  goBack: {
        display: "flex",
        gap: "5px",
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
  informationBanner: {
        fontFamily: "Manrope",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "3em",
        lineHeight: "76px",
        color: "#FFFFFF",
      },

  chekckoutTitle:{
width: "267px",
height: "76px",
// left: "587px",
// top: "498px",
display: "flex",
justifyContent: "center",
fontFamily: 'Manrope',
fontStyle: "normal",
fontWeight: 700,
fontSize: "56px",
lineHeight: "76px",
color: "#000000",
  },

timeLeft:{
width: "101px",
height: "22px",
left: "670px",
top: "580px",
fontFamily: 'Manrope',
fontStyle: "normal",
fontWeight: 400,
fontSize: "16px",
lineHeight: "22px",
color: "rgba(37, 45, 66, 0.29)",
  },

  pageHead:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4em",
  },
  pageHead2:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer:{
    width: "100%",
    paddingBottom: "10em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  mainContainer2:{
    display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "10em",
      width: "90%",
  },
  contact:{
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    width: "35%"
  },
  conInfo:{
    marginBottom: "2em",
    marginTop: "2em",
    width: "255px",
    height: "33px",
    left: "112px",
    top: "723px",
    fontFamily: 'Manrope',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "33px",
    color: "#000000",
  },
  summary:{
    width: "35%",
    height: "55em",    
    left: "0px",    
    top: "0px",   
    background: "rgba(0, 50, 47, 0.03)",  
  },
  line:{
  width: "100%",
      height: "0px",
      left: " 0px",
      top: "129px",
      border: "1px solid #C4C4C4",
    },
    sumTitle:{
      width: "12.5em",
      height: "2.0625em",
      left: "2.5em",
      top: "2.5em",
      fontFamily: 'Manrope',
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "1.5em",
      lineHeight: "2.0625em",
      color: "#000000",
    },
    amountContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        marginBottom: "10em"
    },
    total:{
      display: "flex",
      justifyContent: "space-between",
      height: "2.75em",
      fontFamily: 'Manrope',
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "2em",
      lineHeight: "2.75em",
      color: "#000000",
      flex: "none",
      order: 0,
      flexGrow: 0,
    },
    ticketSummary1:{
      width: "161px",
      height: "30px",
      left: "40px",
      top: "327px",
      fontFamily: 'Manrope',
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "1.3em",
      lineHeight: "30px",
      color: "#000000",
      marginBottom: "2em",
    },
    ticketSummary2:{
      width: "161px",
      height: "30px",
      left: "40px",
      top: "327px",
      fontFamily: 'Manrope',
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "1.3em",
      lineHeight: "30px",
      color: "#000000",
    },
    ticketSummary3:{
      width: "122px",
      height: "22px",
      left: "40px",
      top: "427px",
      fontFamily: 'Manrope',
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1em",
      lineHeight: "22px",
      color: "#000000",
      marginBottom: "1.1em"
    },
    ticketSummary4:{
      width: "161px",
      height: "30px",
      left: "40px",
      top: "469px",
      fontFamily: 'Manrope',
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "1.3em",
      lineHeight: "30px",
      color: "#000000",
      marginBottom: "2.5em",
    },

    "@media (max-width: 950px)":
    {
      mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContents: "center",
        alignItems: "center",
        width: "100%"
      },
      headerBtns: {
        display: "none",
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
      goBack: {
        display: "none",
        gap: "5px",
      },
      eventBanner: {
        width: "100%",
        height: "100%",
      },
      mainContainer2:{
        display: "flex",
        flexDirection: "column",
        justifyContents: "center",
        alignItems: "center",
        width: "100%",
        gap: "3em"
      },
      contact:{
        width: "80%",
        marginBottom: "0.2em",
        gap: "0.1em",
      },
      summary:{
        width: "80%",
        fontSize: "1em",
        height: "2%",
        paddingTop: "2em",
      },
      media:{
        fontSize: "1em"
      },
      ticketSummary1:{
        fontSize: "1em"
      },
      ticketSummary2:{
        fontSize: "1em"
      },
      ticketSummary3:{
        fontSize: "1em"
      },
      ticketSummary4:{
        fontSize: "1em"
      },
      chekckoutTitle:{
        fontSize: "2em"
      },
      pageHead2:{
        marginTop: "5em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      },
      pageHead:{
        marginBottom: "0.2em"
      },
      conInfo:{
        marginBottom: "0.2em"
      }
    },
    "@media (max-width: 768px)": {
      mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContents: "center",
        alignItems: "center",
        width: "100%"
      },
      headerBtns: {
        display: "none",
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
      goBack: {
        display: "none",
        gap: "5px",
      },
      eventBanner: {
        width: "100%",
        height: "100%",
      },
      mainContainer2:{
        display: "flex",
        flexDirection: "column",
        justifyContents: "center",
        alignItems: "center",
        width: "100%",
        gap: "3em"
      },
      contact:{
        width: "80%",
        marginBottom: "0.2em",
        gap: "0.1em",
      },
      summary:{
        width: "80%",
        fontSize: "0.7em",
        height: "2%",
        paddingTop: "2em",
      },
      media:{
        fontSize: "0.7em"
      },
      ticketSummary1:{
        fontSize: "1.2em"
      },
      ticketSummary2:{
        fontSize: "1.2em"
      },
      ticketSummary3:{
        fontSize: "1.2em"
      },
      ticketSummary4:{
        fontSize: "1.2em"
      },
      chekckoutTitle:{
        fontSize: "2em"
      },
      pageHead2:{
        marginTop: "5em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      },
      pageHead:{
        marginBottom: "0.2em"
      },
      conInfo:{
        marginBottom: "0.2em"
      },
      imgDiv:{
        position: "relative",
      }
    },
}))