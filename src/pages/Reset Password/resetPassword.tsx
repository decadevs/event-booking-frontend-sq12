import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Image from "../../assets/image 1.png";
import Button from "../../components/Buttons/Buttons";
import ResetPassword from "./resetPassword.module.css";
const resetPassword = () => {
  return (
    <div className={ResetPassword.MainWrapper}>
      {" "}
      <div className={ResetPassword.resetPasswordContainer}>
        {" "}
        <div className={ResetPassword.resetPasswordForm}>
          {" "}
          <h1 className={ResetPassword.title}>Reset Password</h1>{" "}
          <form className={ResetPassword.formPage}>
            {" "}
            <input
              className={ResetPassword.input1}
              placeholder="New Password"
              type="password"
              id="password"
              name="password"
              required
            />{" "}
            <input
              className={ResetPassword.input2}
              placeholder="Confirm Password"
              type="password"
              id="password"
              name="password"
              required
            />{" "}
            <Button
              content="Reset Password"
              styleType="primary"
              height="50px"
              width="50%"
              onClick={() => console.log("clicked")}
            />{" "}
          </form>{" "}
        </div>{" "}
        <div className={ResetPassword.resetPasswordImage}>
          {" "}
          <img src={Image} alt="Forgot Password" />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default resetPassword;