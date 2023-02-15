// import TextField from "@material-ui/TextField";
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
    id?: string;
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
<<<<<<< Updated upstream
    );

=======
    )
>>>>>>> Stashed changes
};
export default InputField;