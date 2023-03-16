import { makeStyles, Theme } from "@material-ui/core/styles";
export const styledDropdown = makeStyles((Theme) => ({
    formContainer:{
        width: "80%",
        alignDtems: "center",
        padding: "12px 16px",
        background: "#FFFFFF",
        border: "1px solid #D0D5DD",
        borderRadius: "6px",
    },
    menuitem:{
        fontSize: "1.5em"
    },
    select:{
        fontSize: "1.5em",
        paddingLeft: "0.5em",
    }
}));
