import styled from "styled-components"
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import {TicketClass} from './data';
import {ChangeEvent, useState} from 'react';
import InputField from "../InputField/InputField";
import Button from "../Buttons/Buttons";

const TSummaryContainer = styled.div`
background: #fff;
width: 435px;
`
const TSummaryHeader = styled.div`
display: flex;
justify-content: space-between;
`
const TSummary = styled.p`
text-align:left;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
color: #000;
margin: 0px;
padding: 0;
`
const TSummaryBigHeader = styled.div`
text-align: left;
margin: 0 20px;
background: #F9FAFB;
padding: 10px;
`
const TSummarySmall = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #98A2B3;
margin:0 30px;
padding: 0;
`
const TSummaryBig = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
color: #101828;
margin:0;
padding: 0;
`
const TSummaryBody = styled.div`
display: flex;
justify-content: space-between;
text-align: left;
margin: 15px 0px;
padding: 0 0 10px 0;
`
const TSummaryBodyQty = styled.div`
text-align: left;
margin: 0 20px;

`
const TSummaryBodyPrice = styled.div`
width: 150px;
text-align: left;
padding: 0;
margin: 0;
border: 1px #eee solid;
border-radius:6px;
display: flex;
align-items: center;
justify-content: center;
`



const TicketClassModal = () => {

    const [ticketClass, setTicketClass] = useState("")
    

    const handleChange = (event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
        // console.log(event.target.value)
        setTicketClass((event.target as HTMLInputElement).value)
    }

    console.log(ticketClass)

    
    return (
        <TSummaryContainer>
            {/* FORM START */}
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                >
                   
            <TSummaryBody>
                <TSummaryBodyQty>
                    {/* form input */}
                <FormControlLabel value="VVIP Tickets" control={<Radio />} label="VVIP Tickets" onChange={handleChange}/>
                    <TSummarySmall>{TicketClass.VVIP.quantity} available</TSummarySmall>
                </TSummaryBodyQty>
                    {/* price */}
                <TSummaryBodyPrice>
                    <TSummaryBig style={{margin:"10px"}}>N{TicketClass.VVIP.totalPrice}</TSummaryBig>
                </TSummaryBodyPrice>
            </TSummaryBody>

            <TSummaryBody>
                <TSummaryBodyQty>
                    {/* form input */}
                <FormControlLabel value="VIP Tickets" control={<Radio />} label="VIP Tickets" onChange={handleChange}/>
                    <TSummarySmall>{TicketClass.VIP.quantity} available</TSummarySmall>
                </TSummaryBodyQty>
                <TSummaryBodyPrice>
                    <TSummaryBig style={{margin:"10px"}}>N{TicketClass.VIP.totalPrice}</TSummaryBig>
                </TSummaryBodyPrice>
            </TSummaryBody>

            <TSummaryBody>
                <TSummaryBodyQty>
                    {/* FORM INPUT */}
                    <FormControlLabel value="Regular Ticket" control={<Radio />} label="Regular Ticket" onChange={handleChange}/>
                    <TSummarySmall>-{TicketClass.Regular_Ticket.quantity}</TSummarySmall>
                </TSummaryBodyQty>
                <TSummaryBodyPrice>
                    <TSummaryBig style={{margin:"10px"}}>N{TicketClass.Regular_Ticket.totalPrice}</TSummaryBig>
                </TSummaryBodyPrice>
            </TSummaryBody>

            </RadioGroup>
            </FormControl>
            {/* FORM ENDS */}
        </TSummaryContainer>
    )
}

export default TicketClassModal