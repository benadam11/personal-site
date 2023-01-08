---
layout: ../../layouts/Post.astro
title: >
  The "best" way to manage icons in React.js
image: og_image_svg_sprites.jpg
description: >
  How to remove icons from JavaScript bundles without losing the flexibility of inline SVG
published: 1/29/2022
---

## Icon Rendering Techniques 

If you have been building user interfaces for any amount of time, you know that icons are, well, they are everywhere. I have spent the last 7 years building UIs with React.js and I have tried a number of different techniques for managing icons. Each technique has different tradeoffs. The main techniques I have used are:

1. Image + SVG 
```html
<img src='icon.svg'>
```
2. Inline SVG
```js
const icon = (
  <svg viewBox="0 0 24 24" width={16} height={16}>
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
  </svg>
)
```
3. Inline SVG using SVG Sprites
```js
const icon = (
  <svg viewBox="0 0 24 24" width={16} height={16}>
    <use href="sprite.svg#icon" />
  </svg>
)
```

TLDR - [Inline SVGs using sprites](#rendering-icons-using-svg-sprites) gives you the best performance to experience tradeoff. 

## Tradeoffs

The big tradeoffs we are evaluating are performance vs. user experience. Before you hit me with a "well
ackchyually, performance is a part of user experience", I know (
I agree), let's keep moving.

### Technique 1: Image + SVG 

When using the first approach I mentioned, an image tag referencing an image asset (png, svg, etc.), the first time the page is downloaded there is a flicker before the icons render. This happens because of a request waterfall. First the Browser downloads the HTML document. It then makes the subsequent requests to fetch all the assets for the page (images, scripts, stylesheets, etc). The benefit of referencing an external asset is caching. The browser (or CDN) can cache the asset and reference it on subsequent requests. The technique is optimized for subsequent requests, but the initial loading experience is less than desireable. The other downside of this technique is that we can't style the svg using CSS when it is referenced in an image tag 😢. 

### Technique 2: Inline SVG

The second technique, which is often used to combat the issues I just mentioned is inlining the svg into the HTML document. When the Browser downloads the HTML document, it doesn't need to make a secondary request for the image asset, it is there immediately (no flicker). The other benefit is that the content is now able to be accessed and styled with CSS (win + win). But this approach is not without its pitfalls. Inlining the SVG into your HTML document makes your document significantly larger, and adds elements to the page (which slows down memory performance). The good folks at Google wrote a [nice article on the topic](https://web.dev/dom-size/).

The second pitfall, is that the SVG bloats your JavaScript bundle size. The browser has to download, parse, and evaluate the JavaScript on the page before anything renders. Including SVG in your bundle makes you pay this cost twice. You have a larger bundle to download and parse (path data can be large for some icons especially if they are more intricate), and then the rendered HTML adds lots of additional elements to the page (slowing down DOM traversal). The vast majority of React applications use this second technique (I have been a big proponent of it in the past), but after battling with `react-icons` bloating the bundle size of a relatively simple page, I knew there had to be a better way.

**Note:** There are ways to treeshake unused icons out of the bundle, but if you aren't careful `react-icons` used out of the box will give you a 5mb bundle of JavaScript 😱.

## Rendering Icons using SVG Sprites

Well if you made this far, congratulations, you are about to have your life changed. There is a third option: **SVG Sprites**, which rememedy the majority of the issues I have mentioned with the two approaches.

You might not be old enough to remember image sprites (you probably aren't let's be honest), but essentially you would put all your image assets into a single image and then reference the specific image using coordinates (for where the icon was laid out on the sprite). This was a performance technique used to avoid lots of image requests (an issue which HTTP 2 has largely solved now). This technique is similar, but different.

### The Symbol Element

Let me introduce you to the `<symbol>` element. The [symbol element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol) "is used to define graphical template objects which can be instantiated by a `<use>` element." - MDN. When combined with [the `<defs>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs), we can construct a svg sprite with our icons. 

First, we create a file sprite.svg, and add an `<svg>` element that wraps a `defs` element and a `<symbol>`. Next, we take the icon (that we would have inlined), swap the svg for a symbol element, and give it an id. The id is important! Finally, we'll add a second icon to the sprite by adding it as a symbol.

Example:

<br />

```html
<!-- sprite.svg -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <symbol viewBox="0 0 24 24" id="icon-1">
      <path d="M6.84 5.76L8.4 7.68H5.28l-.72 2.88H2.64l.72-2.88H1.44L0 13.44h3.84l-.48 1.92h3.36L4.2 18.24h2.82l2.34-2.88h5.28l2.34 2.88h2.82l-2.52-2.88h3.36l-.48-1.92H24l-1.44-5.76h-1.92l.72 2.88h-1.92l-.72-2.88H15.6l1.56-1.92h-2.04l-1.68 1.92h-2.88L8.88 5.76zm.24 3.84H9v1.92H7.08zm7.925 0h1.92v1.92h-1.92Z" />
    </symbol>
    <symbol viewBox="0 0 24 24" id="icon-2">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </symbol>
  </defs>
</svg>
```

You can keep defining all your icons as symbols in this file (although be conscious of the file size aka keep it under 125kb). Next, we will create a React component that will reference our sprite. 

<br />

```js
import React from "react";
import ReactDOM from "react-dom";

// keep a list of the icon ids we put in the symbol
const icons = ["icon-1", "icon-2"];

// then define an Icon component that references the 
function Icon({ id, ...props }) {
  return (
    <svg {...props}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}

// In your App, you can now render the icons
function App() {
  return (
    <div className="App">
      {icons.map((id) => {
        return <Icon key={id} id={id} />;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### The Use Element

In the example above, the magic happens in the `<use>` element which links to the "Fragment Identifier" (aka the id that we defined on the symbol). Now, we have an icon component that lets us do all the things we could do with inline SVGs (like defining the height, width, and color of the icon), but all of the path data lives in an external asset (and not in the JavaScript bundle). 

## Bonus Tip

You can `preload` the sprite.svg file (and then cache it) to improve performance. "By preloading a certain resource, you are telling the browser that you would like to fetch it sooner than the browser would otherwise discover it because you are certain that it is important for the current page." - [web.dev](https://web.dev/preload-critical-assets/).

To preload the sprite, you add a link tag to the head of the document. 

<br></br>

```html
<head>
  <link rel="preload" as="image/svg+xml" href="sprite.svg">
</head>
```
Depending on your server's configuration, you might need to make sure the proper cache-headers are set on your sprite.svg so the browser can cache it appropriately. 

That's it! Hope this was helpful. 
