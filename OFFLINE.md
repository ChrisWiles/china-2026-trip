# Phone app and offline guide

Open the published site in Safari (iPhone) or Chrome (Android) and use Add to Home Screen / Install app. Open the installed app online and wait for “Saved for offline” before disconnecting. The first download is about 70 MB and includes the guide, thumbnails, and full-size photos. External maps, reservations, and source links still require internet. Browser storage can be cleared or evicted; check the saved status before traveling.

After editing `index.html`, `offline.js`, the manifest, or photos/icons, run:

```sh
python3 scripts/build-offline.py
```

Commit the generated `sw.js` alongside the changes. Its content version makes an updated guide and its assets download together. The previous complete version remains available while an update downloads. Reopen online to install updates, then reopen again to view the latest version. Keep the service worker scoped to this repository so other GitHub Pages sites are unaffected.

Verification: serve the repository over localhost, open at 375px width, wait for the saved status, then disable the browser connection and reload. Check navigation and full-size photos. Home-screen installation still needs a physical-phone check.
