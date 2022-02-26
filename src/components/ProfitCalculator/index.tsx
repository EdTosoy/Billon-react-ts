import React from "react";
import { Box } from "@mui/material";
import { FormInputText } from "components";
import { useFormContext } from "react-hook-form";
import { PROFIT_CALCULATOR_FIELD_NAME } from "constants/index";

export const ProfitCalculator = () => {
  const { watch } = useFormContext();
  const [lotSize, numberOfPips] = watch([
    PROFIT_CALCULATOR_FIELD_NAME.lotSize,
    PROFIT_CALCULATOR_FIELD_NAME.numberOfPips,
  ]);
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
      <FormInputText
        name={PROFIT_CALCULATOR_FIELD_NAME.lotSize}
        label="Lot size"
      />
      <Box>X</Box>
      <FormInputText
        name={PROFIT_CALCULATOR_FIELD_NAME.numberOfPips}
        label="Number of PIPs"
      />
      <Box>=</Box>
      <FormInputText
        name={PROFIT_CALCULATOR_FIELD_NAME.profit}
        label="profit"
        options={{ value: profit }}
      />
    </Box>
  );
};
