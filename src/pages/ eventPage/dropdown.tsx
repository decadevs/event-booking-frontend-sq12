import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { style } from "@material-ui/system";
//kenneth version

interface Props {
  id?: string;
  title?: string;
  label: string;
  value: string;
  options: Array<{ value: any; label: string }>;
  onChange: (event: SelectChangeEvent) => void;
  boxSx?: Record<string, unknown>;
  formSx?: Record<string, unknown>;
}

export default function Dropdown({
  id,
  title,
  boxSx,
  formSx,
  label,
  value,
  options,
  onChange,
}: Props) {
  const [selectedOption, setSelectedOption] = React.useState<string>(value);

  const handleOptionSelect = (optionValue: string) => {
    setSelectedOption(optionValue);
    onChange({
      target: {
        value: optionValue,
      },
    } as SelectChangeEvent);
  };

  return (
    // <Box sx={boxSx}>
    //   <FormControl sx={formSx}>
    //     <InputLabel id={id}>{label}</InputLabel>
    //     <Select
    //       value={selectedOption}
    //       onChange={(event) => handleOptionSelect(event.target.value as string)}
    //       title={title}
    //       label={label}
    //       displayEmpty
    //     >
    //       {options.map(({ value: optionValue, label: optionLabel }) => (
    //         <MenuItem key={optionValue} value={optionValue}>
    //           {selectedOption !== optionValue && (
    //             <Radio
    //               checked={selectedOption === optionValue}
    //               color={
    //                 selectedOption === optionValue ? "secondary" : "default"
    //               }
    //             />
    //           )}
    //           <span onClick={() => handleOptionSelect(optionValue)}>
    //             {optionLabel}
    //           </span>
    //         </MenuItem>
    //       ))}
    //     </Select>
    //   </FormControl>
    // </Box>

    <Box sx={boxSx}>
      <FormControl sx={formSx}>
        <InputLabel id={id}>{label}</InputLabel>

        <Select
          value={value}
          onChange={onChange}
          title={title}
          label={label}
          displayEmpty
        >
          {options.map(({ value: optionValue, label: optionLabel }) => (
            <MenuItem key={optionValue} value={optionValue}>
              {value === optionValue ? (
                <span>{optionLabel}</span>
              ) : (
                <>
                  <Radio
                    checked={value === optionValue}
                    color={value === optionValue ? "secondary" : "default"}
                  />
                  <span>{optionLabel}</span>
                </>
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
