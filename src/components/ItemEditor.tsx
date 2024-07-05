import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Paper } from "@mui/material";
import { useEffect } from "react";
import FreeSoloSelect from "./MUI/FreeSoloSelect";

import TextField from "./MUI/TextField";

const ItemEditor = ({ id, onSave }) => {
  const formMethods = useForm();

  const item = useLiveQuery(
    async () => (id ? await db.items.get(id) : null),
    [id]
  );
  const categories = useLiveQuery(
    async () => await db.itemCategories.toArray()
  );

  const defaultValues = {
    name: "",
    rarity: "",
    categoryId: "",
    categoryName: "",
    minQuantity: "",
    maxQuantity: "",
  };
  useEffect(() => {
    if (id && item) {
      if (categories?.length) {
        item.categoryName = categories.find(
          (category) => category.id === item.categoryId
        )?.name;
      }

      formMethods.reset({ ...defaultValues, ...item });
    } else {
      formMethods.reset(defaultValues);
    }
  }, [id, categories, item, formMethods]);

  const handleSubmit = async (data) => {
    if (data.categoryName) {
      let categoryId = (
        await db.itemCategories.get({
          name: data.categoryName,
        })
      )?.id;

      if (!categoryId) {
        categoryId = await db.itemCategories.add({
          name: data.categoryName,
        });
      }

      data.categoryId = categoryId;

      delete data.categoryName;
    }

    console.log("put payload", { ...item, ...data });
    const newOrUpdatedId = await db.items.put({ ...item, ...data });
    onSave(newOrUpdatedId);
  };

  const handleDelete = async () => {
    await db.items.delete(id);
  };

  return (
    <Paper className="p-3">
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(handleSubmit)}
          className="flex flex-col gap-2"
        >
          <TextField label="Name" name="name" />

          <FreeSoloSelect
            name="categoryName"
            label="Category"
            options={categories?.map((option) => option.name)}
            getOptionLabel={(option) => option}
          />

          <div className="flex gap-2">
            <TextField
              fullWidth
              name="minQuantity"
              label="Min Quantity"
              type="number"
            />
            <TextField
              fullWidth
              name="maxQuantity"
              label="Max Quantity"
              type="number"
            />
            <TextField fullWidth label="Rarity" name="rarity" />
          </div>

          <div className="flex gap-2">
            <Button color="error" disabled={!id} onClick={handleDelete}>
              Delete
            </Button>
            <Button type="submit" className="flex-grow">
              Save
            </Button>
          </div>
        </form>
      </FormProvider>
    </Paper>
  );
};

export default ItemEditor;
