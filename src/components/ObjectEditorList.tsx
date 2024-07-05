import * as React from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { IconButton, Paper, TextField } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";

export default function ObjectEditorList({ selectedId, onSelect }) {
  const [term, setTerm] = React.useState("");
  const items =
    useLiveQuery(
      async () =>
        await db.items.where("name").startsWithIgnoreCase(term).toArray(),
      [term]
    ) ?? [];

  const handleSelect = (index) => {
    onSelect(items[index]?.id);
  };

  function renderRow(props: ListChildComponentProps) {
    const { index } = props;
    const item = items[index];

    return (
      <ListItem key={index} component="div" disablePadding>
        <ListItemButton
          onClick={() => handleSelect(index)}
          selected={item.id === selectedId}
        >
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <Paper
      className="p-3"
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
      }}
    >
      <div className="flex gap-1 items-center mb-2">
        <TextField
          label="Search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="flex-grow"
        />
        <IconButton onClick={() => onSelect(null)}>
          <AddCircleRoundedIcon fontSize="large" />
        </IconButton>
      </div>
      <FixedSizeList
        height={400}
        width={"100%"}
        itemSize={46}
        itemCount={items.length}
        overscanCount={5}
        itemData={items}
      >
        {renderRow}
      </FixedSizeList>
    </Paper>
  );
}
