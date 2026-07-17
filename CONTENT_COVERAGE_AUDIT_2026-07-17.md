# China 2026 dossier — content coverage audit

Audited July 17, 2026 after the expandable-guide expansion.

## Coverage by destination

| Destination | Default-view attractions | Expanded attraction records | Default-view food records | Expanded food records | Total detail records |
|---|---:|---:|---:|---:|---:|
| Hong Kong | 4 | 4 | 4 | 4 | 16 |
| Shenzhen | 3 core stops | 4 | 0 | 2 | 6 expanded + core route |
| Chongqing | 4 | 4 | 4 | 4 | 16 |
| Shanghai | 5 | 4 | 4 | 4 | 17 |
| Taipei | 4 | 4 | 4 | 4 | 16 |
| **Total** | **20 + Shenzhen core** | **20** | **16** | **18** | **71 modal-capable records** |

The page also retains 12 hotel cards, 9 anchor restaurant cards, 5 flight cards, the 18-date itinerary, weather table, border explainer and booking checklist.

## Category coverage

- **Neighborhoods:** Central/Sheung Wan, Sham Shui Po, Huaqiangbei, Shancheng/Shibati, Former French Concession, old Taipei/Dihua.
- **Museums/history:** M+, Shenzhen urban-planning galleries, Three Gorges Museum, Shanghai Museum East, Propaganda Poster Art Centre, Jewish Refugees Museum, National Palace Museum, Chiang Kai-shek Memorial Hall.
- **Outdoors/viewpoints:** Peak/Lugard, Dragon’s Back, Sai Kung, Lianhua Hill, Ping An, Eling, Chongqing rivers, West Bund, Elephant Mountain, Beitou/Jiufen, Maokong.
- **Nightlife/evenings:** Yardbird, Ho Lee Fook, Hongya Cave exterior, Bund blue hour, Huashan, Raohe and Ningxia.
- **Shopping/design:** Sham Shui Po, Huaqiangbei, Dafen, Wukang/Anfu, M+, Songshan Cultural Park.
- **Rain plans:** M+, Huaqiangbei markets, Shenzhen Museum, Three Gorges Museum, both added Shanghai history museums, National Palace Museum, Songshan and Huashan.
- **Food:** destination-specific anchor dining, casual classics, breakfast, night markets, group meals and alternatives to repeating the same cuisine.
- **Skip guidance:** paid/repeated skyline decks, replica parks, generic malls, Hongya Cave interior, extreme queues and overstuffed day tours remain explicitly identified.

## Source coverage

- Every expanded detail record has a planning/official source, a map query and a traveler-review or comparable current review source.
- Direct TripAdvisor pages are used when a specific listing was found. Broader TripAdvisor category pages are used only for recommendations that deliberately describe a category rather than a single venue, such as a neighborhood hotpot room or xiaomian crawl.
- The 12 hotel cards receive direct TripAdvisor hotel pages in addition to their official and map links.
- The 9 anchor restaurant cards receive direct TripAdvisor or Trip.com traveler pages where a specific listing exists.
- Existing top recommendations now receive traveler-review actions inside their detail modals rather than only one shared link at the bottom of each city.
- The companion wiki pages mirror all material additions and retain the deeper research outside the presentation page.

## Information architecture

The first view still shows only the strongest four or five priorities and four food calls per city. A native `details`/`summary` control reveals the deeper catalog on demand, so the page does not become a continuous wall of cards. Expanded cards are tiered (`Strong` or `Optional`) and categorized before the title. Opening one card reveals the full decision layer:

- why it is distinctive;
- realistic time;
- best time of day;
- booking requirement;
- cost band;
- crowd warning;
- accessibility/physical demand;
- weather fallback;
- two local images;
- map, official/planning and traveler-review links.

Core city content and source links remain readable without JavaScript. JavaScript enhances the native expandable shells with the richer cards and modals.

## Known uncertainties retained intentionally

- Shenzhen VOA issuance and issuing-port hours remain changeable and must be reconfirmed directly; the day is optional.
- November flight schedules, hotel rates, restaurant reservations and timed-entry rules remain live-booking checks.
- Museum special exhibitions and temporary closures can change after this July audit.
- Some mainland neighborhood food recommendations are categories rather than durable single businesses because branches and listings change quickly; the guide tells travelers to confirm the current branch in Amap/Dianping.
- Weather-dependent items—hikes, observation decks, Jiufen, Maokong and skyline views—remain conditional rather than falsely guaranteed.

## Completion checks

- Hotel filters must show only matching cards and restore all cards.
- All five `See more` controls must reveal the expected card count.
- Every expanded card must open the detail modal and show facts, two images and external actions.
- Existing attraction and `Eat with intent` records must continue opening their modals.
- Modal and lightbox must close with Escape, return focus and lock background scrolling while open.
- Keyboard Tab must remain inside the open modal/lightbox.
- All controls must remain at least 44px and the body must not overflow horizontally at 375px.
- Every image used inline must reference `images/thumbs`; the modal lightbox may use `data-full` for the full image.
- External links must open safely in a new tab.
