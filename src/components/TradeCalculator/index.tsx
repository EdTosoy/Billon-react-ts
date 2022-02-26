import React from "react";
import Box from "@mui/material/Box";
import { FormInputText } from "components";
import { TRADE_CALCULATOR_FIELD_NAME } from "constants/index";

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
        <FormInputText name={TRADE_CALCULATOR_FIELD_NAME.atr} label="ATR" />
        <FormInputText
          name={TRADE_CALCULATOR_FIELD_NAME.stockastic}
          label="Stockastic"
        />
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
        <FormInputText name={TRADE_CALCULATOR_FIELD_NAME.atr} label="ATR" />
        <FormInputText
          name={TRADE_CALCULATOR_FIELD_NAME.stockastic}
          label="Stockastic"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBottom: 2,
          borderBottom: "1px solid #F3F7FF",
        }}
      >
        <FormInputText
          name={TRADE_CALCULATOR_FIELD_NAME.entryPrice}
          label="Entry Price"
        />
        <FormInputText
          name={TRADE_CALCULATOR_FIELD_NAME.stopLoss}
          label="Stop Loss (SL)"
        />
        <FormInputText
          name={TRADE_CALCULATOR_FIELD_NAME.takeProfit}
          label="Take profit (TP))"
        />
      </Box>
    </Box>
  );
};
