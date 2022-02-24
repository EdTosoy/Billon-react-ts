import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import {
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Item = styled(Paper)(({ theme }: any) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 16,
  height: "100%",
}));
export const Summary = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={7} key={2}>
          <Item>
            <Box
              sx={{
                display: "flex",
                "& button": {
                  fontSize: 11,
                },
                justifyContent: "end",
                borderBottom: "1px solid #F3F7FF",
              }}
            >
              <Button variant="text" color="primary">
                over view
              </Button>
              <Button variant="text" color="secondary">
                over all
              </Button>
            </Box>
            <Box
              sx={{
                p: 4,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  display: "grid",
                  placeContent: "center",
                  boxShadow:
                    "0px 3px 1px -6px #F2F6FF,0px 2px 2px 1px #F2F6FF,0px 1px 5px 1px #F2F6FF",
                }}
              >
                <Typography variant="h3" color="primary">
                  92
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 4 }}>
                <List>
                  {Array.from(Array(3)).map((_, index) => (
                    <ListItem disablePadding>
                      <ListItemText primary="Inbox :" />
                      <Typography color="primary">1</Typography>
                    </ListItem>
                  ))}
                </List>

                <List>
                  {Array.from(Array(3)).map((_, index) => (
                    <ListItem disablePadding>
                      <ListItemText primary="Inbox :" />
                      <Typography color="primary">1</Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={5} key={2}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(4)).map((_, index) => (
              <Grid sx={{ height: 150 }} item xs={2} sm={4} md={6} key={2}>
                <Item>xs=2</Item>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
