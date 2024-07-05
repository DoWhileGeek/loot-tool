import { Button, Typography } from "@mui/material";
import ObjectEditorList from "../components/ObjectEditorList";
import { useState } from "react";
import ItemEditor from "../components/ItemEditor";
import FileDialog from "../components/FileDialog";

const ItemEditorPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <Typography variant="h3" component="h1">
          Item Editor
        </Typography>
        <div className="flex gap-2 items-center">
          <FileDialog>
            <Button>Import</Button>
          </FileDialog>

          <Button variant="outlined">Export</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="col-span-1 flex flex-col gap-2">
          <ObjectEditorList selectedId={selectedId} onSelect={setSelectedId} />
        </div>
        <div className="col-span-2">
          <ItemEditor id={selectedId} onSave={setSelectedId} />
        </div>
      </div>
    </div>
  );
};

export default ItemEditorPage;
