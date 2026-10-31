# XC Seat Occupancy PWA

## Files
- `index.html` — app interface
- `manifest.webmanifest` — install metadata
- `sw.js` — offline app-shell and runtime caching
- `icon.svg` — app icon

## Run locally
Serve this folder from `https://` or `http://localhost` to enable service-worker installation. Opening `index.html` directly with `file://` will show the app but will not enable PWA installation/offline caching.

## GitHub Pages
Upload the contents of this folder to the root of a GitHub Pages repository (or publish the folder as the site root). All asset paths are relative, so the app also works when hosted under a repository subpath.

## Data handling
Pasted reservation text, processed reservation rows, selected journey and selected coach are stored in browser localStorage. Updating the service worker cache does not clear this data. Data is stored on the device/browser and is not synced between devices.

## Important prototype limitation
The reservation parser is adapted to the copied CrossCountry-style table format, but the seat-plan geometry and full route-leg overlap logic still need validation against the official seating plan and actual station sequence before operational use.
