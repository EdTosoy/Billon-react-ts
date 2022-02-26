import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemIcon, Typography } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { useForm } from "react-hook-form";
import { INews, INewsTableFormValues } from "./types";

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
  const { watch, setValue } = useForm<INewsTableFormValues>({
    defaultValues: {
      news: null,
    },
  });

  // FOREX FACTORY JSON
  // https://nfs.faireconomy.media/ff_calendar_thisweek.json

  const news = watch("news");

  useEffect(() => {
    setValue("news", newsData);
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
