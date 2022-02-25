import Box from "@mui/material/Box";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { FormProvider, useForm } from "react-hook-form";
import {
  Paper,
  Button,
  List,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";
import { ProfitCalculator } from "components/ProfitCalculator";
import { TradeCalculator } from "components";
import { NewsTable } from "components/NewsTable";
import { OnGoingTradeTable } from "components/OnGoingTradeTable";
import { PendingOrderTable } from "components/PendingOrderTable";

const Item = styled(Paper)(({ theme, padding }: any) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(padding ?? 4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 16,
  height: "100%",
}));

interface IFormInputs {
  lotSize: number | string;
  numberOfPips: number | string;
  profit: number | string;
  entryPrice?: number | string;
  stopLoss?: number | string;
  takeProfit?: number | string;
  stockastic?: number | string;
  atr?: number | string;
}
export const TradingTools = () => {
  const formMethods = useForm<IFormInputs>({
    defaultValues: {
      lotSize: "",
      numberOfPips: "",
      profit: "",
      entryPrice: "",
      stopLoss: "",
      takeProfit: "",
      stockastic: "",
      atr: "",
    },
  });
  const { handleSubmit, reset } = formMethods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={5} key={2}>
          <FormProvider {...formMethods}>
            <Item padding={2}>
              <form>
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
              </form>
            </Item>
          </FormProvider>
        </Grid>
        <Grid item xs={2} sm={4} md={7} key={2}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={12} key={2}>
              <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={6} md={8} key={2}>
                  <Item padding={0}></Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4} key={2}>
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
    </Box>
  );
};
