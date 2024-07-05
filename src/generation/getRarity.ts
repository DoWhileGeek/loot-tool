function getRarity(
  localRarity: number | undefined,
  lootRarity: number | undefined,
  categoryRarity: number | undefined
): number {
  if (localRarity !== undefined) return localRarity;
  if (lootRarity !== undefined) return lootRarity;
  if (categoryRarity !== undefined) return categoryRarity;
  return 1.0; // Default rarity if none is provided
}

export default getRarity;
