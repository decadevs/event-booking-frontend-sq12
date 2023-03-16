import React, {useContext} from "react"
import { makeStyles } from '@material-ui/core/styles'
import { ReactNode } from "react"


const ticketSelectionCardStyles = makeStyles((theme)=>({
    selectionCards:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "auto",
        alignItems: "center",
        padding: "2.5em 3em 0.5em 3em",
        // background: "rgba(0, 50, 47, 0.03)",
    },
    '@media (max-width: 768px)': {
        display: "flex",
        flexDirection: "column",
        height: "auto"
    }
}))
interface Props {
    children: ReactNode
}
const SCard:React.FC<Props> = ({children})=>{
    const styling = ticketSelectionCardStyles()
    return <div className = {styling.selectionCards}>
        {children}
    </div>
}

export default SCard