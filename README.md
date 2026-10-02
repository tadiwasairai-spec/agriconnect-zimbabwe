# AgriConnect ZW – HGISEO400 prototype
Mobile-first, offline-capable (PWA) agri information and GIS decision-support tool for young farmers.

**Features:** interactive Leaflet map; 4 spatial analyses (crop suitability by Natural Region, proximity to water, market accessibility, agri-service accessibility); 7-day weather (Open-Meteo, cached offline); markets; expert contacts (call/WhatsApp/SMS); finance; best-practice content; offline farm records with CSV export.

**Offline design:** service worker caches the app shell + Leaflet + viewed map tiles; weather and records stored in localStorage; no backend needed; small payload (<30 KB own code).

## Deploy
1. `git init && git add . && git commit -m "init" && git branch -M main`
2. Create a GitHub repo, then `git remote add origin <url> && git push -u origin main`
3. Render → New → Static Site → connect repo → Build command: blank (or `echo ok`) → Publish directory: `.` → Create.

## Data (sample – replace with real)
Markets, dams/rivers, AGRITEX offices and Natural Region points are illustrative in `index.html`. Suggested real sources: Zimbabwe Natural Regions (AGRITEX/FAO), HDX / OpenStreetMap (waterways, markets), Open-Meteo (weather), WorldPop/ESA WorldCover.

## Datasets (in /data)
`markets/water/services.json` – OpenStreetMap via Overpass Turbo (veterinary excluded: crops-only scope; 6 approximate AGRITEX centres added). `crops.json` – 25 crops with rainfall, temperature and Natural Region requirements (editable; verify against AGRITEX crop guides). Climate: Open-Meteo archive (3-yr average).
