import React from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";

import { useFormContext, Controller } from "react-hook-form";

interface listOfValues {
  id: string | number;
  referenceName?: string;
  referenceCode?: string;
  displayValue?: string;
}
interface IFormInputDropdown {
  name: string;
  label?: string;
  listOfValues?: Array<listOfValues>;
}
export const FormInputDropdown: React.FC<IFormInputDropdown> = ({
  name,
  label,
  listOfValues,
}) => {
  const { control } = useFormContext();
  const generateSingleOptions = () => {
    return listOfValues?.map((value: listOfValues) => {
      const { id, referenceName, displayValue } = value;
      return (
        <MenuItem key={id} value={referenceName}>
          {displayValue}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl>
      {label && <InputLabel>{label}</InputLabel>}
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            // size="small"
            onChange={onChange}
            value={value}
            fullWidth
            sx={{ backgroundColor: "white" }}
          >
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
