import React, {useContext} from "react"
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './style.css'
import { makeStyles } from '@material-ui/core/styles'
import { red } from "@mui/material/colors";
import events from '../../assets/events.png'
import Card from "../../components/eventCard";
import Footer from "../../components/footer"


interface card {
    handleClick: ()=> void,
}

const stlyedEvents = makeStyles((theme)=>({
    mainContainer: {
        background: "#E5E5E5",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    cardContainer:{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "3.5em",
    },
    cards:{
        display: "flex",
        flexDirection: "column",
        width: "376px",
        height: "370px",
        borderRadius: "5px",
        background: "#FFFFFF",
        boxShadow: "0px 14px 17px -11px rgba(0, 50, 47, 0.05)",
    },
    img:{
    },
    buttonDiv:{
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        height: "200px",
        alignItems: "center"
    },
    btn:{
        background: "#FF5722",
        borderRadius: "4px",
        width: "183px",
        height: "54px",
        textAlign: "center",
        "&:hover": {
            cursor: "pointer"
        },
        boxShadow: "none",
        fontFamily: 'Manrope',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        color: "#FFFFFF"
    },
    upcoming:{
        height: "55px",
        display: "flex",
        alignItems: "left",
        fontFamily: "Manrope",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "2.25em",
        lineHeight: "55px",
        color: "#252D42",
        textAlign: "start",
        marginLeft: "2.5em"
    },
    allContainer:{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    contents:{
        display: "flex",
        gap: "1.5em",
        margin: "auto"

    },
    eventHeading:{
        marginTop: "0",
        margin: 0,
        width: "292px",
        fontFamily: 'Manrope',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "27px",
        color: "#252D42",
        textAlign: "left"
    },
    eventDescription:{
        width: "296px",
        margin: 0,
        fontFamily: 'Manrope',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "19px",
        color: "#555A68",
        textAlign: "left"
    },
    eventDate:{
        display: 'flex',
        gap: '0.5em',
        flexDirection: 'column',
        justifyContent: "space-between",
        marginTop: "0",
        '& p': {
            margin: '0'
        }
    },
    eventMonth:{
        fontFamily: 'Manrope',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",
        color: "#FF5722",
    }, 
    eventDay: {
        fontFamily: 'Manrope',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "22px",
        color: "#000000",
    },

    '@media (max-width: 768px)': {
        cardContainer:{
        gridTemplateColumns: "1fr"
        },
        upcoming:{
            margin: 0,
            fontSize: "1em"
        }
    }
})) 

const EventCard:React.FC = ()=>{
    const classes = stlyedEvents()

    return (
    <>
    <div className={classes.mainContainer}>
        <div><h1 className={classes.upcoming}>Upcoming events</h1></div>
        <div className={classes.allContainer}>
        <div className={classes.cardContainer}>
            <Link style={{textDecoration: "none"}} to={`/event-detais/eventId`}>
                <Card >
                    <img src={events} alt="event banner" />
                    <div className={classes.contents}>
                        <div>
                            <div className={classes.eventDate}>
                                <p className={classes.eventMonth}>
                                Oct
                                </p> 
                                <p className={classes.eventDay}>
                                28
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',gap: '1em', justifyContent:'center'}}>
                            <h3 className={classes.eventHeading}>
                                Event Name which can be long
                            </h3>
                            <p className={classes.eventDescription}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sit vivamus penatibus viverra aliquam diam. 
                            </p>
                        </div>
                    </div>
                </Card>
            </Link>
            <Link style={{textDecoration: "none"}} to={`/event-detais/eventId`}>
                <Card >
                    <img src={events} alt="event banner" />
                    <div className={classes.contents}>
                        <div>
                            <div className={classes.eventDate}>
                                <p className={classes.eventMonth}>
                                Oct
                                </p> 
                                <p className={classes.eventDay}>
                                28
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',gap: '1em', justifyContent:'center'}}>
                            <h3 className={classes.eventHeading}>
                                Event Name which can be long
                            </h3>
                            <p className={classes.eventDescription}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sit vivamus penatibus viverra aliquam diam. 
                            </p>
                        </div>
                    </div>
                </Card>
            </Link>
            <Link style={{textDecoration: "none"}} to={`/event-detais/eventId`}>
                <Card >
                    <img src={events} alt="event banner" />
                    <div className={classes.contents}>
                        <div>
                            <div className={classes.eventDate}>
                                <p className={classes.eventMonth}>
                                Oct
                                </p> 
                                <p className={classes.eventDay}>
                                28
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',gap: '1em', justifyContent:'center'}}>
                            <h3 className={classes.eventHeading}>
                                Event Name which can be long
                            </h3>
                            <p className={classes.eventDescription}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sit vivamus penatibus viverra aliquam diam. 
                            </p>
                        </div>
                    </div>
                </Card>
            </Link>
            <Link style={{textDecoration: "none"}} to={`/event-detais/eventId`}>
                <Card >
                    <img src={events} alt="event banner" />
                    <div className={classes.contents}>
                        <div>
                            <div className={classes.eventDate}>
                                <p className={classes.eventMonth}>
                                Oct
                                </p> 
                                <p className={classes.eventDay}>
                                28
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',gap: '1em', justifyContent:'center'}}>
                            <h3 className={classes.eventHeading}>
                                Event Name which can be long
                            </h3>
                            <p className={classes.eventDescription}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sit vivamus penatibus viverra aliquam diam. 
                            </p>
                        </div>
                    </div>
                </Card>
            </Link>
            <Link style={{textDecoration: "none"}} to={`/event-detais/eventId`}>
                <Card >
                    <img src={events} alt="event banner" />
                    <div className={classes.contents}>
                        <div>
                            <div className={classes.eventDate}>
                                <p className={classes.eventMonth}>
                                Oct
                                </p> 
                                <p className={classes.eventDay}>
                                28
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',gap: '1em', justifyContent:'center'}}>
                            <h3 className={classes.eventHeading}>
                                Event Name which can be long
                            </h3>
                            <p className={classes.eventDescription}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sit vivamus penatibus viverra aliquam diam. 
                            </p>
                        </div>
                    </div>
                </Card>
            </Link>
            <Link style={{textDecoration: "none"}} to={`/event-detais/eventId`}>
                <Card >
                    <img src={events} alt="event banner" />
                    <div className={classes.contents}>
                        <div>
                            <div className={classes.eventDate}>
                                <p className={classes.eventMonth}>
                                Oct
                                </p> 
                                <p className={classes.eventDay}>
                                28
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',gap: '1em', justifyContent:'center'}}>
                            <h3 className={classes.eventHeading}>
                                Event Name which can be long
                            </h3>
                            <p className={classes.eventDescription}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sit vivamus penatibus viverra aliquam diam. 
                            </p>
                        </div>
                    </div>
                </Card>
            </Link>
            <Link style={{textDecoration: "none"}} to={`/event-detais/eventId`}>
                <Card >
                    <img src={events} alt="event banner" />
                    <div className={classes.contents}>
                        <div>
                            <div className={classes.eventDate}>
                                <p className={classes.eventMonth}>
                                Oct
                                </p> 
                                <p className={classes.eventDay}>
                                28
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',gap: '1em', justifyContent:'center'}}>
                            <h3 className={classes.eventHeading}>
                                Event Name which can be long
                            </h3>
                            <p className={classes.eventDescription}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sit vivamus penatibus viverra aliquam diam. 
                            </p>
                        </div>
                    </div>
                </Card>
            </Link>
            <Link style={{textDecoration: "none"}} to={`/event-detais/eventId`}>
                <Card >
                    <img src={events} alt="event banner" />
                    <div className={classes.contents}>
                        <div>
                            <div className={classes.eventDate}>
                                <p className={classes.eventMonth}>
                                Oct
                                </p> 
                                <p className={classes.eventDay}>
                                28
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',gap: '1em', justifyContent:'center'}}>
                            <h3 className={classes.eventHeading}>
                                Event Name which can be long
                            </h3>
                            <p className={classes.eventDescription}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sit vivamus penatibus viverra aliquam diam. 
                            </p>
                        </div>
                    </div>
                </Card>
            </Link>
            <Link style={{textDecoration: "none"}} to={`/event-detais/eventId`}>
                <Card >
                    <img src={events} alt="event banner" />
                    <div className={classes.contents}>
                        <div>
                            <div className={classes.eventDate}>
                                <p className={classes.eventMonth}>
                                Oct
                                </p> 
                                <p className={classes.eventDay}>
                                28
                                </p>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',gap: '1em', justifyContent:'center'}}>
                            <h3 className={classes.eventHeading}>
                                Event Name which can be long
                            </h3>
                            <p className={classes.eventDescription}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. 
                                Sit vivamus penatibus viverra aliquam diam. 
                            </p>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
        <div className={classes.buttonDiv}>
        <button className={classes.btn}>Load More Events</button>
        </div>
        </div>
    </div>
    </>
    )
}

export default EventCard
