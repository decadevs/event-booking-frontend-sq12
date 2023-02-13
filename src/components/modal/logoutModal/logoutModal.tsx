import { maxWidth } from "@mui/system";
import log from "./logoutModal.module.css";

const Logout = (props:{logout:any, setLogout:any}) => {
    const close = () => {
        props.setLogout(true)
    }

  return (
    <div className={log.logoutContainer}>
      {props.logout || (
        <header >
          <h2 className="logoutText" style={{marginRight:"15rem"}}>
            Logout Confirmation</h2>
          <hr className={log.borderLine} />
          <p className={log.logoutMes}style={{marginTop:"10px", marginRight:"5rem"}}>Are you sure you want to logout from your account?</p>
          <div className={log.logbtn} style={{marginLeft:"2.5rem"}}>
            <button className={log.logbtnNo} onClick={close}>No</button>
            <button className={log.logbtnYes} style={{marginLeft:"12px"}}>Yes</button>
          </div>
        </header>
      )}
    </div>
  );
};

export default Logout;
