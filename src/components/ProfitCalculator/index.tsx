import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { FormInputText } from "components";
import { useFormContext } from "react-hook-form";
import { PROFIT_CALCULATOR_FIELD_NAME } from "constants/index";

export const ProfitCalculator = () => {
  const { watch, setValue } = useFormContext();
  const [numberOfPips, lotSize] = watch([
    `createOrder.${PROFIT_CALCULATOR_FIELD_NAME.numberOfPips}`,
    `createOrder.${PROFIT_CALCULATOR_FIELD_NAME.lotSize}`,
  ]);
  const profit = numberOfPips * lotSize || "";
  useEffect(() => {
    if (profit) setValue("createOrder.profit", profit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profit]);
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
        name={`createOrder.${PROFIT_CALCULATOR_FIELD_NAME.lotSize}`}
        label="Lot size"
      />
      <Box>X</Box>
      <FormInputText name={"createOrder.numberOfPips"} label="Number of PIPs" />
      <Box>=</Box>
      <FormInputText
        name={"createOrder.profit"}
        label="profit"
        options={{ value: profit }}
      />
    </Box>
  );
};
