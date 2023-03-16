import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { styledDropdown } from './style';

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onOptionSelect }) => {
const dropdown = styledDropdown();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onOptionSelect(event.target.value as string);
  };

  return (
    <FormControl className={dropdown.formContainer}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        className={dropdown.select}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option} className={dropdown.menuitem}>
            {option}
          </MenuItem >
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;