import React, { ButtonHTMLAttributes } from "react";
import styles from "./Buttons.module.css";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: "primary" | "secondary";
    content: "string" | React.ReactNode;
    height: string;
    width: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
}
const Button: React.FC<Props> = ({
    content,
    styleType = "primary",
    height,
    onClick,
    type,
    ...props
}) => {
    const className = styles[styleType];
    return (
        <button className={className} onClick={onClick} style={{ height }} type={type} {...props}>
            {" "}
            {content}
        </button>
    );
};
export default Button;
