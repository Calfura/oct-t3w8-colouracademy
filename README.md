# ColourAcademy - CSS Variable Generator Website

## Routes

- "/" : homepage
    - CSS generator available here
- "/generator" - CSS generator page
    - CSS generator available here
- "/generator/saved" - view list of saved themes
    - read localstorage


## Contexts

- Base Colour
    - Hex colour of new theme
- Localstorage manager for list of CSS themes
    - Array of Theme Lists
- Localstorage manager for current CSS theme
    - One Theme List
- List of CSS themes
    - Array of Theme Lists
- Current CSS theme
    - One Theme List

## Data

### Colour Object

```js
{
    hex: "#000000",
    strength: 100,
    rgba: [255, 255, 255, 255]
}
```

### Themes List

```js
{
    name: "violet eggplant"
    colours: [
        Colour Objects go here
    ]
}
```