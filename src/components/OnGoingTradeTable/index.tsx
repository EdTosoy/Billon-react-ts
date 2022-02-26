import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useFieldArray, useFormContext } from "react-hook-form";
import { IOngoinTradesTable } from "./types";
import {
  ON_GOING_TRADE_TABLE_FIELD_NAME,
  TRADING_TOOLS_FIELD_NAME,
} from "constants/index";
import { FormInputDropdown, FormInputStandard } from "components";
import { resultLOV } from "components/PendingOrderTable/sampleData";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.selected,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "& th , & td": {
    padding: 10,
    "> div ": { width: "100%", padding: 0 },
    " & .MuiSelect-select ": {
      padding: "8.5px 8px",
    },
  },
}));

const dataSource = [
  {
    id: "1",
    currencyPair: "USD/JPY",
    createAt: "yo",
    marketOrder: "Buy",
    profit: "5000",
  },
  {
    id: "2",
    currencyPair: "USD/JPY",
    createAt: "yo",
    marketOrder: "Buy",
    profit: "5000",
  },
  {
    id: "3",
    currencyPair: "USD/JPY",
    createAt: "yo",
    marketOrder: "Buy",
    profit: "5000",
  },
];

export const OnGoingTradeTable = () => {
  const { watch, setValue, control } = useFormContext();

  const { fields } = useFieldArray({
    control,
    name: TRADING_TOOLS_FIELD_NAME.onGoingTrades,
  });
  const onGoingTrades: Array<IOngoinTradesTable> = watch(
    TRADING_TOOLS_FIELD_NAME.onGoingTrades
  );

  useEffect(() => {
    setValue(TRADING_TOOLS_FIELD_NAME.onGoingTrades, dataSource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(fields);
  return (
    <Box>
      <TableContainer sx={{ borderRadius: 2, height: 240 }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Currency Pair</TableCell>
              <TableCell align="center">Date / Time</TableCell>
              <TableCell align="center">Buy/Sell</TableCell>
              <TableCell align="center" width={"15%"}>
                Results
              </TableCell>
              <TableCell align="center" width={"13%"}>
                Profit
              </TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {onGoingTrades.map(
              ({ currencyPair, createAt, marketOrder, profit, id }) => (
                <StyledTableRow key={id}>
                  <TableCell align="center">{currencyPair}</TableCell>
                  <TableCell align="center">
                    <Box>
                      <Typography variant="body1">{"44232"}</Typography>
                      <Typography variant="caption">{"4432323"}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">{marketOrder}</TableCell>
                  <TableCell align="center">
                    <FormInputDropdown
                      name={ON_GOING_TRADE_TABLE_FIELD_NAME.result}
                      listOfValues={resultLOV}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <FormInputStandard
                      name={ON_GOING_TRADE_TABLE_FIELD_NAME.profit}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </TableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
