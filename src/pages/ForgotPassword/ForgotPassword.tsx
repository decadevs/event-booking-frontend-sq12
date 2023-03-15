import React from "react";
import Image from "../../assets/image 1.png"
import Button from "../../components/Buttons/Buttons";
import Any from "./any.module.css";
const forgotPassword = () => {
  return (
    <div className={Any.forgotPasswordContainer}>
      <div className={Any.formWrapper}>
        <div className={Any.formContainer}>
          <div className={Any.fPTitle}>
            <h1>Forgot Password</h1>
            <p>Enter the email associated with your account and <br></br>we’ll send
              an email with instruction to reset your<br></br> password{" "}</p>
          </div>
          <form className={Any.fPForm}>
            <div className={Any.fPinputContainer}>
              {/* <fieldset>
                <legend >Email</legend> */}
                <input 
                className={Any.fPformInput}
                 type="email"
                 id="email"
                 name="email"
                 placeholder="Enter Email"
                 required
                />
              {/* </fieldset> */}
                <Button 
                className={Any.fPBtn}
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

      <div className={Any.fPImageContainer}>
        <img className={Any.passwordimage} src={Image} alt="Forgot Password" />
      </div>
    </div>
  );
};
export default forgotPassword;
