import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import PollIcon from "@mui/icons-material/Poll";
import PieChartIcon from "@mui/icons-material/PieChart";
import PeopleIcon from "@mui/icons-material/People";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

const drawerWidth = 300;

interface SideMenuProps {
  component?: JSX.Element;
  children?: React.ReactNode;
}
export function SideMenu(props: SideMenuProps) {
  const { component, children } = props;
  return (
    <Box
      sx={{ display: "flex", backgroundColor: "#F3F7FF", minHeight: "100vh" }}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#060C29",
            color: "#898B96",
            p: 2,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Typography variant="h4" sx={{ color: "#3647AB", pl: 2 }}>
            BILLON
          </Typography>
        </Box>
        <Toolbar />
        <Divider />
        <Box
          sx={{
            gap: 1.5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            mx: 2,
            border: 1,
            borderColor: "#1C223C",
            background: "#1C223C",
            borderRadius: 4,
            p: 1.5,
          }}
        >
          <Box
            sx={{
              borderRadius: "50px",
              width: 50,
              height: 50,
              background: "white",
            }}
          />
          <Box>
            <Box>
              <Typography sx={{ color: "white", fontSize: 15 }}>
                Edberto Tosoy
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={12}>Live Account</Typography>
            </Box>
          </Box>
          <Box>
            <IconButton
              sx={{
                p: 0,
                "& svg": {
                  fill: "#3647AB",
                },
              }}
            >
              <MoreVertIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
        <List>
          <Typography sx={{ px: 2 }} variant="overline">
            Main
          </Typography>
          {[
            {
              title: "Dashboard",
              icon: <PieChartIcon />,
              link: "/",
            },
            {
              title: "Trading Tools",
              icon: <PollIcon />,
              link: "/tools",
            },
            {
              title: "Chat",
              icon: <ChatBubbleRoundedIcon />,
              link: "/",
            },
            {
              title: "Team",
              icon: <PeopleIcon sx={{ fill: "white" }} />,
              link: "/",
            },
          ].map((item, index) => {
            const { title, icon, link } = item;
            return (
              <Link to={link}>
                <ListItem button key={index}>
                  <ListItemIcon
                    sx={{
                      "& svg": {
                        fill: "white",
                      },
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            );
          })}
        </List>
        <Divider />
        <List>
          <Typography sx={{ px: 2 }} variant="overline">
            SHORTCUTS
          </Typography>
          {["Tasks", "Reports", "Settings"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon
                sx={{
                  "& svg": {
                    fill: "white",
                  },
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Grid sx={{ p: 2, width: "100%" }}>
        {component}
        {children}
      </Grid>
    </Box>
  );
}
