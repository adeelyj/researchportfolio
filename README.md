# Research Portfolio Website

This repository contains a static, four-page research portfolio inspired by the layout of a Google Scholar profile. The site is designed for Dr. Elena Vasquez, a fictional neurobiology researcher, and showcases publications, citation metrics, a narrative biography, and a downloadable CV preview.

## Project structure

```
.
├── index.html         # Publications overview with citation chart and metrics summary
├── metrics.html       # Extended citation metrics and funder mandate tables
├── about.html         # Biography, education, and research interests
├── cv.html            # CV embed and highlights with download button
├── styles.css         # Shared styling across all pages
├── scripts/
│   └── home-chart.js  # Chart.js configuration for citation bar chart
└── assets/
    ├── profile.svg        # Profile photo placeholder
    ├── linktree-qr.svg    # Stylized QR code linking to Linktree
    └── vasquez-cv.pdf     # Lightweight CV preview PDF
```

## Getting started

Open any of the HTML files directly in a modern web browser to explore the site. The `index.html` page serves as the landing page and links to the other sections via the persistent navigation menu. An active internet connection is required for loading the Chart.js library from its CDN on the home page.

## Customization tips

- Replace `assets/profile.svg` with a researcher photo of your choice (square images are automatically cropped into a circle).
- Update the publications and metrics tables in `index.html` and `metrics.html` with real data.
- Swap `assets/linktree-qr.svg` with a generated QR code pointing to your own Linktree or contact hub.
- Replace `assets/vasquez-cv.pdf` with a full CV to provide a richer embedded preview.
