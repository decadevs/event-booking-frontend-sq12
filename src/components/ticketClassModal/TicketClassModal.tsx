import styled from "styled-components"
import {CancelOutlined} from '@mui/icons-material';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

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
    return (
        <TSummaryContainer>
            {/* FORM START */}
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="VVIP Tickets"
                    name="radio-buttons-group"
                >
                   
            <TSummaryBody>
                <TSummaryBodyQty>
                    {/* form input */}
                <FormControlLabel value="VVIP Tickets" control={<Radio />} label="VVIP Tickets" />
                    <TSummarySmall>100 available</TSummarySmall>
                </TSummaryBodyQty>
                    {/* price */}
                <TSummaryBodyPrice>
                    <TSummaryBig style={{margin:"10px"}}>N200,000</TSummaryBig>
                </TSummaryBodyPrice>
            </TSummaryBody>

            <TSummaryBody>
                <TSummaryBodyQty>
                    {/* form input */}
                <FormControlLabel value="VIP Tickets" control={<Radio />} label="VIP Tickets" />
                    <TSummarySmall>85 available</TSummarySmall>
                </TSummaryBodyQty>
                <TSummaryBodyPrice>
                    <TSummaryBig style={{margin:"10px"}}>N350000</TSummaryBig>
                </TSummaryBodyPrice>
            </TSummaryBody>

            <TSummaryBody>
                <TSummaryBodyQty>
                    {/* FORM INPUT */}
                    <FormControlLabel value="Regular Ticket" control={<Radio />} label="Regular Ticket" />
                    <TSummarySmall>-15 x 5000</TSummarySmall>
                </TSummaryBodyQty>
                <TSummaryBodyPrice>
                    <TSummaryBig style={{margin:"10px"}}>N750000</TSummaryBig>
                </TSummaryBodyPrice>
            </TSummaryBody>

            </RadioGroup>
            </FormControl>
            {/* FORM ENDS */}
        </TSummaryContainer>
    )
}

export default TicketClassModal