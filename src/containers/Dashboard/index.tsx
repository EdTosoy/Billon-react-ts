import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Summary } from "./../../components/Summary/index";

export function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>
      <Box>
        <Button variant="text" color="primary">
          Summary
        </Button>
        <Button variant="text" color="secondary">
          History
        </Button>
        <Button variant="text" color="secondary">
          All Data
        </Button>
      </Box>
      <Box>
        <Summary />
      </Box>
    </Container>
  );
}
