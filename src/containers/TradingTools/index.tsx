import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { FormProvider, useForm } from "react-hook-form";
import { Paper, Button } from "@mui/material";
import { ProfitCalculator } from "components/ProfitCalculator";
import { TradeCalculator } from "components";
import { NewsTable } from "components/NewsTable";
import { OnGoingTradeTable } from "components/OnGoingTradeTable";
import { PendingOrderTable } from "components/PendingOrderTable";
import { TradingTimeSessionTable } from "components/TradingTimeSessionTable";
import { createOrderDefaultValues } from "./defaultValues";

const Item = styled(Paper)(({ theme, padding }: any) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(padding ?? 4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 16,
  height: "100%",
}));

interface ICreateOrder {
  lotSize: number | string;
  numberOfPips: number | string;
  profit: number | string;
  entryPrice?: number | string;
  stopLoss?: number | string;
  takeProfit?: number | string;
  stockastic?: number | string;
  atr?: number | string;
}

interface IFormInputs {
  pendingOrders: any;
  onGoingTrades: any;
  news: any;
  createOrder: ICreateOrder;
}
export const TradingTools = () => {
  const formMethods = useForm<IFormInputs>({
    defaultValues: {
      createOrder: createOrderDefaultValues,
      pendingOrders: [],
      onGoingTrades: [],
    },
  });
  const { handleSubmit, reset } = formMethods;
  const onSubmit = (data: any) => console.log(data);

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
                    onClick={() => reset()}
                    size="large"
                    sx={{ paddingY: 2, paddingX: 4 }}
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={handleSubmit(onSubmit)}
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
