import prof from "./profileModal.module.css";
import { FiLogOut } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";
import Logout from "../logoutModal/logoutModal";
import { useState } from "react";

export const Modal = (props:{ showModal:any, setShowModal:any }) => {
  const [logoutState, setLogoutState] = useState(true);
  const [isLogedOut, setIsLogedOut] = useState(true);
  
  const close = () => {
    props.setShowModal(true);
    setIsLogedOut((pre) => !pre);
  };

  const handleLogout = () => {
    setIsLogedOut((pre) => !pre);
    setLogoutState(false);
  };
  return (
    <div className={prof.modalStyle}>
      {props.showModal || (
        <div>
          <div className={prof.modalContainer}>
            <div className={prof.closeProfileModal} onClick={close}>
              x
            </div>
            {(isLogedOut && (
              <div>
                <header className={prof.profileHeader}>
                  <img
                    src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className={prof.topAvatar}
                  />
                  <div className={prof.headerText}>
                    <span className={prof.textName}>Tochukwu Ezinne</span>
                    <span className={prof.textEmail}>
                      tochukwuezinne@gmail.com
                    </span>
                  </div>
                </header>
                <hr className={prof.borderLine} />

                <div className={prof.profileDetails}>
                  <div className={prof.payment}>
                    <MdOutlinePayments
                      style={{ color: "#FF5722", fontSize: "1.4rem" }}
                    />
                    <span style={{ fontSize: "1.2rem" }}>Payment Account</span>
                  </div>

                  <div className={prof.logout}>
                    <FiLogOut
                      style={{ color: "#FF5722", fontSize: "1.4rem" }}
                      className={prof.iconLog}
                    />
                    <span
                      style={{ fontSize: "1.2rem" }}
                      onClick={(e) => {
                        handleLogout();
                      }}
                    >
                      Logout
                    </span>
                  </div>
                </div>
              </div>
            )) || (
              <>
                {!isLogedOut && (
                  <Logout logout={logoutState} setLogout={setLogoutState} />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
