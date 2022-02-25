import React from "react";
import Box from "@mui/material/Box";
import { FormInputText } from "components";

export const TradeCalculator = () => {
  return (
    <Box sx={{ paddingY: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FormInputText name="atr" label="ATR" />
        <FormInputText name="stockastic" label="Stockastic" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingY: 2,
          borderBottom: "1px solid #F3F7FF",
        }}
      >
        <FormInputText name="atr" label="ATR" />
        <FormInputText name="stockastic" label="Stockastic" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBottom: 2,
          borderBottom: "1px solid #F3F7FF",
        }}
      >
        <FormInputText name="entryPrice" label="Entry Price" />
        <FormInputText name="stopLoss" label="Stop Loss (SL)" />
        <FormInputText name="takeProfit" label="Take profit (TP))" />
      </Box>
    </Box>
  );
};
