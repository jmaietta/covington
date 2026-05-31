# Covington Lumberjacks Schedule

Single-page HTML schedule for the Covington Lumberjacks 2026 season.

## Files

- `index.html` - Main schedule page with embedded CSS.
- `jacks_logo.jpg` - Team logo used in the header and favicon.
- `icon-180.png`, `icon-192.png`, `icon-512.png` - Square app icons used for phone home-screen installs.
- `lumberjacks-og.png`, `twitter-image.png` - Social sharing preview images.
- `schedule.ics` - Source calendar file used to confirm the schedule dates.
- `manifest.webmanifest` - Web app manifest for saving the site to a phone home screen.
- `sw.js` - Basic service worker for caching the page and logo.

## How To View

Open `index.html` directly in a browser.

No build step, package install, or local server is required.

## Mobile Home Screen

After deploying to Vercel, the site can be saved to a phone home screen.

- iPhone Safari: open the site, tap Share, then tap Add to Home Screen.
- Android Chrome: open the site, tap the menu, then tap Add to Home screen or Install app.

## Maintenance Notes

- Schedule rows are currently written directly in `index.html`.
- Field names link to Google Maps and open in a new tab.
- Home games are listed at Casey Field.
- The Tom Sox location links use the provided Google Maps URL: `https://maps.app.goo.gl/8VndqJhcndqdjHzE9`.
- If `schedule.ics` changes, update the visible schedule rows in `index.html` to match.

## Styling

The page uses the Covington Lumberjacks logo, navy/red/blue brand colors, and IBM Plex Sans from Google Fonts with local system font fallbacks.
