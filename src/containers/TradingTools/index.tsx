import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import { Controller, useForm } from "react-hook-form";
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

const Item = styled(Paper)(({ theme }: any) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 16,
  height: "100%",
}));
export const TradingTools = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={6} key={2}>
          <Item>
            <form>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Controller
                  name={"lotSize"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label={"Lot size"}
                    />
                  )}
                />
                <Box>X</Box>
                <Controller
                  name={"numberOfPips"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label={"Number of PIPs"}
                    />
                  )}
                />
                <Box>=</Box>
                <Controller
                  name={"numberOfPips"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label={"Number of PIPs"}
                    />
                  )}
                />
                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
              </Box>
            </form>
          </Item>
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
