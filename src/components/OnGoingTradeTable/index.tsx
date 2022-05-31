import React from "react";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useFieldArray, useFormContext } from "react-hook-form";
import { IOngoinTradesTable } from "./types";
import { TRADING_TOOLS_FIELD_NAME } from "constants/index";
import {
  FormInputDropdown,
  FormInputStandard,
  StyledTableRow,
} from "components";
import { resultLOV } from "components/PendingOrderTable/sampleData";
import { FormControl } from "components/FormControl";

export const OnGoingTradeTable = () => {
  const { watch, control } = useFormContext();

  const { remove } = useFieldArray({
    control,
    name: TRADING_TOOLS_FIELD_NAME.onGoingTrades,
  });
  const onGoingTrades: Array<IOngoinTradesTable> = watch(
    TRADING_TOOLS_FIELD_NAME.onGoingTrades
  );
  const submit = (index: number) => {
    console.log(onGoingTrades[index]);
  };

  const onResultsChange = (index: number) => {
    const rowValues = onGoingTrades[index];
    console.log(rowValues);
  };
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
              (
                {
                  currencyPair,
                  createdAt: { time, date },
                  marketOrder,
                  profit,
                  id,
                },
                index
              ) => (
                <StyledTableRow key={id}>
                  <TableCell align="center">
                    <Typography variant="body1">{currencyPair}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Box>
                      <Typography variant="body1">{time}</Typography>
                      <Typography variant="caption">{date}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{marketOrder}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <FormControl name={`onGoingTrades.${index}.result`}>
                      {({ onChange }) => (
                        <Select
                          size="small"
                          onChange={() => {
                            onChange();
                            onResultsChange(index);
                          }}
                          fullWidth
                          sx={{ backgroundColor: "white" }}
                        >
                          {resultLOV?.map((value: any) => {
                            const { id, referenceName, displayValue } = value;
                            return (
                              <MenuItem key={id} value={referenceName}>
                                {displayValue}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      )}
                    </FormControl>
                  </TableCell>
                  <TableCell align="center">
                    <FormInputStandard name={`onGoingTrades.${index}.profit`} />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        submit(index);
                        remove(index);
                      }}
                    >
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
