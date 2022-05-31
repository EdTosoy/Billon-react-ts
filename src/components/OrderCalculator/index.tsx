import React from "react";
import { Box, Button } from "@mui/material";
import { TradeCalculator } from "components";
import { ProfitCalculator } from "components/ProfitCalculator";
import { useFormContext } from "react-hook-form";
import {
  MONTH_DAY_YEAR,
  TIME_12,
  TRADING_TOOLS_FIELD_NAME,
} from "constants/index";
import { createOrderDefaultValues } from "containers/TradingTools/defaultValues";
import { format } from "date-fns";

export const OrderCalculator = () => {
  const { watch, reset, setValue, getValues } = useFormContext();

  const [createOrder, pendingOrders] = watch([
    TRADING_TOOLS_FIELD_NAME.createOrder,
    TRADING_TOOLS_FIELD_NAME.pendingOrders,
  ]);

  const onCreateOrder = () => {
    setValue(TRADING_TOOLS_FIELD_NAME.pendingOrders, [
      ...pendingOrders,
      {
        ...createOrder,
        createdAt: {
          time: format(new Date(), TIME_12),
          date: format(new Date(), MONTH_DAY_YEAR),
        },
      },
    ]);
  };

  const resetOrder = () => {
    reset({
      ...getValues(),
      createOrder: createOrderDefaultValues,
    });
  };
  return (
    <Box>
      <ProfitCalculator />
      <TradeCalculator />
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          onClick={() => resetOrder()}
          size="small"
          sx={{ paddingY: 2, paddingX: 4 }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            onCreateOrder();
            resetOrder();
          }}
          size="small"
          variant="contained"
          sx={{ paddingY: 2, paddingX: 4 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
