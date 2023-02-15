// import TextField from "@material-ui/TextField";import React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
interface Props {
  name: string;
  type: "text" | "number" | "email";
  [key: string]: any;
  label: string;
  value: string;
  id: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  boxSx?: Record<string, unknown>;
}
const InputField: React.FC<Props> = ({
  type,
  label,
  onChange,
  value,
  name,
  id,
  placeholder,
  boxSx,
  ...props
}) => {
  return (
    <Box sx={boxSx}>
      {" "}
      <FormControl fullWidth>
        {" "}
        <TextField
          label={label}
          id={id}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </FormControl>
    </Box>
  );
};
export default InputField;

// import Buttons from "../Buttons/Buttons";
// import InputField from "../InputField/InputField";
// import React, { useState } from "react";
// import Dropdown from "./DropDown";
// import { Box, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
// import { width } from "@mui/system";
// import styled from "styled-components";

// export default function Ticket() {
//   const [inputValue, setInputValue] = useState({ name: "" });
//   const { name } = inputValue;

//   const handle = (e: any) => {
//     const { name, value } = e.target;
//     setInputValue((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     console.log(inputValue);
//   };

//   const [selectedVal, setSelectedVal] = useState("");

//   const handleChange = (e: any) => {
//     setSelectedVal(e.target.value);
//     console.log(selectedVal);
//   };

//   const options = [
//     { label: "food & Drinks", value: "food" },
//     { label: "Firm,Media & Entertainment", value: "Media" },
//     { label: "Event & Lifestyle", value: "Event" },
//     { label: "Special Interest", value: "Special" },
//     { label: "Religious & Spirituality", value: "Religious" },
//     { label: "Technology", value: "Technology" },
//     { label: "Government & Politics", value: "Government " },
//   ];

//   return (
//     <div>
//       <Buttons
//         width="1080px"
//         height="100px"
//         onClick={() => console.log("You clicked on the circle!")}
//         content={"Submit"}
//       />

//       <InputField
//         name={""}
//         type={"number"}
//         label={""}
//         value={""}
//         id={""}
//         onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
//           throw new Error("Function not implemented.");
//         }}
//       />

//       <p> Location</p>
//       <Dropdown
//         id={""}
//         title={""}
//         label={""}
//         options={options}
//         onChange={handleChange}
//         value={""}
//         boxSx={{ width: 150 }}
//       />
//     </div>
//   );
// }
