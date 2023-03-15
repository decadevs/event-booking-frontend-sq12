import React, { ButtonHTMLAttributes, ReactElement } from "react";
import styles from "./Buttons.module.css";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: "primary" | "secondary" | "warning";
    content: "string" | React.ReactNode;
    height: string;
    width: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    icon?: ReactElement;
}
const Button: React.FC<Props> = ({
    content,
    styleType = "primary" || "secondary" || "warning" || "danger",
    height,
    onClick,
    icon,
    type,
    ...props }) => {
    const className = styles[styleType];
    return (
        <button className={className} onClick={onClick} style={{ height }} type={type} {...props}>
            {" "}
            {content}
        </button>);
};
export default Button;
