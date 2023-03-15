import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Image from "../../assets/image 1.png";
import Button from "../../components/Buttons/Buttons";
import ResetPassword from "./resetPassword.module.css";

const resetPassword = () => {
  return (
    <div className={ResetPassword.forgotPasswordContainer}>
      <div className={ResetPassword.formWrapper}>
        <div className={ResetPassword.formContainer}>
          <div className={ResetPassword.RPTitle}>
            <h1>Reset Password</h1>
           
          </div>
          <form className={ResetPassword.RPForm}>
            <div className={ResetPassword.RPinputContainer}>
              {/* <fieldset>
          <legend >Email</legend> */}
                <input
              className={ResetPassword.RPformInput}
              placeholder="New Password"
              type="password"
              id="password"
              name="password"
              required
            />{" "}
            <input
              className={ResetPassword.RPformInput}
              placeholder="Confirm Password"
              type="password"
              id="password"
              name="password"
              required
            />{" "}               
            {/* </fieldset> */}
                <Button 
                className={ResetPassword.RPBtn}
                  content="Check Email"
                  styleType="primary"
                  height="50px"
                  width="45rem"
                  onClick={() => console.log("clicked")}
                />
            </div>
          </form>
         </div>
       </div>

     <div className={ResetPassword.RPImageContainer}>
        <img className={ResetPassword.passwordimage} src={Image} alt="Forgot Password" />
       </div>
    </div>
  );
};
export default resetPassword;


