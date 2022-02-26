import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useFieldArray, useFormContext } from "react-hook-form";
import { IOngoinTradesTable } from "./types";
import { TRADING_TOOLS_FIELD_NAME } from "constants/index";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const dataSource = [
  { name: "yo", calories: "yo", fat: "yo", carb: "yo", id: "yo" },
  { name: "yo", calories: "yo", fat: "yo", carb: "yo", id: "yo" },
  { name: "yo", calories: "yo", fat: "yo", carb: "yo", id: "yo" },
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
              <TableCell align="center">Currency</TableCell>
              <TableCell align="center">Date / Time</TableCell>
              <TableCell align="center">Buy/Sell</TableCell>
              <TableCell align="center">Results</TableCell>
              <TableCell align="center">Equity</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {onGoingTrades.map(({ calories, carb, fat, id, name }) => (
              <StyledTableRow key={id}>
                <TableCell align="center">{id}</TableCell>
                <TableCell align="center">{calories}</TableCell>
                <TableCell align="center">{carb}</TableCell>
                <TableCell align="center">Drop Down, with close </TableCell>
                <TableCell align="center">{carb} input if close</TableCell>
                <TableCell align="center">Submit</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
