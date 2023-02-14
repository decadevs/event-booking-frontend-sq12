import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    id: string,
    title: string
    label: string;
    options: Array<{ value: any; label: string }>;
    onChange: (event: SelectChangeEvent) => void;
    value: any;
    boxSx?: Record<string, unknown>;
    placeholder?: string

}

export default function Dropdown({
    id,
    title,
    label,
    options,
    onChange,
    value,
    boxSx,
    placeholder

}: Props) {
    return (
        <Box sx={boxSx}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    defaultValue=""
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={onChange}
                    title={title}
                    label={label}
                    placeholder={placeholder}

                >
                    {options.map(({ value, label }) => (
                        <MenuItem key={value} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

