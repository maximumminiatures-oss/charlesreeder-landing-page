# CS 506 - Week 3 Portfolio Integration

This repo ingests the Week 3 starter and integrates the lightbox feature into an existing portfolio page that uses personal artwork images.

## What's Here

```text
506_personal_page/
├── index.html                 # Portfolio page with integrated gallery and lightbox markup
├── style.css                  # Existing site theme and responsive layout
├── script.js                  # Legacy lightbox script from earlier iteration (not used by Week 3 path)
├── js/
│   └── lightbox.js            # Week 3 starter-based lightbox logic (adapted to personal gallery)
├── css/
│   └── lightbox.css           # Week 3 overlay styling, adjusted to avoid layout conflicts
├── images/                    # Personal images (plus starter sample svgs retained from merge)
├── package.json               # Includes serve script
├── package-lock.json
├── LIGHTBOX-NOTES.md          # Task 2 deliverable
└── INTEGRATION-NOTES.md       # Task 3 deliverable
```

## Starter Ingest Workflow Used

```bash
git remote add course https://github.com/lhhunghimself/506-week3-2026.git
git fetch course
git checkout -b week-3
git merge course/main --allow-unrelated-histories
```

## Run The Demo

```bash
npm install
npm run serve
```

Then open http://localhost:8080 (or on EC2, open the same port in your security group and browse to http://YOUR-EC2-IP:PORT).

## Instructor README Checklist Status

1. Ingest starter with upstream merge pattern: Completed.
2. Keep starter lightbox file path and read/analyze it for Task 2: Completed via js/lightbox.js and LIGHTBOX-NOTES.md.
3. Integrate lightbox into own landing page using own images: Completed (gallery uses personal images in images/).
4. Keep css and js folder structure for deployment: Completed (css/lightbox.css and js/lightbox.js).
5. Add notes deliverables for grading: Completed (LIGHTBOX-NOTES.md and INTEGRATION-NOTES.md).
6. Merge to default branch and tag v0.1.0: Pending final release step.

## Notes On Images

- Instructor sample images are not required for grading content and can be ignored.
- Personal images are the images used by the integrated gallery.

## Deploy To S3

Upload/update the following while preserving folder structure:

- index.html
- style.css
- css/lightbox.css
- js/lightbox.js
- images/

If folder structure is flattened in S3, relative paths will fail and the lightbox assets may 404.
