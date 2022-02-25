import React, { useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface IOngoinTradesTable {
  name: string;
  calories: string;
  fat: string;
  carb: string;
  id: string;
}
type FormValues = {
  onGoingTrades: IOngoinTradesTable[];
};

const dataSource = [
  { name: "yo", calories: "yo", fat: "yo", carb: "yo", id: "yo" },
  { name: "yo", calories: "yo", fat: "yo", carb: "yo", id: "yo" },
  { name: "yo", calories: "yo", fat: "yo", carb: "yo", id: "yo" },
];

export const OnGoingTradeTable = () => {
  const { control, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      onGoingTrades: [{ name: "ed", calories: "3", carb: "", fat: "", id: "" }],
    },
  });

  const { fields } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "onGoingTrades", // unique name for your Field Array
  });
  const onGoingTrades: Array<IOngoinTradesTable> = watch("onGoingTrades");

  useEffect(() => {
    setValue("onGoingTrades", dataSource);
  }, []);
  console.log(fields);

  const onSubmit = (data: any) => console.log("data", data);

  return (
    <Box>
      <TableContainer sx={{ borderRadius: 2, height: 240 }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {onGoingTrades.map(({ calories, carb, fat, id, name }) => (
              <StyledTableRow key={id}>
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell align="right">{calories}</TableCell>
                <TableCell align="right">{carb}</TableCell>
                <TableCell align="right">{fat}</TableCell>
                <TableCell align="right">{name}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
