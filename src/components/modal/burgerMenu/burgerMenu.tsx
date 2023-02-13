import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logout from "../logoutModal/logoutModal";
import Bug from "./burgerMenu.module.css";


export const BurgerMenu = (props: {
  displayBurgerMenu: any;
  setDisplayBurgerMenu: any;
  
}) => {
  const [logoutMobile, setLogoutMobile] = useState(true);
  const [isLogedOut, setIsLogedOut] = useState(true);

  const closeMenu = () => {
    console.log(props.displayBurgerMenu);
    console.log("clicked");
    props.setDisplayBurgerMenu((pre: any) => !pre);
  };
  return (
    <div className={Bug.menu}>
      {props.displayBurgerMenu && (
        <ul className={Bug.burgerDropdown}>
          <div className={Bug.bugerheader}>
            <span>
              <img
                className={Bug.burgerImg}
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              />
            </span>
            <span
              className={Bug.burgerClose}
              onClick={closeMenu}
              style={{ color: "black" }}
            >
              X
            </span>
          </div>
          <span className={Bug.textEmail}>tochukwuezinne@gmail.com</span>
          <hr className={Bug.borderLine} />
          <li id={Bug.burgerlisting}>Tochukwu Ezinne</li>
          <hr className={Bug.borderLine} />
          <li id={Bug.burgerlisting}>Create Event</li>
          <hr className={Bug.borderLine} />
          <li id={Bug.burgerlisting}>Payment Account</li>
          <hr className={Bug.borderLine} />
          <li id={Bug.burgerlisting } onClick={() => setLogoutMobile(!logoutMobile)}>logout</li>
        </ul>
      )}
        <div >
      {!logoutMobile && (<Logout logout={logoutMobile} setLogout={setLogoutMobile} />) }
      </div>
    </div>
  );
};
