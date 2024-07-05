// Define the Item type
export type Item = {
  name: string;
  description?: string;
};

export type LootCategory = {
  category: string;
  items: Item[];
};

// Define the ItemEntry type for the RNG entry in the Building items field
export type ItemEntry = {
  category?: string; // Category of items, optional if item is specified
  item?: string; // Specific item name, optional if category is specified
  rarity?: number; // Rarity of the category or item, represented as a float value between 0 and 1
};

// Define the Building type
export type Building = {
  classification: string; // Broad category of the building
  archetype: string; // Specific type of building within the classification
  rarity?: number; // Rarity of the building, optional
  items: ItemEntry[]; // Array of item entries associated with the building
};

export type Creature = {
  name: string;
  description?: string;
};
