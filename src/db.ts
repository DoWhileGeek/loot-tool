// db.ts
import Dexie, { type EntityTable } from "dexie";

interface Item {
  id: number;
  name: string;
  category: string;
  rarity: number;
  minQuantity: number;
  maxQuantity: number;
}

interface ItemCategory {
  id: number;
  name: string;
}

const db = new Dexie("LootDB") as Dexie & {
  items: EntityTable<
    Item,
    "id" // primary key "id" (for the typings only)
  >;
  itemCategories: EntityTable<
    ItemCategory,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  items: "++id, &name, categoryId, rarity, minQuantity, maxQuantity",
  itemCategories: "++id, &name",
});

export type { Item };
export { db };
