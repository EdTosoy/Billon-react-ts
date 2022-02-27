import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export const FormInputTextField = ({
  name,
  label,
  listOfValues,
  ...args
}: any) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <Autocomplete
          options={listOfValues}
          inputValue={value}
          onInputChange={(event, newInputValue) => {
            onChange(newInputValue);
          }}
          disableClearable
          sx={{ backgroundColor: "white" }}
          {...args}
          renderInput={(params) => <TextField {...params} size="small" />}
        />
      )}
    />
  );
};
