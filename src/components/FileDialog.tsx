import React, { useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  ButtonBase,
  Paper,
} from "@mui/material";
import CreaturesIcon from "@mui/icons-material/Groups3Rounded";
import LootIcon from "@mui/icons-material/CategoryRounded";
import BuildingsIcon from "@mui/icons-material/HomeWorkRounded";
import useLocalStorage from "../hooks/useLocalStorage"; // Assuming useLocalStorage is in the same directory

interface FileDialogProps {
  children?: React.ReactNode;
}

const FileButton = ({ text, icon, onClick, inputRef }) => {
  return (
    <ButtonBase onClick={() => inputRef.current.click()}>
      <Paper className="w-full md:w-auto md:h-full aspect-auto md:aspect-square flex items-center justify-center flex-col gap-1 p-2">
        {icon}
        <Typography>{text}</Typography>
      </Paper>
      <input
        type="file"
        accept=".json"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={onClick}
      />
    </ButtonBase>
  );
};

const FileDialog: React.FC<FileDialogProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [_loot, setLoot] = useLocalStorage("loot", "");
  const [_creatures, setCreatures] = useLocalStorage("creatures", "");
  const [_buildings, setBuildings] = useLocalStorage("buildings", "");

  const lootInputRef = useRef(null);
  const creaturesInputRef = useRef(null);
  const buildingsInputRef = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event, setLocalStorage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          setLocalStorage(JSON.stringify(data));
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  const renderChildren = () => {
    // If children are provided, clone them and add the onClick prop
    if (children) {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: handleClickOpen });
        }
        return child;
      });
    }
    // Default button if no children are provided
    return <Button onClick={handleClickOpen}>Open Dialog</Button>;
  };

  return (
    <>
      {renderChildren()}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Import files to generate from</DialogTitle>
        <DialogContent>
          <div className="pt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
            <FileButton
              text="loot.json"
              icon={<LootIcon fontSize="large" />}
              onClick={(e) => handleFileChange(e, setLoot)}
              inputRef={lootInputRef}
            />
            <FileButton
              text="creatures.json"
              icon={<CreaturesIcon fontSize="large" />}
              onClick={(e) => handleFileChange(e, setCreatures)}
              inputRef={creaturesInputRef}
            />
            <FileButton
              text="buildings.json"
              icon={<BuildingsIcon fontSize="large" />}
              onClick={(e) => handleFileChange(e, setBuildings)}
              inputRef={buildingsInputRef}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FileDialog;
