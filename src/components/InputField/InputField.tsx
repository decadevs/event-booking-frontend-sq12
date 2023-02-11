import React from "react";
import { FormContainer, Input } from "./style";

interface Props {
    name: string;
    type: "text" | "dropdown" | "number" | "email";
    [key: string]: any;
    label?: string
    value: string
    placeholder?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

}
const InputField: React.FC<Props> = ({ type, label, onChange, value, name, placeholder, ...props }) => {

    return (
        <FormContainer>
            <label htmlFor={label}>{label}</label>
            <Input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} {...props} />
        </FormContainer>);


};
export default InputField;
