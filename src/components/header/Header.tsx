import React from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  //   const location = useLocation();
  //   const eventDetailsPage = location.pathname === "/eventdetails";
  //   const home = location.pathname === "/";

  const event = {
    title: "DECAGON SQ012 GRADUATION",
    description: "come and see us deliver premium entertainment as usual",
  };
  return (
    <div className="heroContainer">
      <div event--booking>
        <p className="goBack--button">&larr; Go Back </p>
        <h2 className="bookingpage--event--title">{event.title}</h2>
      </div>
    </div>
  );
};

export default Header;
