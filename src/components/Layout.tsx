import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NavDrawer from "./NavDrawer";

const Layout: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            className="mr-1"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography
            variant="h6"
            className="flex-grow no-underline text-current"
            component={Link}
            to="/"
          >
            Loot Tool
          </Typography>
        </Toolbar>
      </AppBar>

      <NavDrawer
        open={isDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
      />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
