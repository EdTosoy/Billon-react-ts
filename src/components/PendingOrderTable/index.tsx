/* eslint-disable no-sparse-arrays */
import React, { useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
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
  planned: string;
  createdAt: string;
  confidence: string;
}
type FormValues = {
  pendingOrders: IOngoinTradesTable[];
};

const dataSource = [
  {
    name: "USD/JPY",
    calories: "BUY",
    fat: "Engulfing",
    carb: "W1, H4, H1",
    confidence: "2",
    id: "Calm",
    createdAt: "2/2 10:34Pm",
    planned: "YES",
  },
  {
    name: "USD/JPY",
    calories: "BUY",
    fat: "Engulfing",
    carb: "W1, H4, H1",
    confidence: "2",
    id: "Calm",
    createdAt: "2/2 10:34Pm",
    planned: "YES",
  },
  {
    name: "USD/JPY",
    calories: "BUY",
    fat: "Engulfing",
    carb: "W1, H4, H1",
    confidence: "2",
    id: "Calm",
    createdAt: "2/2 10:34Pm",
    planned: "YES",
  },
];

export const PendingOrderTable = () => {
  const { control, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      pendingOrders: [
        { name: "ed", calories: "3", carb: "", fat: "", id: "", planned: "" },
      ],
    },
  });

  const { fields } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "pendingOrders", // unique name for your Field Array
  });
  const pendingOrders: Array<IOngoinTradesTable> = watch("pendingOrders");

  useEffect(() => {
    setValue("pendingOrders", dataSource);
  }, []);
  console.log(fields);

  const onSubmit = (data: any) => console.log("data", data);

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
              ({
                calories,
                carb,
                fat,
                id,
                name,
                createdAt,
                confidence,
                planned,
              }) => (
                <StyledTableRow key={id}>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center">{createdAt}</TableCell>
                  <TableCell align="center">{calories}</TableCell>
                  <TableCell align="center">{fat}</TableCell>
                  <TableCell align="center">{carb}</TableCell>
                  <TableCell align="center">{confidence}</TableCell>
                  <TableCell align="center">{id}</TableCell>
                  <TableCell align="center">{planned}</TableCell>
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
