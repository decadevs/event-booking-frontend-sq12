import React from "react";
import { FormContainer, Input, Selected } from "./style";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel } from "@mui/material";


interface Props {
  name: string;
  type: "text" | "dropdown";
  options?: string[];
  [key: string]: any;
}
const InputField: React.FC<Props> = ({ type, options, label, ...props }) => {
  switch (type) {
    case "text":
      return (
        <FormContainer>
          {" "}
          <label htmlFor={label}>{label}</label>{" "}
          <Input type="text" {...props} />{" "}
        </FormContainer>
      );
    case "dropdown":
      return (
        <FormContainer {...props}>
          {" "}
          <FormControl>
            {" "}
            <label htmlFor={label}>{label}</label>{" "}
          </FormControl>{" "}
          <Selected {...props}>
            {" "}
            {options &&
              options.map((option) => (
                <option key={option} value={option}>
                  {" "}
                  {option}
                </option>
              ))}
          </Selected>{" "}
        </FormContainer>
      );
    default:
      return <input type="text" {...props} />;
  }
};
export default InputField;
