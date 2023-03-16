import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import InputField from "../../../components/InputField/InputField";
import styled from "styled-components";
import { flexbox } from "@mui/system";
import { width } from "@material-ui/system";
import "./style.css";
import { RxDropdownMenu as Hamburger } from "react-icons/rx";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import {styledCheckout} from './checkoutStyles'
import { BsArrowLeft } from "react-icons/bs";
import ticks from "../../../assets/ticketSelection/ticks.png";
import SCard from "../../../components/CheckoutItems";
import CheckoutField from "../../../components/CheckoutItems/InputField/InputField";
import Button from '../../../components/Buttons/Buttons';
import PaymentTypePage from '../Modal/index';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const  CheckoutPage: React.FC = () => {
const checkout = styledCheckout();
const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);
// const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//   setAnchorEl(event.currentTarget);
// };
// const handleClose = () => {
//   setAnchorEl(null);
// };
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value)
}
const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
  setEmail(event.target.value)
}
const [showNavbar, setShowNavbar] = useState(false);
const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const modal = (props: { show: any; }) => {
    if(!props.show){
      return null
    }
  }
const [showModal, setShowModal] = useState(false);
const handleModalOpen = () => {
  setShowModal(true)
}
const handleModalClose = () => {
  setShowModal(false)
}
return (
  <div>
{/* <div className={checkout.header1}>
        <div className={checkout.header2}>
          <p className={checkout.eventHead}>Event</p>
          <div className={`${checkout.headerBtns} ${showNavbar}`}>
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
              <button className={checkout.eventCreateBtn}>
                Create Event
              </button>
            </Link>
          </div>
        </div>
        <div className={checkout.navbarIcon} onClick={handleShowNavbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
          <Hamburger style={{ fontSize: "40px" }} />
          </IconButton>
          <Menu className={checkout.menuAppBar}
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
            <MenuItem onClick={handleClose} className={checkout.menuAppIcons}>
              <Link to="/">Login</Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={checkout.menuAppIcons}>
              <Link to="/login">Create Event</Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={checkout.menuAppIcons}>
              <Link to="/create-account">Go Back</Link>
            </MenuItem>
          </Menu>
        </div>
      </div> */}

      <div className={checkout.imgDiv}>
        <img
          src={ticks}
          alt="event banner"
          className={checkout.eventBanner}
        />
        <div className={checkout.eventHightlight}>
          <Link
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            to={"/event-details"}
          >
            <div className={checkout.goBack}>
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
            <p className={checkout.informationBanner}>
              Eko All Night Pool Party Festival
            </p>
          </div>
        </div>
      </div>
      <div className={checkout.pageHead}>
        <div className={checkout.pageHead2}>
        <h1 className={checkout.chekckoutTitle}>Checkout</h1>
        <p className={checkout.timeLeft}>Time left <span>5:11</span></p>
        </div>
        </div>

        <div className={checkout.mainContainer}>
          <div className={checkout.mainContainer2}>
          <div className={checkout.contact}>
          <p className={checkout.conInfo}>Contact Information</p>
            <CheckoutField
             label={"Name"}
             id=""
             type={"text"}
             value={name}
             name={"Name"}
             placeholder={"Name"}
             onChange={handleNameChange}
             style={{height:"20em"}}
             /> <br/>
            <CheckoutField
            label={"Email"}
            id=""
            type={"text"}
            value={email}
            name={"Email"}
            placeholder={"Email"}
            onChange={handleEmailChange}
            />
          </div>
          <div className={checkout.summary}>
            <SCard>
              <p className={checkout.sumTitle}>Ticket Summary</p>
            </SCard>
            <div className={checkout.line}></div>
            <SCard>
              <div>
              <p style={{
                width: "7.625em",
                height: "1.375em",
                left: "2.5em",
                top: "8.9375em",
                fontFamily: 'Manrope',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "1em",
                lineHeight: "1.375em",
                color: "#000000",
                marginBottom: "1em"
              }}>Attendee</p>
              <p style={{
                width: "10.0625em",
                height: "1.875em",
                left: "2.5em",
                top: "11.5625em",
                fontFamily: 'Manrope',
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "1.375em",
                lineHeight: "1.875em",
                color: "#000000",
                paddingBottom: "3em",
                marginBottom: "1.5em"
              }}>1 X Attendee</p>
              </div>
            </SCard>
            <div className={checkout.line}></div>
            <SCard>
              <div
              style={{
                width: "100%",
                height: "7em"
              }}
              >
              <p
              style={{
                width: "7.625em",
                height: "1.375em",
                left: "2.5em",
                top: "17.8125em",
                fontFamily: 'Manrope',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "1em",
                lineHeight: "1.375em",
                color: "#000000",
                marginBottom: "1em",
              }}>Date/Time</p>
              <div style={{
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
                gap: "1em"
              }}>
                <div className={checkout.ticketSummary1}>20th Jan 2022</div>
                <div className={checkout.ticketSummary2}>04:00PM</div>
              </div>
              </div>
            </SCard>
            <div className={checkout.line}></div>
            <SCard>
              <div>
              <p className={checkout.ticketSummary3}>Type</p>
              <p className={checkout.ticketSummary4}>Regular</p>
              </div>
            </SCard>
            <div className={checkout.line}></div>
            <SCard>
            <div className={checkout.amountContainer}>
                <div className={checkout.total}>
              <p>Total</p>
              <p>N 5,000</p>
              </div>
              <br />
              <div style={{
                display: "flex",
                justifyContent: "center",
              }}>

              <Button
              content="Buy Ticket"
              styleType = "primary"
              height='3.5em'
              width='33.1em'
              onClick={handleModalOpen}
              type='button'
              />
              </div>
              </div>
            </SCard>
          </div>
          </div>
        </div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <div>
            <PaymentTypePage />
          </div>
        </Fade>
      </Modal>
      </div>
)
}

export default CheckoutPage;