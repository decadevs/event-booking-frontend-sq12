import React, {useContext} from "react"
import { makeStyles } from '@material-ui/core/styles'
import { ReactNode } from "react"


const eventCardStyles = makeStyles((theme)=>({
    cards:{
        display: "flex",
        flexDirection: "column",
        width: "376px",
        height: "370px",
        borderRadius: "5px",
        background: "#FFFFFF",
        boxShadow: "0px 14px 17px -11px rgba(0, 50, 47, 0.05)",
    }
}))
interface Props {
    children: ReactNode
}
const Card:React.FC<Props> = ({children})=>{
    const styling = eventCardStyles()
    return <div className = {styling.cards}>
        {children}
    </div>
}

export default Card