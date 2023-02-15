import React, { ButtonHTMLAttributes, FormEvent } from "react";
import styles from "./Buttons.module.css";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
<<<<<<< HEAD
  styleType?: "primary" | "secondary";
  content: "string" | React.ReactNode;
  height: string;
  width: string;

  onClick: () => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<Props> = ({
  content,
  styleType = "primary" || "secondary",
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
=======
    styleType?: "primary" | "secondary" | "warning";
    content: "string" | React.ReactNode;
    height: string;
    width: string;
    onClick: (e:any) => void;
    type?: "button" | "submit" | "reset";
}
const Button: React.FC<Props> = ({
  content,
  styleType = "primary" || "secondary" || "warning",
  height,
  width,
  onClick,
  type,
  ...props}) => {
  const className = styles[styleType];
  return (
    <button      className={className}
>>>>>>> 7abbd28c3b1f01d3405923aeacd18fd0c74698a3
      onClick={onClick}
      style={{ height, width }}
      type={type}
      {...props}
<<<<<<< HEAD
    >
      {" "}
      {content}
    </button>
  );
=======
    >      {" "}
      {content}
    </button>  );
>>>>>>> 7abbd28c3b1f01d3405923aeacd18fd0c74698a3
};
export default Button;