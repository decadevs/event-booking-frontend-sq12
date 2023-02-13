import React, { ButtonHTMLAttributes } from "react";
import styles from "./Buttons.module.css";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: "primary" | "secondary";
  content: "string" | React.ReactNode;
}
const Button: React.FC<Props> = ({
  content,
  styleType = "primary",
  ...props
}) => {
  const className = styles[styleType];
  return (
    <button className={className} {...props}>
      {" "}
      {content}
    </button>
  );
};
export default Button;
