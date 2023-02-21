import React from "react";
import "./Miniheader.css";
import { useLocation } from "react-router-dom";

const MiniHeader = () => {
  const location = useLocation();
  //   const eventDetailsPage = location.pathname === "/eventdetails";
  const home = location.pathname === "/";

  const event = {
    title: "DECAGON SQ012 GRADUATION",
    description: "come and see us deliver premium entertainment as usual",
  };
  return ( 

    
    <div className="miniHeaderContainer">
      <div><p></p><p></p><p></p><p></p>
          <p className="event--desc--goBackButton">&larr; Go Back </p>
          <h2 className="event--desc--title">{event.title}</h2>
          <p className="event--desc--details">{event.description}</p>
        
      </div>
    </div>
  );
};

export default MiniHeader;
