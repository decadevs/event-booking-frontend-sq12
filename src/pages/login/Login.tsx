import React, { HTMLInputTypeAttribute, useState } from "react";
import InputField from "../../components/InputField/InputField";
import LoginCSS from "./Login.module.css";
import LoginImg from "../../assets/login-img.png";
import Button from "../../components/Buttons/Buttons";
import { Link, useNavigate } from "react-router-dom";
import vector from "../../assets/Vector.png";
import Vector from "../../assets/Vector 2.png";
import { useContextProvider } from "../../utils/context";

interface LoginContextProps {
  loginConfig: (email:string, password:string) => void
}

function Login() {
  const [inputEmail, setInputEmail] = useState({ email: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState({ password: "" });
  const [inputData, setInputData] = useState<Record<string, any>>({});
  const [salt, setSalt] = useState("");
  const navigate = useNavigate();
  const { loginConfig } = useContextProvider() as unknown as LoginContextProps;
  // const handleForm = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:3000/auth/check-email",
  //       { email }
  //     );
  //     setSalt(data.salt);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleChange = async (e: any) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setUserLogin((prev) => ({ ...prev, [name]: value }));
  //   try {
  //     const hashedPassword = await bcrypt.hash(password, salt);
  //     const { data } = await axios.post(
  //       "http://localhost:3000/auth/login",
  //       { email, password: hashedPassword }
  //     );
  //     localStorage.setItem("user", JSON.stringify(data.user));
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleForm = async (e: any) => {
    e.preventDefault();
    loginConfig(email, password);
    // const { name, value } = e.target;
    // setInputEmail((data) => ({ ...data, [name]: value }));
    // setInputData({ ...inputData, email: email, password: password });
    // console.log(inputData);
    // console.log(inputEmail);
  };
  function handleChange(e: any) {
    // const { name, value } = e.target;
    // setUserLogin((prev) => ({ ...prev, [name]: value }
    // setInputData({ ...inputData, [name]: value });
    // console.log(inputData);
    // console.log(userLogin);
  }

  return (
    <>
      <div className={LoginCSS.loginContainer} style={{ marginTop: "70px" }}>
        <div className={LoginCSS.loginFormPage}>
          <div className={LoginCSS.loginFormDetails}>
            <div className={LoginCSS.loginFormHeading}>
              <h3>Login to your account</h3>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className={LoginCSS.loginForm}>
              <InputField
                name={"email"}
                type={"email"}
                label={"Email"}
                value={email}
                id={""}
                onChange={handleEmailChange}
              />
              <InputField
                className={LoginCSS.loginFormInput}
                name={"password"}
                type={"password"}
                value={password}
                onChange={handlePasswordChange}
                label={"Password"}
                id={""}
                boxSx={{ mt: 2 }}
              />
              <div className={LoginCSS.forgotPass}>
                <Link to={"/forgot-password"}>Forgot Password</Link>
              </div>

              <div className={LoginCSS.loginButton}>
                <Button
                  content={"Login"}
                  height={""}
                  width={"300px"}
                  onClick={handleForm}
                />
              </div>
              <div className={LoginCSS.loginOr}>
                <p> Or </p>
              </div>
              <div className={LoginCSS.loginIcon}>
                <button
                  className={LoginCSS.googleBtn}
                  style={{ width: "300px", borderRadius: "5px" }}
                >
                  <img src={Vector} alt="google icon" height="20" />
                  <p className={LoginCSS.socialP}> Google </p>
                </button>

                <button
                  className={LoginCSS.facebookBtn}
                  style={{ width: "300px", borderRadius: "5px" }}
                >
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
