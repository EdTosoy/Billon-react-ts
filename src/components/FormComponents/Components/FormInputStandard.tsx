import { InputBase } from "@mui/material";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

export const FormInputStandard = ({ name }: any) => {
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
        <InputBase
          value={value}
          onChange={onChange}
          sx={{ "> input": { textAlign: "center" } }}
          type="number"
        />
      )}
    />
  );
};
