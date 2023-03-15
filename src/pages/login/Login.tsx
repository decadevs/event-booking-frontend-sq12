import React, {HTMLInputTypeAttribute, useState} from "react";
import InputField from "../../components/InputField/InputField";
import LoginCSS from "./Login.module.css";
import LoginImg from "../../assets/login-img.png";
import Button from "../../components/Buttons/Buttons";
import { Link } from "react-router-dom";
import vector from "../../assets/Vector.png";
import Vector from "../../assets/Vector 2.png";

function Login() {

  const [inputEmail, setInputEmail] = useState({ email: '' });
  const { email } = inputEmail;
  const [userLogin, setUserLogin] = useState({ password: '' });
  const { password } = userLogin;
  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setInputEmail((data) => ({ ...data, [name]: value }));
    console.log(inputEmail)
  };
  function handleChange(e: any) {
    const { name, value } = e.target;
    setUserLogin((prev) => ({ ...prev, [name]: value }));
    console.log(userLogin)
  }
  
  
  return (
    <>
      <div className={LoginCSS.loginContainer} style={{marginTop:"70px"}}>
        <div className={LoginCSS.loginFormPage}>
          <div className={LoginCSS.loginFormDetails }>
            <div className={LoginCSS.loginFormHeading} >
              <h3>Login to your account</h3>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className={LoginCSS.loginForm}>
    
              <InputField                
                name={'email'}
                type={"email"}
                label={"Email"}
                value={email}
                id={""}
                onChange={handleForm}
              />              
              <InputField                
                className={LoginCSS.loginFormInput}
                name={"password"}
                type={"password"}
                value={password}
                onChange={handleChange}
                label={"Password"}
                id={""}
                boxSx={{mt:2}}
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
              <div className={LoginCSS.loginIcon} >
                <button
                  className={LoginCSS.googleBtn}
                  style={{ width: "300px" , borderRadius:"5px"}}
                >
                  <img src={Vector} alt="google icon" height="20" />
                  <p className={LoginCSS.socialP}> Google </p>
                </button>

                <button className={LoginCSS.facebookBtn}
                style={{ width: "300px" , borderRadius:"5px"}}>
                  <img src={vector} alt="facebook icon" height="20" />
                  <p className={LoginCSS.socialP}> Facebook </p>
                </button>
              </div>
              <div className={LoginCSS.notReg}>
                Not yet registered?
          
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
