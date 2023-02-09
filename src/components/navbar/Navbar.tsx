import react, { useState } from "react";
import Nav from "./Navbar.module.css";
import { FiChevronDown } from "react-icons/fi";
import { Modal } from "../modal/profileModal/profileModal";

function Navbar() {
  const [showModal, setShowModal] = useState(true);
 

  const openModal = () => {
    setShowModal(!showModal);
    
  };

  return (
    <div className={Nav.topbar}>
      <div className={Nav.topbarWrapper}>
        <div className={Nav.topLeft}>
          <h2 className={Nav.logo}>Event</h2>
        </div>
        <div className={Nav.topRight}>
          <div className={Nav.userprof}>
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
          </span>

          <div className={Nav.createEvent}>
            <button className={Nav.Createbtn}>Create Event</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
