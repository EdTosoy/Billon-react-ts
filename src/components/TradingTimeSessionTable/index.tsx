import React from "react";
import { Box, Paper, Typography } from "@mui/material";
export const TradingTimeSessionTable = () => {
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
