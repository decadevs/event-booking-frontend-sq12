import styled from "styled-components"
import {CancelOutlined} from '@mui/icons-material';

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
margin: 20px;
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
margin:0;
padding: 0;
`
const TSummaryBig = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
color: #101828;
margin:0;
padding: 0;
`
const TSummaryBody = styled.div`
display: flex;
justify-content: space-between;
text-align: left;
margin: 20px 0px;
padding: 0 0 30px 0;
border-bottom: 1px #eee solid;
`
const TSummaryBodyQty = styled.div`
text-align: left;
margin: 0 20px;
`
const TSummaryBodyPrice = styled.div`
text-align: left;
margin: 0 20px;
`



const TicketsSummary = () => {
    return (
        <TSummaryContainer>
            <TSummaryHeader>
                <TSummary>Tickets Summary</TSummary>
                <TSummary><CancelOutlined /></TSummary>
            </TSummaryHeader>
            <TSummaryBigHeader>
                <TSummarySmall>Total</TSummarySmall>
                <TSummaryBig>N306,000</TSummaryBig>
            </TSummaryBigHeader>
            <TSummaryBody>
                <TSummaryBodyQty>
                    <TSummaryBig>VVIP Tickets</TSummaryBig>
                    <TSummarySmall>-3 x 300000</TSummarySmall>
                </TSummaryBodyQty>
                <TSummaryBodyPrice>
                    <TSummaryBig style={{margin:"10px"}}>N300000</TSummaryBig>
                </TSummaryBodyPrice>
            </TSummaryBody>
            <TSummaryBody>
                <TSummaryBodyQty>
                    <TSummaryBig>VVIP Tickets</TSummaryBig>
                    <TSummarySmall>-3 x 300000</TSummarySmall>
                </TSummaryBodyQty>
                <TSummaryBodyPrice>
                    <TSummaryBig style={{margin:"10px"}}>N350000</TSummaryBig>
                </TSummaryBodyPrice>
            </TSummaryBody>
            <TSummaryBody>
                <TSummaryBodyQty>
                    <TSummaryBig>Regular Tickets</TSummaryBig>
                    <TSummarySmall>-15 x 5000</TSummarySmall>
                </TSummaryBodyQty>
                <TSummaryBodyPrice>
                    <TSummaryBig style={{margin:"10px"}}>N750000</TSummaryBig>
                </TSummaryBodyPrice>
            </TSummaryBody>
        </TSummaryContainer>
    )
}

export default TicketsSummary