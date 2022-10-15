# CSS unit converter 🚀

This is a simple tool I created when I began working with figma design files. I noticed that all(I guess) of the measurements were given in `px` units and I figured that building a tool to make it easier for me to convert from `px` unit to `rem` unit will be helpful to me 😄
There might be a tool out there that does this same thing but I had a great time building it out. I got to understand better how Typescript works 😀

## Project Screenshot

This is a screenshot of how the CSS unit converter looks like on desktop screens
![project_screenshot](./public/images/project_screenshot.png)

## Features
- An input field to make customize the root font size
- validation using a simple regex pattern that makes sure the user enters a number
```js
/^\d$/
```
- A copy button so that the user can click to copy the converted value to the clipboard using the:
```js
   navigator.clipboard.writeText(convertedValue)
```
- Live preview of converted unit as you type

### What I might improve 🤔

- I'd work towards making this project more accessible 😄
- Making it look a little bit prettier

### helpful resoures

- I got the code of the beautiful header text from [this codepen](https://codepen.io/Arwym/pen/vJyPKo)
