import { makeStyles, Theme } from "@material-ui/core/styles";
// import { useMediaQuery } from "@material-ui/core";
// const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
import Button from "../../../components/Buttons/Buttons";
export const styledPayments = makeStyles((Theme) => ({
mainContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "20%",
    left: "30%",
    width: "40%",
    height: "55%",
    background: "#FFFFFF",
    gap: "3em",
    borderRadius: "2em",
    paddingTop: "3em"
      },
    secondContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "2em",
    width: "80%",
    height: "30%",
    background: "#FFFFFF",
      },
      type:{
        height: "2.125em",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "3em",
        lineHeight: "140%",
        display: "flex",
        alignItems: "center",
        color: "#101828",
        order: 0,
        flexGrow: 0,
      },
      select:{
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "1.3em",
        lineHeight: "20px",
        display: "flex",
        alignItems: "center",
        color: "#98A2B3",
        flex: "none",
      },
      type2:{
        width: "5.9375",
        height: "1.25",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "1.3em",
        lineHeight: "1.25em",
        color: "#101828",
        marginBottom: "2em"
      },
      payBtn: {
        width: "90%",
        height: "3.5em",
        border: "none",
        background: "#FF5722",
        borderRadius: "6px",
        fontFamily: "Manrope",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "27px",
        color: "#FFFFFF",
      },
      btn:{
        width: "90%",
        display: "flex",
        justifyContent: "center",
      },

      "@media (max-width: 950px)": {
        mainContainer:{
          width: "50%",
          top: "20%",
          right: "60%",
          height: "50%",
        },
        type:{
          height: "1em",
          fontWeight: 700,
          fontSize: "2em",
          lineHeight: "70%", 
        },
        select:{
          
        },
        btn:{
          width: "50%"
        },
        "@media (max-width: 768px)": {
          mainContainer:{
            width: "70%",
            top: "20%",
            left: "15%",
            height: "70%",
          },
          type:{
            height: "1em",
            fontWeight: 500,
            fontSize: "2em",
            lineHeight: "70%", 
          },
          select:{
            
          },
          btn:{
            width: "50%"
          },
        },
      }

}))
