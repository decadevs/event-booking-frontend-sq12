import React, { ButtonHTMLAttributes } from "react";
import styles from "./Buttons.module.css";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: "primary" | "secondary" | "warning";
    content: "string" | React.ReactNode;
    height: string;
    width: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
}
const Button: React.FC<Props> = ({
  content,
  styleType = "primary" || "secondary" || "warning",
  height,
  width,
  onClick,
  type,
  ...props
}) => {
  const className = styles[styleType];
  return (
    <button
      className={className}
      onClick={onClick}
      style={{ height, width }}
      type={type}
      {...props}
    >
      {" "}
      {content}
    </button>
  );
};
export default Button;
