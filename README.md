# find-a-trip

This is a web app for searching the public transport timetables in Västra Götaland, Sweden, through [Västtrafik's API](https://developer.vasttrafik.se/portal/#/api/Reseplaneraren/v2/landerss).

It has an [Angular 2](https://angular.io/) frontend, which is probably a tad overkill for its purpose, and a small Node + Express backend for API authentication. I created it mostly because I wanted to try the new Angular out.

## Deployment

1. Install the npm packages for both backend and frontend.
2. Run the TypeScript compiler in `src/frontend` with `npm run tsc`.
3. Add a `vasttrafik.js` in `src/backend` exporting `key`, `secret`, `host` and `path`.
4. Start the server in `src/backend` with `node server.js`.
5. Go to `localhost:3000`.
