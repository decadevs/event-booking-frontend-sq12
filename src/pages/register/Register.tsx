import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Buttons/Buttons";
import image from "../../assets/imagewoman.png";

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
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div style={{ width: "50%" }}>
        <h2>Create an account</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputField
          label="Date of Birth"
          type="date"
          name="dob"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        />
        <InputField
          label="Phone Number"
          type="number"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <Button onClick={handleRegister} content={undefined} height={"30px"} width={"40%"}>Create Account</Button>
      </div>
      <img src={image} alt="woman" style={{ width: "50%" }} />
    </div>
  );
};

export default Register;
