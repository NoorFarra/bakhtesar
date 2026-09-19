Bikhtisar News Demo — Weather + Local Time + Arabic/English
============================================================

What was added
--------------
1) Local weather widget
   - Uses the browser Geolocation API to request the visitor's device location.
   - Uses Open-Meteo for current weather conditions.
   - Uses BigDataCloud reverse geocoding to display the city/country name.
   - No API key is required for this demo implementation.
   - The visitor can retry with the refresh icon if location access fails.

2) Local machine time
   - The live clock is based on the visitor's browser/device local timezone.
   - Updates every second.

3) Arabic / English switch
   - The EN / AR button changes the whole interface language.
   - Direction switches automatically between RTL and LTR.
   - News cards, ticker, search, article modal and interface labels are bilingual.
   - The selected language is remembered in localStorage.

Deployment note
---------------
Browser geolocation requires a secure context (HTTPS) in production.
Vercel deployments use HTTPS, so the location permission prompt should work there.
The visitor must allow location access for city-specific weather to appear.

Files
-----
index.html
styles.css
script.js
assets/
