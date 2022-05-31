import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { FormInputStandard, FormInputText } from "components";
import { useFormContext } from "react-hook-form";
import { FormControl } from "components/FormControl";
import { TextField } from "@mui/material";

export const TradeCalculator = () => {
  const { watch, setValue } = useFormContext();
  const [entryPrize, risk, reward, stopLoss, takeProfit] = watch([
    "createOrder.entryPrice",
    "createOrder.risk",
    "createOrder.reward",
    "createOrder.stopLoss",
    "createOrder.takeProfit",
  ]);

  // useEffect(() => {
  //   setValue("createOrder.stopLoss", entryPrize * risk);
  //   setValue("createOrder.takeProfit", entryPrize * reward);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [entryPrize]);
  // useEffect(() => {
  //   setValue("createOrder.entryPrize", entryPrize * risk);
  //   setValue("createOrder.takeProfit", entryPrize * reward);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [stopLoss]);
  // useEffect(() => {
  //   setValue("createOrder.stopLoss", entryPrize * risk);
  //   setValue("createOrder.takeProfit", entryPrize * reward);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [takeProfit]);
  const onStopLossChange = () => {
    setValue("createOrder.entryPrize", entryPrize / risk);
  };
  return (
    <Box sx={{ paddingY: 4 }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
          paddingY: 2,
          borderBottom: "1px solid #F3F7FF",
        }}
      >
        <FormInputText
          name={"createOrder.atr"}
          label="ATR"
          inputProps={{ type: "number" }}
        />
        <FormInputText
          name={"createOrder.stockastic"}
          label="Stockastic"
          inputProps={{ type: "number" }}
        />
      </Box>
      <Box
        sx={{
          gap: 2,
          display: "flex",
          paddingBottom: 2,
          borderBottom: "1px solid #F3F7FF",
        }}
      >
        <FormControl name={"createOrder.entryPrice"}>
          <TextField
            fullWidth
            variant="outlined"
            autoComplete="off"
            label="Entry Price"
          />
        </FormControl>
        <Box>
          <FormControl name={"createOrder.stopLoss"}>
            {({ value, onChange }) => (
              <TextField
                value={value || ""}
                onChange={({ target }) => {
                  onChange(target.value);
                  setValue(
                    "createOrder.entryPrize",
                    Number(target.value) / risk
                  );
                }}
                fullWidth
                variant="outlined"
                autoComplete="off"
                label="Stop Loss (SL)"
              />
            )}
          </FormControl>
          <FormInputStandard name={"createOrder.risk"} />
        </Box>
        <Box>
          <FormControl name={"createOrder.takeProfit"}>
            {({ value, onChange }) => (
              <TextField
                value={entryPrize * reward || ""}
                fullWidth
                variant="outlined"
                autoComplete="off"
                label="Take profit (TP))"
              />
            )}
          </FormControl>
          <FormInputStandard name={"createOrder.reward"} />
        </Box>
      </Box>
    </Box>
  );
};
