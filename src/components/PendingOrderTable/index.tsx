/* eslint-disable no-sparse-arrays */
import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const dataSource: IPendingOrderTable[] = [
  {
    currencyPair: "USD/JPY",
    createdAt: "dd/mm/yy hh:mm",
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
    createdAt: "dd/mm/yy hh:mm",
    marketOrder: "Buy limit",
    confirmationCandle: "engulfing",
    timeFrame: "h4, h1, m30",
    confidence: "5",
    didFollowThePlan: true,
    mood: "Calm",
    actions: "string",
  },
  {
    currencyPair: "USD/JPY",
    createdAt: "dd/mm/yy hh:mm",
    marketOrder: "Buy limit",
    confirmationCandle: "engulfing",
    timeFrame: "h4, h1, m30",
    confidence: "5",
    didFollowThePlan: true,
    mood: "Calm",
    actions: "string",
  },
];

export const PendingOrderTable = () => {
  const { control, watch, setValue } = useFormContext();

  const { fields } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "pendingOrders", // unique name for your Field Array
  });
  const pendingOrders: Array<IPendingOrderTable> = watch("pendingOrders");

  useEffect(() => {
    setValue("pendingOrders", dataSource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(fields);

  return (
    <Box>
      <TableContainer sx={{ borderRadius: 2, height: 270 }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Currency</TableCell>
              <TableCell align="center">Date / Time</TableCell>
              <TableCell align="center">Buy/Sell</TableCell>
              <TableCell align="center">Confirmation Candle</TableCell>
              <TableCell align="center">Time Frame</TableCell>
              <TableCell align="center">Confidence</TableCell>
              <TableCell align="center">Mood</TableCell>
              <TableCell align="center">Did you follow your plan?</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingOrders.map(
              (
                {
                  currencyPair,
                  createdAt,
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
                  <TableCell align="center">{currencyPair}</TableCell>
                  <TableCell align="center">{createdAt}</TableCell>
                  <TableCell align="center">
                    <FormInputDropdown
                      name="marketOrder"
                      label="Market Order"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <FormInputDropdown
                      name="confirmationCandle"
                      label="Confirmation Candle"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <FormInputDropdown name="timeFrame" label="Time Frame" />
                  </TableCell>
                  <TableCell align="center">
                    <FormInputDropdown name="confidence" label="Confidence" />
                  </TableCell>
                  <TableCell align="center">
                    <FormInputDropdown name="mood" label="Mood" />
                  </TableCell>
                  <TableCell align="center">
                    <FormInputDropdown name="didFollowThePlan" label="YES" />
                  </TableCell>
                  <TableCell align="center">
                    <Button>Add</Button>
                    <Button>Cancel</Button>
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
