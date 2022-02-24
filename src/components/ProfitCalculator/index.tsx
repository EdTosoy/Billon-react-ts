import { Box, TextField } from "@mui/material";
import { FormInputOutlined } from "components";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
export const ProfitCalculator = () => {
  const { control, watch } = useFormContext();
  const lotSize = watch("lotSize", 0);
  const numberOfPips = watch("numberOfPips", 0);
  const profit = numberOfPips * lotSize || "";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingBottom: 2,
        borderBottom: "1px solid #F3F7FF",
      }}
    >
      <Controller
        name={"lotSize"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField onChange={onChange} value={value} label={"Lot size"} />
        )}
      />
      <FormInputOutlined />
      <Box>X</Box>
      <Controller
        name={"numberOfPips"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            onChange={onChange}
            value={value}
            label={"Number of PIPs"}
          />
        )}
      />
      <Box>=</Box>
      <Controller
        name={"profit"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            value={profit}
            label={"profit"}
            onClick={() => navigator.clipboard.writeText(`${profit}`)}
          />
        )}
      />
    </Box>
  );
};
