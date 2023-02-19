import React from "react";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import { Routings } from "../Routes/Routings";

const SidebarList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        {Routings.map((itm) => (
          <ListItem key={itm.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate(`${itm.path}`)}
              style={{ paddingLeft: "1rem" }}
            >
              <ListItemIcon>{itm.icon}</ListItemIcon>
              <ListItemText primary={itm.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SidebarList;
