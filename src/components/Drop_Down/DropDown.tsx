import { InputLabel, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
interface Props {
    id: string;
    name: string;
    options: Array<{ label: string; value: any }>;
    title: string;
    handleChange: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
    selectedValue: any;
    height?: string;
    width?: string;

}
const Dropdown = ({
    id,
    name,
    options,
    title,
    handleChange,
    selectedValue,
    height,
    width
}: Props) => (
    <>
        <p>{title}</p>
        <InputLabel> {name} </InputLabel>
        <Select label='name' id={id} name={name} onChange={handleChange} value={selectedValue} style={{ width: width, height: height }}>

            {options.map((option) => (
                <option key={option.value} value={option.value}>

                    {option.label}
                </option>
            ))}
        </Select>
    </>
);
export default Dropdown;
