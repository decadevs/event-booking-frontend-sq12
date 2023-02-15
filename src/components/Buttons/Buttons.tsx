import React, { ButtonHTMLAttributes } from "react";
import styles from "./Buttons.module.css";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
<<<<<<< HEAD
=======
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
>>>>>>> a2b6f7c1220265bfe20c8e3994202e829e96239e
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
<<<<<<< HEAD
  ...props
}) => {
  const className = styles[styleType];
  return (
    <button
      className={className}
=======
  ...props}) => {
  const className = styles[styleType];
  return (
    <button      className={className}
>>>>>>> 7abbd28c3b1f01d3405923aeacd18fd0c74698a3
>>>>>>> a2b6f7c1220265bfe20c8e3994202e829e96239e
      onClick={onClick}
      style={{ height, width }}
      type={type}
      {...props}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a2b6f7c1220265bfe20c8e3994202e829e96239e
    >
      {" "}
      {content}
    </button>
  );
<<<<<<< HEAD
=======
=======
    >      {" "}
      {content}
    </button>  );
>>>>>>> 7abbd28c3b1f01d3405923aeacd18fd0c74698a3
>>>>>>> a2b6f7c1220265bfe20c8e3994202e829e96239e
};
export default Button;