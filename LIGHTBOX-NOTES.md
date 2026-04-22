# LIGHTBOX-NOTES

## 1) The DOM

Quoted DOM lookup lines from `js/lightbox.js`:

- Line 6: `const lb       = document.querySelector('.lightbox');`
- Line 7: `const lbImg    = lb.querySelector('.lightbox__img');`
- Line 8: `const lbCap    = lb.querySelector('.lightbox__caption');`
- Line 9: `const thumbs   = document.querySelectorAll('.gallery__thumb');`

Single-element lookups:
- `document.querySelector('.lightbox')` returns one element.
- `lb.querySelector('.lightbox__img')` returns one element.
- `lb.querySelector('.lightbox__caption')` returns one element.

Collection lookup:
- `document.querySelectorAll('.gallery__thumb')` returns a NodeList collection.

Why use `lb.querySelector(...)` for nested elements:
- It scopes the lookup to the lightbox container, so the code only finds image/caption elements inside that component.
- It avoids accidental collisions if the page later adds another element with the same class outside the lightbox.

## 2) Event Listeners

All `addEventListener` calls:

1. Lines 53-55
- Element: each thumbnail in `thumbs`
- Event: `click`
- Handler action: opens lightbox at the clicked thumbnail index with `openLightbox(i)`.

2. Lines 57-59
- Element: `lb` (the lightbox backdrop container)
- Event: `click`
- Handler action: closes lightbox only if the click target is the backdrop itself (`if (e.target === lb)`).

3. Lines 61-63
- Element: `document`
- Event: `keydown`
- Handler action: closes on Escape when the lightbox is open.

Event delegation:
- There is no classic delegation over many child targets from one parent listener (for thumbnails, listeners are attached one-by-one in the `forEach`).
- There is target filtering on the lightbox backdrop click (`e.target === lb`), which is a related pattern for click containment.

## 3) State and Render Pattern

State object and fields (lines 12-23):
- `isOpen`
- `index`
- `images`

Click flow when user clicks a thumbnail:
1. Line 54 runs `openLightbox(i)`.
2. In `openLightbox`:
- Line 27 sets `state.isOpen = true`.
- Line 28 sets `state.index = i`.
- Line 29 calls `render()`.
3. In `render()`:
- Lines 40-43 pull image data and update DOM (`src`, `alt`, caption text).
- Line 44 adds class `open` so CSS shows the overlay.
- Line 45 sets `aria-hidden` to `false`.

Mutators (update state then call render):
- `openLightbox(i)` at lines 26-30.
- `closeLightbox()` at lines 32-35.

Where `render()` is defined and called:
- Defined at lines 38-50.
- Called in `openLightbox` (line 29) and `closeLightbox` (line 34).

What breaks if state changes without render:
- The internal state would change, but the visible lightbox (image, caption, and open/closed class) would not update, causing state/DOM drift.

## 4) Security

Two XSS-safe DOM update lines in `render()`:
- Line 41: `lbImg.setAttribute('src', src);`
- Line 43: `lbCap.textContent = caption;`

If caption used `innerHTML` instead:
- A malicious caption could inject executable markup, such as `<script>` or event handlers in HTML.
- Attack class: XSS (Cross-Site Scripting).

## 5) Patterns

Patterns from lecture found in `js/lightbox.js`:

1. State + render pattern
- State object at lines 12-23.
- `render()` at lines 38-50.
- Mutators call render at lines 29 and 34.

2. Event listener pattern
- Thumbnail click listeners: lines 53-55.
- Backdrop click listener: lines 57-59.
- Escape key listener: lines 61-63.

3. Delegation pattern
- Not used for thumbnails (no single parent handling many thumbnail clicks).
- Limited target filtering appears in backdrop click handling at line 58.

4. Module scope pattern
- Top-level constants and state at lines 6-23 are private to this script file scope and reused by functions below.

5. Debounce/throttle pattern
- Not present in this starter implementation.
