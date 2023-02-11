import React, { ButtonHTMLAttributes } from "react";
import styles from "./Buttons.module.css";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: "primary" | "secondary";
    content: "string" | React.ReactNode;
    height: string;
    width: string;
    onClick: () => void;
}
const Button: React.FC<Props> = ({
    content,
    styleType = "primary",
    height,
    width,
    onClick,
    ...props
}) => {
    const className = styles[styleType];
    return (
        <button className={className} onClick={onClick} style={{ height, width }} {...props}>
            {" "}
            {content}
        </button>
    );
};
export default Button;
