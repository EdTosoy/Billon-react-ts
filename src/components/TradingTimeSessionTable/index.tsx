import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
//@ts-ignore
import logo from "./timesession.png";
export const TradingTimeSessionTable = () => {
  const Block = ({ content }: any) => (
    <Box
      sx={{
        border: "1px solid black",
        height: 25,
        width: 25,
      }}
    >
      {content}
    </Box>
  );
  const columns = [
    { field: "id" },
    { field: "username", width: 150 },
    { field: "age", width: 80, type: "number" },
  ];
  const rows = [{ id: "3", username: "ed", age: 42 }];

  const tradingSessions = [
    {
      marketName: "SYDNEY",
      currencies: "(AUD, NZD)",
      isActive: true,
    },
    {
      marketName: "TOKYO",
      currencies: "(JPY)",
      isActive: true,
    },
    {
      marketName: "LONDON",
      currencies: "(EUR, GBP, CHF)",
      isActive: false,
    },
    {
      marketName: "NEW YORK",
      currencies: "(USD, CAD)",
      isActive: false,
    },
  ];
  return (
    <Box>
      {/* <CardMedia component="img" height="194" image={logo} alt="Paella dish" /> */}

      {tradingSessions.map(({ marketName, currencies, isActive }) => (
        <Paper
          elevation={isActive ? 2 : 0}
          sx={{
            marginY: 0.4,
            backgroundColor: isActive ? "violet" : "",
            display: "flex",
            padding: 1,
          }}
        >
          <Typography variant="body2">{marketName}</Typography>
          <Typography variant="caption">{currencies}</Typography>
        </Paper>
      ))}
    </Box>
  );
};
