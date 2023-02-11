import styled from "styled-components"
import {CancelOutlined} from '@mui/icons-material';
import {TicketsSummaryData, SummaryData} from './data'

const TSummaryContainer = styled.div`
background: #fff;
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
margin: 0;
padding: 0;
`
const TSummaryBigHeader = styled.div`
text-align: left;
margin: 0;
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
margin: 0;
padding: 10px 0;
border-bottom: 1px #eee solid;
`
const TSummaryBodyQty = styled.div`
text-align: left;
margin: 0;
`
const TSummaryBodyPrice = styled.div`
text-align: left;
margin: 0;
`

interface Props{
    closeModal: () => void,
    id: string
}


const TicketsSummary: React.FC<Props> = ({closeModal, id}) => {

    const ticket:SummaryData = TicketsSummaryData.find((ticket)=>ticket.id == id)!


    return (
        <>
            <TSummaryContainer className="ReactModal__Content ReactModal__Content--after-open">
                <TSummaryHeader>
                    <TSummary>Tickets Summary</TSummary>
                    <TSummary><CancelOutlined onClick={closeModal}/></TSummary>
                </TSummaryHeader>
                <TSummaryBigHeader>
                    <TSummarySmall>Total</TSummarySmall>
                    <TSummaryBig>{ticket.Total}</TSummaryBig>
                </TSummaryBigHeader>
                <TSummaryBody>
                    <TSummaryBodyQty>
                        <TSummaryBig>VVIP Tickets</TSummaryBig>
                        <TSummarySmall>-{`${ticket.VVIP.qty} x ${ticket.VVIP.price}`}</TSummarySmall>
                    </TSummaryBodyQty>
                    <TSummaryBodyPrice>
                        <TSummaryBig style={{margin:"10px"}}>N{ticket.VVIPTotal}</TSummaryBig>
                    </TSummaryBodyPrice>
                </TSummaryBody>
                <TSummaryBody>
                    <TSummaryBodyQty>
                        <TSummaryBig>VIP Tickets</TSummaryBig>
                        <TSummarySmall>-{`${ticket.VIP.qty} x ${ticket.VIP.price}`}</TSummarySmall>
                    </TSummaryBodyQty>
                    <TSummaryBodyPrice>
                        <TSummaryBig style={{margin:"10px"}}>N{ticket.VIPTotal}</TSummaryBig>
                    </TSummaryBodyPrice>
                </TSummaryBody>
                <TSummaryBody>
                    <TSummaryBodyQty>
                        <TSummaryBig>Regular Tickets</TSummaryBig>
                        <TSummarySmall>-{`${ticket.Regular.qty} x ${ticket.Regular.price}`}</TSummarySmall>
                    </TSummaryBodyQty>
                    <TSummaryBodyPrice>
                        <TSummaryBig style={{margin:"10px"}}>N{ticket.RegularTotal}</TSummaryBig>
                    </TSummaryBodyPrice>
                </TSummaryBody>
            </TSummaryContainer>
        </>
    )
}

export default TicketsSummary