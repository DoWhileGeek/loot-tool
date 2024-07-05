import Drawer from "@mui/material/Drawer";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FileDialog from "./FileDialog";

interface NavDrawerProps {
  open: boolean;
  closeDrawer: () => void;
}

const navOptions = [{ text: "Home", icon: <HomeRoundedIcon />, path: "/" }];

const NavDrawer: React.FC<NavDrawerProps> = ({ open, closeDrawer }) => {
  const DrawerList = (
    <div className="w-32" role="presentation" onClick={closeDrawer}>
      <List>
        {navOptions.map((option) => (
          <ListItem key={option.text} disablePadding>
            <ListItemButton component={Link} to={option.path}>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <FileDialog>
            <ListItemButton>
              <ListItemIcon>{<DriveFolderUploadRoundedIcon />}</ListItemIcon>
              <ListItemText primary="files" />
            </ListItemButton>
          </FileDialog>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Drawer open={open} anchor="left" onClose={closeDrawer} keepMounted>
      {DrawerList}
    </Drawer>
  );
};

export default NavDrawer;
