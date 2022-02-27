import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FormProvider, useForm } from "react-hook-form";
import {
  Item,
  NewsTable,
  PendingOrderTable,
  OnGoingTradeTable,
  TradingTimeSessionTable,
  OrderCalculator,
} from "components/index";
import { tradingToolDefaultValues } from "./defaultValues";

export const TradingTools = () => {
  const formMethods = useForm({
    defaultValues: tradingToolDefaultValues,
  });
  const { handleSubmit } = formMethods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={5.5} key={2}>
              <Item padding={2}>
                <OrderCalculator />
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
