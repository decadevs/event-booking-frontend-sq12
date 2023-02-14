// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import ListItemText from '@mui/material/ListItemText';

// interface Props {
//     id: string;
//     title: string;
//     label: string;
//     options: Array<{ value: any; label: string }>;
//     onChange: (event: SelectChangeEvent) => void;
//     value: any;
//     boxSx?: Record<string, unknown>;
//     placeholder?: string;
//     type?: 'checkbox' | 'radio';
// }

// export default function Dropdown({
//     id,
//     title,
//     label,
//     options,
//     onChange,
//     value,
//     boxSx,
//     placeholder,
//     type = 'checkbox' || 'radio',
// }: Props) {
//     return (
//         <Box sx={boxSx}>
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">{label}</InputLabel>
//                 <Select
//                     defaultValue=""
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={value}
//                     onChange={onChange}
//                     title={title}
//                     label={label}
//                     placeholder={placeholder}
//                     multiple={type === 'checkbox'}
//                     renderValue={
//                         type === 'checkbox'
//                             ? (selected) =>
//                                 Array.isArray(selected)
//                                     ? selected.join(', ')
//                                     : selected.split(',').join(', ')
//                             : undefined
//                     }
//                 >
//                     {type === 'checkbox' ? (
//                         options.map(({ value, label }) => (
//                             <MenuItem key={value} value={value}>
//                                 <Checkbox checked={value === value} />
//                                 <ListItemText primary={label} />
//                             </MenuItem>
//                         ))
//                     ) : (
//                         <RadioGroup value={value} onChange={onChange}>
//                             {options.map(({ value, label }) => (
//                                 <FormControlLabel
//                                     key={value}
//                                     value={value}
//                                     control={<Radio />}
//                                     label={label}
//                                 />
//                             ))}
//                         </RadioGroup>
//                     )}
//                 </Select>
//             </FormControl>
//         </Box>
//     );
// }


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Radio from '@mui/material/Radio';


// interface Props {
//     id: string,
//     title: string
//     label: string;
//     options: Array<{ value: any; label: string }>;
//     onChange: (event: SelectChangeEvent) => void;
//     value: any;
//     boxSx?: Record<string, unknown>;
//     placeholder?: string

// }

// export default function Dropdown({
//     id,
//     title,
//     label,
//     options,
//     onChange,
//     value,
//     boxSx,
//     placeholder

// }: Props) {
//     return (
//         <Box sx={boxSx}>
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">{label}</InputLabel>
//                 <Select

//                     defaultValue=""
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={value}
//                     onChange={onChange}
//                     title={title}
//                     label={label}
//                     placeholder={placeholder}


//                 >
//                     {options.map(({ value, label }) => (
//                         <MenuItem key={value} value={value}>
//                             <Radio checked={value === value} />

//                             <span>{label}</span>

//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         </Box>
//     );
// }



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import ListItemText from '@mui/material/ListItemText';

// interface Props {
//     id: string;
//     title: string;
//     label: string;
//     options: Array<{ value: any; label: string }>;
//     onChange: (event: SelectChangeEvent) => void;
//     value: string;
//     boxSx?: Record<string, unknown>;
//     placeholder?: string;
//     type?: 'checkbox' | 'radio';
// }

// export default function Dropdown({
//     id,
//     title,
//     label,
//     options,
//     onChange,
//     value,
//     boxSx,
//     placeholder,
//     type = 'checkbox',
// }: Props) {
//     const isCheckbox = type === 'checkbox';

//     return (
//         <Box sx={boxSx}>
//             <FormControl fullWidth>
//                 <InputLabel id={`${id}-label`}>{label}</InputLabel>
//                 <Select
//                     labelId={`${id}-label`}
//                     id={id}
//                     value={value}
//                     onChange={onChange}
//                     inputProps={{ 'aria-label': `${label} selector` }}
//                     multiple={isCheckbox}
//                     renderValue={
//                         isCheckbox
//                             ? (selected) =>
//                                 (selected as string)
//                             : undefined
//                     }
//                 >
//                     {isCheckbox ? (
//                         options.map(({ value, label }) => (
//                             <MenuItem key={value} value={value}>
//                                 <Checkbox checked={value === value} />
//                                 <ListItemText primary={label} />
//                             </MenuItem>
//                         ))
//                     ) : (
//                         <RadioGroup value={value} onChange={onChange}>
//                             {options.map(({ value, label }) => (
//                                 <FormControlLabel
//                                     key={value}
//                                     value={value}
//                                     control={<Radio />}
//                                     label={label}
//                                 />
//                             ))}
//                         </RadioGroup>
//                     )}
//                 </Select>
//             </FormControl>
//         </Box>
//     );
// }


import * as React from 'react';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

interface Props {
    id?: string;
    title?: string
    label: string;
    value: string;
    options: Array<{ value: any; label: string }>;
    onChange: (event: SelectChangeEvent) => void;
    boxSx?: Record<string, unknown>;
    formSx?: Record<string, unknown>;
}

//     
export default function Dropdown({ id, title, boxSx, formSx, label, value, options, onChange }: Props) {
    return (
        <Box sx={boxSx}>
            <FormControl sx={formSx}>
                <InputLabel id={id}>{label}</InputLabel>
                <Select value={value} onChange={onChange} title={title} label={label} displayEmpty>
                    {options.map(({ value: optionValue, label: optionLabel }) => (
                        <MenuItem key={optionValue} value={optionValue}>
                            <Radio checked={value === optionValue} color={value === optionValue ? "secondary" : "default"} />
                            <span>{optionLabel}</span>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
