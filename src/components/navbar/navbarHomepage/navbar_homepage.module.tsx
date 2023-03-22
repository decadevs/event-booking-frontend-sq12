import react, { useState } from "react";
import Nav from "../Navbar.module.css";
import { FiChevronDown } from "react-icons/fi";
import { Modal } from "../../modal/profileModal/profileModal";
import { RxHamburgerMenu } from "react-icons/rx";
import { BurgerMenu } from "../../modal/burgerMenu/burgerMenu";
import Login from "../../../pages/login/Login";
import { Link } from "react-router-dom";

function Navbar_homepage() {
  const [showModal, setShowModal] = useState(true);
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const displayBurger = () => {
    console.log("clicked buger");
    setDisplayBurgerMenu((pre) => !pre);
  };

  return (
    <div className={Nav.topbar}>
      <div className={Nav.topbarWrapper}>
        <div className={Nav.topLeft}>
          <h2 className={Nav.logo}>Event</h2>
        </div>
         <div className={Nav.topRight}>
           <div className={Nav.burger}>
             <RxHamburgerMenu
              className={Nav.burgerIcon}
              onClick={displayBurger}
            />
            {displayBurgerMenu && (
              <BurgerMenu
                displayBurgerMenu={displayBurgerMenu}
                setDisplayBurgerMenu={setDisplayBurgerMenu}
              />
            )}
          </div>
          <div className={Nav.rightDetails}>
            <a  href="/login" className={Nav.login}>Login</a>
            {/* <div className={Nav.userprof}>
              <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className={Nav.topAvatar}
              />
            </div>

            <h4 className={Nav.username}>Tochukwu</h4>

            <span className={Nav.uselect}>
              <FiChevronDown className="profileIcon" onClick={openModal} />
              <Modal showModal={showModal} setShowModal={setShowModal} />
            </span> */}

            <div className={Nav.createEvent}>
              <button className={Nav.Createbtn} onClick={()=>document.location.replace("dashboard/event-page")}>Create Event</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar_homepage;
