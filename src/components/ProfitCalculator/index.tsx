import React from "react";
import { Box } from "@mui/material";
import { FormInputText } from "components";
import { useFormContext } from "react-hook-form";
export const ProfitCalculator = () => {
  const { watch } = useFormContext();
  const lotSize = watch("lotSize", 0);
  const numberOfPips = watch("numberOfPips", 0);
  const profit = numberOfPips * lotSize || "";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingY: 4,
        borderBottom: "1px solid #F3F7FF",
      }}
    >
      <FormInputText name="lotSize" label="Lot size" />
      <Box>X</Box>
      <FormInputText name="numberOfPips" label="Number of PIPs" />
      <Box>=</Box>
      <FormInputText name="profit" label="profit" options={{ value: profit }} />
    </Box>
  );
};
