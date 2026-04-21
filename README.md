# CS 506 - Week 3 Portfolio Integration

This repository now includes the Week 3 starter merge and integrates the lightbox feature into an existing portfolio page.

## Workflow Used

```bash
git remote add course https://github.com/lhhunghimself/506-week3-2026.git
git fetch course
git checkout -b week-3
git merge course/main --allow-unrelated-histories
```

## Run Locally (EC2 or Local Machine)

```bash
npm install
npm run serve
```

Open `http://localhost:8080` or your EC2 public IP and matching port.

## Project Structure

```text
.
|- index.html
|- style.css
|- script.js
|- js/lightbox.js
|- css/lightbox.css
|- images/
|- LIGHTBOX-NOTES.md
`- INTEGRATION-NOTES.md
```

## Week 3 Deliverables

1. `LIGHTBOX-NOTES.md` answers the code-reading prompts from Task 2.
2. `INTEGRATION-NOTES.md` documents integration choices from Task 3.
3. `index.html`, `js/lightbox.js`, and `css/lightbox.css` provide the integrated lightbox behavior on personal images.

## Deploy to S3

Upload the updated site files to your existing bucket and preserve paths for `css/` and `js/` so references resolve correctly.
