import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemIcon, Typography } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { useFormContext } from "react-hook-form";
import { INews } from "./types";
import { TRADING_TOOLS_FIELD_NAME } from "constants/index";

const newsData: Array<INews> = [
  { currency: "USD", type: "success" },
  { currency: "USD", type: "success" },
  { currency: "USD", type: "success" },
  { currency: "USD", type: "success" },
  { currency: "USD", type: "warning" },
  { currency: "USD", type: "warning" },
  { currency: "USD", type: "warning" },
  { currency: "USD", type: "error" },
  { currency: "USD", type: "error" },
  { currency: "USD", type: "disabled" },
];
export const NewsTable = () => {
  const { watch, setValue } = useFormContext();

  // FOREX FACTORY JSON
  // https://nfs.faireconomy.media/ff_calendar_thisweek.json

  const news: Array<INews> = watch(TRADING_TOOLS_FIELD_NAME.news);

  useEffect(() => {
    setValue(TRADING_TOOLS_FIELD_NAME.news, newsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: "grid", placeContent: "center" }}>
      <List
        dense
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {news?.map(({ currency, type }, index) => (
          <ListItem sx={{ width: "auto" }} key={index}>
            <ListItemIcon sx={{ gap: 1 }}>
              <FolderIcon color={type} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {currency}
              </Typography>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
