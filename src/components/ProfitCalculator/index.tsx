import React, { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { FormInputText } from "components";
import { useFormContext } from "react-hook-form";
import { PROFIT_CALCULATOR_FIELD_NAME } from "constants/index";
import { FormControl } from "components/FormControl";

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
        gap: 1,
        alignItems: "center",
        paddingY: 4,
        borderBottom: "1px solid #F3F7FF",
      }}
    >
      <FormInputText
        name={`createOrder.${PROFIT_CALCULATOR_FIELD_NAME.lotSize}`}
        label="Lot size"
        inputProps={{ inputMode: "numeric", type: "number" }}
      />

      <FormInputText
        name={"createOrder.numberOfPips"}
        label="Number of PIPs"
        inputProps={{ type: "number" }}
      />

      <FormControl name={"createOrder.profit"}>
        <TextField
          fullWidth
          variant="outlined"
          autoComplete="off"
          label="profit"
        />
      </FormControl>
    </Box>
  );
};
