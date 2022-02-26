import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export const FormInputTextField = ({ name, label, ...args }: any) => {
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
          disablePortal
          options={top100Films}
          disableClearable
          sx={{ backgroundColor: "white" }}
          renderInput={(params) => <TextField {...params} size="small" />}
        />
      )}
    />
  );
};

const top100Films = [{ label: "USD/JPY", year: 1994 }];
