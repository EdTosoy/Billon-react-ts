/* eslint-disable no-sparse-arrays */
import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FormInputDropdown } from "components/FormComponents/Components/FormInputDropdown";
import { useFormContext, useFieldArray } from "react-hook-form";
import { IPendingOrderTable } from "./types";
import {
  PENDING_ORDER_TABLE_FIELD_NAME,
  TRADING_TOOLS_FIELD_NAME,
} from "constants/index";
import { FormInputTextField } from "components";
import {
  confidenceLevelLOV,
  confirmationCandleLOV,
  interrogativeLOV,
  marketOrderLOV,
  moodLOV,
  timeFrameLOV,
} from "./sampleData";

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

const dataSource: IPendingOrderTable[] = [
  {
    currencyPair: "USD/JPY",
    createdAt: {
      time: "2:330px",
      date: "23/3/44",
    },
    marketOrder: "Buy limit",
    confirmationCandle: "engulfing",
    timeFrame: "h4, h1, m30",
    mood: "Calm",
    confidence: "5",
    didFollowThePlan: true,
    actions: "string",
  },
  {
    currencyPair: "USD/JPY",
    createdAt: {
      time: "2:330px",
      date: "23/3/44",
    },
    marketOrder: "Buy limit",
    confirmationCandle: "engulfing",
    timeFrame: "h4, h1, m30",
    mood: "Calm",
    confidence: "5",
    didFollowThePlan: true,
    actions: "string",
  },
];

export const PendingOrderTable = () => {
  const { control, watch, setValue } = useFormContext();

  const { fields } = useFieldArray({
    control,
    name: TRADING_TOOLS_FIELD_NAME.pendingOrders,
  });
  const pendingOrders: Array<IPendingOrderTable> = watch(
    TRADING_TOOLS_FIELD_NAME.pendingOrders
  );

  useEffect(() => {
    setValue(TRADING_TOOLS_FIELD_NAME.pendingOrders, dataSource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(fields);

  return (
    <Box>
      <TableContainer sx={{ borderRadius: 2, height: 270 }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center" width={"10%"}>
                Currency Pair
              </TableCell>
              <TableCell align="center">Created At</TableCell>
              <TableCell align="center" width={"10%"}>
                Buy/Sell
              </TableCell>
              <TableCell align="center" width={"17%"}>
                Confirmation Candle
              </TableCell>
              <TableCell align="center" width={"12%"}>
                Time Frame
              </TableCell>
              <TableCell align="center" width={"5%"}>
                Confidence
              </TableCell>
              <TableCell align="center" width={"10%"}>
                Mood
              </TableCell>
              <TableCell align="center" width={"10%"}>
                Mate Strategy?
              </TableCell>
              <TableCell align="center" width={"10%"}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingOrders.map(
              (
                {
                  currencyPair,
                  createdAt: { time, date },
                  marketOrder,
                  confirmationCandle,
                  timeFrame,
                  confidence,
                  mood,
                  didFollowThePlan,
                  actions,
                },
                key
              ) => (
                <StyledTableRow key={key}>
                  <TableCell align="center">
                    <FormInputTextField
                      name={PENDING_ORDER_TABLE_FIELD_NAME.currencyPair}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Box>
                      <Typography variant="body1">{time ?? "44"}</Typography>
                      <Typography variant="caption">{date ?? "44"}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <FormInputDropdown
                      name={PENDING_ORDER_TABLE_FIELD_NAME.marketOrder}
                      listOfValues={marketOrderLOV}
                    />
                  </TableCell>
                  <TableCell>
                    <FormInputDropdown
                      name={PENDING_ORDER_TABLE_FIELD_NAME.confirmationCandle}
                      listOfValues={confirmationCandleLOV}
                    />
                  </TableCell>
                  <TableCell>
                    <FormInputDropdown
                      name={PENDING_ORDER_TABLE_FIELD_NAME.timeFrame}
                      listOfValues={timeFrameLOV}
                    />
                  </TableCell>
                  <TableCell>
                    <FormInputDropdown
                      name={PENDING_ORDER_TABLE_FIELD_NAME.confidence}
                      listOfValues={confidenceLevelLOV}
                    />
                  </TableCell>
                  <TableCell>
                    <FormInputDropdown
                      name={PENDING_ORDER_TABLE_FIELD_NAME.mood}
                      listOfValues={moodLOV}
                    />
                  </TableCell>
                  <TableCell>
                    <FormInputDropdown
                      name={PENDING_ORDER_TABLE_FIELD_NAME.didFollowThePlan}
                      listOfValues={interrogativeLOV}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "center",
                      }}
                    >
                      <Button variant="contained" color="primary">
                        Add
                      </Button>
                      <Button variant="outlined">Cancel</Button>
                    </Box>
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
