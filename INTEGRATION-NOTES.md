# INTEGRATION-NOTES

## 1) Where I put the lightbox trigger(s), and why

I kept the lightbox triggers directly on the existing gallery images in the main portfolio section. I added the starter selector class (`gallery__thumb`) to each existing image so the starter script can attach behavior without changing the overall page structure.

This placement makes sense because the gallery is already the core visual content of the page. Users expect image enlargement behavior there, so the feature feels native to the portfolio rather than bolted on.

## 2) What content I chose, and what it represents

I used my own artwork images already in the site `images/` folder (character art and fantasy illustration pieces). The content represents my illustration style and work identity, which aligns with the site bio (illustrator and professional Dungeon Master).

## 3) How I reconciled class names

I used a hybrid approach:
- Kept existing portfolio structure and classes (`gallery`, `photo`) to preserve my current layout and styling.
- Added starter class names where required by the Week 3 script (`gallery__thumb` on each image).
- Switched the overlay markup to starter-compatible classes (`lightbox`, `lightbox__img`, `lightbox__caption`) so `js/lightbox.js` works with minimal deviation.

I kept starter JavaScript file location and naming (`js/lightbox.js`) for assignment consistency and Task 2 analysis.

## 4) CSS conflicts and how I resolved them

Primary conflict risk: both my existing stylesheet and starter stylesheet define gallery/lightbox rules.

Resolutions:
- I removed starter `.gallery` layout block from `css/lightbox.css` so it does not override my established gallery grid.
- I kept lightweight thumbnail behavior in starter CSS (`.gallery__thumb` cursor + hover transform) because it complements existing design.
- I kept overlay rules in starter CSS and retained my site styling so the lightbox remains visually consistent with my dark theme.

Result:
- Existing portfolio layout remains intact.
- Starter lightbox behavior works on my own images.
- Integration is deliberate and visually consistent rather than a full page restyle.
