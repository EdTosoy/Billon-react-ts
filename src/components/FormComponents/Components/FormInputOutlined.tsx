import React from "react";
import { OutlinedInput } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const FormInputOutlined = ({ name, label, ...args }: any) => {
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
        <OutlinedInput
          placeholder="Currency Pair"
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          {...args}
        />
      )}
    />
  );
};
