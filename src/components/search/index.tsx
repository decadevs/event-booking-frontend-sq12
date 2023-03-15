import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/Buttons/Buttons";
import InputField from "../../components/InputField/InputField";
import { FaArrowRight } from "react-icons/fa";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { width } from "@mui/system";



const Main = styled.div`
  height: 120px;
  display: flex;
  margin: 20px auto;
  width: 90%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #10375c;
  @media (max-width: 768px) {
    height: 250px;
    margin-top: 100px
  }
`;

const Form = styled.form`
  width: 80%;
  display: flex; 
  justify-content: space-between;
  align-items: center;
 
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

const FormInput = () => {

  // background-color: #10375c;

  return (
       <Main>
        <Form>
        <InputField 
          name={""} 
          type={"text"} 
          label="what are you looking for?"
          value={""} 
          id={""} 
          boxSx={{backgroundColor: "#fff", width: "200px"}}
          onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        } } />
        <Box sx={{ minWidth: 200}}>
      <FormControl fullWidth sx={{ color: 'grey'}}>
        <InputLabel id=""  >Location</InputLabel>
        <Select
          labelId=""
          id=""
          value={location}
          label="Location"
          onChange={()=>{}}
          placeholder="Location"
          style={{backgroundColor:'white'}}
        >
          <MenuItem value={"Lagos"}>Lagos, Nigeria</MenuItem>
          <MenuItem value={"Abuja"}>Abuja, Nigeria</MenuItem>
          <MenuItem value={"Kano"}>Kano, Nigeria</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 200, }}>
      <FormControl fullWidth sx={{}}>
        <InputLabel id="">When?</InputLabel>
        <Select
          labelId=""
          id=""
          value="when"
          label="When"
          onChange={()=>{}}
          style={{backgroundColor:'white'}}
        >
          <MenuItem value="today">Today</MenuItem>
          <MenuItem value="Tomorrow">Tomorrow</MenuItem>
          <MenuItem value="">Next Tomorrow</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <Button
          style={{ backgroundColor: "red" }}
          styleType="secondary"
          content={<FaArrowRight style={{ color: "#fff", fontSize: "18px",}} />} height={""} width={""} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
          </Form>
         </Main>
   
  );
};

export default FormInput;
