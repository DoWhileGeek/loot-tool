# Loot JSON File Structure

The `loot.json` file contains a structured list of items categorized into various categories. Each category has an associated list of items. The file is organized as an array of objects, where each object represents a category.

## Fields

### category

- **Type**: `string`
- **Description**: The name of the category.
- **Required**: Yes

### items

- **Type**: `array`
- **Description**: Array of items associated with the category. Each item is an object with a `name` field.
- **Required**: Yes

## Item Object Structure

Each item object within the `items` array represents an individual item.

### name

- **Type**: `string`
- **Description**: The name of the item.
- **Required**: Yes

## Example

```json
[
  {
    "category": "Accessory",
    "items": [
      {
        "name": "Military Helmet"
      },
      {
        "name": "Open Balaclava"
      },
      {
        "name": "Balaclava"
      }
    ]
  },
  {
    "category": "Ammo",
    "items": [
      {
        "name": "9mm Round"
      },
      {
        "name": "M9 Magazine"
      },
      {
        "name": ".45 Auto Round"
      }
    ]
  },
  {
    "category": "Appearance",
    "items": [
      {
        "name": "Hairspray"
      },
      {
        "name": "Eyes Makeup"
      },
      {
        "name": "Foundation Makeup"
      }
    ]
  },
  {
    "category": "Bag",
    "items": [
      {
        "name": "Golf Bag"
      },
      {
        "name": "School Bag"
      },
      {
        "name": "Hiking Bag"
      }
    ]
  },
  {
    "category": "Clothing",
    "items": [
      {
        "name": "Wedding Jacket"
      },
      {
        "name": "Ghillie Suit Torso"
      },
      {
        "name": "Suit Jacket"
      }
    ]
  }
]
```
