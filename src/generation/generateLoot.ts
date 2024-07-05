import { Building, LootCategory, Item } from "../types/types";
import getRarity from "./getRarity";

const generateLoot = (
  building: Building,
  lootTable: LootCategory[]
): Item[] => {
  const items: Item[] = [];

  building.items.forEach((buildingItem) => {
    if (buildingItem.category) {
      const category = lootTable.find(
        (lootCategory) => lootCategory.category === buildingItem.category
      );
      if (category) {
        const categoryRarity =
          category.items.length > 0 ? 1.0 / category.items.length : 1.0; // Example category rarity
        const rarity = getRarity(
          buildingItem.rarity,
          undefined,
          categoryRarity
        );

        if (Math.random() <= rarity) {
          const randomItem =
            category.items[Math.floor(Math.random() * category.items.length)];
          items.push(randomItem);
        }
      }
    } else if (buildingItem.item) {
      const lootItem = lootTable
        .flatMap((lootCategory) => lootCategory.items)
        .find((item) => item.name === buildingItem.item);
      const lootRarity = lootItem ? 1.0 : undefined; // Example loot item rarity
      const rarity = getRarity(buildingItem.rarity, lootRarity, undefined);

      if (Math.random() <= rarity) {
        items.push({ name: buildingItem.item });
      }
    }
  });

  return items;
};

export default generateLoot;
