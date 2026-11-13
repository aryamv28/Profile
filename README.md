# Arya M. V. – Portfolio

A static personal portfolio website for Arya M. V., mathematics teacher (MSc Mathematics, Sacred Heart College, Thevara).

## Files

- `index.html`: page markup
- `style.css`: styles (light and dark themes, responsive)
- `main.js`: awards data and category filter
- `arya.jpg`: portrait

## Run locally

No build step. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Edit content

- Text and sections: `index.html`
- Awards: the `A` array at the top of `main.js`
- Colours and fonts: the `:root` variables at the top of `style.css`

## Deploy

Push to GitHub and enable GitHub Pages (Settings → Pages → deploy from the `main` branch, root folder).
