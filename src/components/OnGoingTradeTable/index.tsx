import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useFormContext } from "react-hook-form";
import { IOngoinTradesTable } from "./types";

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
  const { watch, setValue } = useFormContext();

  // const { fields } = useFieldArray({
  //   control, // control props comes from useForm (optional: if you are using FormContext)
  //   name: "onGoingTrades", // unique name for your Field Array
  // });
  const onGoingTrades: Array<IOngoinTradesTable> = watch("onGoingTrades");

  useEffect(() => {
    setValue("onGoingTrades", dataSource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
