<<<<<<< HEAD
// import TextField from "@material-ui/TextField";import React from "react";
=======
// import TextField from "@material-ui/TextField";
import React from "react";
>>>>>>> dev
import FormControl from '@mui/material/FormControl';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
interface Props {
    name: string;
    type: "text" | "number" | "email" | "password" | "date";
    [key: string]: any;
<<<<<<< HEAD
    label: string    
    value: string    
    id: string    
    placeholder?: string    
=======
    label: string
    value: string
    id: string
    placeholder?: string
>>>>>>> dev
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    boxSx?: Record<string, unknown>;
}
const InputField: React.FC<Props> = ({ type, label, onChange, value, name, id, placeholder, boxSx, ...props }) => {
    return (
        <Box sx={boxSx}>
<<<<<<< HEAD
            <FormControl fullWidth>                
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
=======
            <FormControl fullWidth>
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
>>>>>>> dev
    )
};
export default InputField;