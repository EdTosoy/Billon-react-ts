import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import {
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import Input from "@mui/icons-material/Input";
import { FormControl } from "components/FormControl";
import { ProfitCalculator } from "components/ProfitCalculator";

const Item = styled(Paper)(({ theme }: any) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 16,
  height: "100%",
}));

interface IFormInputs {
  lotSize: any;
  numberOfPips: any;
  profit: any;
  entryPrice?: number;
  stopLoss?: number;
  takeProfit?: number;
  stockastic?: number;
  atr?: number;
}
export const TradingTools = () => {
  const formMethods = useForm<IFormInputs>();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = formMethods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={6} key={2}>
          <FormProvider {...formMethods}>
            <Item>
              <form>
                <ProfitCalculator />

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: 2,
                      borderBottom: "1px solid #F3F7FF",
                    }}
                  >
                    .
                    <FormControl name={"atr"}>
                      <TextField label={"ATR"} />
                    </FormControl>
                    <Controller
                      name={"stockastic"}
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          onChange={onChange}
                          value={value}
                          label={"Stockastic"}
                        />
                      )}
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
                    <Controller
                      name={"entryPrice"}
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          onChange={onChange}
                          value={value}
                          label={"Entry Price"}
                        />
                      )}
                    />
                    <Controller
                      name={"stopLoss"}
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          onChange={onChange}
                          value={value}
                          label={"Stop Loss (SL)"}
                          onClick={() =>
                            navigator.clipboard.writeText(`${value}`)
                          }
                        />
                      )}
                    />
                    <Controller
                      name={"takeProfit"}
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          onChange={onChange}
                          value={value}
                          label={"Take profit (TP)"}
                          onClick={() =>
                            navigator.clipboard.writeText(`${value}`)
                          }
                        />
                      )}
                    />
                  </Box>
                </Box>
                <Button onClick={() => reset()}>Reset</Button>
                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
              </form>
            </Item>
          </FormProvider>
        </Grid>
        <Grid item xs={2} sm={4} md={6} key={2}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid sx={{ height: 150 }} item xs={2} sm={4} md={12} key={2}>
              <Item>xs=2</Item>
            </Grid>
            <Grid sx={{ height: 300 }} item xs={2} sm={4} md={12} key={2}>
              <Item>xs=2</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
