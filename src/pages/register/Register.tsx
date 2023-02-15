import React, { useState } from "react";
import Button from "../../components/Buttons/Buttons";
import image from "../../assets/imagewoman.png";
import "./Register.css";
import InputField from "../../components/InputField/InputField";
import { Link } from "react-router-dom";


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // logic to register the user
    
  };

  return (
    <div className="formcontainer">
      <div className="innerformcontainer">
        <h2>Create an account</h2>
        <p style={{marginTop: "10px"}}>Lorem ipsum dolor sit amet consectetur</p>
        <form>
          <InputField
            label="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            id={"forminput"}
            boxSx={{ mt: 6, mb: 4, width: "400px", height: "10px"}}
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            id={"forminput"}
            boxSx={{ mt: 10, mb: 4, width: "400px", height: "10px"}}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id={"forminput"}
            boxSx={{ mt: 10, mb: 4, width: "400px", height: "10px"}}
          />
          <InputField
            label="Date of Birth"
            type="text"
            name="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            id={"forminput"}
            boxSx={{ mt: 10, mb: 4, width: "400px", height: "10px"}}
          />
          <InputField
            label="Phone Number"
            type="number"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            id={"forminput"}
            boxSx={{ mt: 10, mb: 4, width: "400px", height: "10px"}}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id={"forminput"}
            boxSx={{ mt: 10, mb: 4, width: "400px", height: "10px"}}
          />

          <InputField
            name="confirmPassword"
            type={"password"}
            value={confirmPassword}
            label={"Confirm Password"}
            onChange={(event) => setConfirmPassword(event.target.value)}
            boxSx={{ mt: 10, mb: 4,  width: "400px", height: "10px"}}
            id={"forminput"}
          />

          <Button
            content={"Create Account"}
            height={"40px"}
            width={"400px"}
            onClick={handleRegister}
            className="btn-primary"
          />

          <p style={{marginBottom: "20px"}}>
            Already Register? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
      <div className="imagecontainerreg">
        <img src={image} alt="woman" className="registerimage" />
      </div>
    </div>
  );
};

export default Register;
