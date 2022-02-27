/* eslint-disable no-sparse-arrays */
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FormInputDropdown } from "components/FormComponents/Components/FormInputDropdown";
import { useFormContext, useFieldArray } from "react-hook-form";
import { IPendingOrderTable } from "./types";
import { TRADING_TOOLS_FIELD_NAME } from "constants/index";
import { FormInputTextField } from "components";
import {
  confidenceLevelLOV,
  confirmationCandleLOV,
  currencyLOV,
  interrogativeLOV,
  marketOrderLOV,
  moodLOV,
  timeFrameLOV,
} from "./sampleData";
import { IOngoinTradesTable } from "components/OnGoingTradeTable/types";
import { StyledTableRow } from "components/StyledTableRow";

export const PendingOrderTable = () => {
  const { control, watch, setValue } = useFormContext();

  const { remove } = useFieldArray({
    control,
    name: TRADING_TOOLS_FIELD_NAME.pendingOrders,
  });
  const pendingOrders: Array<IPendingOrderTable> = watch(
    TRADING_TOOLS_FIELD_NAME.pendingOrders
  );
  const onGoingTrades: Array<IOngoinTradesTable> = watch(
    TRADING_TOOLS_FIELD_NAME.onGoingTrades
  );

  const onAddOrder = (index: any) => {
    setValue(TRADING_TOOLS_FIELD_NAME.onGoingTrades, [
      ...onGoingTrades,
      {
        ...pendingOrders[index],
      },
    ]);
  };

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
            {pendingOrders.map(({ createdAt: { time, date } }, index) => (
              <StyledTableRow key={index}>
                <TableCell align="center">
                  <FormInputTextField
                    name={`pendingOrders.${index}.currencyPair`}
                    listOfValues={currencyLOV}
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
                    name={`pendingOrders.${index}.marketOrder`}
                    listOfValues={marketOrderLOV}
                  />
                </TableCell>
                <TableCell>
                  <FormInputDropdown
                    name={`pendingOrders.${index}.confirmationCandle`}
                    listOfValues={confirmationCandleLOV}
                  />
                </TableCell>
                <TableCell>
                  <FormInputDropdown
                    name={`pendingOrders.${index}.timeFrame`}
                    listOfValues={timeFrameLOV}
                  />
                </TableCell>
                <TableCell>
                  <FormInputDropdown
                    name={`pendingOrders.${index}.confidence`}
                    listOfValues={confidenceLevelLOV}
                  />
                </TableCell>
                <TableCell>
                  <FormInputDropdown
                    name={`pendingOrders.${index}.mood`}
                    listOfValues={moodLOV}
                  />
                </TableCell>
                <TableCell>
                  <FormInputDropdown
                    name={`pendingOrders.${index}.didFollowThePlan`}
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
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        onAddOrder(index);
                        remove(index);
                      }}
                    >
                      Add
                    </Button>
                    <Button variant="outlined" onClick={() => remove(index)}>
                      Cancel
                    </Button>
                  </Box>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
