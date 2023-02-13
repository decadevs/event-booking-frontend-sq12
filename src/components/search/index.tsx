import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/Buttons/Buttons";
import InputField from "../../components/InputField/InputField";
import { FaArrowRight } from "react-icons/fa";
import Dropdown from "../Drop_Down/DropDown";

const Main = styled.div`
  height: 120px;
  display: flex;
  margin: 20px auto;
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #10375c;
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Form = styled.form`
  width: 80%;
  display: flex; 
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backgroud-color: #fff;
    width: 100%;
  }
`;

interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
}

const options=[
  {label:"Lagos, Nigeria", value:"Lagos"}, 
  {label:"Delta", value:"Delta"}, 
  {label:"Anambra", value:"Anambra"}]

const days = [
  {label:"Any date",value:"ANY"},
  {label: "Today",value:"Today"},
  {label: "Tomorrow",value:"Tomorrow"},
   {label:"This week", value:"This week"},]

const FormInput = () => {
 

  return (
    <Main>
      <Form>
        <InputField
         onChange={(e) => {}}
          value=""
         key=""
          type="text"
          name="text"
          placeholder="Search events"
          label="what are you looking"
         
         
        />
        <p>Location</p>
        <Dropdown
          id=""
          title=""
          placeholder="Lagos, Nigeria"
          label="Location"
          value={""}
          onChange={(e) => { } } 
          options={options}         
        />
        <p>When</p>
        <Dropdown
          id=""
          title=""
          value={""}
          onChange={(e) => { } }
          options={days}
          label="When"
        
        />
        <Button
          height=""
          width=""
          onClick={() => console.log("clicked")}
          styleType="secondary"
          content={<FaArrowRight style={{ color: "#fff", fontSize: "18px" }} />}
        />
      </Form>
    </Main>
  );
};


export default FormInput;
