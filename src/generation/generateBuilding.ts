import { Building, Creature, Item, LootCategory } from "../types/types";
import generateLoot from "./generateLoot";
import generateCreatures from "./generateCreatures";

const findBuilding = (
  buildings: Building[],
  buildingName: string
): Building => {
  let building = buildings.find((b) => b.archetype === buildingName) ?? null;
  if (!building) {
    const classifiedBuildings = buildings.filter(
      (b) => b.classification === buildingName
    );
    if (classifiedBuildings.length > 0) {
      // If there are multiple buildings of the same classification, pick one at random.
      const randomIndex = Math.floor(
        Math.random() * classifiedBuildings.length
      );
      building = classifiedBuildings[randomIndex];
    }
  }
  return building;
};

// Now, you can proceed with the rest of the generateBuilding function using the found `building`
const generateBuilding = (
  buildingName: string // can be a string of a classification or an archetype
): { loot: Item[]; creatures: Creature[]; building: Building } => {
  const lootTable = JSON.parse(localStorage.getItem("loot") ?? "");
  const buildings = JSON.parse(localStorage.getItem("buildings") ?? "");
  const building = findBuilding(buildings, buildingName);
  console.log(building);

  const generatedLoot = generateLoot(building, lootTable);
  const generatedCreatures = generateCreatures(building);

  return {
    loot: generatedLoot,
    creatures: generatedCreatures,
    building: building,
  };
};

export default generateBuilding;
