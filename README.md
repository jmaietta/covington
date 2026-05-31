# Covington Lumberjacks Schedule

Single-page HTML schedule for the Covington Lumberjacks 2026 season.

## Files

- `index.html` - Main schedule page with embedded CSS.
- `jacks_logo.jpg` - Team logo used in the header and favicon.
- `schedule.ics` - Source calendar file used to confirm the schedule dates.

## How To View

Open `index.html` directly in a browser.

No build step, package install, or local server is required.

## Maintenance Notes

- Schedule rows are currently written directly in `index.html`.
- Field names link to Google Maps and open in a new tab.
- Home games are listed at Casey Field.
- The Tom Sox location links use the provided Google Maps URL: `https://maps.app.goo.gl/8VndqJhcndqdjHzE9`.
- If `schedule.ics` changes, update the visible schedule rows in `index.html` to match.

## Styling

The page uses the Covington Lumberjacks logo, navy/red/blue brand colors, and IBM Plex Sans from Google Fonts with local system font fallbacks.
