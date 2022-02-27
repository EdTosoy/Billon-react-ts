import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { ProfitCalculator } from "components/ProfitCalculator";
import { Item, TradeCalculator } from "components";
import { NewsTable } from "components/NewsTable";
import { OnGoingTradeTable } from "components/OnGoingTradeTable";
import { PendingOrderTable } from "components/PendingOrderTable";
import { TradingTimeSessionTable } from "components/TradingTimeSessionTable";
import { format } from "date-fns";
import { createOrderDefaultValues } from "./defaultValues";
import { IFormInputs } from "./types";

export const TradingTools = () => {
  const formMethods = useForm<IFormInputs>({
    defaultValues: {
      createOrder: createOrderDefaultValues,
      pendingOrders: [],
      onGoingTrades: [],
    },
  });
  const { handleSubmit, reset, watch, getValues, setValue } = formMethods;
  const onSubmit = (data: any) => console.log(data);
  const createOrderValues = watch("createOrder");
  const pendingOrders = watch("pendingOrders");

  const onCreateOrder = () => {
    setValue("pendingOrders", [
      ...pendingOrders,
      {
        ...createOrderValues,
        createdAt: {
          time: format(new Date(), "p"),
          date: format(new Date(), "mm/dd/yy"),
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
    <Box sx={{ flexGrow: 1 }}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={5.5} key={2}>
              <Item padding={2}>
                <ProfitCalculator />
                <TradeCalculator />
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    onClick={() => resetOrder()}
                    size="large"
                    sx={{ paddingY: 2, paddingX: 4 }}
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={() => {
                      onCreateOrder();
                      resetOrder();
                    }}
                    size="large"
                    variant="contained"
                    sx={{ paddingY: 2, paddingX: 4 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={2} sm={4} md={6.5} key={2}>
              <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={12} key={2}>
                  <Grid
                    container
                    spacing={2}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={2} sm={6} md={6} key={2}>
                      <Item padding={0}>
                        <TradingTimeSessionTable />
                      </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6} key={2}>
                      <Item padding={0}>
                        <NewsTable />
                      </Item>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} sm={4} md={12} key={2}>
                  <Item padding={2}>
                    <OnGoingTradeTable />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} sm={4} md={12} key={2}>
              <Grid item xs={2} sm={4} md={12} key={2}>
                <Item padding={2}>
                  <PendingOrderTable />
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Box>
  );
};
