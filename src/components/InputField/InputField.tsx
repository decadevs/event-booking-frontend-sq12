// import React from "react";
// import { FormContainer, Input } from "./style";

// interface Props {
//     name: string;
//     type: "text" | "number" | "email";
//     [key: string]: any;
//     label?: string
//     value: string
//     placeholder?: string
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

// }
// const InputField: React.FC<Props> = ({ type, label, onChange, value, name, placeholder, ...props }) => {

//     return (
//         <FormContainer>
//             <label htmlFor={label}>{label}</label>
//             <Input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} {...props} />
//         </FormContainer>);

// };
// export default InputField;

import React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
interface Props {
  name: string;
  type: "text" | "number" | "email" | "password" | "date";
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
        />{" "}
      </FormControl>{" "}
    </Box>
  );
};
export default InputField;
