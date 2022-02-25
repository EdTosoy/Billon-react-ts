import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Button,
  ButtonBase,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { useForm } from "react-hook-form";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
interface INewsTableFormValues {
  news: INews[] | null;
}
interface INews {
  currency: string;
  type:
    | "inherit"
    | "action"
    | "disabled"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}

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
