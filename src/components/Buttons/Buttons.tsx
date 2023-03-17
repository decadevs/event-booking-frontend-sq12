import React, { ButtonHTMLAttributes, ReactElement } from "react";
import styles from "./Buttons.module.css";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: "primary" | "secondary" | "warning";
    content: "string" | React.ReactNode;
    height: string;
    width: string;
    onClick: (e:any) => void;
    type?: "button" | "submit" | "reset";
    icon?: ReactElement;
}
const Button: React.FC<Props> = ({
    content,
    styleType = "primary" || "secondary" || "warning" || "danger",
    height,
    width,
    onClick,
    icon,
    type,
    ...props }) => {
    const className = styles[styleType];
    return (
        <button className={className}
            onClick={onClick}
            style={{ height, width }}
            type={type}
            {...props}

        >      {" "}
            {icon && <span className="icon">{icon}</span>}
            {content}
        </button>);
};
export default Button;
