import log from "./logoutModal.module.css";

const Logout = (props:{logout:any, setLogout:any}) => {


  return (
    <div className={log.logoutContainer}>
      {props.logout || (
        <header >
          <h2 className="logoutText">
            Logout Confirmation</h2>
          <hr className={log.borderLine} />
          <p>Are you sure you want to logout from your account?</p>
          <div className={log.logbtn}>
            <button className={log.logbtnNo}>No</button>
            <button className={log.logbtnYes}>Yes</button>
          </div>
        </header>
      )}
    </div>
  );
};

export default Logout;
