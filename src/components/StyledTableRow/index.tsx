import styled from "@emotion/styled";
import { TableRow } from "@mui/material";

export const StyledTableRow = styled(TableRow)(({ theme }: any) => ({
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
    padding: 8,
    "> div ": { width: "100%", padding: 0 },
    " & .MuiSelect-select ": {
      padding: "8.5px 8px",
    },
  },
}));
