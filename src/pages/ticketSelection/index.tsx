import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";
import { makeStyles, Theme } from "@material-ui/core/styles";
import InputField from "../../components/InputField/InputField";
import TCard from "../../components/ticketSelection";
import { flexbox } from "@mui/system";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import ticks from "../../assets/ticketSelection/ticks.png";
import { width } from "@material-ui/system";
import { RxDropdownMenu as Hamburger } from "react-icons/rx";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import {stlyedSelection} from './ticketStyles'


const TicketSelection: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
const [firstname, setFirstName] = useState("")
const [email, setEmail] = useState("")
const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  setFirstName(event.target.value)
}
const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  setEmail(event.target.value)
}
  const handleClose = () => {
    setAnchorEl(null);
  };
  const selections = stlyedSelection();
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const incrementGold = () => {
    setCounter(counter + 1);
  };
  const decrementGold = () => {
    {
      counter > 0 && setCounter(counter - 1);
    }
  };
  const incrementSilver = () => {
    setCounter1(counter1 + 1);
  };
  const decrementSilver = () => {
    {
      counter1 > 0 && setCounter1(counter1 - 1);
    }
  };
  const incrementRegular = () => {
    setCounter2(counter2 + 1);
  };
  const decrementRegular = () => {
    {
      counter2 > 0 && setCounter2(counter2 - 1);
    }
  };
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div>
      {/* <div className={selections.header1}>
        <div className={selections.header2}>
          <p className={selections.eventHead}>Event</p>
          <div className={`${selections.headerBtns} ${showNavbar}`}>
            <Link
              style={{
                textDecoration: "none",
                color: "#252D42",
                paddingTop: "1em",
              }}
              to={"/login"}
            >
              <p
                style={{
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#252D42",
                }}
              >
                Login
              </p>
            </Link>
            <Link to={"/create-event"}>
              <button className={selections.eventCreateBtn}>
                Create event
              </button>
            </Link>
          </div>
        </div>
        <div className={selections.navbarIcon} onClick={handleShowNavbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
          <Hamburger style={{ fontSize: "40px" }} />
          </IconButton>
          <Menu className={selections.menuAppBar}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} className={selections.menuAppIcons}>
              <Link to="/">Login</Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={selections.menuAppIcons}>
              <Link to="/login">Create Event</Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={selections.menuAppIcons}>
              <Link to="/create-account">Go Back</Link>
            </MenuItem>
          </Menu>
        </div>
      </div> */}
      <div className={selections.imgDiv}>
        <img
          src={ticks}
          alt="event banner"
          className={selections.eventBanner}
        />
        <div className={selections.eventHightlight}>
          <Link
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            to={"/event-details"}
          >
            <div className={selections.goBack}>
              <BsArrowLeft style={{ marginTop: "0.8em" }} />
              <p
                style={{
                  marginBottom: "3em",
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "32px",
                  color: "#FFFFFF",
                }}
              >
                Go Back
              </p>
            </div>
          </Link>
          <div>
            <p className={selections.informationBanner}>
              Eko All Night Pool Party Festival
            </p>
          </div>
        </div>
      </div>
      <div className={selections.mainContainer}>
        <div className={selections.mainContainer1}>
          <div className={selections.headingContainer}>
            <h3 className={selections.intro}>Fill your details as required</h3>
            <Link style={{ textDecoration: "none" }} to={`/map`}>
              <button className={selections.mapBtn}>View map</button>
            </Link>
          </div>
          <div className={selections.formContainer}>
          <InputField
           label={"FirstName"}
           id=""
           type={"text"}
           value={firstname}
           name={"FirstName"}
           placeholder={"FirstName"}
           onChange={handleNameChange}
           style={{width:"10em"}}
          />
          <InputField 
           label={"Email"}
           id=""
           type={"text"}
           value={email}
           name={"Email"}
           placeholder={"Email"}
           onChange={handleEmailChange}
          />
          </div>
          <p className={selections.tick}>Tickets</p>
          <TCard>
            <div className={selections.eachTicket}>
              <div className={selections.selection}>
                <div className={selections.ticketSelection}>
                  <button
                    className={selections.btnSelect}
                    onClick={decrementGold}
                  >
                    <AiOutlineMinus />
                  </button>
                  <p
                    style={{
                      paddingTop: "20px",
                      fontFamily: "Manrope",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#252D42",
                      width: "50px",
                      textAlign: "center",
                    }}
                  >
                    {counter}
                  </p>
                  <button
                    className={selections.btnSelect}
                    onClick={incrementGold}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <p className={selections.qty}>100 available</p>
              </div>
              <div
                className={selections.eventName}
                style={{
                  padding: "0.8em",
                  width: "350px",
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "27px",
                  color: "#252D42",
                }}
              >
                Table for 4 (Gold) VVIP “Eko All Night Pool Party Festival”
              </div>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "27px",
                  color: "#252D42",
                }}
              >
                N200,000
              </p>
            </div>
          </TCard>
          <div className={selections.line}></div>
          <TCard>
            <div className={selections.eachTicket}>
              <div className={selections.selection}>
                <div className={selections.ticketSelection}>
                  <button
                    className={selections.btnSelect}
                    onClick={decrementSilver}
                  >
                    <AiOutlineMinus />
                  </button>
                  <p
                    style={{
                      paddingTop: "20px",
                      fontFamily: "Manrope",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#252D42",
                      width: "50px",
                      textAlign: "center",
                    }}
                  >
                    {counter1}
                  </p>
                  <button
                    className={selections.btnSelect}
                    onClick={incrementSilver}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <p className={selections.qty}>100 available</p>
              </div>
              <div
                className={selections.eventName}
                style={{
                  padding: "0.8em",
                  width: "350px",
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "27px",
                  color: "#252D42",
                }}
              >
                Table for 4 (Silver) VVIP “Eko All Night Pool Party Festival”
              </div>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "27px",
                  color: "#252D42",
                }}
              >
                N150,000
              </p>
            </div>
          </TCard>
          <div className={selections.line}></div>
          <TCard>
            <div className={selections.eachTicket}>
              <div className={selections.selection}>
                <div className={selections.ticketSelection}>
                  <button
                    className={selections.btnSelect}
                    onClick={decrementRegular}
                  >
                    <AiOutlineMinus />
                  </button>
                  <p
                    style={{
                      paddingTop: "20px",
                      fontFamily: "Manrope",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#252D42",
                      width: "50px",
                      textAlign: "center",
                    }}
                  >
                    {counter2}
                  </p>
                  <button
                    className={selections.btnSelect}
                    onClick={incrementRegular}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <p className={selections.qty}>100 available</p>
              </div>
              <div
                className={selections.eventName}
                style={{
                  padding: "0.8em",
                  width: "350px",
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "27px",
                  position: "relative",
                  color: "#252D42",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                For 4 Regular “Eko All Night Pool Party Festival”
              </div>
              <div
                style={{
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "27px",
                  color: "#252D42",
                }}
              >
                N5,000
              </div>
            </div>
          </TCard>
          <div className={selections.line}></div>
          <div className={selections.continue}>
            <Link style={{ textDecoration: "none" }} to={`/checkout`}>
              <button className={selections.continueBtn}>Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
