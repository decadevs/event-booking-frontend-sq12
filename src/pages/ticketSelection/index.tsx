import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import InputField from "../../components/InputField/InputField";
import TCard from "../../components/ticketSelection";
import { flexbox } from "@mui/system";
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

const stlyedSelection = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    paddingBottom: "10em",
    // padding: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5"
  },
  mainContainer1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90%"
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: "4em",
    // height: "80px"
  },
  formContainer: {
    height: "auto",
    display: "flex",
    flexDirection: 'column',
    // justifyContent: "space-between",
    marginBottom: "40px"
  },
  mapBtn: {
    backgroundColor: "rgba(0, 50, 47, 0.05)",
    marginTop: "2em",
    // width: "74px",
    // height: "22px",
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "22px",
    color: "#000000",
    justifyContent: "center",
    alignItems: "center",
    width: "122px",
    height: "42px",
    // left: "1203px",
    // top: "557px",
    background: "rgba(0, 50, 47, 0.05)",
    borderRadius: "4px",

  },
  intro: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "44px",
    color: "#000000",
    height: "100px",
  },
  tick: {
    height: "70px",
    left: "112px",
    top: "780px",
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontHeight: 700,
    fontSize: "24px",
    lineHeight: "33px",
    color: "#000000",
  },
  eachTicket: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "2.5em 3em 0.5em 3em",
  },
  line: {
    width: "100%",
    height: "0px",
    left: " 0px",
    top: "129px",
    border: "1px solid #C4C4C4",
  },
  ticketSelection: {
    left: "0px",
    top: "0px",
    background: "#FFFFFF",
    justifyContent: "space-between",
    display: "flex",
    height: "60px",
  },
  btnSelect: {
    background: "#FFFFFF",
    fontSize: "25px",
    textAlign: "center",
    display: "flex",
    alignContents: "center",
    justifyContents: "center",
    borderRadius: "0PX",
  },
  qty: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "27px",
    color: "#252D42",
  },
  continueBtn: {
    width: "250px",
    height: "56px",
    left: "475px",
    top: "454px",
    background: "#FF5722",
    borderRadius: "6px",
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "27px",
    color: "#FFFFFF",
  },
  continue: {
    height: "9em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    background: "rgba(0, 50, 47, 0.05)",
  },
  firstName:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    width: '100% !important'
  },
  formControl:{
    width: "571px",
    height:" 70px",
    left: "112px",
    top: "660px",
    background: "#F8F9FA",
    border: "1px solid rgba(37, 45, 66, 0.29)",
    borderRadius: "4px",
    boxSizing: "border-box",
    paddingLeft: "10px"
  },
  selection:{
        
  },
  eventName:{

  },
  '@media (max-width: 768px)': {
    mainContainer:{
    display: "flex",
    flexDirection: "column"
    },
    firstName: {
        display: 'grid',
        gridTemplateColumns: '1fr'

    },
    eachTicket:{
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    intro:{
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "44px",
    color: "#000000",
    height: "100px",
    },
    mapBtn: {
    },
    selection:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    eventName:{
        paddingLeft: "1em"
    },
}}));

const TicketSelection: React.FC = () => {
  const selections = stlyedSelection();
  const [counter, setCounter] = useState(0)
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const incrementGold = ()=>{
    setCounter(counter+1)
  }
  const decrementGold = ()=>{
    {counter>0 && setCounter(counter-1)}
  }
  const incrementSilver = ()=>{
    setCounter1(counter1+1)
  }
  const decrementSilver = ()=>{
    {counter1>0 && setCounter1(counter1-1)}
  }
  const incrementRegular = ()=>{
    setCounter2(counter2+1)
  }
  const decrementRegular = ()=>{
    {counter2>0 && setCounter2(counter2-1)}
  }

  return (
    <div>
      <div className={selections.mainContainer}>
        <div className={selections.mainContainer1}>
            <div className={selections.headingContainer}>
            <h3 className={selections.intro}>Fill your details as required</h3>
            <Link style={{ textDecoration: "none" }} to={`/map`}><button className={selections.mapBtn}>view map</button></Link>
            </div>
            <div className={selections.formContainer}>
            <form id="first_name" className={`${selections.firstName}`}>    
                <div className="form-group">         
                <label>First name</label>         
                <input type="text" className="form-control input-lg" />    
                </div>    
                <div className="form-group">         
                <label>Email</label>         
                <input type="text" className="form-control input-lg" />    
                </div>  
            </form>
            {/* <input 
                type={"input"}
                //   value={"value"}
                name={"name"}
                className={selections.formControl}
                placeholder={"FirstName"}
                //   onChange={""}
            />
            <input
                type={"input"}
                //   value={"value"}
                name={"name"}
                className={selections.formControl}
                placeholder={"Email"}
                //   onChange={""}
            /> */}
            </div>
            <p className={selections.tick}>Tickets</p>
            <TCard>
                <div className={selections.eachTicket}>
            <div className={selections.selection}>
                <div className={selections.ticketSelection}>
                <button className={selections.btnSelect} onClick = {decrementGold}><AiOutlineMinus /></button>
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
                <button className={selections.btnSelect} onClick = {incrementGold}><AiOutlinePlus /></button>
                </div>
                <p className={selections.qty}>100 available</p>
            </div>
            <div className={selections.eventName}
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
                <button className={selections.btnSelect} onClick={decrementSilver}><AiOutlineMinus /></button>
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
                <button className={selections.btnSelect} onClick={incrementSilver}><AiOutlinePlus /></button>
                </div>
                <p className={selections.qty}>100 available</p>
            </div>
            <div className={selections.eventName}
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
                <button className={selections.btnSelect} onClick={decrementRegular}><AiOutlineMinus /></button>
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
                <button className={selections.btnSelect} onClick={incrementRegular}><AiOutlinePlus /></button>
                </div>
                <p className={selections.qty}>100 available</p>
            </div>
            <div className={selections.eventName}
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
                <button className={selections.continueBtn}>continue</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
