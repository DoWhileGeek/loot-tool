import { useForm } from "react-hook-form";
import useLocalStorage from "../hooks/useLocalStorage";
import Select from "../components/MUI/Select";
import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  List,
  Paper,
} from "@mui/material";
import { useMemo, useState } from "react";
import generateBuilding from "../generation/generateBuilding";
import { Item } from "../types/types";

const Listy = ({ title, items = [] }) => {
  return (
    <Paper className="p-3">
      <Typography variant="h6">{title}</Typography>
      <List>
        {items.map((item) => (
          <ListItem disableGutters>
            {/* <ListItemIcon>
            <FolderIcon />
          </ListItemIcon> */}
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

const GenerateBuildingPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const formMethods = useForm();
  const [buildingString] = useLocalStorage("buildings");
  const buildings = JSON.parse(buildingString);

  const options = useMemo(() => {
    const options = [];
    let previousClassification = "";
    buildings.forEach((building) => {
      const classification = building.classification || "Uncategorized";

      // Add a divider before a new classification, but not for the first one
      // if (classification !== previousClassification && index !== 0) {
      //   options.push({ type: "divider" });
      // }

      // Add classification option if it's not already added
      if (classification !== previousClassification) {
        options.push({
          value: classification,
          label: classification,
          type: "option",
          className: "font-bold",
        });
        previousClassification = classification;
      }

      // Add building option
      options.push({
        value: building.name || building.archetype,
        label: building.archetype,
        type: "option",
        className: "indent-2",
      });
    });
    return options;
  }, [buildings]);

  const onSubmit = (data) => {
    const { building, loot, creatures } = generateBuilding(data.building);
    setItems(loot);
  };

  return (
    <div>
      <h1>Generate Building</h1>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Select
          name="building"
          label="Building"
          rules={{ required: "Building is required" }}
          control={formMethods.control}
          options={options}
        />
        <Button fullWidth variant="contained" type="submit" className="mb-3">
          Generate
        </Button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Listy
          title="Loot"
          items={items.map((a) => {
            return { text: a.name };
          })}
        />
        <Listy title="Creatures" />
      </div>
    </div>
  );
};

export default GenerateBuildingPage;
