# Building Object Structure

A building object represents a specific type of building within a given classification. It includes optional details such as the building's name and rarity, as well as an array of items associated with the building.

## Fields

### classification

- **Type**: `string`
- **Description**: Broad category of the building (e.g., residential, commercial, public service, industrial, recreational, utility).
- **Required**: Yes

### archetype

- **Type**: `string`
- **Description**: Specific type of building within the classification (e.g., apartment, hospital, grocery store).
- **Required**: Yes

### rarity

- **Type**: `number` (float)
- **Description**: Rarity of the building, represented as a float value between 0 and 1. This is only used when generating towns.
- **Required**: No

### items

- **Type**: `array`
- **Description**: Array of items associated with the building. Each item can specify a category or a specific item, along with an optional rarity.
- **Required**: Yes

## Item Object Structure

Each item object within the `items` array can either represent a category of items or a specific item.

### category

- **Type**: `string`
- **Description**: Category of items (e.g., Food, Weapon, Electronics).
- **Required**: No (Required if `item` is not specified)

### item

- **Type**: `string`
- **Description**: Specific item name.
- **Required**: No (Required if `category` is not specified)

### rarity

- **Type**: `number` (float)
- **Description**: Rarity of the category or item, represented as a float value between 0 and 1.
- **Required**: No

## Example

```json
{
  "classification": "commercial",
  "archetype": "hospital",
  "rarity": 0.8,
  "items": [
    {
      "category": "FirstAid",
      "rarity": 0.9
    },
    {
      "category": "Electronics",
      "rarity": 0.7
    },
    {
      "item": "Scalpel",
      "rarity": 0.5
    },
    {
      "item": "Medical Mask",
      "rarity": 0.8
    }
  ]
}
```
