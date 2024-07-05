import { FC } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { Item } from "../types/types";

// Step 1: Define an interface for the component props
interface PaperListProps {
  title: string;
  items: Item[]; // Assuming each item has a 'text' property
}

// Step 2: Use the interface with the component
const PaperList: FC<PaperListProps> = ({ title, items = [] }) => {
  return (
    <Paper className="p-3">
      <Typography variant="h6">{title}</Typography>
      <List>
        {items.map((item, index) => (
          // Step 3: Add a key to each ListItem for better performance and to avoid console warnings
          <ListItem key={index} disableGutters>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default PaperList;
