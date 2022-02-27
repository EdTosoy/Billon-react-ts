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
          paddingY: 2,
          borderBottom: "1px solid #F3F7FF",
        }}
      >
        <FormInputText name={"createOrder.atr"} label="ATR" />
        <FormInputText name={"createOrder.stockastic"} label="Stockastic" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBottom: 2,
          borderBottom: "1px solid #F3F7FF",
        }}
      >
        <FormInputText name={"createOrder.entryPrice"} label="Entry Price" />
        <FormInputText name={"createOrder.stopLoss"} label="Stop Loss (SL)" />
        <FormInputText
          name={"createOrder.takeProfit"}
          label="Take profit (TP))"
        />
      </Box>
    </Box>
  );
};
