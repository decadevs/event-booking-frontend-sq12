import React from "react";
import Image from "../../assets/image 1.png"
import Button from "../../components/Buttons/Buttons";
import Any from "./any.module.css";
const forgotPassword = () => {
  return (
    <div className={Any.MainWrapper}>
      {" "}
      <div className={Any.forgotPasswordContainer}>
        {" "}
        <div className={Any.forgotPasswordForm}>
          {" "}
          <h1 className={Any.title}>Forgot Password</h1>{" "}
          <p className={Any.paragraph}>
            {" "}
            Enter the email associated with your account and <br></br>we’ll send
            an email with instruction to reset your<br></br> password{" "}
          </p>{" "}
          <form className={Any.formPage}>
            {" "}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
              style={{ width: "50%" }}
            />{" "}
            <Button
              content="Check Email"
              styleType="primary"
              height="50px"
              width="50%"
              onClick={() => console.log("clicked")}
            />{" "}
          </form>{" "}
        </div>{" "}
        <div className={Any.forgotPasswordImage}>
          {" "}
          <img src={Image} alt="Forgot Password" />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default forgotPassword;
