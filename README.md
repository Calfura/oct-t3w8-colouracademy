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
    - hex colour of new theme
- Current CSS Theme
    - one theme list
    - localstorage
- List of CSS themes
    - array of theme list
    - localstorage


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