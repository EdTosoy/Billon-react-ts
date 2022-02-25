import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
interface INewsTableFormValues {
  green: string[];
  yellow: string[];
  red: string[];
}
export const NewsTable = () => {
  const { handleSubmit, watch } = useForm<INewsTableFormValues>({
    defaultValues: {
      green: ["USD", "JPY", "KKK"],
      yellow: ["USD", "JPY", "KKK"],
      red: ["USD", "JPY", "KKK"],
    },
  });
  const onSubmit = (data: any) => console.log(data);

  const [green, red, yellow] = watch(["green", "red", "yellow"]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
          paddingY: 1,
          borderBottom: "1px solid #F3F7FF",
        }}
      >
        <Typography sx={{ fontSize: 13 }}>economic news</Typography>
        <Button variant="text" sx={{ fontSize: 11 }}>
          Edit
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: 2,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="green">Green</Typography>
          <Box>
            <List dense>
              {green.map((text, index) => (
                <ListItem key={index} sx={{ textAlign: "center" }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="yellow">Yellow</Typography>
          <Box>
            <List dense>
              {yellow.map((text, index) => (
                <ListItem key={index} sx={{ textAlign: "center" }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="red">Red</Typography>
          <Box>
            <List dense>
              {red.map((text, index) => (
                <ListItem key={index} sx={{ textAlign: "center" }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};
