import React from "react";
import InputField from "../../components/InputField/InputField";
import LoginCSS from "./Login.module.css";
import LoginImg from "../../assets/login-img.png";
import Button from "../../components/Buttons/Buttons";
import { Link } from "react-router-dom";
import vector from "../../assets/Vector.png";
import Vector from "../../assets/Vector 2.png";

function Login() {
  return (
    <>
      <div className={LoginCSS.loginContainer}>
        <div className={LoginCSS.loginFormPage}>
          <div className={LoginCSS.loginFormDetails}>
            <div className={LoginCSS.loginFormHeading}>
              <h3>Login to your account</h3>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className={LoginCSS.loginForm}>
              <InputField
                className={LoginCSS.loginFormInput}
                name={"email"}
               
                type={"email"}
                value={""}
                onChange={function (
                  event: React.ChangeEvent<HTMLInputElement>
                ): void {
                  throw new Error("Function not implemented.");
                }}
                label={"email"}
                id={""}
                boxSx={{mb: 2}}
              />
              <InputField
                className={LoginCSS.loginFormInput}
                name={"password"}
               
                type={"password"}
                value={""}
                onChange={function (
                  event: React.ChangeEvent<HTMLInputElement>
                ): void {
                  throw new Error("Function not implemented.");
                }}
                label={"password"}
                id={""}
                boxSx={{}}
              />
              <div className={LoginCSS.forgotPass}>
                <Link to={""}>Forgot Password</Link>
              </div>

              <div className={LoginCSS.loginButton}>
                <Button
                  content={"Login"}
                  height={""}
                  width={"300px"}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
              <div className={LoginCSS.loginOr}>
                <p> Or </p>
              </div>
              <div className={LoginCSS.loginIcon}>
                <button
                  className={LoginCSS.googleBtn}
                  style={{ width: "300px" }}
                >
                  <img src={Vector} alt="google icon" height="20" />
                  <p className={LoginCSS.socialP}> Google </p>
                </button>

                <button className={LoginCSS.facebookBtn}>
                  <img src={vector} alt="facebook icon" height="20" />
                  <p className={LoginCSS.socialP}> Facebook </p>
                </button>
              </div>
              <div className={LoginCSS.notReg}>
                Not yet registered?
                {/* <div className={LoginCSS.createLogin}>
                <Link to={""}>Create account</Link>
              </div> */}
                <Link className={LoginCSS.createLogin} to={""}>
                  {" "}
                  Create account
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={LoginCSS.loginFormImg}>
          <img src={LoginImg} alt="img" />
        </div>
      </div>
    </>
  );
}

export default Login;
