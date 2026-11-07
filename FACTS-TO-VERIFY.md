# Facts to verify before launch

Everything below appears on the site or in config and must be checked by a person against the source named, then re-dated. "Checked" is the date the figure was last looked at by the build author (2026-11-02). Items marked **PLACEHOLDER** are not facts yet.

## Placeholders (founders / counsel)

| Item | Where | Current value | Action |
|---|---|---|---|
| Business address | `src/config/site.mjs` → `address` (`placeholder: true`) | Marunouchi Nijubashi Building, 3-2-3 Marunouchi, Chiyoda-ku, Tokyo 100-0005 (the address Komorebi publishes) | Founders to confirm the publishing desk's coworking address |
| Corrections / removal URL | `site.correctionsUrl` | `https://tourground.com/contact?topic=correction-or-removal&site=thejapantraveller` — **returns 404 today** | Replace with the real main-site contact flow |
| Publisher legal entity | `site.publisher.legalName` | "Tourground" | Confirm registered entity name |
| Governing law in Terms | `legal.governingLaw` | "the laws of England and Wales" | Counsel to confirm |
| Privacy, Terms, Cookie Policy, disclosure wording | `src/config/site.mjs`, `src/pages/privacy.astro`, `terms.astro`, `cookies.astro` | Drafted | US, UK, EU and Brazil sign-off |
| Email retention (24 months) | Privacy Policy §2.3 | 24 months | Confirm internal policy |
| Komorebi profile URL | feed mock | `https://komorebi.tourground.com` | Confirm the canonical Tourground profile URL |
| Komorebi rank `JP: 1` | feed mock | Mock value | Replace with directory rank from the real export |

## Entry rules (`/guide/entry-basics`, home page)

| Fact | Source | Checked |
|---|---|---|
| Visa exemption with 74 countries/regions (MOFA page dated 1 Sep 2025) | https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html | 2026-11-02 |
| 90 days for most exempt countries incl. US, UK, all EU member states, Brazil | same | 2026-11-02 (confirm each EU state on the list) |
| 15 days Indonesia/Thailand; 30 days Brunei/Qatar | same | 2026-11-02 |
| Brazil visa waiver from 30 Sep 2023, up to 90 days, ordinary passports | https://www.boston.us.emb-japan.go.jp/itpr_en/11_000001_00622.html | 2026-11-02 |
| Passport validity: "valid for length of stay" | MOFA / JNTO https://www.japan.travel/en/plan/visa-info/ | 2026-11-02 |
| Visit Japan Web optional, gives QR codes for immigration and customs | https://services.digital.go.jp/en/visit-japan-web/ | 2026-11-02 |
| International Tourist Tax ¥1,000 → ¥3,000 from 1 Jul 2026; tickets issued by 30 Jun 2026 at old rate; under-2s exempt | https://www.mlit.go.jp/kankocho/content/001996466.pdf | 2026-11-02 |

## JR Pass prices and coverage (`/guide/rail-and-the-jr-pass`, Q&A, home)

| Fact | Source | Checked |
|---|---|---|
| Online prices: 7/14/21-day ordinary ¥50,000/80,000/100,000; green ¥70,000/110,000/140,000; children half | https://japanrailpass.net/en/purchase/price/ | 2026-11-02 |
| Overseas agency 7-day ordinary adult ¥53,000 | same | 2026-11-02 |
| Children aged 6–11 | same | 2026-11-02 |
| Price rise in October 2023 | https://japanrailpass.net/en/ | 2026-11-02 |
| Nozomi/Mizuho need a separate special ticket (since Oct 2023) | https://japanrailpass.net/en/ | 2026-11-02 (price of the special ticket not stated on site) |
| Pass not valid on private railways, most subways, non-JR buses | JNTO https://www.japan.travel/en/plan/jr-rail-passes/ | 2026-11-02 |
| Oversized luggage needs a reserved seat with luggage area on Tokaido/Sanyo/Kyushu Shinkansen | https://global.jr-central.co.jp/en/ | to verify |
| Claim: Tokyo–Kyoto individual tickets cost much less than a 7-day pass | SmartEX fares https://smart-ex.jp/en/ | to verify with current fare |

## Rail journey times (`/rail-routes`, `src/data/reference.mjs` → `RAIL_ROUTES`)

All times are "typical fastest scheduled", rounded. Verify each against the current timetable of the operator named in the Source column.

| Route | Time on site | Source |
|---|---|---|
| Tokyo–Kyoto Nozomi | 2:15 (Hikari ~2:40) | JR Central |
| Tokyo–Shin-Osaka Nozomi | 2:30 (Hikari ~2:55) | JR Central |
| Shin-Osaka–Hiroshima Nozomi | 1:25 (Sakura ~1:30) | JR West |
| Tokyo–Hiroshima Nozomi | 3:50 | JR West |
| Shin-Osaka–Hakata Mizuho/Nozomi | 2:25 (Sakura ~2:35) | JR West |
| Hakata–Kagoshima-Chuo Mizuho | 1:20 | JR Kyushu |
| Hiroshima–Miyajima (train ~27 min + ferry ~10 min) | 0:40 | JR West |
| Tokyo–Kanazawa Kagayaki | 2:30 | JR East |
| Kyoto–Kanazawa via Tsuruga (since Mar 2024) | 2:10 | JR West |
| Tokyo–Nagano Kagayaki | 1:20 | JR East |
| Nagoya–Takayama Hida | 2:20 | JR Central |
| Nagoya–Nakatsugawa Shinano | 0:50 | JR Central |
| Tokyo–Sendai Hayabusa | 1:30 | JR East |
| Tokyo–Shin-Aomori Hayabusa | 3:00 | JR East |
| Tokyo–Shin-Hakodate-Hokuto Hayabusa | 4:00 | JR Hokkaido |
| Hakodate–Sapporo Hokuto | 3:45 | JR Hokkaido |
| Kyoto–Nara Miyakoji rapid | 0:45 | JR West |
| Kansai Airport–Kyoto Haruka | 1:15 | JR West |
| Narita Airport–Tokyo N'EX | 1:00 | JR East |
| Shin-Osaka–Kii-Tanabe Kuroshio | 2:15 | JR West |
| Okayama–Takamatsu Marine Liner | 0:55 | JR Shikoku |
| Shinjuku–Hakone-Yumoto Romancecar | 1:25 | Odakyu |
| Tokyo–Nikko via Utsunomiya | 1:50 (Tobu from Asakusa ~1:50) | JR East; Tobu https://www.tobu.co.jp/en/access/nikko/ |

## Blossom and foliage windows (`/guide/seasons`, `/seasons/*`, Q&A)

| Fact | Source | Checked |
|---|---|---|
| Tokyo normal first flowering 24 March (1991–2020) | JMA https://www.data.jma.go.jp/tokyo/shosai/news/pdf/2023/sakurakaika2023.pdf | 2026-11-02 |
| Kyoto normal flowering ~26 March, full bloom ~4 April | tenki.jp https://tenki.jp/sakura/english/160.html (JWA, not JMA; confirm JMA Kyoto normal at https://www.data.jma.go.jp/sakura/data/index.html) | 2026-11-02 |
| Flowering = 5–6 flowers open; full bloom ≈ 80% | JMA | 2026-11-02 |
| Okinawa hikan-zakura Jan–Feb; Kyushu/Shikoku late March; Alps/Tohoku mid–late April; Hokkaido late April–mid May | JMA normals | to verify per station |
| Autumn leaves: Daisetsuzan from mid Sept; Sapporo mid–late Oct; Tohoku mountains mid–late Oct; Alps Oct; Kyoto mid Nov–early Dec; Tokyo late Nov–early Dec; Kyushu mid–late Nov | JMA koyo normals; JNTO autumn guide | to verify |
| Rainy season: Okinawa ~May–late June; Kyushu–Kanto early June–mid/late July; Tohoku from mid June; Hokkaido none | JMA https://www.data.jma.go.jp/cpd/baiu/ | to verify against normals table |
| Typhoons most frequent Aug–Sept | JMA | to verify |
| Japan ~3,000 km north to south | JNTO | to verify |

## Festival dates (`SEASON_EVENTS` in `src/data/reference.mjs`)

Sapporo Snow Festival (early Feb); Omizutori (1–14 Mar); Takayama Spring (14–15 Apr) and Autumn (9–10 Oct); Aoi Matsuri (15 May); Sanja Matsuri (3rd weekend May); Kanda Matsuri (mid May, odd years); Gion Matsuri (July; 17 & 24 Jul processions); Hakata Gion Yamakasa (1–15 Jul); Nachi Fire Festival (14 Jul); Aomori Nebuta (2–7 Aug); Akita Kanto (3–6 Aug); Sendai Tanabata (6–8 Aug); Yosakoi Kochi (9–12 Aug); Awa Odori (12–15 Aug); Gozan no Okuribi (16 Aug); Kishiwada Danjiri (Sept); Jidai and Kurama Fire Festival (22 Oct); Nagasaki Kunchi (7–9 Oct); Naha Tug-of-War (Oct); Chichibu Night Festival (2–3 Dec); Golden Week 29 Apr–5 May; Tateyama Kurobe snow corridor from mid April; Mount Fuji climbing season July–early Sept; Furano lavender July. Source: JNTO festivals https://www.japan.travel/en/see-and-do/festivals-and-events/ and each festival's official site. Checked 2026-11-02: **to verify individually**.

## Komorebi (feed mock)

Summary, Tokyo base, address and journeys/best months taken from https://komorebi.tourground.com, /journeys and /about on 2026-11-02.

## Articles and Q&As added 2026-11-07

Every figure, date, price, time and rule used in the articles and the new Q&As, with the page it came from. All were checked on 2026-11-07 against the page shown. Prices and timetables change: re-check before relying on them.

Corrections made to existing pages from this research: Romancecar Shinjuku–Hakone-Yumoto 1:25 → about 1:20 (Odakyu: about 80 min); Shin-Osaka–Kii-Tanabe 2:15 → 2:00 (Kumano Tourism Bureau); Shirakawa-go light-up moved from February to January (2027 evenings: 11, 17, 24, 31 January); Nikko leaves (central Nikko late October to mid November); Yamagata Hanagasa (5–7 August) added; Nishi-Kyushu Shinkansen added to the oversized-baggage rule.

Open points:
- Several JR East pages return 403 to automated checks, so Welcome Suica validity/refund rules, JR East Pass prices and JR East journey times are not stated; check jreast.co.jp by hand.
- Sources disagree (both figures given in the text): Shikoku pilgrimage length (about 1,200 km vs about 1,400 km); Koyasan shukubo count (31 / about 50 / 52); Sawando parking (700 vs 800 yen); Nakasendo Magome–Tsumago walking time (2 to 3 hours); Kamakura from Tokyo (55 vs 60 min).
- Himeji Castle admission changed on 1 March 2026 (adults 2,500 yen; Himeji residents 1,000 yen); JNTO still shows 1,000 yen.
- Tax-free shopping moved to a refund system on 1 November 2026.
- Kansai Area Pass sales ended 30 September 2026 (JR West).

### Research set A

#### Facts file A

## Article: kumano-kodo-nakahechi.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Three Grand Shrines (Kumano Sanzan): Kumano Hongu Taisha, Kumano Hayatama Taisha, Kumano Nachi Taisha | https://www.tb-kumano.jp/en/kumano-kodo/world-heritage/ | 2026-11-07 |
| UNESCO inscription 7 July 2004, "Sacred Sites and Pilgrimage Routes in the Kii Mountain Range"; also includes Koyasan and Yoshino and Omine | https://www.tb-kumano.jp/en/kumano-kodo/world-heritage/ ; https://www.tb-kumano.jp/en/kumano-kodo/ | 2026-11-07 |
| Four routes: Nakahechi (from Tanabe east), Kohechi (Koyasan to Kumano, about 70 km, three passes above 1,000 m), Ohechi (coastal south from Tanabe), Iseji (Ise-jingu to Kumano Sanzan) | https://www.tb-kumano.jp/en/kumano-kodo/ | 2026-11-07 |
| Nakahechi used by imperial family from Kyoto from the 10th century | https://www.tb-kumano.jp/en/kumano-kodo/ | 2026-11-07 |
| Nakahechi is the main route linking the three Grand Shrines | https://www.tb-kumano.jp/en/kumano-kodo/nakahechi/ | 2026-11-07 |
| Takijiri-oji to Kumano Hongu Taisha on foot about 38 km | https://www.tb-kumano.jp/en/kumano-kodo/dual-pilgrim/ | 2026-11-07 |
| Takijiri-oji to Chikatsuyu-oji: about 13.3 km, 6-8 h, about 1,010 m up / 840 m down, rating 3; via Takahara; Kumano Kodo Kan exhibitions, walking sticks, water tap | https://www.tb-kumano.jp/en/kumano-kodo/nakahechi/takijiri-oji-to-tsugizakura-oji/takijiri-oji-to-chikatsuyu-oji/ | 2026-11-07 |
| Chikatsuyu-oji to Kumano Hongu Taisha: about 24.5 km, 9-12 h, about 1,100 m up / 1,380 m down, rating 4; paved road via Nonaka to Kobiro-toge then trail to Hosshinmon-oji; no restaurants, bring lunch | https://www.tb-kumano.jp/en/kumano-kodo/nakahechi/tsugizakura-oji-to-kumano-hongu-taisha/chikatsuyu-oji-to-kumano-hongu-taisha/ | 2026-11-07 |
| Hosshinmon-oji to Hongu: about 7.5 km, 2-3 h, about 190 m up / 460 m down, rating 2; outer entrance to sacred precincts; no lodging at Hosshinmon-oji | https://www.tb-kumano.jp/en/kumano-kodo/nakahechi/tsugizakura-oji-to-kumano-hongu-taisha/hosshinmon-oji-to-kumano-hongu-taisha/ | 2026-11-07 |
| Daimon-zaka: about 600 m staircase, 267 steps, about 30 min; leads to Kumano Nachi Taisha, Seiganto-ji, Nachi Falls; bus from Kii-Katsuura about 20 min | https://www.tb-kumano.jp/en/kumano-kodo/nakahechi/daimon-zaka/ | 2026-11-07 |
| Kuroshio (JR West) from Osaka and Kyoto; Tennoji 1h45, Shin-Osaka 2h, Kyoto 2h35 to Kii-Tanabe; not all trains from Kyoto | https://www.tb-kumano.jp/en/transport/train/ | 2026-11-07 |
| Wideview Nanki (JR Central) Nagoya to Kii-Katsuura about 4 h via Shingu | https://www.tb-kumano.jp/en/transport/train/ | 2026-11-07 |
| Nanki-Shirahama Airport daily flights to/from Tokyo | https://www.tb-kumano.jp/en/transport/ | 2026-11-07 |
| Buses from Bus Stop 2 at Kii-Tanabe to Takijiri and Hongu (stops at Yunomine, Kawayu Onsen); also from Shirahama; JR buses do not serve local routes; seasonal timetable changes | https://www.tb-kumano.jp/en/transport/bus/ | 2026-11-07 |
| Luggage shuttle via KUMANO TRAVEL only; online only if lodging also booked there; at least 20 days ahead; no last-minute shuttles or on-site changes; items attached outside may mean extra fees or refusal | https://www.tb-kumano.jp/en/resources/luggage-shuttle-storage/ | 2026-11-07 |
| TA-Q-BIN / Yu-Pack no advance booking; max often 160 cm and 25 kg; 7-Eleven in Kii-Tanabe Station 6:00-22:00 | https://www.tb-kumano.jp/en/resources/luggage-shuttle-storage/ | 2026-11-07 |
| TANABE Tourist Information Center storage 9:00-18:00, 500 yen per bag per day, up to one month, no reservation; coin lockers 400-700 yen/day, max 3 days | https://www.tb-kumano.jp/en/resources/luggage-shuttle-storage/ | 2026-11-07 |
| Lodging booked via KUMANO TRAVEL community reservation system | https://www.tb-kumano.jp/en/lodging/ | 2026-11-07 |
| Pre-booking strongly recommended; walk-in uncommon; evening buses limited | https://www.tb-kumano.jp/en/kumano-kodo/tips/ | 2026-11-07 |
| Open year-round; mild; one of Japan's wettest areas; typhoons, floods, landslides, JR disruption; spring/autumn most popular, buses crowded; summer hot humid wet; winter freezing, snow rare; arrive 15:00-17:00 late autumn to early spring | https://www.tb-kumano.jp/en/kumano-kodo/tips/ | 2026-11-07 |
| Trail surfaces; not technical but physically demanding; slips most common injury; water sources untested; mamushi, hornets most aggressive in autumn, leeches, ticks, Asiatic bear rare | https://www.tb-kumano.jp/en/kumano-kodo/tips/ | 2026-11-07 |
| Cards often not accepted; post office ATMs best (emergency and hotline numbers removed from the article: no phone numbers on the site) | https://www.tb-kumano.jp/en/kumano-kodo/tips/ | 2026-11-07 |
| Free stamp credential, two sides; wooden stamp stands; completion stamp at Kumano Hongu Taisha; credential outlets; Dual Pilgrim registration in person in Tanabe or Santiago | https://www.tb-kumano.jp/en/kumano-kodo/dual-pilgrim/ | 2026-11-07 |

## Article: nakasendo-magome-tsumago.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Nakasendo linked Kyoto and Edo; trade route early 1600s to late 1800s; roadway from 7th century; originally Kisokaido, Nakasendo from early 1600s; locals call it Kisoji | https://www.japan.travel/en/spot/1367/ | 2026-11-07 |
| 69 post towns roughly every 10 km | https://www.japan.travel/en/spot/1367/ ; https://www.japan.travel/en/spot/1271/ | 2026-11-07 |
| Magome in Nakatsugawa, Gifu; living post town about 400 years of history; at southern entrance of the valley | https://www.japan.travel/en/spot/1271/ ; https://www.japan.travel/en/spot/1365/ | 2026-11-07 |
| Tsumago 42nd station; 1968 preservation decision; cars banned daytime; lines hidden | https://www.japan.travel/en/spot/1365/ | 2026-11-07 |
| Walk about 9 km (8-9 km in one feature); crosses Gifu into Nagano | https://www.japan.travel/en/spot/1367/ ; https://www.japan.travel/en/spot/1365/ ; https://www.japan.travel/en/ph/special-features/nakasendo-trail/ | 2026-11-07 |
| Walking time: 2-2.5 h (spot 1271 and 1367), 2.5-3 h (ph feature, blog), about 3 h (spot 1365, 1367) | as listed | 2026-11-07 |
| Many start in Magome and go north as more is downhill | https://www.japan.travel/en/spot/1367/ | 2026-11-07 |
| Stones laid in early 1600s; shrines, waterfalls, bamboo, rice terraces, teahouse; bear bells on trail | https://www.japan.travel/en/au/story/walking-nakasendo-road-magome-tsumago/ | 2026-11-07 |
| English and Japanese signage; luggage forwarding available; Tsumago-Suhara 23 km via Midono and Nojiri | https://www.japan.travel/en/spot/1367/ | 2026-11-07 |
| Baggage delivery available between Magome and Tsumago (no season/hours/price given) | https://www.japan.travel/en/ph/special-features/nakasendo-trail/ | 2026-11-07 |
| Nagoya to Nakatsugawa by Chuo Main Line limited express about 50 min; bus Nakatsugawa to Magome about 25 min | https://www.japan.travel/en/ph/special-features/nakasendo-trail/ | 2026-11-07 |
| Nagoya to Magome area by limited express about 55 min; Nagoya to Nagiso about 1 h | https://www.japan.travel/en/japans-local-treasures/walk-historic-nakasendo-trail/ | 2026-11-07 |
| Tsumago about 10 min by bus from Nagiso; buses infrequent; taxis; Tokyo route Tokaido Shinkansen to Nagoya then Shinano | https://www.japan.travel/en/spot/1365/ | 2026-11-07 |
| Shinano Express on JR Chuo Main Line; bus stops at foot of cobbled road; local train Nakatsugawa to Nagiso with buses to both towns | https://www.japan.travel/en/spot/1271/ | 2026-11-07 |

## Q&A: do-i-need-to-reserve-shinkansen-seats.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Seat types: reserved Green, reserved ordinary, non-reserved; non-reserved usable with pass alone except Nozomi/Mizuho | https://japanrailpass.net/en/use/reserved-seat-reservation/ | 2026-11-07 |
| Nozomi normally has non-reserved seats in cars 1 and 2 | https://jr-central.co.jp/news/release/_pdf/000044849.pdf | 2026-11-07 |
| Express Reservation / SmartEX reserve some seats up to one year ahead | https://jr-central.co.jp/news/release/_pdf/000044849.pdf | 2026-11-07 |
| Oversized baggage seats bookable one month in advance | https://global.jr-central.co.jp/en/info/oversized-baggage/ | 2026-11-07 |
| Hayabusa and Kagayaki have no non-reserved seats | https://www.japan.travel/en/guide/jr-rail-pass/ | 2026-11-07 |
| FY2026 all-reserved Nozomi (Tokyo-Hakata): 24 Apr-6 May 2026, 7-16 Aug 2026, 18-23 Sep 2026, 25 Dec 2026-5 Jan 2027 | https://jr-central.co.jp/news/release/_pdf/000044849.pdf | 2026-11-07 |
| Non-reserved ticket: cannot sit on Nozomi in these periods, may stand in decks, may not board; Hikari, Kodama, Mizuho, Sakura, Tsubame keep non-reserved; Hikari/Kodama may be overcrowded | https://global.jr-central.co.jp/en/nozomi/ | 2026-11-07 |
| Oversized: 161-250 cm total on Tokaido, Sanyo, Kyushu, Nishi-Kyushu; same price as reserved seat; up to 160 cm no reservation; over 250 cm not allowed; 1,000 yen fee incl. tax; conductor-designated space; non-reserved cars lack areas; book at office, machines, online | https://global.jr-central.co.jp/en/info/oversized-baggage/ | 2026-11-07 |
| JR Pass reservations free; JAPAN RAIL PASS Reservation site, machines, ticket offices; collect online bookings | https://japanrailpass.net/en/use/reserved-seat-reservation/ | 2026-11-07 |
| Pass peak periods where seats may not be guaranteed: 1-6 May, 7-16 Aug, 18-23 Sep, 29 Dec-3 Jan | https://japanrailpass.net/en/use/reserved-seat-reservation/ | 2026-11-07 |
| Special ticket for Nozomi/Mizuho sold to pass holders | https://japanrailpass.net/en/ | 2026-11-07 |

### Research set B

#### Facts file B

## articles/climbing-mount-fuji.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Yoshida Trail season 2026: 1 July to 10 September; may be delayed by weather/snow | https://www.fujisan-climb.jp/en/yamanashi-notice/ ; https://www.fujisan-climb.jp/en/info/28/ | 2026-11-07 |
| Subashiri opens 1 July 9:00 (2026, aligned with Yamanashi); Fujinomiya and Gotemba 10 July 9:00; all close 10 September 17:00 | https://www.fujisan-climb.jp/en/shizuoka-notice/ ; https://www.fujisan-climb.jp/en/info/1722/ | 2026-11-07 |
| Subashiri usually opened 10 July in past years | https://www.fujisan-climb.jp/en/comparison-of-routes | 2026-11-07 |
| 2026 season has ended; next season "early July to early September", dates to be announced | https://www.fujisan-climb.jp/en/ ; https://www.fujisan-climb.jp/en/things-to-know-before-climbing | 2026-11-07 |
| Yoshida 5th station Fuji-Subaru Line 2,305 m; ascent 6.8 km about 6 h 10 min; descent 7.0 km about 3 h 35 min | https://www.fujisan-climb.jp/en/comparison-of-routes | 2026-11-07 |
| Subashiri 5th station 2,000 m; ascent 6.9 km about 6 h 25 min; descent 6.2 km about 3 h 20 min; forest, volcanic gravel above 6th station | https://www.fujisan-climb.jp/en/comparison-of-routes | 2026-11-07 |
| Fujinomiya 5th station 2,400 m; ascent 4.3 km about 5 h 10 min; descent 4.3 km about 2 h 40 min | https://www.fujisan-climb.jp/en/comparison-of-routes | 2026-11-07 |
| Gotemba New 5th Station 1,440 m; ascent 10.5 km about 8 h 40 min; descent 8.4 km about 3 h 30 min | https://www.fujisan-climb.jp/en/comparison-of-routes | 2026-11-07 |
| Yoshida and Subashiri descent trails split near the 8th station | https://www.fujisan-climb.jp/en/yamanashi-notice/ | 2026-11-07 |
| Yoshida restrictions in place since 2024; "no major changes" for 2026 | https://www.fujisan-climb.jp/en/info/28/ | 2026-11-07 |
| Yoshida fee 4,000 yen per person per visit; applies also if descending by Yoshida descending trail from another start | https://www.fujisan-climb.jp/en/yamanashi-notice/ | 2026-11-07 |
| Yoshida gate closed 14:00 to 3:00 next day; descent any time; hut guests exempt | https://www.fujisan-climb.jp/en/yamanashi-notice/ ; https://www.fujisan-climb.jp/en/info/28/ | 2026-11-07 |
| Yoshida daily cap 4,000 climbers; hut guests excluded; non-reservation holders turned away when reached | https://www.fujisan-climb.jp/en/yamanashi-notice/ | 2026-11-07 |
| Passage reservations optional, prepaid online, up to day of climb; not a hut booking; holders not through gate by 14:00 subject to restrictions | https://www.fujisan-climb.jp/en/yamanashi-notice/ | 2026-11-07 |
| Equipment check: cold-weather clothing, two-piece rain gear, climbing footwear | https://www.fujisan-climb.jp/en/info/28/ | 2026-11-07 |
| Do not climb overnight without staying in a mountain hut | https://www.fujisan-climb.jp/en/yamanashi-notice/ | 2026-11-07 |
| Inexperienced climbers advised to go with a guide | https://www.fujisan-climb.jp/en/info/28/ | 2026-11-07 |
| Shizuoka fee 4,000 yen per person, paid once | https://www.fujisan-climb.jp/en/shizuoka-notice/ | 2026-11-07 |
| Shizuoka: entry 14:00 to 3:00 requires hut stay; no daily cap | https://www.fujisan-climb.jp/en/shizuoka-notice/ | 2026-11-07 |
| Shizuoka e-learning + test, all questions correct for permit | https://www.fujisan-climb.jp/en/shizuoka-notice/ | 2026-11-07 |
| FUJI NAVI app, registration opened 8 May 2026; QR-code permit; expires 23:59 entry day; full refund up to entry day, not after on-site authentication | https://www.fujisan-climb.jp/en/shizuoka-notice/ | 2026-11-07 |
| On-site registration at 5th station takes about 30 minutes | https://www.fujisan-climb.jp/en/shizuoka-notice/ | 2026-11-07 |
| Huts booked directly, not via app | https://www.fujisan-climb.jp/en/shizuoka-notice/ | 2026-11-07 |
| Temperature drops about 0.6 C per 100 m; summit near 0 C before sunrise; hypothermia risk; sudden weather changes and thunderstorms not uncommon | https://www.fujisan-climb.jp/en/things-to-know-before-climbing | 2026-11-07 |
| Essential kit list incl. 1-2 litres water, 100-yen coins; helmet recommended | https://www.fujisan-climb.jp/en/things-to-know-before-climbing | 2026-11-07 |
| Off-season: all summit trails closed; Road Act prohibition; up to 6 months imprisonment or fine up to 300,000 yen | https://www.fujisan-climb.jp/en/off-season/ | 2026-11-07 |
| Guidelines for Ensuring Safety During Mount Fuji Climbs (revised March 2021): off-season prohibited for those not fully prepared; climbing plan required | https://www.fujisan-climb.jp/en/off-season/ | 2026-11-07 |
| Summit average daily minimum below -10 C Nov-Apr; facilities closed | https://www.fujisan-climb.jp/en/off-season/ | 2026-11-07 |
| Yoshida access: buses from Fujikawaguchiko Stn / Mt. Fuji Stn; express buses from Shinjuku, Yokohama; Fujisan Parking shuttle during restriction | https://www.fujisan-climb.jp/en/comparison-of-routes | 2026-11-07 |
| Fujinomiya access: buses from Mishima, Shin-Fuji, Fuji, Fujinomiya stations; 2026 car restriction 10 July-10 Sept; Mizugazuka Parking | https://www.fujisan-climb.jp/en/comparison-of-routes | 2026-11-07 |
| Subashiri access: buses from Gotemba, Shinmatsuda; 2026 car restriction 1 July-10 Sept; Subashiri Multipurpose Plaza | https://www.fujisan-climb.jp/en/comparison-of-routes | 2026-11-07 |
| Gotemba access: buses from Gotemba Stn; no car restriction; free lot about 450 cars | https://www.fujisan-climb.jp/en/comparison-of-routes | 2026-11-07 |

## articles/hakone-loop.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Romancecar Shinjuku to Hakone-Yumoto about 80 min; regular express about 2 h; all seats reserved | https://odakyu-global.com/romancecar/ | 2026-11-07 |
| Romancecar surcharge 1,200 yen adult to Hakone-Yumoto; plus fare/pass/IC card (PASMO, Suica) | https://odakyu-global.com/romancecar/ | 2026-11-07 |
| Romancecar seats on sale 10:00 JST one month before; EMot online | https://odakyu-global.com/romancecar/ | 2026-11-07 |
| Tokaido Shinkansen Tokyo to Odawara then Hakone Tozan Railway to Hakone-Yumoto: about 55 min | https://www.japan.travel/en/destinations/kanto/kanagawa/hakone-and-around/ | 2026-11-07 |
| Odakyu is a private railway, not JR | /guide/rail-and-the-jr-pass (existing site page) | 2026-11-07 |
| Tozan Train Yumoto-Gora known for switchbacks for steep inclines | https://www.hakonenavi.jp/international/en/around | 2026-11-07 |
| Cable Car Gora-Sounzan; hydrangeas mid-June to mid-July | https://www.hakonenavi.jp/international/en/around | 2026-11-07 |
| Ropeway Sounzan-Owakudani-Ubako-Togendai, each about 15 min; change at Owakudani; 18-person gondolas about every minute | https://www.hakonenavi.jp/international/en/transportation/hakone-ropeway | 2026-11-07 |
| Ropeway boarding 9:00-17:00 Feb-Nov, 9:00-16:15 Dec-Jan; may stop at winds 30 m/s or more | https://www.hakonenavi.jp/international/en/transportation/hakone-ropeway | 2026-11-07 |
| Cruise Togendai-ko to Hakonemachi-ko; interiors modelled on British and French military ships | https://www.hakonenavi.jp/international/en/around | 2026-11-07 |
| Pirate-ship shaped boats | https://www.japan.travel/en/destinations/kanto/kanagawa/hakone-and-around/ | 2026-11-07 |
| Motohakone-ko: cruise ticket counter; Tozan buses to Hakone-Yumoto/Odawara via Miyanoshita or via Hakone-machi-ko | https://www.hakonenavi.jp/international/en/station/motohakone | 2026-11-07 |
| Togendai: Tozan bus to Hakone-Yumoto and Odawara via Sengoku and Miyanoshita | https://www.hakonenavi.jp/international/en/station/togendai | 2026-11-07 |
| Freepass covers 8 transport types (Odakyu Line, Tozan Train, Cable Car, Ropeway, Sightseeing Cruise, Tozan Bus/Odakyu Highway Bus/Tokai Bus in designated areas); discounts at about 70 facilities | https://odakyu-global.com/passes/hakone-freepass/ | 2026-11-07 |
| Freepass prices: Shinjuku 2-day 7,100/1,600, 3-day 7,500/1,850; Odawara 2-day 6,000/1,500, 3-day 6,400/1,750 yen (no as-of date on page) | https://odakyu-global.com/passes/hakone-freepass/ | 2026-11-07 |
| Child 6-11; under 6 no ticket; validity by calendar day until last service | https://odakyu-global.com/passes/hakone-freepass/ | 2026-11-07 |
| Romancecar surcharge not included; EMot smartphone ticket or paper from machines/service centres | https://odakyu-global.com/passes/hakone-freepass/ | 2026-11-07 |
| Owakudani sometimes/frequently closed due to volcanic activity and gas; check official site | https://www.japan.travel/en/spot/1566/ | 2026-11-07 |
| Ropeway suspended when volcanic activity reaches unsafe level | https://www.japan.travel/national-parks/parks/fuji-hakone-izu/see-and-do/hakone-ropeway | 2026-11-07 |
| Hakone Ropeway gas notice: groups who should not ride to Owakudani; groups to consider carefully | https://www.hakonenavi.jp/topics/pdf/5999.pdf | 2026-11-07 |
| Maintenance: Owakudani-Sounzan closed 7-24 Dec 2026 (bus about 10 min); Togendai-Ubako-Owakudani closed 12 Jan-26 Feb 2027 (bus about 15 min); buses about every 15 min; Freepass valid | https://www.hakonenavi.jp/international/en/wp-content/uploads/sites/2/2026/10/ba6bb82c4492138e168451a655a538b3.pdf | 2026-11-07 |
| 17 types of hot spring, seven hot-spring resorts | https://www.japan.travel/en/destinations/kanto/kanagawa/hakone-and-around/ | 2026-11-07 |
| Best-known Fuji view from Lake Ashi's south-eastern shore | https://www.japan.travel/en/destinations/kanto/kanagawa/hakone-and-around/ | 2026-11-07 |

## qa/when-can-you-climb-mount-fuji.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| 2026 dates: Yoshida and Subashiri 1 July; Fujinomiya and Gotemba 10 July; all close 10 September | https://www.fujisan-climb.jp/en/off-season/ ; https://www.fujisan-climb.jp/en/shizuoka-notice/ ; https://www.fujisan-climb.jp/en/yamanashi-notice/ | 2026-11-07 |
| Next season "early July to early September", TBA | https://www.fujisan-climb.jp/en/things-to-know-before-climbing | 2026-11-07 |
| Sudden weather changes and thunderstorms not uncommon in summer | https://www.fujisan-climb.jp/en/things-to-know-before-climbing | 2026-11-07 |
| Off-season closure, Road Act, penalties, 2021 guidelines, climbing plan, portable toilet, below -10 C Nov-Apr, facilities closed, reception almost nonexistent | https://www.fujisan-climb.jp/en/off-season/ | 2026-11-07 |
| 4,000 yen fee on all trails (2026) | https://www.fujisan-climb.jp/en/yamanashi-notice/ ; https://www.fujisan-climb.jp/en/shizuoka-notice/ | 2026-11-07 |
| Yoshida gate 14:00-3:00, 4,000 daily cap, hut guests exempt, optional reservations up to day | https://www.fujisan-climb.jp/en/yamanashi-notice/ | 2026-11-07 |
| FUJI NAVI from 8 May 2026, e-learning, test, QR permit, no cap, hut stay for 14:00-3:00 entry, on-site about 30 min, huts booked directly | https://www.fujisan-climb.jp/en/shizuoka-notice/ | 2026-11-07 |

### Research set C

#### Facts file C

## Article: luggage-forwarding-takkyubin

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| TA-Q-BIN: "next-day delivery to most areas in Japan all year round"; date and time range selection available | https://www.kuronekoyamato.co.jp/ytc/en/send/services/ | 2026-11-07 |
| JNTO names Yamato Transport as a carrier | https://www.japan.travel/en/plan/getting-around/luggage-storage/ | 2026-11-07 |
| Narita, Haneda and Kansai International airports offer delivery to hotels | https://www.japan.travel/en/plan/getting-around/luggage-storage/ | 2026-11-07 |
| "most major hotels can arrange luggage delivery between hotels"; convenience store option if not a large hotel | https://www.japan.travel/en/plan/getting-around/luggage-storage/ | 2026-11-07 |
| Same-day or designated date/time delivery offered | https://www.japan.travel/en/plan/getting-around/luggage-storage/ | 2026-11-07 |
| Yamato covers all 47 prefectures; remote islands/disaster areas may be unavailable or delayed | https://www.global-yamato.com/en/hands-free-travel/ | 2026-11-07 |
| Hands-Free Travel counters marked by logo; fill in delivery form; multilingual | https://www.japan.travel/en/plan/getting-around/luggage-storage/ | 2026-11-07 |
| MLIT list of Hands-Free Travel counters linked from JNTO | https://www.japan.travel/en/plan/getting-around/luggage-storage/ | 2026-11-07 |
| No reservation needed; drop at airport counter, city sales office, station counter, hotel front desk; hotel must confirm in advance; show ID or receipt to collect | https://www.global-yamato.com/en/hands-free-travel/ | 2026-11-07 |
| Send from sales office, TA-Q-BIN agency, convenience store with TA-Q-BIN signs, pickup | https://www.kuronekoyamato.co.jp/ytc/en/send/preparations/payoff/ | 2026-11-07 |
| Parcels larger than Size 180 cannot be sent from some convenience stores; payment varies by store | https://www.kuronekoyamato.co.jp/ytc/en/send/preparations/payoff/ | 2026-11-07 |
| Payment: cash, credit cards, e-money incl. Suica, PASMO, ICOCA | https://www.kuronekoyamato.co.jp/ytc/en/send/preparations/payoff/ | 2026-11-07 |
| Next-day delivery for drop-off at sales office by around 6.00pm JST; hours vary | https://www.global-yamato.com/en/hands-free-travel/ | 2026-11-07 |
| Size = total of width, length, height in cm; bands 60/80/100/120/140/160/180/200 with 2/5/10/15/20/25/30/30 kg | https://www.kuronekoyamato.co.jp/ytc/en/send/services/takkyubin/ | 2026-11-07 |
| Greater of size or weight band applies; longest side up to 170 cm | https://www.kuronekoyamato.co.jp/ytc/en/send/services/takkyubin/ | 2026-11-07 |
| Rates depend on size and payment method | https://www.kuronekoyamato.co.jp/ytc/en/send/services/takkyubin/ | 2026-11-07 |
| Prices depend on size and distance; example Size 160 Tokyo Station sales office to Kyoto hotel from 3,160 JPY (standard fare, tax incl., before discounts) | https://www.global-yamato.com/en/hands-free-travel/ | 2026-11-07 |
| 100 JPY discount per parcel for drop-off at agency, sales office or convenience store | https://www.kuronekoyamato.co.jp/ytc/en/send/services/takkyubin/ | 2026-11-07 |
| JNTO: items "not exceeding 160 linear cm, within 25 to 30 kg"; contents under 300,000 yen; not accepted: valuables, fragile, fresh products and liquids, dangerous goods; fees vary by airport, destination, size | https://www.japan.travel/en/plan/getting-around/luggage-storage/ | 2026-11-07 |
| Airport TA-Q-BIN: drop off "by two days prior to your departure date (three days in some areas)"; delivered by day before departure; collect at counter on departure day with Sender Receipt | https://www.kuronekoyamato.co.jp/ytc/en/send/services/airport/ | 2026-11-07 |
| Airport rates include 660 JPY airport handling fee; insured up to 300,000 JPY per parcel; over 30 kg not accepted; return service up to one month | https://www.kuronekoyamato.co.jp/ytc/en/send/services/airport/ | 2026-11-07 |
| Shinkansen oversized baggage: Tokaido, Sanyo, Kyushu, Nishi-Kyushu; up to 160 cm no reservation; 161-250 cm need seat with oversized baggage area, no extra charge; 1,000 yen fee without reservation; over 250 cm not allowed | https://global.jr-central.co.jp/en/info/oversized-baggage/ | 2026-11-07 |
| Yamato English support 0120-67-9625 / +81-3-6834-7503, 8:00-21:00, 365 days | https://www.global-yamato.com/en/hands-free-travel/ | 2026-11-07 |
| Coin lockers 300-600 yen; busy lockers fill quickly | https://www.japan.travel/en/plan/getting-around/luggage-storage/ | 2026-11-07 |

## Article: ic-cards-suica-pasmo-icoca

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| IC cards for transfers, buses, boats; some vending machines, convenience stores, taxis; usable nationwide | https://www.japan.travel/en/plan/ic-card/ | 2026-11-07 |
| Suica/PASMO as an alternative to carrying cash; can't be used everywhere | https://www.japan.travel/en/plan/credit-cards/ | 2026-11-07 |
| Most regions have their own IC card | https://www.japan.travel/en/plan/ic-card/ | 2026-11-07 |
| PASMO top-up not possible at station machines if balance would exceed 20,000 yen | https://www.pasmo.co.jp/en/use/ | 2026-11-07 |
| Ten interoperable cards (Kitaca, Suica, PASMO, TOICA, manaca, ICOCA, PiTaPa, HAYAKAKEN, nimoca, SUGOCA); PiTaPa no nationwide e-money use | https://www.pasmo.co.jp/visitors/en/ | 2026-11-07 |
| ICOCA usable on railways and buses across Japan and at shops with IC/ICOCA mark | https://www.westjr.co.jp/global/en/howto/icoca/ | 2026-11-07 |
| Most IC cards need a 500 yen deposit; Welcome Suica and TOURIST PASMO have no deposit | https://www.japan.travel/en/plan/ic-card/ | 2026-11-07 |
| PASMO 500 yen deposit not usable for fares; refund of balance plus deposit on return; balance not refundable alone | https://www.pasmo.co.jp/en/use/ | 2026-11-07 |
| Special-design ICOCA: 2,000 yen incl. 500 yen deposit; foreign passport + temporary visitor; one per person; sold at Kansai Airport Station JR ticket office | https://www.westjr.co.jp/global/en/howto/icoca/ | 2026-11-07 |
| Welcome Suica sales points from 1 Sept 2024 (Tokyo, Shinagawa, Shibuya, Shinjuku, Ikebukuro, Ueno, Narita Airport, Airport Terminal 2, Haneda Airport Terminal 3 travel service centres; JAPAN RAIL CAFE TOKYO; machines at the 3 airport stations); one per person | https://www.pasmo.co.jp/src/info/files/ja_press_20240820.pdf | 2026-11-07 |
| Welcome Suica Mobile planned from 6 March 2025, iOS only | https://www.pasmo.co.jp/src/info/files/ja_press_20250218.pdf | 2026-11-07 |
| TOURIST PASMO announced 17 April 2026; launch May 2026; 28 days from purchase; no deposit; no refunds incl. unused value; Narita 2,000 yen (2,000 value); Haneda 1,000/2,000/3,000/4,000/5,000/10,000; trains/buses across Japan and participating stores | https://www.pasmo.co.jp/src/info/files/en_news_20260417.pdf ; https://www.pasmo.co.jp/tourist-pasmo/ | 2026-11-07 |
| PASMO PASSPORT: sales already ended; handling ended 11 Oct 2024; rules abolished effective 12 Oct 2024 | https://www.pasmo.co.jp/src/info/files/en_news_20241004.pdf | 2026-11-07 |
| PASMO on iPhone 8+ with iOS 14.0, Apple Watch Series 3+ | https://www.pasmo.co.jp/en/issue/ | 2026-11-07 |
| Top up Suica, PASMO or ICOCA via Apple Wallet (promo text) | https://www.pasmo.co.jp/en/issue/ | 2026-11-07 |
| ICOCA on Apple Pay usable with iPhone | https://www.westjr.co.jp/global/en/howto/icoca/ | 2026-11-07 |
| Mobile Suica and mobile PASMO need no 500 yen deposit | https://www.pasmo.co.jp/src/info/files/ja_press_20240820.pdf | 2026-11-07 |
| Android devices bought outside Japan not compatible with Mobile PASMO | https://www.pasmo.co.jp/visitors/en/ | 2026-11-07 |
| Global semiconductor shortage; non-personalised sales suspended from 8 June 2023 | https://www.pasmo.co.jp/src/info/files/en_press_20230602.pdf | 2026-11-07 |
| Personalised sales suspended from 2 Aug 2023; Welcome Suica limited quantities at airport stations, one per customer | https://www.pasmo.co.jp/src/info/files/en_press_20230731.pdf | 2026-11-07 |
| Existing cards usable and chargeable; Mobile Suica/PASMO unaffected | https://www.pasmo.co.jp/src/info/files/en_press_20230602.pdf | 2026-11-07 |
| Personalised cards resumed 1 Sept 2024 | https://www.pasmo.co.jp/src/info/files/ja_press_20240820.pdf | 2026-11-07 |
| Non-personalised cards resumed 1 March 2025 | https://www.pasmo.co.jp/src/info/files/ja_press_20250218.pdf | 2026-11-07 |

## Q&A: do-i-need-cash-in-japan

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| International credit, debit, prepaid cards "generally accepted throughout the country"; ask staff if logos not shown | https://www.japan.travel/en/plan/credit-cards/ | 2026-11-07 |
| Cards usually accepted in most shops, restaurants and taxis in major cities | https://www.japan.travel/en/plan/ | 2026-11-07 |
| Cards usable for N'EX and Shinkansen fares; not always for short-distance fares | https://www.japan.travel/en/plan/credit-cards/ | 2026-11-07 |
| "very much a cash-based society"; keep cash on you | https://www.japan.travel/en/plan/currency/ | 2026-11-07 |
| Notes: 1,000, 2,000, 5,000, 10,000 yen | https://www.japan.travel/en/plan/currency/ | 2026-11-07 |
| ATM fees may depend on hour/day; many banks close at 3pm | https://www.japan.travel/en/plan/currency/ | 2026-11-07 |
| MUFG and SMBC accept Visa, Mastercard, Maestro, Cirrus | https://www.japan.travel/en/plan/currency/ | 2026-11-07 |
| Seven Bank: "day or night"; "over 28,000 ATMs at 7-Eleven stores"; airport list; brands list; some cards may not be accepted | https://www.sevenbank.co.jp/intlcard/index2.html | 2026-11-07 |
| Japan Post Bank: brands Visa, Plus, Mastercard, Maestro, Cirrus, JCB, China UnionPay, Discover; 220 yen fee may apply; 50,000 yen single withdrawal limit; no balance enquiry; hours 7:00-23:00 Mon-Sat, 7:00-21:00 Sun/holidays/31 Dec/1-3 Jan | https://www.jp-bank.japanpost.jp/en/ias/en_ias_index.html | 2026-11-07 |
| Suica/PASMO work on public transport, convenience stores, growing number of shops and restaurants | https://www.japan.travel/en/plan/credit-cards/ | 2026-11-07 |

## Q&A: is-tipping-expected-in-japan

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| "not common to tip for services such as those provided in bars, cafes, restaurants, taxis, and hotels" | https://www.japan.travel/en/plan/tipping-in-japan/ | 2026-11-07 |
| Tipping "is not practiced in Japan"; "can cause discomfort and confusion" | https://www.japan.travel/en/plan/ | 2026-11-07 |
| "A service charge is generally added on to the final bill in restaurants" | https://www.japan.travel/en/plan/ | 2026-11-07 |
| Kokorozuke custom; private guide/interpreter may accept a tip; not expected, discreetly | https://www.japan.travel/en/plan/tipping-in-japan/ | 2026-11-07 |
| Gratuity customarily in an envelope; envelopes sold at convenience stores, stationery stores, 100 yen stores | https://www.japan.travel/en/plan/tipping-in-japan/ | 2026-11-07 |

### Research set D

#### Facts file D

## articles/kyoto-autumn-leaves.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Kyoto leaf season starts in mid November | https://www.japan.travel/en/guide/november/ | 2026-11-07 |
| Kyoto particularly busy at end of November when leaves peak | https://www.japan.travel/en/guide/november/ | 2026-11-07 |
| Japan: trees turn mid November to early December | https://www.japan.travel/en/guide/autumn-guide/ | 2026-11-07 |
| JMA specimen tree normally iroha maple; colouring date = first day most leaves red viewing whole tree | https://www.data.jma.go.jp/sakura/data/kaede2020.pdf | 2026-11-07 |
| Kyoto maple colouring normal (1991–2020) 5 December | https://www.data.jma.go.jp/sakura/data/pdf/015.pdf | 2026-11-07 |
| Earliest 10 November (1976); latest 20 December (2024) | https://www.data.jma.go.jp/sakura/data/pdf/015.pdf | 2026-11-07 |
| 2025: 10 December, +5 days vs normal | https://www.data.jma.go.jp/sakura/data/phn_014.html ; pdf/015.pdf | 2026-11-07 |
| 2016–2025: 6 Dec, 1 Dec, 12 Dec, 10 Dec, 7 Dec, none (2021), 12 Dec, 13 Dec, 20 Dec, 10 Dec | https://www.data.jma.go.jp/sakura/data/pdf/015.pdf | 2026-11-07 |
| Calendar shows previous-year peak dates ranging 30 October to 11 December | https://kyoto.travel/en/seasonal-info/autumnleaves/ | 2026-11-07 |
| JWA forecasts target iroha maple; peak earlier when Sept–Nov cool, later when warm | https://tenki.jp/kouyou/expectation/ | 2026-11-07 |
| 2026 forecast 3rd edition issued 28 October 2026; Arashiyama peak from ~13 November, same as last year; western Japan normal or later than normal | https://tenki.jp/kouyou/expectation/ | 2026-11-07 |
| tenki.jp five stages; daily reports; 7 Nov 2026 forecaster: colouring begun in Kansai | https://tenki.jp/kouyou/ | 2026-11-07 |
| Kyoto calendar began updating 30 October 2026; five stages Green / Color Appearing / Partially Colored / Peak / Past Peak; area list | https://kyoto.travel/en/seasonal-info/autumnleaves/ | 2026-11-07 |
| 6 Nov 2026: trees beginning to change; Enryaku-ji already at peak; Momiji Festival 31 Oct–23 Nov; Daikaku-ji, Obai-in, Hozukyo, Ninna-ji pictured | https://kyoto.travel/en/news/autumn-calendar-updated/ | 2026-11-07 |
| Tofuku-ji "one of the most popular spots"; Tsutenkyo maples centrepiece | https://kyoto.travel/en/destinations/tofukuji-temple/ | 2026-11-07 |
| Tofukuji: JR Nara Line or Keihan to Tofukuji Station, 10-minute walk | https://www.japan.travel/en/spot/1125/ | 2026-11-07 |
| Eikando: famous foliage, evening illumination, just south of Philosopher's Path, huge crowds | https://www.japan.travel/en/spot/1172/ | 2026-11-07 |
| Kiyomizu-dera night light-up mid to late November | https://www.japan.travel/en/guide/november/ | 2026-11-07 |
| Less-crowded countryside alternative | https://kyoto.travel/en/seasonal-info/autumnleaves/ | 2026-11-07 |
| Yamashina, Daigo, Okazaki highlighted; Kyoto Smart Navi real-time crowding, no app/registration; luggage storage/same-day delivery at Kyoto Station; Subway and Bus 1-Day Pass coverage; illuminations Oct–Dec | https://kyoto.travel/en/news/autumn-sightseeing-tips/ | 2026-11-07 |
| 2026 illumination events list published | https://kyoto.travel/en/news/autumn-illumination-news/ | 2026-11-07 |

## articles/hokkaido-in-winter.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Snow season late November to early May | https://visit-hokkaido.jp/en/adventure-travel/traveler/attractions/snow-season-activity/ | 2026-11-07 |
| Resorts open November to May; ~15 m snow a year; winds from Siberia; ski areas Niseko United, Tomamu, Sahoro, Kiroro, Rusutsu, Furano; airport buses to western resorts 2–3 hours | https://www.japan.travel/en/sports/snow/hokkaido/ | 2026-11-07 |
| Winter route Dec–Mar; White Illumination late Nov–mid Mar; Christmas Market late Nov–25 Dec; Snow Festival and Otaru Snow Light Path early–mid Feb; Rapid Airport 37 min | https://www.jrhokkaido.co.jp/global/english/travel/model/winter02.html | 2026-11-07 |
| Otaru Snow Light Path 6–13 February 2027; Otaru Canal, former Temiya line | https://www.sapporo.travel/en/event-list/page/2/?cssn%5B0%5D=s-winter | 2026-11-07 |
| 2027 festival 4–11 February at Odori, Tsudome, Susukino; info to be updated | https://www.snowfes.com/ | 2026-11-07 |
| 2025 festival (75th) 4–11 February | https://www.snowfes.com/en/ | 2026-11-07 |
| Tsudome in Higashi-ku; Susukino Minami 4-jo to 7-jo; Odori 1.5 km 1–12 chome lit sundown–10pm; contest at 11-chome; began 1950 with six sculptures by students; >2 million visitors a year | https://www.sapporo.travel/en/event/event-list/sapporo_snow_festival/ | 2026-11-07 |
| Drift ice mid January–late March; Nemuro Strait Feb–Mar; southernmost in N. Hemisphere; icebreakers Abashiri & Monbetsu; Rausu cruises; Utoro walks; flights to Memanbetsu, Monbetsu, Nakashibetsu | https://www.japan.travel/en/spot/466/ | 2026-11-07 |
| Drift ice walk Utoro, guided, dry suit, season Dec–Feb | https://www.japan.travel/national-parks/parks/shiretoko/see-and-do/walk-drift-ice/ | 2026-11-07 |
| Drift ice season mid Feb–early Mar, avg about -6C; museum ice at -15C; Memanbetsu–Abashiri Station bus ~35 min; winter bus limited | https://visit-hokkaido.jp/en/plan/detail_14.html | 2026-11-07 |
| Aurora period 20 Jan–31 Mar (no year stated); ~1 hour; boards Roadside Station Abashiri; advance booking recommended; Cape Notoro if no ice; cancellations not announced individually | https://www.ms-aurora.com/abashiri/en/ | 2026-11-07 |
| Other activities: backcountry, dog sledding, winter canoeing Kushiro Wetland & Lake Shikotsu, ice fishing for pond smelt | https://visit-hokkaido.jp/en/adventure-travel/traveler/attractions/snow-season-activity/ | 2026-11-07 |
| Disruption advice: check operation info, boards, alternatives; buses extremely crowded; travel time may increase; certificate at station | https://www.jrhokkaido.co.jp/global/english/travel/airport_disruption.html | 2026-11-07 |
| Operation info marks cancelled / delayed 30+ min / replacement bus | https://www3.jrhokkaido.co.jp/webunkou/index_en.html | 2026-11-07 |

## articles/shirakawa-go-in-winter.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Ogimachi, Gifu; >100 gassho buildings, still inhabited; UNESCO 1995 | https://shirakawa-go.gr.jp/en/ | 2026-11-07 |
| Preservation district 1976; WHS 1995 with Gokayama (Toyama); gassho = praying hands; sasu truss; heavy snowfall; yui; snow 170 cm+ in February; record 4.5 m | https://shirakawa-go.gr.jp/en/highlights/ | 2026-11-07 |
| 41st light-up 2027: 11 (Mon, holiday), 17, 24, 31 January, 17:30–19:30 | https://shirakawa-go.gr.jp/en/events/142/ | 2026-11-07 |
| Reservation only, no day tickets, neck passes colour-coded, gate from 15:30, regular bus by 15:20 | https://shirakawa-go.gr.jp/en/events/142/ ; /events/148/ | 2026-11-07 |
| Lodging lottery closed 31 Oct 2026, results 10 Nov 2026 | https://shirakawa-go.gr.jp/en/events/142/ ; /events/ | 2026-11-07 |
| Parking: Midashima, ordinary cars, max 10; Round 1 10 Sep 2026 6,000/9,000 yen; Round 2 13:00 1 Dec 2026 7,000/10,000 yen; no changes/refunds except weather cancellation; studless tyres | https://shirakawa-go.gr.jp/en/events/142/ | 2026-11-07 |
| Bus tours: Nohi, Kaetsuno, Toyama Chihou Railway, Hokutetsu, Iruka Kotsu; sales 13 Oct–2 Nov 2026; agency tours 13:00 2 Dec 2026; association handles options 1–3; bus reservations very difficult | https://shirakawa-go.gr.jp/en/events/142/ | 2026-11-07 |
| Observation deck ticket rules; three sessions; tripods banned; may suspend in heavy snow; drones banned; permanent ban; cancellation for cold wave; -10C to 0C, icy roads, flashlight | https://shirakawa-go.gr.jp/en/events/142/ | 2026-11-07 |
| Daytime: no reservation for ordinary cars; 8:00 open, last entry 15:00, leave by 17:00; arrive by 12:00; 2–3 hours | https://shirakawa-go.gr.jp/en/events/148/ | 2026-11-07 |
| Bus terminal ~1 min walk; Takayama ~50 min; Kanazawa ~1h20; Toyama ~1h20; Nagoya Meitetsu Bus Center ~2h30 | https://shirakawa-go.gr.jp/en/access/ | 2026-11-07 |
| Nohi Bus line; operators incl. Hokuriku Tetsudo; "R" = reservation required; phone or Japan Bus Online; fares 2,800/2,800 until 30 Nov 2026, 2,900/2,900 from 1 Dec 2026; delays of 2+ hours possible | https://www.nouhibus.co.jp/route_bus/shirakawago_en/ | 2026-11-07 |

## qa/when-is-the-sapporo-snow-festival.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| 2027: 4 (Thu)–11 (Thu, holiday) February, Odori/Tsudome/Susukino, same dates; info to be updated | https://www.snowfes.com/ | 2026-11-07 |
| 2025 (75th): 4–11 February | https://www.snowfes.com/en/ | 2026-11-07 |
| Site locations and descriptions; 1950 origin; >2 million visitors; no hours stated | https://www.sapporo.travel/en/event/event-list/sapporo_snow_festival/ | 2026-11-07 |
| Early to mid February; White Illumination late Nov–mid Mar | https://www.jrhokkaido.co.jp/global/english/travel/model/winter02.html | 2026-11-07 |
| Otaru Snow Light Path 6–13 February 2027 | https://www.sapporo.travel/en/event-list/page/2/?cssn%5B0%5D=s-winter | 2026-11-07 |

### Research set E

#### Facts file E

## articles/naoshima-art-islands.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Benesse Art Site Naoshima = collective name for art activities of Benesse Corporation and Fukutake Foundation | https://benesse-artsite.jp/en/about/ | 2026-11-07 |
| Covers Naoshima and Teshima (Kagawa) and Inujima (Okayama) | https://benesse-artsite.jp/en/about/ | 2026-11-07 |
| Facility list per island incl. MECON on Megijima | https://benesse-artsite.jp/en/ | 2026-11-07 |
| Chichu designed by Tadao Ando; Monet, Turrell, De Maria on permanent display | https://benesse-artsite.jp/en/art/chichu.html | 2026-11-07 |
| Teshima Art Museum: Rei Naito and Ryue Nishizawa | https://benesse-artsite.jp/en/art/teshima-artmuseum.html | 2026-11-07 |
| Naoshima New Museum of Art opened spring 2025 near Honmura; Tadao Ando | https://benesse-artsite.jp/en/art/nnmoa.html | 2026-11-07 |
| Online tickets for all art facilities on Naoshima, Teshima, Inujima from 1 Oct 2024 | https://benesse-artsite.jp/en/ | 2026-11-07 |
| Timed (date and time) facilities: Chichu, Sugimoto Gallery, Kinza, Minamidera, Ring of Fire Lunar, Teshima Art Museum | https://benesse-artsite.jp/en/general-information.html | 2026-11-07 |
| Online tickets may sell out; reservation recommended | https://benesse-artsite.jp/en/general-information.html | 2026-11-07 |
| No reservation: Naoshima Bath, The Water, La foret des murmures, Inujima Life Garden, INUJIMA Art Rendezvous | https://benesse-artsite.jp/en/general-information.html | 2026-11-07 |
| Children 15 and under free but must reserve (timed museums); age 5 and under not admitted to Minamidera, Ring of Fire; Kinza one person per slot | https://benesse-artsite.jp/en/general-information.html | 2026-11-07 |
| Chichu: 10:00-17:00, last entry 16:00; closed Mondays (holiday Monday open, next day closed); weekdays ¥2,500/¥2,800, weekends/holidays ¥2,700/¥3,000; advance reservation with date and time required | https://benesse-artsite.jp/en/art/chichu.html | 2026-11-07 |
| NNMoA: 10:00-16:30, last entry 16:00; closed Mondays (same rule); ¥1,500/¥1,700 | https://benesse-artsite.jp/en/art/nnmoa.html | 2026-11-07 |
| Lee Ufan: 10:00-17:00, last entry 16:30; closed Mondays (same rule); ¥1,200/¥1,400 | https://benesse-artsite.jp/en/art/lee-ufan.html | 2026-11-07 |
| Teshima Art Museum: hours 1 Mar-30 Sep 10-17, 1 Oct-end Feb 10-16; closed Tue (1 Mar-30 Nov), Tue-Thu (1 Dec-end Feb); holiday rule; ¥1,800/¥2,000; no on-site sales if online sold out | https://benesse-artsite.jp/en/art/teshima-artmuseum.html | 2026-11-07 |
| Inujima Seirensho: 9:00-16:30, last entry 16:00; closed Tue-Thu 1 Mar-30 Nov (open national holidays); closed all days 1 Dec-end Feb; ¥2,100/¥2,300 | https://benesse-artsite.jp/en/art/seirensho.html | 2026-11-07 |
| Open-days calendar published | https://benesse-artsite.jp/en/ | 2026-11-07 |
| Takamatsu-Miyanoura, Uno-Miyanoura, Uno-Honmura (20 min) run by Shikoku Kisen | https://benesse-artsite.jp/en/access/ | 2026-11-07 |
| Takamatsu-Miyanoura ferry about 50 min out / 60 min back, high-speed about 30 min; adult ¥680 ferry, ¥1,590 high-speed; no revision date | https://shikokukisen.com/takamatsu-miyanoura/ | 2026-11-07 |
| Uno-Miyanoura ferry about 20 min, passenger boat about 15 min; adult ¥370 both | https://shikokukisen.com/uno-miyanoura/ | 2026-11-07 |
| No boarding reservations; first come, first served | https://www.shikokukisen.com/en/ ; https://shikokukisen.com/takamatsu-miyanoura/ | 2026-11-07 |
| Shikoku Kisen runs Miyanoura-Ieura-Inujima; boats depend on museum opening days, skip stops if closed | https://www.shikokukisen.com/en/ ; https://benesse-artsite.jp/en/access/ | 2026-11-07 |
| Uno Port about 3 min walk from Uno Station; JR Uno Line from Okayama about 50 min; Takamatsu Port about 5 min walk from Takamatsu Station | https://benesse-artsite.jp/en/access/ | 2026-11-07 |
| Ferry schedules may change during the Triennale | https://benesse-artsite.jp/en/access/ | 2026-11-07 |
| Setouchi Triennale: every three years, launched 2010; organiser Setouchi Triennale Executive Committee; 2025 = sixth | https://setouchi-artfest.jp/en/about/mission-and-history/ | 2026-11-07 |
| Archive years 2010, 2013, 2016, 2019, 2022, 2025 | https://setouchi-artfest.jp/archive/2025/ | 2026-11-07 |
| 2025: spring 18 Apr-25 May (38 days), summer 1-31 Aug (31), autumn 3 Oct-9 Nov (38); 107 days | https://setouchi-artfest.jp/archive/2025/ | 2026-11-07 |
| 2028: spring 14 Apr-28 May (45), summer 25 Jul-20 Aug (27), autumn 29 Sep-12 Nov (45); 117 days; one closed day a week per session; all-session venues list | https://setouchi-artfest.jp/en/proposals | 2026-11-07 |

## articles/tax-free-shopping-changes.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Refund method implemented from 1 Nov 2026 under FY2025 tax reform | https://www.nta.go.jp/publication/pamph/shohi/menzei/201805/format/002.htm | 2026-11-07 |
| Pay tax-inclusive price; tax-equivalent refunded after export confirmed at departure; applies to purchases on/after 1 Nov 2026 | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html | 2026-11-07 |
| Up to 31 Oct 2026 eligible visitors bought without paying consumption tax | https://www.japan.travel/en/us/blog/everything-you-need-to-know-japans-new-tax-free-shopping-system/ | 2026-11-07 |
| Eligible: non-resident foreign nationals, entry under 6 months (excl. diplomatic, official, US military); non-resident Japanese nationals, entry under 6 months, My Number Card / residence certificate / family register attachment issued on/after 6 months before last entry | https://www.mlit.go.jp/kankocho/tax-free/about.html | 2026-11-07 |
| Japanese nationals abroad 2+ years: residence certificate, family register attachment copy or My Number Card showing move | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html | 2026-11-07 |
| Visit Japan Web online procedure limited to Temporary Visitor, Diplomat, Official; not Japanese nationals | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html | 2026-11-07 |
| ¥5,000+ excl. tax per day same store; combinable via shared procedure counter | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html | 2026-11-07 |
| No maximum stated; quantities you can personally carry out | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html | 2026-11-07 |
| General goods / consumables categories abolished | https://www.mlit.go.jp/kankocho/tax-free/about.html | 2026-11-07 |
| Special packaging for consumables abolished; consumed food/drink/cosmetics not refundable | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html | 2026-11-07 |
| Gold/platinum bullion and tax-exempt items excluded | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html | 2026-11-07 |
| Items ¥1 million+ (excl. tax): customs may ask for certificates/warranties | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html | 2026-11-07 |
| Within 90 days of purchase; passport at terminal; green completes, red = inspection; before baggage check-in; checked baggage cannot be retrieved | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html ; https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html | 2026-11-07 |
| Per-receipt confirmation; one item missing = no refund for receipt | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html | 2026-11-07 |
| Export without delay; tax collected and penalties if not | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html | 2026-11-07 |
| VJW online at Narita, Haneda, Kansai, Chubu, Fukuoka, New Chitose, Naha | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html | 2026-11-07 |
| Domestic-to-international transfer: procedure at departure airport; seaports/cruises same principles | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html | 2026-11-07 |
| No compensation for missed flight | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00028.html | 2026-11-07 |
| Refund paid by shop or refund service provider after customs confirmation; methods vary by shop; registration explained at purchase | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00056.html | 2026-11-07 |
| Methods: bank transfer, credit card, app-based, cash at departure port | https://www.nta.go.jp/publication/pamph/shohi/menzei/201805/format/002.htm ; https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html | 2026-11-07 |
| Overseas shipping depends on shop; separate shipment method abolished 31 Mar 2025 | https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00027.html | 2026-11-07 |

## qa/how-does-tax-free-shopping-work.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| All facts are a subset of the tax-free article table above (1 Nov 2026 start, ¥5,000 minimum, no maximum, abolished categories/packaging, eligibility, 90 days, terminal, green/red, VJW airports and status limits, per-receipt rule, no compensation for missed flight, refund payer and methods) | as above | 2026-11-07 |

### Research set F

#### Facts file F

## src/content/articles/nikko-day-trip.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| World Heritage name "Shrines and Temples of Nikko" | https://www.city.nikko.lg.jp/soshiki/10/1041/1_1/2/4/1559.html | 2026-11-07 |
| Registered at 23rd session of World Heritage Committee, Marrakesh, December 1999 | https://www.city.nikko.lg.jp/soshiki/10/1041/1_1/2/4/1559.html | 2026-11-07 |
| Two Shinto shrines and one Buddhist temple: Toshogu, Futarasan, Rinnoji | https://www.city.nikko.lg.jp/soshiki/10/1041/1_1/2/4/1559.html | 2026-11-07 |
| 103 buildings: 9 National Treasures, 94 Important Cultural Properties | https://www.city.nikko.lg.jp/soshiki/10/1041/1_1/2/4/1559.html | 2026-11-07 |
| Registered site 50.8 ha; buffer zone 373.2 ha | https://www.city.nikko.lg.jp/soshiki/10/1041/1_1/2/4/1559.html | 2026-11-07 |
| Most buildings the work of some of Japan's greatest 17th-century artists | https://www.city.nikko.lg.jp/soshiki/10/1041/1_1/2/4/1559.html | 2026-11-07 |
| Shinkyo Bridge and Taiyuin listed among World Heritage spots | https://www.visitnikko.jp/en/spots/shrines-and-temples-of-nikko | 2026-11-07 |
| Shinkyo part of Futarasan-jinja; gateway to shrines and temples | https://www.japan.travel/en/destinations/kanto/tochigi/nikko-area/ | 2026-11-07 |
| 103 structures over three complexes within easy walking distance | https://www.japan.travel/en/destinations/kanto/tochigi/nikko-area/ | 2026-11-07 |
| Toshogu enshrines Tokugawa Ieyasu, enshrined a year after his death | https://www.japan.travel/en/spot/1482/ | 2026-11-07 |
| Yomeimon: 508 carvings | https://www.japan.travel/en/spot/1482/ | 2026-11-07 |
| Three monkeys: one of eight carvings on Sacred Horse's stable | https://www.japan.travel/en/spot/1482/ | 2026-11-07 |
| Sleeping cat with two sparrows on reverse | https://www.japan.travel/en/spot/1482/ | 2026-11-07 |
| Futarasan founded 8th century; three sacred mountains; main grounds free, inner garden small fee; branch at Lake Chuzenji | https://www.japan.travel/en/destinations/kanto/tochigi/nikko-area/ | 2026-11-07 |
| Rinnoji founded 8th century; three Buddha images; garden popular for autumn colour | https://www.japan.travel/en/destinations/kanto/tochigi/nikko-area/ | 2026-11-07 |
| Taiyuin is mausoleum of Tokugawa Iemitsu, Ieyasu's grandson | https://www.japan.travel/en/destinations/kanto/tochigi/nikko-area/ | 2026-11-07 |
| Tobu SPACIA Asakusa to Tobu-Nikko direct about 1h50 | https://www.tobu.co.jp/en/access/nikko/ | 2026-11-07 |
| Tobu SPACIA Asakusa to Shimo-imaichi about 1h40, then Tobu Nikko Line about 10 min | https://www.tobu.co.jp/en/access/nikko/ | 2026-11-07 |
| Through SPACIA from JR Shinjuku about 2 hours (direct); not covered by Nikko pass | https://www.tobu.co.jp/en/access/nikko/ | 2026-11-07 |
| Through SPACIA from JR Ikebukuro about 1h55 (direct) | https://www.tobu.co.jp/en/access/nikko/ | 2026-11-07 |
| Tobu local from Asakusa about 60 min longer than limited express, about half the fare | https://www.visitnikko.jp/en/plan-your-trip/getting-to-and-around-nikko/ | 2026-11-07 |
| Shinkansen to Utsunomiya + JR Nikko Line: costs more, transfer, fully covered by JR Pass (no time given) | https://www.visitnikko.jp/en/plan-your-trip/getting-to-and-around-nikko/ | 2026-11-07 |
| Tobu limited expresses leave Asakusa about twice per hour | https://www.visitnikko.jp/en/plan-your-trip/faqs/ | 2026-11-07 |
| NIKKO PASS ALL AREA: 8,000 yen adult / 4,000 child, valid 4 days | https://www.tobu.co.jp/en/ticket/nikko/all.html | 2026-11-07 |
| Pass for foreign visitors; Japanese nationals travelling with them may buy | https://www.tobu.co.jp/en/ticket/nikko/all.html | 2026-11-07 |
| One round trip Asakusa/TOKYO SKYTREE to Shimo-Imaichi; Tobu lines Shimo-Imaichi, Tobu-Nikko, Shin-Fujiwara; all Tobu Bus lines in Nikko | https://www.tobu.co.jp/en/ticket/nikko/all.html | 2026-11-07 |
| Lake Chuzenji cruise and Odashirogahara hybrid bus: mid-April to 30 November | https://www.tobu.co.jp/en/ticket/nikko/all.html | 2026-11-07 |
| Limited express ticket must be bought separately; shrine/temple admission not included | https://www.tobu.co.jp/en/ticket/nikko/all.html | 2026-11-07 |
| "world heritage area" version mentioned on page | https://www.tobu.co.jp/en/ticket/nikko/all.html | 2026-11-07 |
| Akechidaira Ropeway suspended 16 January 2026 to 31 August 2027, may be extended | https://www.tobu.co.jp/en/ticket/nikko/all.html | 2026-11-07 |
| Tobu buses to Yumoto-onsen and Chuzenji-onsen run under ALL AREA PASS; delays possible from traffic, snow | https://www.tobu.co.jp/en/access/nikko/bus_nikko.html | 2026-11-07 |
| Irohazaka: 48 sharp curves linking Nikko to Okunikko; foliage peak mid-October to early November; traffic jams | https://www.visitnikko.jp/en/spots/irohazaka-slope/ | 2026-11-07 |
| Lake Chuzenji altitude 1,269 m, Japan's highest natural lake, formed about 20,000 years ago by Mt Nantai eruption | https://www.visitnikko.jp/en/spots/lake-chuzenji/ | 2026-11-07 |
| Bus to Lake Chuzenji about 50 min from Nikko / Tobu-Nikko, bound for Chuzenji Onsen or Yumoto Onsen | https://www.visitnikko.jp/en/spots/lake-chuzenji/ | 2026-11-07 |
| Kegon Falls 97 m from Lake Chuzenji; bus about 40 min to Chuzenji Onsen last stop; paid observation platform at base | https://www.visitnikko.jp/en/spots/kegon-falls/ | 2026-11-07 |
| World Heritage Tour bus 13 min from Nikko or Tobu-Nikko Station | https://www.visitnikko.jp/en/spots/shrines-and-temples-of-nikko | 2026-11-07 |
| Walk from Nikko Station about 45 min, passing Shinkyo | https://www.japan.travel/en/spot/1482/ | 2026-11-07 |
| Foliage: Okunikko late Sept to late Oct; Central Nikko late Oct to mid-Nov | https://www.visitnikko.jp/en/plan-your-trip/faqs/ | 2026-11-07 |
| Drive Nikko Station to Lake Chuzenji about 45 min normally, over 4 hours at peak congestion (mid-Oct to mid-Nov) | https://www.visitnikko.jp/en/plan-your-trip/getting-to-and-around-nikko/ | 2026-11-07 |

## src/content/articles/kamakura-day-trip.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Kamakura about an hour from Tokyo, about 30 min from Yokohama | https://visit.trip-kamakura.com/ | 2026-11-07 |
| JR Yokosuka Line: Tokyo about 60 min, Shinagawa about 50 min, Yokohama about 25 min to Kamakura | https://visit.trip-kamakura.com/access/ | 2026-11-07 |
| Tokyo Station to Kamakura 55 min on JR Yokosuka Line | https://www.japan.travel/en/destinations/kanto/kanagawa/kamakura-and-around/ | 2026-11-07 |
| Shonan-Shinjuku Line from Shinjuku to Kamakura Station (no time given) | https://www.japan.travel/en/spot/1588/ | 2026-11-07 |
| Tokyo to Kita-Kamakura 55 min; Kita-Kamakura to Kamakura 3 min; Engakuji 1 min walk | https://www.japan.travel/en/itineraries/culture-on-the-coast-in-kamakura/ | 2026-11-07 |
| Great Buddha: bronze Amida, 11.3 m, 121 tons, 13th century, Jodo sect temple Kotoku-in | https://www.japan.travel/en/spot/1588/ | 2026-11-07 |
| Hall repeatedly destroyed by typhoons, tsunami, earthquakes in 14th-15th c.; statue left exposed in 1498 | https://www.japan.travel/en/spot/1588/ | 2026-11-07 |
| Kotoku-in hours Apr-Sep 8:00-17:30; Oct-Mar 8:00-17:00; entry until 15 min before closing | https://www.kotoku-in.jp/en/ | 2026-11-07 |
| Admission 300 yen; children 6-12 150 yen; interior +50 yen (free under six), 8:00-16:30, until 10 min before close | https://www.kotoku-in.jp/en/ | 2026-11-07 |
| Seven-minute walk from Hase Station | https://www.kotoku-in.jp/en/ | 2026-11-07 |
| No smoking; no drones; no selfie sticks inside statue; pets in carrier only, leashed dogs not allowed except service dogs; commercial photography needs permission | https://www.kotoku-in.jp/en/ | 2026-11-07 |
| Tsurugaoka Hachimangu: 10 min walk from JR Kamakura East Exit; built by Minamoto no Yoriyoshi as branch of Iwashimizu Hachimangu; moved 100 years later by Yoritomo | https://visit.trip-kamakura.com/things-to-do/tsurugaoka-hachimangu/ | 2026-11-07 |
| Gate 6:00-20:00; Treasure Hall 200 yen adult / 100 yen elementary; flower report peonies, wisteria, red spider lilies, autumn leaves | https://visit.trip-kamakura.com/things-to-do/tsurugaoka-hachimangu/ | 2026-11-07 |
| 1180 Yoritomo moved shrine from Yuigahama Beach; Yoritomo established Kamakura Shogunate | https://www.japan.travel/en/destinations/kanto/kanagawa/kamakura-and-around/ | 2026-11-07 |
| Yabusame at annual festival in September | https://visit.trip-kamakura.com/seasons/ | 2026-11-07 |
| Hydrangeas in full bloom in June; rainy season June and July | https://visit.trip-kamakura.com/seasons/ | 2026-11-07 |
| Autumn leaves best late November to early December | https://visit.trip-kamakura.com/seasons/ | 2026-11-07 |
| Hatsumode crowds in January; morning sightseeing in summer | https://visit.trip-kamakura.com/seasons/ | 2026-11-07 |
| Beaches and umi no ie open 1 July to 31 August | https://visit.trip-kamakura.com/seasons/ | 2026-11-07 |
| Meigetsuin "Hydrangea Temple"; 10 min from Kita-Kamakura; 500/300 yen; rear garden +500 yen; 9:00-16:00; times may change in June | https://visit.trip-kamakura.com/things-to-do/meigetsuin-temple/ | 2026-11-07 |
| Hasedera: hydrangea listed as summer flower; 5 min from Hase; 400/200 yen; 8:00-16:30 (close 17:00) Jul-Mar; 8:00-17:00 (close 17:30) Apr-Jun | https://visit.trip-kamakura.com/things-to-do/hasedera-temple/ | 2026-11-07 |
| Enoden: 15 stations Fujisawa to Kamakura; Hase, Yuigahama, Wadazuka, Kamakura order | https://www.enoden.co.jp/en/train/station/ | 2026-11-07 |
| Noriorikun: 800 yen adult / 400 yen child; whole line, day of issue; ticket machines at all stations; discounts at Hasedera, Enoshima Sea Candle, Enoshima Aquarium | https://www.enoden.co.jp/en/tourism/ticket/noriorikun/ | 2026-11-07 |
| IC card touch on/off; simple gates at all stations except Fujisawa, Enoshima, Hase, Kamakura; error if balance below basic fare | https://www.enoden.co.jp/en/train/please/ | 2026-11-07 |
| No track entry; stay behind yellow line; no flash; don't inconvenience others/residents | https://www.enoden.co.jp/en/train/please/ | 2026-11-07 |
| Respect Kamakura Guidelines (quiet at temples, eating manners, rubbish, hawks, photos, vehicles, bikes in crowded areas, residents) | https://visit.trip-kamakura.com/guidelines/ | 2026-11-07 |

### Research set G

#### Facts file G

## nara-day-trip.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Nara was the capital of Japan from 710 to 784 | https://www.visitnara.jp/world-heritage/ | 2026-11-07 |
| Historic Monuments of Ancient Nara designated a joint UNESCO World Heritage Site in December 1998 | https://www.kasugataisha.or.jp/en/about_en/ | 2026-11-07 |
| Eight component parts: Heijokyo palace site, Todai-ji, Kofuku-ji, Yakushi-ji, Toshodai-ji, Gango-ji, Kasuga Taisha, Kasugayama Primeval Forest | https://www.visitnara.jp/world-heritage/ | 2026-11-07 |
| Great Buddha 15 m high, completed 752 | https://www.visitnara.jp/venues/A00485/ | 2026-11-07 |
| Nandaimon guardian figures by Unkei and Kaikei | https://www.visitnara.jp/venues/A00485/ | 2026-11-07 |
| Daibutsu-den destroyed by fire 1180 and 1567; present hall Edo period; 7 bays vs original 11; same height and depth | https://www.todaiji.or.jp/en/information/daibutsuden/ | 2026-11-07 |
| Hall 57.012 m wide, 50.480 m long, 48.742 m high; "largest wooden structure in the world" (Todai-ji's claim); hall and statue National Treasures | https://www.todaiji.or.jp/en/information/daibutsuden/ | 2026-11-07 |
| Daibutsu-den hours: Apr-Oct 7:30-17:30; Nov-Mar 8:00-17:00 | https://www.todaiji.or.jp/en/information/haikan/ | 2026-11-07 |
| Daibutsu-den adult ¥800, child (6-12) ¥400; joint ticket with museum ¥1,200 / ¥600 | https://www.todaiji.or.jp/en/information/haikan/ | 2026-11-07 |
| Todai-ji 19 minutes on foot from Kintetsu-Nara Station | https://www.visitnara.jp/venues/A00485/ | 2026-11-07 |
| Kasuga Taisha gods enshrined 9 November 768; 3,000 donated lanterns; hours 7:00-17:00 | https://www.kasugataisha.or.jp/en/about_en/ | 2026-11-07 |
| Kasuga Taisha opposite side of park from Todai-ji, path to Nigatsudo; wisteria in May | https://www.visitnara.jp/destinations/area/nara-park/ (venue A00487) | 2026-11-07 |
| Kofuku-ji established with the new capital in 710; Fujiwara family temple; Ashura figure in National Treasure Museum; museum ¥900 adult; 9:00-17:00 (last admission 16:30); 5 min walk from Kintetsu-Nara | https://www.visitnara.jp/venues/A00486/ | 2026-11-07 |
| Kofuku-ji pagoda 50 m, second tallest five-storey pagoda in Japan | https://www.japan.travel/en/destinations/kansai/nara/nara-park-and-around/ | 2026-11-07 |
| Deer are wild animals designated a national natural monument | https://www.pref.nara.lg.jp/site/park/1003.html and /1232.html | 2026-11-07 |
| July 2026 survey: 1,687 deer (411 males, 990 females, 286 young) | https://www.pref.nara.lg.jp/site/park/1003.html | 2026-11-07 |
| Shika senbei made of rice bran and wheat flour, no sugar or salt | https://www.pref.nara.lg.jp/site/park/1003.html | 2026-11-07 |
| Feeding prohibited except shika senbei; no sweets, bread, vegetables, leftovers | https://www.pref.nara.lg.jp/site/park/1232.html | 2026-11-07 |
| Deer may charge, butt, bite, kick; spring (mothers) and autumn (rut) cautions; children not alone; dogs on lead; hold bags/maps; no bins, take rubbish home; do not hit or chase | https://www.pref.nara.lg.jp/site/park/1232.html | 2026-11-07 |
| Park 5 min walk from Kintetsu-Nara, 20 min from JR Nara | https://www.japan.travel/en/destinations/kansai/nara/nara-park-and-around/ | 2026-11-07 |
| JR Kyoto-Nara Miyakoji Rapid about 45 min; Kintetsu Kyoto-Nara limited express 35 min (surcharge); JR Osaka Yamatoji Rapid about 50 min; JR Tennoji 36 min; Kintetsu Osaka Namba direct about 40 min | https://narashikanko.or.jp/en/access/ | 2026-11-07 |

## hiroshima-and-miyajima.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Museum address 1-2 Nakajima-cho, Naka-ku; "conveys to the world the horrors and the inhumane nature of nuclear weapons" | https://hpmmuseum.jp/?lang=eng | 2026-11-07 |
| Hours: Mar-Jul 7:30-19:00; Aug 7:30-20:00 (21:00 on 5 and 6 Aug); Sep-Nov 7:30-19:00; Dec-Feb 7:30-18:00 | https://hpmmuseum.jp/modules/info/index.php?action=PageView&page_id=47&lang=eng | 2026-11-07 |
| Closed 30 and 31 December and mid-February | same | 2026-11-07 |
| Admission adult ¥200, high school ¥100, junior high and younger free | same | 2026-11-07 |
| Reservation required 7:30-8:30 and evening slot (Mar-Jul and Sep-Nov 17:30-18:30; Dec-Feb 16:30-17:30) | same and https://hpmmuseum.jp/?lang=eng | 2026-11-07 |
| Web tickets may sell out; admission may be temporarily restricted when crowded | https://hpmmuseum.jp/?lang=eng | 2026-11-07 |
| Museum access: streetcar Line 1 to Fukuro-machi or Line 6/Line 2 to Genbaku Domu Mae, about 25 min; bus 24 to Heiwa kinen koen about 20 min | https://hpmmuseum.jp/modules/info/index.php?action=PageView&page_id=154&lang=eng | 2026-11-07 |
| Dome was Hiroshima Prefectural Commercial Exhibition Hall, completed April 1915, architect Jan Letzel | https://www.city.hiroshima.lg.jp/english/peace/1029869/1009929.html | 2026-11-07 |
| World Heritage decision 5 December 1996, Merida, Mexico; national historic site June 1995 | https://www.city.hiroshima.lg.jp/english/peace/1029869/1010013.html | 2026-11-07 |
| Inscribed name "Hiroshima Peace Memorial (Genbaku Dome)" | https://www.city.hiroshima.lg.jp/english/peace/1029869/1009932.html | 2026-11-07 |
| Streetcar #2 or #6 from Hiroshima Station South Exit to Genbaku Domu-mae about 20 min; #2 runs toward Miyajima-guchi | https://www.city.hiroshima.lg.jp/english/peace/1029869/1009938.html | 2026-11-07 |
| Itsukushima Shrine registered as World Heritage Site 1996 | https://www.itsukushimajinja.jp/en/ | 2026-11-07 |
| Shrine traditionally 593; Taira no Kiyomori construction 1168; main sanctuary 1571 | https://www.miyajima.or.jp/english/spot/spot_itsukushima.html | 2026-11-07 |
| Shrine hours by period (table) | https://www.itsukushimajinja.jp/en/admission.html | 2026-11-07 |
| Shrine admission adult ¥300, high school ¥200, elementary/junior high ¥100; combined with Treasure Hall adult ¥500; floorboard gaps for high tide | https://www.itsukushimajinja.jp/en/admission.html | 2026-11-07 |
| Daily tide page lists times to walk to the Great Torii and times the shrine appears to float | https://www.miyajima.or.jp/english/sio/sio.php | 2026-11-07 |
| Two ferry companies: JR ferry and Miyajima Matsudai Kisen; about 10 minutes | https://www.miyajima.or.jp/english/access/access.html | 2026-11-07 |
| JR ferry: Japan Rail Pass and JR-West Rail Pass usable; IC cards accepted | https://jr-miyajimaferry.co.jp/en/ | 2026-11-07 |
| JR ferry adult ¥180, child (6-12) ¥90 one way; visit tax charged separately | https://jr-miyajimaferry.co.jp/en/fare/ | 2026-11-07 |
| JR ferry Great Torii services 9:10-16:10 from Miyajimaguchi, same crossing time; trip about 10 minutes | https://jr-miyajimaferry.co.jp/en/timetable/ | 2026-11-07 |
| Matsudai terminal 1 min walk from Hiroden Miyajima-guchi, 6 min from JR Miyajima-guchi | https://miyajima-matsudai.co.jp/en/access.html | 2026-11-07 |
| Visit tax since 1 October 2023; ¥100 per visit or ¥500 per year; collected with ferry fare | https://www.city.hatsukaichi.hiroshima.jp/soshiki/110/59551.html | 2026-11-07 |

## is-there-a-tax-to-visit-miyajima.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Tax started 1 October 2023 | https://www.city.hatsukaichi.hiroshima.jp/soshiki/110/59551.html | 2026-11-07 |
| Applies to anyone entering Miyajima by boat | same | 2026-11-07 |
| ¥100 per person per visit; ¥500 per person per year paid in advance | same | 2026-11-07 |
| Purpose: cover costs from large visitor numbers; tourism good for residents and visitors | same | 2026-11-07 |
| Ferries/charter boats: added to fare, collected by operator; pier: with pier fee; shore landing: pay within 10 days at City Hall, Miyajima or Ono branch | same | 2026-11-07 |
| Annual payment at City Hall, Miyajima or Ono branch by the 10th of the month before first planned visit | same | 2026-11-07 |
| Not taxed: residents; commuters 48+ hours/month; students 48+ hours/month; city certificate | same | 2026-11-07 |
| Exempt: preschool children; school trips (not university) with teachers/attendants, school certificate; holders of disability certificate / ryoiku handbook / mental health and welfare handbook | same | 2026-11-07 |
| JR ferry fares exclude the tax, charged separately; Japan Rail Pass usable on JR ferry | https://jr-miyajimaferry.co.jp/en/fare/ | 2026-11-07 |
| Two ferry companies from Miyajimaguchi | https://www.miyajima.or.jp/english/access/access.html | 2026-11-07 |

### Research set H

#### Facts file H

## kanazawa.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Kenroku-en: Edo-period daimyo garden shaped by successive Kaga domain lords | https://shiro-niwa.pref.ishikawa.lg.jp/kenrokuen-garden/about.html | 2026-11-07 |
| Kenroku-en is a Special Place of Scenic Beauty; one of three great gardens with Kairakuen (Mito) and Koraku-en (Okayama) | https://shiro-niwa.pref.ishikawa.lg.jp/kenrokuen-garden/about.html | 2026-11-07 |
| Kenroku-en hours 1 Mar-15 Oct 7:00-18:00 (last entry 17:30); 16 Oct-end Feb 8:00-17:00 (last entry 16:30) | https://shiro-niwa.pref.ishikawa.lg.jp/kenrokuen-garden/info.html | 2026-11-07 |
| Kenroku-en fees: adults 320 yen (group 250), children 6 to under 18 100 yen (group 80); group = 30+ | https://shiro-niwa.pref.ishikawa.lg.jp/kenrokuen-garden/info.html | 2026-11-07 |
| Free for 65+ with proof of age | https://shiro-niwa.pref.ishikawa.lg.jp/kenrokuen-garden/info.html | 2026-11-07 |
| Free opening days: ~7 days cherry blossom (late Mar-early Apr), 3 days Hyakumangoku Festival (early June), 14-16 Aug, 3 Nov, 31 Dec-3 Jan | https://shiro-niwa.pref.ishikawa.lg.jp/kenrokuen-garden/info.html | 2026-11-07 |
| Early-morning free entry via Hasuike Gate or Zuijinzaka only; from 4:00 (1 Apr-31 Aug), from 6:00 (1 Nov-end Feb); leave 15 min before paid hours | https://shiro-niwa.pref.ishikawa.lg.jp/kenrokuen-garden/info.html | 2026-11-07 |
| Evening illuminated openings in cherry blossom and autumn leaf seasons | https://shiro-niwa.pref.ishikawa.lg.jp/kenrokuen-garden/info.html | 2026-11-07 |
| Kanazawa Castle: residence of Maeda family of Kaga domain, ruling Kaga, Noto, Etchu | https://shiro-niwa.pref.ishikawa.lg.jp/kanazawa-castle/ | 2026-11-07 |
| Ishikawa Gate is National Important Cultural Property; Hishi yagura, Gojikken nagaya, Hashizume Gate reconstructed | https://shiro-niwa.pref.ishikawa.lg.jp/kanazawa-castle/ | 2026-11-07 |
| Castle Park free; 7:00-18:00 (1 Mar-15 Oct), 8:00-17:00 (16 Oct-end Feb); earlier opening for morning walks | https://shiro-niwa.pref.ishikawa.lg.jp/kanazawa-castle/info/open.php | 2026-11-07 |
| Castle facilities 9:00-16:30 (last entry 16:00), open all year; adults 320 yen, children 100 yen; combined with Kenroku-en 500 yen | https://shiro-niwa.pref.ishikawa.lg.jp/kanazawa-castle/info/fee.php | 2026-11-07 |
| Geisha houses moved in 1820 to three districts; Higashi Chaya largest | https://visitkanazawa.jp/en/attractions/detail_10212.html | 2026-11-07 |
| Lattice on ground floor, guest rooms upstairs; geisha house interior nearly 200 years old; ~60 minutes; 5-min walk from Hashiba-cho bus stop (Loop Bus, Hokutetsu, West JR Bus) | https://visitkanazawa.jp/en/attractions/detail_10212.html | 2026-11-07 |
| Omicho: established Edo period, 300+ years, 170+ stores, 9:00-16:00 varies, closed New Year; 1 min from Musashigatsuji Omicho Market stop | https://visitkanazawa.jp/en/restaurants/detail_10030.html | 2026-11-07 |
| Museum mission: "generating new culture and revitalizing its community" | https://www.kanazawa21.jp/en/ | 2026-11-07 |
| Museum opened 2004; disc-like building; The Swimming Pool by Leandro Erlich | https://visitkanazawa.jp/en/attractions/detail_10066.html | 2026-11-07 |
| Exhibition Zone 10:00-18:00 (to 20:00 Fri/Sat), closed Mondays (or next weekday if holiday) and New Year; Public Zone 9:00-22:00 | https://www.kanazawa21.jp/data_list.php?g=7&d=5 | 2026-11-07 |
| Museum renovation closure 6 May 2027 to March 2028 (planned) | https://www.kanazawa21.jp/data_list.php?g=7&d=5 | 2026-11-07 |
| Kanazawa produces 99% of domestic gold leaf, 100% of silver and platinum leaf | https://visitkanazawa.jp/en/crafts | 2026-11-07 |
| Kutani ware five colours red, yellow, green, purple, dark blue; Kaga yuzen "Kaga gosai", "bokashi"; other crafts listed | https://visitkanazawa.jp/en/crafts | 2026-11-07 |
| Tokyo to Kanazawa 2h30 by Hokuriku Shinkansen | https://visitkanazawa.jp/en/getting-to-kanazawa | 2026-11-07 |
| Osaka to Tsuruga 1h20 Thunderbird; Tsuruga to Kanazawa 40 min Shinkansen | https://visitkanazawa.jp/en/getting-to-kanazawa | 2026-11-07 |
| Hokuriku Shinkansen Kanazawa-Tsuruga opened 16 March 2024; Thunderbird runs Osaka/Kyoto-Tsuruga, transfer moved to Tsuruga | https://www.westjr.co.jp/global/en/ticket/pdf/press_20240123.pdf | 2026-11-07 |
| Noto heavily affected Jan 2024; info as of Aug 2026: central Noto minimal damage; Nanao easily reached; Oku-Noto slowly reopening, some roads closed/detours | https://visitkanazawa.jp/en/trip-ideas/detail_491.html | 2026-11-07 |
| JR Nanao Line and Noto Railway resumed | https://visitkanazawa.jp/en/faq/ | 2026-11-07 |

## takayama.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Sanmachi retains Edo-period (1603-1867) atmosphere; three main streets; Preservation District for Groups of Traditional Buildings; 15-min walk east of JR Takayama Station | https://www.japan.travel/en/spot/152/ | 2026-11-07 |
| "dark-wood merchant houses and small water canals" | https://global.jr-central.co.jp/en/goldenroute/area/hida-takayama/ | 2026-11-07 |
| Sake breweries marked by cedar-leaf balls | https://www.hida.jp/english/touristattractions/takayamacity/historyandculture/4000153.html | 2026-11-07 |
| Seven breweries, each 100+ years; some tours/tastings | https://www.japan.travel/en/spot/153/ and https://www.japan.travel/en/spot/152/ | 2026-11-07 |
| Miyagawa market: Apr-Nov 7:00-12:00, Dec-Mar 8:00-12:00, all year; between Kaji-bashi and Yayoi-bashi; goods sold | https://www.hida.jp/english/touristattractions/takayamacity/historyandculture/4000162.html | 2026-11-07 |
| Jinya-mae market: same hours; in front of Takayama Jinya; ~10 min walk from station; farmers only | https://www.hida.jp/english/touristattractions/takayamacity/historyandculture/4001635.html | 2026-11-07 |
| Jinya in use 1692-1969; 60+ similar once, only one left | https://www.hida.jp/english/touristattractions/takayamacity/historyandculture/4000155.html | 2026-11-07 |
| Jinya hours Mar-Oct 8:45-17:00, Aug 8:45-18:00, Nov-Feb 8:45-16:30; closed 29 Dec, 31 Dec, 1 Jan; 430 yen (group 380); free senior high and younger | https://www.hida.jp/english/touristattractions/takayamacity/historyandculture/4000155.html | 2026-11-07 |
| Spring festival 14-15 April, Hie Shrine, 12 yatai, 3 with marionettes at Jinya, night festival 14 April, south of Yasugawa St, not postponed for rain | https://www.hida.jp/english/festivalsandevents/4000208.html | 2026-11-07 |
| Autumn festival 9-10 October, Sakurayama Hachimangu, 11 floats (10 displayed, Gyojintai under repair), Hotei-tai marionette, night festival 9 Oct, Shimomachi north of Yasugawa St | https://www.hida.jp/english/festivalsandevents/4000209.html | 2026-11-07 |
| Hida beef: black-haired breed, raised in Gifu 14+ months, graded; otherwise "Hida Wagyu"; bull Yasufuku 1981; sukiyaki, shabu-shabu, yakiniku, steak | https://www.hida.jp/english/localspeciality/food/4000195.html | 2026-11-07 |
| Limited Express Hida Nagoya-Takayama about 2h20 | https://global.jr-central.co.jp/en/goldenroute/area/hida-takayama/ | 2026-11-07 |
| Nozomi Tokyo-Nagoya ~100 min; Hida from JR Osaka 255 min; Toyama-Takayama 90 min by train | https://www.hida.jp/english/traveltips/practicalguide/4000220.html | 2026-11-07 |
| Buses: Nagoya 165 min, Shinjuku 5.5 h, Matsumoto 150 min, Toyama 140 min, Osaka Namba 325 min | https://www.hida.jp/english/traveltips/practicalguide/4000220.html | 2026-11-07 |
| Takayama-Shirakawa-go-Kanazawa highway bus from Takayama Nohi Bus Center | https://www.westjr.co.jp/global/en/ticket/pdf/press_20240123.pdf | 2026-11-07 |

### Research set I

#### Facts file I

## okinawa-when-to-go.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Naha monthly mean temperature and precipitation normals 1991-2020 (Jan 17.3°C/101.6 mm ... Dec 19.0°C/110.0 mm); annual 23.3°C, 2,161.0 mm | https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=91&block_no=47936&year=&month=&day=&view= | 2026-11-07 |
| Climate humid and subtropical; sea temperature around 21°C in Feb to nearly 30°C in Aug; many resort beaches open for swimming in March; sudden showers common but rarely rains all day; coats and sweaters occasionally needed in winter (northerly winds) | https://visitokinawajapan.com/plan-your-trip/when-to-visit-climate-seasons | 2026-11-07 |
| Chance of typhoons June through September (OCVB) | https://visitokinawajapan.com/plan-your-trip/when-to-visit-climate-seasons | 2026-11-07 |
| Earliest-blooming cherry blossoms in Japan; Nakijin Castle Ruins in sakura season; humpback whales in winter (Kerama) | https://visitokinawajapan.com/plan-your-trip/when-to-visit-climate-seasons ; https://visitokinawajapan.com/destinations/kerama-islands | 2026-11-07 |
| Summer stretches from June to October; cherry blossoms bloom late January and February; most flights to Naha from Tokyo or Osaka; direct international flights from China, South Korea, Singapore, Taiwan, Hong Kong; best way around is rental car; comprehensive bus service | https://www.japan.travel/en/destinations/okinawa/ | 2026-11-07 |
| UV protection March to October; Naha Airport gateway to all Okinawa islands; Naha 15-minute drive from airport or a few stops on monorail; express buses; car rentals at airport and city centre | https://www.japan.travel/en/destinations/okinawa/okinawa/naha-and-the-main-island/ | 2026-11-07 |
| Okinawa rainy season normal: start around 10 May, end around 21 June (1991-2020); 2026: start around 4 May, end around 29 June | https://www.data.jma.go.jp/cpd/baiu/kako_baiu01.html | 2026-11-07 |
| Approach = centre within 300 km of a weather station; Okinawa/Amami approaches: May 0.4, Jun 0.6, Jul 1.5, Aug 2.3, Sep 2.0, Oct 1.1, Nov 0.3, Dec 0.0, Apr 0.0, Jan-Mar none; annual 7.9 (1991-2020) | https://www.data.jma.go.jp/yoho/typhoon/statistics/average/average.html | 2026-11-07 |
| Yui Rail: 19 stations, Naha Airport to Tedako-Uranishi; opened August 2003; 2019 Urasoe extension | https://www.yui-rail.co.jp/yuirail/about/ | 2026-11-07 |
| Yui Rail 19 stations in around 40 minutes | https://visitokinawajapan.com/plan-your-trip/getting-around-okinawa | 2026-11-07 |
| Monorail runs from Naha Airport through Naha to Shuri | https://www.japan.travel/en/destinations/okinawa/ | 2026-11-07 |
| 1-Day Free Pass ¥1,000 adult/¥500 child, 24 h from purchase; 2-Day ¥1,800/¥900, 48 h; sold at all stations | https://www.yui-rail.co.jp/ticketinfo-ticket/ticketinfo/1day-pass/ | 2026-11-07 |
| Suica and nationwide IC cards (Kitaca, PASMO, manaca, TOICA, PiTaPa, ICOCA, Hayakaken, nimoca, SUGOCA) usable; OKICA; Yui Rail does not sell or refund Suica | https://www.yui-rail.co.jp/ticketinfo-ticket/ticketinfo/suica/ | 2026-11-07 |
| Buses: local, airport limousine, shuttle; book rental vehicles in advance; weather may affect ferries; taxis/buses limited on remote islands | https://visitokinawajapan.com/plan-your-trip/getting-around-okinawa | 2026-11-07 |
| Kerama: more than 20 islands, four inhabited; ferries from Tomari Port; Tokashiki about 40 min (2-3 trips/day), Zamami 50-70 min (2 trips), Aka about 50 min (1-2 trips) | https://www.japan.travel/en/destinations/okinawa/okinawa/the-kerama-islands/ | 2026-11-07 |
| Keramashoto National Park; viable day trip from main island | https://visitokinawajapan.com/destinations/kerama-islands | 2026-11-07 |
| Ishigaki about 2,000 km from Tokyo; Haneda direct about 3 hours; frequent Naha flights to New Ishigaki Airport; airport bus about 45 minutes | https://www.japan.travel/en/destinations/okinawa/okinawa/ishigaki-island-and-around/ | 2026-11-07 |
| Miyako only reachable by plane; direct Haneda flights; four islands linked by bridge (Irabu, Shimoji, Kurima, Ikema); local bus not easy; rental car or taxi | https://www.japan.travel/en/destinations/okinawa/okinawa/miyako-island/ | 2026-11-07 |

## kyushu-onsen-towns.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Close to 3,000 hot-spring sources in Beppu City, more than 10% of all vents in Japan; eight onsen areas all reachable from Beppu Station by public transport; Ekimae-koto Onsen two-minute walk; Beppu Beach Sand Bath; limited express from Hakata, Oita, Miyazaki, Hitoyoshi | https://www.japan.travel/spot/716 | 2026-11-07 |
| Seven Hells; five in Kannawa, two in Shibaseki; for viewing not bathing; tour around 2 to 2.5 hours; 20-minute bus No. 2, 5, 24 or 41 to Kannawa or Umi-Jigoku-mae | https://www.japan.travel/en/spot/713/ | 2026-11-07 |
| Names of the seven hells; open 8:00-17:00, every day of the year; Umi, Chinoike, Tatsumaki, Shiraike designated national places of scenic beauty | https://www.beppu-jigoku.com/ | 2026-11-07 |
| Hells: steam, hot mud and boiling water around 100°C; Umi cobalt-blue; Chinoike blood-red; Oniyama crocodiles bred with hot-spring heat; Mt Tsurumi 1,375 m, one of the sources of Beppu's hot springs; Beppu Ropeway 10 minutes; "Beppu Hatto" name | https://beppu-tourism.com/wp-content/themes/beppu-tourism-com/doc/pdf/pamphlet-english.pdf | 2026-11-07 |
| Yufuin: inns in a basin surrounded by mountains including Mt Yufu; Tsukahara strongly acidic; Yunohira known for therapeutic stays; Yunokaze bus 7 Oct-13 Dec 2026, about 65 min, departures Beppu 9:00/12:15/15:45, Yufuin 10:40/14:20/17:05, reservation required, ¥2,200/¥1,100 (web card ¥2,000/¥1,000) | https://www.yufuin.gr.jp/ | 2026-11-07 |
| Station to Kinrin Lake main route 1.5 km, 20-30 minutes; two hot springs below lake; morning mist in autumn | https://www.japan.travel/en/sg/guide/kinrin-lakes-autumn-scenery/ | 2026-11-07 |
| Kurokawa: riverside town, around thirty onsen ryokan; Minamioguni, Aso district, Kumamoto; Nyuto Tegata lets you visit up to three participating bathhouses, sold at information centre with English pamphlet; not on any rail line; direct highway bus from Fukuoka Airport and Hakata Station; Aso Station nearest from Kumamoto side, then taxi or bus | https://www.japan.travel/en/spot/643/ | 2026-11-07 |
| YUFUIN NO MORI: Hakata-Yufuin 2 round trips/day, Hakata-Beppu 1 round trip/day (as of January 2026); stops Tosu, Kurume, Hita, Amagase, Bungo-Mori, Yufuin, Oita, Beppu; timetable times Hakata-Yufuin 2h10m-2h21m, Hakata-Beppu 3h20m (computed from published timetable); all seats reserved; timetables may be valid only a few months; consistently fully booked, Kokura-Oita route suggested; YUFU runs same timetable when YUFUIN NO MORI does not; footbath platform 1 Yufuin Station; page does not state rail pass coverage | https://www.jrkyushu.co.jp/english/train/yufuin_no_mori.html | 2026-11-07 |

## when-is-typhoon-season-in-japan.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Averages 1991-2020; approach = centre within 300 km of a station; landfall = centre reaches coastline of Hokkaido, Honshu, Shikoku or Kyushu | https://www.data.jma.go.jp/yoho/typhoon/statistics/average/average.html | 2026-11-07 |
| Okinawa/Amami approaches May 0.4, Jun 0.6, Jul 1.5, Aug 2.3, Sep 2.0, Oct 1.1, Nov 0.3; year 7.9 | same | 2026-11-07 |
| Main-island approaches May 0.2, Jun 0.4, Jul 1.0, Aug 1.6, Sep 1.9, Oct 0.9, Nov none; year 5.8 | same | 2026-11-07 |
| Landfalls May 0.0, Jun 0.2, Jul 0.6, Aug 0.9, Sep 1.0, Oct 0.3; year 3.0 | same | 2026-11-07 |
| Formations 25.1 a year; Aug 5.7, Sep 5.0 | same | 2026-11-07 |
| August and September may bring typhoons that can thwart travel plans | https://www.japan.travel/en/plan/weather/ | 2026-11-07 |
| Weather may affect inter-island ferries | https://visitokinawajapan.com/plan-your-trip/getting-around-okinawa | 2026-11-07 |
| JMA English site: Heavy Rain/Typhoon section, warnings, risk maps | https://www.jma.go.jp/jma/indexe.html | 2026-11-07 |
| JMA multilingual weather/heavy rain/earthquake/tsunami/volcano info in 15 languages | https://www.jma.go.jp/jma/kokusai/multi.html | 2026-11-07 |
| Safety tips app (Japan Tourism Agency): earthquake early warnings, tsunami warnings and other weather warnings; 15 languages | https://www.jnto.go.jp/safety-tips/eng/app.html | 2026-11-07 |

### Research set K

#### Facts file K

## regional-rail-passes.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Japan Rail Pass ordinary adult online: 7 days ¥50,000, 14 days ¥80,000, 21 days ¥100,000 | https://japanrailpass.net/en/purchase/price/ | 2026-11-07 |
| Japan Rail Pass ordinary adult via overseas agency: ¥53,000 / ¥84,000 / ¥105,000 | https://japanrailpass.net/en/purchase/price/ | 2026-11-07 |
| JR EAST PASS: unlimited JR East rides within a fixed period; covers Tokyo, Tohoku, Nagano, Niigata (validity length and price not fetched; "see official page") | https://www.japan.travel/en/plan/jr-rail-passes/ | 2026-11-07 |
| Kansai WIDE Area Pass: 5 consecutive days; adult ¥12,000, child ¥6,000; Kansai, Okayama, Takamatsu, Tottori, Tsuruga; Sanyo Shinkansen Shin-Osaka to Okayama only; info current as of 1 August 2024 | https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/kansai_wide/ | 2026-11-07 |
| Kansai-Hiroshima Area Pass: 5 consecutive days; adult ¥17,000, child ¥8,500; Sanyo Shinkansen Shin-Osaka to Hiroshima; not Hiroshima to Hakata or Tokaido Shinkansen; JR Miyajima Ferry included; info current as of 1 August 2024 | https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/kansai_hiroshima/ | 2026-11-07 |
| Kansai-Hokuriku Area Pass: 7 consecutive days; adult ¥19,000, child ¥9,500; Sanyo Shinkansen Shin-Osaka to Okayama; Hokuriku Shinkansen Tsuruga to Joetsu-Myoko; as of 1 August 2024 | https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/kansai_hokuriku/ | 2026-11-07 |
| JR West passes: reserved seats booked before boarding; Green cars need separate tickets; foreign passport + Temporary Visitor status; Japanese nationals excluded even with permanent residency abroad; child 6-11 | JR West pass pages above | 2026-11-07 |
| Kansai Area Pass: 1-4 consecutive days; sales ended 30 September 2026; passes bought by then valid for full period | https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/kansai/ | 2026-11-07 |
| Current JR-WEST Rail Pass list includes Kansai Mini Pass, Kansai WIDE Area Pass (Kansai Area Pass not listed) | https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/ | 2026-11-07 |
| Takayama-Hokuriku Area Tourist Pass: 5 consecutive days; adult ¥19,800, child ¥9,900 (6-11); Hokuriku Shinkansen Toyama to Tsuruga non-reserved; up to 6 free reserved seats; not Tokaido Shinkansen Kyoto to Shin-Osaka; bus routes incl. Takayama-Shirakawa-go-Kanazawa/Toyama | https://touristpass.jp/en/takayama_hokuriku/ ; https://touristpass.jp/en/ | 2026-11-07 |
| Hida Limited Express all reserved 25 Dec 2026 - 5 Jan 2027 | https://touristpass.jp/en/takayama_hokuriku/ | 2026-11-07 |
| JR Kyushu Rail Pass: All Kyushu 3/5/7 days ¥22,000/¥24,000/¥26,000; Northern 3/5 days ¥15,000/¥17,000; Southern 3 days ¥12,000; child half (6-11); consecutive days; areas covered; online booking prices may differ; eligibility temporary visitor | https://www.jrkyushu.co.jp/english/railpass/railpass.html | 2026-11-07 |
| Hokkaido Rail Pass: 5/7/10 consecutive days; adult pre-purchase ¥22,000/¥28,000/¥37,000; at station ¥23,000/¥29,000/¥38,000; excludes Hokkaido Shinkansen, South Hokkaido Railway, subway/streetcars; limited express all reserved; non-Japanese passport holders; passport required, no residence cards/copies | https://www.jrhokkaido.co.jp/global/english/ticket/railpass/ | 2026-11-07 |
| Sapporo-Noboribetsu Area Pass 4 days adult ¥10,000 pre-purchase; Sapporo-Furano Area Pass 4 days adult ¥11,000 pre-purchase | https://www.jrhokkaido.co.jp/global/english/ticket/railpass/ | 2026-11-07 |
| "Less than half of a 7-day national pass" (¥17,000 and ¥19,000 vs ¥50,000) | arithmetic from above | 2026-11-07 |

## peak-holiday-periods.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Three major holiday seasons when domestic travel peaks; New Year late Dec-early Jan, many businesses close several days; Golden Week late Apr-early May, expect crowds and fully booked transport; Obon mid-August, people travel back to hometowns; some services reservation-only | https://www.japan.travel/en/plan/business-hours-and-holidays/ | 2026-11-07 |
| Oshogatsu typically 29 Dec - 3 Jan depending on how days fall; busy and expensive; shrines hold events 31 Dec | https://www.japan.travel/en/guide/december/ | 2026-11-07 |
| National holidays 2027: 1 Jan New Year's Day; 11 Jan Coming of Age Day; 29 Apr Showa Day; 3 May Constitution Memorial Day; 4 May Greenery Day; 5 May Children's Day; 11 Aug Mountain Day; no Golden Week substitute in 2027 | https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html | 2026-11-07 |
| 2026: 6 May substitute holiday (3 May was Sunday); Sunday substitute rule | https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html | 2026-11-07 |
| Weekdays of 2027 dates (Fri 1 Jan, Mon 11 Jan, Thu 29 Apr, Mon-Wed 3-5 May, Wed 11 Aug) | calendar calculation | 2026-11-07 |
| Golden Week busiest tourism time apart from New Year; peaks at beginning and end; trains at full capacity; Shinkansen bookings essential; book accommodation in advance (2019 article) | https://www.japan.travel/en/sg/guide/golden-week-japan/ | 2026-11-07 |
| Book outside major domestic holidays like Golden Week or Obon | https://www.japan.travel/en/responsible-travel-guide/features/making-reservations/ | 2026-11-07 |
| All Nozomi on Tokaido/Sanyo Shinkansen reserved-only 9-18 August 2024 | https://www.japan.travel/en/ca/news/nozomi-2024-obon/ | 2026-11-07 |
| Hida all reserved 25 Dec 2026 - 5 Jan 2027 | https://touristpass.jp/en/takayama_hokuriku/ | 2026-11-07 |

## earthquakes-and-safety.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| EEW gives estimated intensities and arrival time of principal motion, from seismographs near epicentre | https://www.jma.go.jp/jma/en/Activities/eew1.html | 2026-11-07 |
| EEW launched 1 October 2007; provided through TV and radio etc. | https://www.jma.go.jp/jma/en/Activities/eew.html | 2026-11-07 |
| Lead time seconds to a few tens of seconds; may be too late near epicentre; false alarms from accidents, lightning, device failure; less reliable for large/close earthquakes | https://www.jma.go.jp/jma/en/Activities/eew3.html | 2026-11-07 |
| Strong tremors may arrive with the warning near the focus; dos and don'ts by setting (home, public buildings, outdoors, buses/trains, elevators, driving) | https://www.jma.go.jp/jma/en/Activities/EEWLeaflet.pdf | 2026-11-07 |
| Tsunami: Major >3 m "Huge", Warning up to 3 m "High", Advisory up to 1 m; about 3 min (as early as 2); M8+ qualitative first; evacuate on strong or long shaking; repeated waves; stay until cleared; heights may exceed estimates | https://www.data.jma.go.jp/eqev/data/en/guide/tsunamiinfo.html | 2026-11-07 |
| Major Tsunami Warning is an Emergency Warning; risk seen once every few decades | https://www.jma.go.jp/jma/en/Emergency_Warning/ew_index.html | 2026-11-07 |
| Safety tips: free, supervised by Japan Tourism Agency; App Store and Google Play; EEW for intensity 4+; alert types; up to 5 locations; medical facilities; flowchart; communication cards; 15 languages (listed) | https://www.rcsc.co.jp/safety-tips-en | 2026-11-07 |
| JNTO: earthquakes strike with little or no warning; stay calm, follow staff; extinguish naked flames; coast -> higher ground; check hotel evacuation routes; keep phone charged; Safety Tips app listed | https://www.japan.travel/en/plan/emergencies/ | 2026-11-07 |
| Japan Visitor Hotline: JNTO, 24h/365 days, English, Chinese, Korean; tourist info, accidents/illness, disasters (number deliberately not published) | https://www.japan.travel/en/plan/hotline/ | 2026-11-07 |
| Protect head; follow staff after tremor; watch for aftershocks before returning to lodging; @JapanSafeTravel; refer to JMA site | https://www.japan.travel/en/japan-safe-travel-information/earthquake/ | 2026-11-07 |
| TMG: act calmly on official info; don't move unnecessarily if you can't get home; temporary stay facilities; phones may be hard to use | https://www.bousai.metro.tokyo.lg.jp/bousai/1000026/1005954.html | 2026-11-07 |

### Research set L

#### Facts file L

## kamikochi.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| 2026 season: opens 17 April, grand opening 27 April, closes 15 November | https://www.kamikochi.org | 2026-11-07 |
| Season "mid-April to mid-November"; Matsumoto buses start 17 April; not all facilities open then; buses/facilities close 16 November after running through 15 November | https://www.kamikochi.org/basicinfo/faq | 2026-11-07 |
| 2026 closing ceremony 15 November | https://www.kamikochi.or.jp/news/9170/ | 2026-11-07 |
| Last nights of stay 2026: Myojinkan 31 Oct; Morino Resort Konashi, Yamanohidaya, Tokusawaen, Yokoo Sanso 3 Nov; Kamonjigoya, Tokusawa Lodge 4 Nov; Taishoike Hotel 13 Nov; main hotels 14 Nov | https://www.kamikochi.or.jp/news/9170/ | 2026-11-07 |
| Winter: shops, hotels, facilities closed; Mt Yakedake trail closed; consult a guide | https://www.kamikochi.org/basicinfo/faq | 2026-11-07 |
| Winter rules: registration form at Nakanoyu Gate; avalanches, falling rocks, snowdrifts | https://www.kamikochi.org/basicinfo/rules | 2026-11-07 |
| Best seasons: spring (May-June), summer (July-August), autumn (October) | https://www.kamikochi.org/basicinfo/faq | 2026-11-07 |
| Private cars incl. rental cars and motorcycles banned all year, beyond Kama Tunnel; in open season buses, taxis, light vehicles may enter | https://www.kamikochi.or.jp/access/restrictions | 2026-11-07 |
| Transfer at Sawando (Matsumoto side) or Akandana, Hirayu (Takayama side) | https://www.kamikochi.or.jp/access/restrictions | 2026-11-07 |
| Crowded: summer weekends, holidays, Obon, October foliage; allow extra time | https://www.kamikochi.or.jp/access/restrictions | 2026-11-07 |
| Sawando: about 2,000 spaces; car 800 yen/day | https://www.kamikochi.or.jp/access/sawando | 2026-11-07 |
| Sawando car parking 700 yen/day (English site; conflicts with above) | https://www.kamikochi.org/access/car | 2026-11-07 |
| Akandana: about 850 spaces; car 600 yen per 24 h; open 24 h; 17 April-15 November; closed in winter | https://www.kamikochi.or.jp/access/akandana | 2026-11-07 |
| Shuttle stops Taisho-ike, Imperial Hotel, bus terminal | https://www.kamikochi.or.jp/access/sawando ; https://www.kamikochi.or.jp/access/akandana | 2026-11-07 |
| About 20-30 min by bus or taxi from either parking area | https://www.kamikochi.org/access/car | 2026-11-07 |
| Sawando shuttle: one way 1,600 yen adult; round trip 3,000 adult, 1,500 child (no year stated) | https://www.kamikochi.or.jp/access/sawando | 2026-11-07 |
| Akandana shuttle: one way 1,500; round trip 2,800 adult, 1,400 child (no year stated) | https://www.kamikochi.or.jp/access/akandana | 2026-11-07 |
| Taxi to bus terminal: Sawando upper zone 5,400 yen, lower zone 6,000 yen (standard vehicle, up to 6 incl. driver); Hirayu max 6,000 yen plus Azumi Tunnel toll; last taxi from Sawando 18:00 | https://www.kamikochi.or.jp/access/taxi | 2026-11-07 |
| Taxis may not be waiting at Akandana after 17:00 | https://www.kamikochi.or.jp/access/akandana | 2026-11-07 |
| Matsumoto to Shin-Shimashima 30 min by train; bus about 60 min; must reserve bus from Kamikochi to Shin-Shimashima/Matsumoto and direct bus from Matsumoto | https://www.kamikochi.org/access/public | 2026-11-07 |
| Takayama Bus Center to Hirayu Onsen 60 min; Hirayu to Kamikochi bus or taxi 25 min | https://www.kamikochi.org/access/public | 2026-11-07 |
| JR Pass does not cover bus or Alpico train; gate closes 19:00 spring/autumn, 20:00 summer; last bus around 18:00 | https://www.kamikochi.org/basicinfo/faq | 2026-11-07 |
| Kappa-bashi suspension bridge first built 1910, rebuilt several times | https://www.kamikochi.or.jp/learn/about/ | 2026-11-07 |
| Kappa-bashi approx. 37 m | https://www.env.go.jp/park/content/000172089.pdf | 2026-11-07 |
| Taisho-ike formed 1915 by debris flow from Mt Yakedake | https://www.kamikochi.or.jp/learn/about/ | 2026-11-07 |
| Kappa-bashi-Taisho-ike: right bank 75 min 3.8 km; left bank 80 min 4 km; about 2.5 h round trip | https://www.kamikochi.org/thingstodo/walking | 2026-11-07 |
| Kappa-bashi-Myojin: right bank 60 min 3.0 km; left bank 50 min 2.5 km; about 2 h, 5.5 km round trip | https://www.kamikochi.org/thingstodo/walking | 2026-11-07 |
| Myojin-Tokusawa 60 min 3.0 km; Kappa-bashi-Tokusawa and back 4-5 h | https://www.kamikochi.org/thingstodo/walking | 2026-11-07 |
| Bus terminal-Kappa-bashi-Tashiro-bashi-bus terminal 55 min; Taisho-ike stop-Tashiro-ike-Tashiro-bashi-Kappa-bashi-bus terminal 70 min | https://www.kamikochi.org/thingstodo/walking | 2026-11-07 |
| Designated part of Chubu-Sangaku National Park 4 December 1934; Special Scenic Place and Special Natural Monument 29 March 1952 | https://www.kamikochi.or.jp/learn/about/ | 2026-11-07 |
| Rules: no feeding wildlife incl. monkeys/ducks; take all rubbish; stay on trail; camping/fires only in designated areas; collecting illegal; no drones, no bicycles on trails, no pets | https://www.kamikochi.org/basicinfo/rules | 2026-11-07 |
| Rubbish bins virtually non-existent; no ATMs, banks, convenience stores, coin lockers; carry some cash; baggage room 06:00-17:00 | https://www.kamikochi.org/basicinfo/faq | 2026-11-07 |
| Bear guidance: moderate distance, bear bells, no photos/approach, mother bears dangerous, manage food/rubbish; report to Info Center +81-263-95-2433, 08:00-17:00 | https://www.env.go.jp/park/content/000172089.pdf | 2026-11-07 |
| Park road closed by fallen tree (notice 18 Aug 2026), reopened (notices 28/30 Aug 2026) | https://www.kamikochi.or.jp/ | 2026-11-07 |

## tateyama-kurobe-alpine-route.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Accessed from Tateyama Station (Toyama) or Ogizawa (Nagano); private vehicles not permitted between them; vehicle transfer service encouraged; train times do not include transfer times | https://www.alpen-route.com/en/getting-here/ | 2026-11-07 |
| Segments: Tateyama Cable Car 7 min 1.3 km; Highland Bus 50 min 23 km; Tunnel Electric Bus 10 min 3.7 km; Ropeway 7 min 1.7 km; Kurobe Cable Car 5 min 0.8 km; Kanden Tunnel Electric Bus 16 min 6.1 km; local bus Ogizawa-Shinano Omachi 40 min 18 km | https://www.alpen-route.com/en/transportation/ | 2026-11-07 |
| Cable car 502 m, 24 degrees; Highland Bus stop at Midagahara/Tengudaira, reservation needed to reboard; ropeway no pylons; Kurobe Cable Car underground | https://www.alpen-route.com/en/transportation/ | 2026-11-07 |
| Kurobeko to Kurobe Dam walk 15 min | https://www.alpen-route.com/en/modelcourse/walking/course03.html | 2026-11-07 |
| Kurobe Dam 186 m, Japan's tallest, completed 1963; walking across is part of the route | https://www.japan.travel/en/spot/1422/ | 2026-11-07 |
| Water releases 26 June-15 October 2026, may be suspended without notice | https://www.alpen-route.com/en/14367-2 | 2026-11-07 |
| Opens 15 April 2026, operates to 30 November 2026 | https://www.alpen-route.com/en/tateyama-kurobe-alpine-route-will-open-on-april-15th-2026 ; https://www.alpen-route.com/en/ | 2026-11-07 |
| Main timetable 15 April-3 November 2026; Tateyama Sta.-Ogizawa and back 4-30 November 2026 | https://www.alpen-route.com/en/timetable/ | 2026-11-07 |
| Web tickets 11-30 Nov: Ogizawa round trips to Murodo, Daikanbo, Kurobedaira, Kurobe Dam, plus one-way Ogizawa-Kurobe Dam | https://tateyama-kurobe-webservice.jp/AlpenTour/html/VW001W0010.html?lang=en | 2026-11-07 |
| No 2027 announcement; Highland Bus may be suspended 8 Nov due to snow (notice 7 Nov 2026) | https://www.alpen-route.com/en/announcement/ | 2026-11-07 |
| Snow Wall Walk 2026: 15 April-25 June, 09:30-15:00, Murodo, free admission, Alpine Route tickets required; entrance on 1st floor of Murodo Terminal | https://www.alpen-route.com/en/wp-content/uploads/2026/03/efddc89800f88586d49a0e83e759d88e.pdf | 2026-11-07 |
| Winter clothes, below 10C, sunglasses/sunscreen, trekking shoes/snow boots, drones prohibited on route | https://www.alpen-route.com/en/sww2026 | 2026-11-07 |
| Peak-hour services may be full; watch arrival time for Snow Wall Walk | https://www.alpen-route.com/en/14367-2 | 2026-11-07 |
| Recommend advance web tickets; boarding time required for Tateyama Cable Car from Tateyama and Kanden Tunnel Electric Bus from Ogizawa; other stations go straight to gate | https://www.alpen-route.com/en/same-day-tickets/ | 2026-11-07 |
| Same-day tickets at Dentetsu Toyama, Tateyama, Ogizawa; cash or card; valid on purchase day only; overnight valid 5 days, not unlimited rides; sales may be restricted early May, mid-August, early October | https://www.alpen-route.com/en/same-day-tickets/ | 2026-11-07 |
| Web tickets on sale 15:00 in staggered 10-day windows; issued at departure station from 12:00 day before; credit card, avoid debit/prepaid; cancellation after 15:00 day before 500 yen/person, full fare after departure; option tickets for Ogizawa-Nagano express bus and Ogizawa-Shinano Omachi local bus only with web ticket | https://tateyama-kurobe-webservice.jp/AlpenTour/html/VW001W0010.html?lang=en | 2026-11-07 |
| Baggage forwarding 15 April-8 November 2026; 4,000 / 2,000 / 2,000 yen per item, tax incl., cash only; no reservation; arrive 20-30 min before; Dentetsu Toyama drop 05:00-10:00, pick-up 15:30-18:00; Shinano Omachi drop 07:40-10:30, pick-up 15:00-17:45; may refuse excessive weight/size | https://www.alpen-route.com/en/baggage/ | 2026-11-07 |
| Large backpacks in Highland Bus trunk; protect valuables, cover skis/snowboards; bear spray sealed in plastic bag, pin secured | https://www.alpen-route.com/en/request-regarding-baggage-safety-measures | 2026-11-07 |
| Omachi Alpine Line construction delays; limited Nagano-Ogizawa express departures | https://www.alpen-route.com/en/14367-2 | 2026-11-07 |

### Research set M

#### Facts file M

## koyasan-temple-stays.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Koyasan opened by Kobo Daishi at the beginning of the Heian period | https://www.koyasan.or.jp/en/kongobuji/ | 2026-11-07 |
| Kobo Daishi = posthumous name of Kukai, given by Emperor Daigo in 921 | https://www.koyasan.or.jp/en/kongobuji/ | 2026-11-07 |
| Kukai 774-835; founded Kongobu-ji in 816 | https://www.japan.travel/en/world-heritage/sacred-sites-and-pilgrimage-routes-in-the-kii-mountain-range/ | 2026-11-07 |
| Kongobu-ji is head temple of Koyasan Shingon Sect; grounds cover all Koyasan; 117 temples; 52 offer lodging | https://www.koyasan.or.jp/en/kongobuji/ | 2026-11-07 |
| More than 100 temples, over 1,200 years of history; shoes removed at Kongobu-ji; over 50 temples offer lodging | https://www.japan.travel/en/destinations/kansai/wakayama/koyasan/ | 2026-11-07 |
| Danjo Garan first site built; fire 1843; Kondo completed 1932, 23.73 m | https://www.koyasan.or.jp/en/meguru/ | 2026-11-07 |
| Daimon rebuilt in current location 1705; 25.1 m tall | https://www.koyasan.or.jp/en/meguru/ | 2026-11-07 |
| Reihokan Museum built 1921 | https://www.koyasan.or.jp/en/meguru/ | 2026-11-07 |
| Ban on women entering lifted 1872 | https://www.koyasan.or.jp/en/meguru/ | 2026-11-07 |
| Okunoin: Kobo Daishi's mausoleum, eternal meditation; central pillar of faith | https://www.koyasan.or.jp/en/meguru/ | 2026-11-07 |
| Torodo enlarged to roughly present size in 1023; sutra services six times daily 9:00-14:40 | https://www.koyasan.or.jp/en/meguru/ | 2026-11-07 |
| Okunoin Mandoe held each year 1-3 October in the Torodo | https://www.koyasan.or.jp/en/ | 2026-11-07 |
| Path to Okunoin passes over 200,000 gravestones and memorials | https://www.japan.travel/en/destinations/kansai/wakayama/koyasan/ | 2026-11-07 |
| Okunoin night tour every evening from a shukubo, except the 20th of the month | https://www.japan.travel/en/destinations/kansai/wakayama/koyasan/ | 2026-11-07 |
| World Heritage name "Sacred Sites and Pilgrimage Routes in the Kii Mountain Range"; three sites Yoshino and Omine, Kumano Sanzan, Koyasan; Nara, Wakayama, Mie | https://www.japan.travel/en/world-heritage/sacred-sites-and-pilgrimage-routes-in-the-kii-mountain-range/ | 2026-11-07 |
| Shukubo originally monastic lodgings for travellers; 51 lodges offer shukubo | https://www.japan.travel/en/spot/60/ | 2026-11-07 |
| Shukubo association list showed 31 temples | https://eng-shukubo.net/shukubo/ | 2026-11-07 |
| Shojin ryori excludes meat, fish, green onion, garlic, other stimulants; vegan-friendly versions available | https://www.japan.travel/en/spot/60/ | 2026-11-07 |
| Shojin ryori served to overnight guests, changes with seasons; guests encouraged not required to join meditation and sutra copying | https://www.japan.travel/en/destinations/kansai/wakayama/koyasan/ | 2026-11-07 |
| Otsutome morning service, may start around 6:00 depending on temple; guests may take part or watch | https://eng-shukubo.net/about/experiences/index.html | 2026-11-07 |
| Few shukubo offer ajikan to private visitors; shakyo via Daishi Kyokai Center | https://eng-shukubo.net/about/experiences/index.html | 2026-11-07 |
| Credit cards not accepted at most shops and lodgings | https://eng-shukubo.net/ | 2026-11-07 |
| Common Ticket for Visiting Temples covers six temples incl. Kongobu-ji, from association information centres | https://eng-shukubo.net/sightseeing/index.html | 2026-11-07 |
| Nankai Koya Line to Gokurakubashi, transfer to Koyasan Cable Car; Shin-Osaka via Midosuji line to Namba; KIX via Nankai Airport Line, change at Tengachaya | https://www.koyasan.or.jp/en/access/ | 2026-11-07 |
| Namba-Koyasan by Limited Express Koya and cable car about 90 minutes | https://www.nankai.co.jp/en_railway/access-fromkix | 2026-11-07 |
| Cable car five minutes | https://www.japan.travel/en/destinations/kansai/wakayama/koyasan/ | 2026-11-07 |
| Limited Express Koya: Namba-Gokurakubashi, all seats reserved, on sale one month ahead, 300 yen extra if bought on board | https://www.nankai.co.jp/en_railway/traffic/express/kouya.html | 2026-11-07 |
| World Heritage Digital Ticket: round trip issuing station-Koyasan Station, 2 days, Rinkan bus 2-day pass excl. Tateri/Koya Ryujin/Koya Niutsuhime lines, coupons Kondo/Konpon Daito/Reihokan, getting off invalidates, Ltd Exp Koya outward only, bought online, 2026 price list separate | https://www.nankai.co.jp/en_railway/ticket/koyasan | 2026-11-07 |
| "When using a private railway, the fare and fee for the section used must be paid" | https://japanrailpass.net/en/about_jrp/route/ | 2026-11-07 |

## ise-jingu.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Official name Jingu; centred on Kotaijingu (Naiku) and Toyo'uke-daijingu (Geku); about 1,500 rituals a year | https://www.isejingu.or.jp/en/ | 2026-11-07 |
| Main sanctuary rebuilt every twenty years | https://www.isejingu.or.jp/en/ | 2026-11-07 |
| 125 jinja; Naiku: Amaterasu-Omikami, enshrined about 2,000 years ago; four rows of fences, pray at third-row gate | https://www.isejingu.or.jp/en/about/index.html | 2026-11-07 |
| Ujibashi over 100 m, crosses Isuzugawa, rebuilt every twenty years | https://www.isejingu.or.jp/en/about/index.html | 2026-11-07 |
| Geku: Toyo'uke-no-Omikami, enshrined about 1,500 years ago; provides sacred food; Mikeden unique to Geku | https://www.isejingu.or.jp/en/about/index.html | 2026-11-07 |
| Addresses 1 Ujitachi-cho (Naiku), 279 Toyokawa-cho (Geku) | https://www.isejingu.or.jp/en/access/index.html | 2026-11-07 |
| "Please visit Geku at first, and then visit Naiku." | https://www.isejingu.or.jp/en/access/index.html | 2026-11-07 |
| Geku-Naiku Loop Line Route 51 or 55 | https://www.isejingu.or.jp/en/access/index.html | 2026-11-07 |
| Temizu steps; bow twice, clap twice, bow once; no photos in praying area; no eating/drinking/smoking except designated areas | https://www.isejingu.or.jp/en/pray/index.html | 2026-11-07 |
| Hours: Oct-Dec 05:00-17:00; Jan-Apr and Sep 05:00-18:00; May-Aug 05:00-19:00 | https://www.isejingu.or.jp/en/pray/index.html | 2026-11-07 |
| Sengu: same dimensions, alternate site; about 30 rituals; about eight years; Holy Mirror moved; also Geku and other jinja; first Naiku Sengu 690; 2013 was 62nd | https://www.isejingu.or.jp/en/ritual/index.html | 2026-11-07 |
| 63rd Sengu began 2025 (Reiwa 7); Sengyo October 2033 (Reiwa 15); okibiki May-Jul 2026 and May-Jul 2027; Ujibashi first crossing Nov 2029; 12 betsugu 2034 | https://www.isejingu.or.jp/sengu/the63rd/schedule.html | 2026-11-07 |
| Oharai-machi about 800 m cobbled, Ujibashi towards Sarutahiko Shrine; Okage Yokocho mid-street; Iseji route buildings Edo to Meiji relocated/recreated | https://en.ise-kanko.jp/purpose/oharaimachi-okageyokocho/ | 2026-11-07 |
| Okage Yokocho 9:30-17:00 varies by season, longer at Golden Week/Obon; free; bus stop Jingu Kaikan Mae; Naiku Mae nearest Ujibashi | https://en.ise-kanko.jp/purpose/oharaimachi-okageyokocho/ | 2026-11-07 |
| Isuzugawa about 2.3 km (about 30 min walk) from Naiku | https://en.ise-kanko.jp/purpose/oharaimachi-okageyokocho/ | 2026-11-07 |
| Iseshi (JR and Kintetsu) 5 min walk to Geku; Ujiyamada 10 min | https://en.ise-kanko.jp/focus/accesguide/ | 2026-11-07 |
| Bus Outer Shrine No. 3 to Inner Shrine 15-20 min, 520 yen, cash/IC/bus tickets | https://en.ise-kanko.jp/focus/accesguide/ | 2026-11-07 |
| Kintetsu Ltd Exp from Osaka-Uehommachi/Tsuruhashi/Osaka-Namba 1 h 40 min to 2 h without transfers | https://en.ise-kanko.jp/focus/accesguide/ | 2026-11-07 |
| Nagoya to Iseshi by Kintetsu Ltd Exp or JR Rapid Mie 80-90 min | https://www.japan.travel/national-parks/parks/ise-shima/how-to-get-there/ | 2026-11-07 |
| Kyoto to Isuzugawa by Kintetsu about 2 h 30 min | https://www.japan.travel/en/spot/1210/ | 2026-11-07 |
| Shimakaze: Kintetsu-Nagoya 10:25 to Iseshi 11:40 (no service Thu as a rule); Osaka-Namba 10:40 to Iseshi 12:16 (no service Tue); Kyoto 10:00 to Iseshi 12:03 weekdays (no service Wed); as of 14 March 2026 | https://www.kintetsu.co.jp/foreign/english/shimakaze/ | 2026-11-07 |
| Ltd Exp ticket required in addition to basic fare ticket | https://www.kintetsu.co.jp/foreign/english/about/limited_express/ticket.html | 2026-11-07 |
| Private railway fare and fee must be paid with JR Pass | https://japanrailpass.net/en/about_jrp/route/ | 2026-11-07 |

### Research set N

#### Facts file N

## Article: himeji-castle.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| World Heritage inscription 11 December 1993, with Horyu-ji, Japan's first World Cultural Heritage sites | https://www.city.himeji.lg.jp/castle/0000007744.html | 2026-11-07 |
| World Heritage inscription year Heisei 5 (1993) | https://www.bunka.go.jp/seisaku/bunkazai/shokai/sekai_isan/ichiran/ | 2026-11-07 |
| National Treasure designation 1931 | https://www.city.himeji.lg.jp/castle/0000007750.html | 2026-11-07 |
| Fort on Himeyama 1333 (Akamatsu Norimura); castle 1346 | https://www.city.himeji.lg.jp/castle/0000007750.html | 2026-11-07 |
| Ikeda Terumasa began major rebuilding 1601; linked keep completed 1609; present form complete 1617 | https://www.city.himeji.lg.jp/castle/0000007750.html | 2026-11-07 |
| Castle has come down to the present without being damaged in war ("sendjin ni mamireru koto naku") | https://www.city.himeji.lg.jp/castle/0000007750.html | 2026-11-07 |
| Showa repairs: keep dismantling repair began 1956, completed 1964 | https://www.city.himeji.lg.jp/castle/0000007750.html | 2026-11-07 |
| Heisei preservation repairs began 2009; grand reopening 2015 | https://www.city.himeji.lg.jp/castle/0000007750.html | 2026-11-07 |
| Well-preserved early 17th-century castle architecture: keep group, turrets, gates, earthen walls, stone walls, moats | https://www.city.himeji.lg.jp/castle/0000007744.html | 2026-11-07 |
| World Heritage area about 107 ha, matching Special Historic Site boundary at inscription | https://www.city.himeji.lg.jp/kanko/0000001645.html | 2026-11-07 |
| National Treasure buildings: main keep; west, inui, east small keeps; i, ro, ha, ni watari-yagura with attached kitchen | https://www.city.himeji.lg.jp/kanko/0000001645.html | 2026-11-07 |
| Main keep five tiers, six storeys plus basement | https://www.westjr.co.jp/travel-information/en/explore-west-japan/destinations-hyogo/himeji-castle/ | 2026-11-07 |
| Only one of three original moats survives intact | https://www.japan.travel/en/spot/1030/ | 2026-11-07 |
| Hours 9:00-17:00, last entry 16:00; closed 29-30 December | https://www.city.himeji.lg.jp/castle/0000007671.html ; https://www.himejicastle.jp/en/ | 2026-11-07 |
| Windows in main keep, Nishi-no-maru, Hyakken-roka begin closing around 16:30 | https://www.city.himeji.lg.jp/castle/0000007671.html | 2026-11-07 |
| Fees from 1 March 2026: general 18+ 2,500 yen; Himeji residents 18+ 1,000 yen; groups 30+ 2,000 / 800 yen; combined with Koko-en 2,600 yen; annual pass 5,000 yen; under 18 free | https://www.city.himeji.lg.jp/castle/0000030746.html ; https://www.himejicastle.jp/en/ | 2026-11-07 |
| Previous adult (18+) fee 1,000 yen | https://www.city.himeji.lg.jp/castle/0000030746.html | 2026-11-07 |
| Residence proof: My Number Card, driving licence, or other official photo ID with address (e.g. residence card) | https://www.city.himeji.lg.jp/castle/0000030746.html | 2026-11-07 |
| Free shoulder bag for shoes; digital tickets in full operation; pets banned in paid area from 1 March 2026 (guide/hearing dogs allowed) | https://www.city.himeji.lg.jp/castle/0000030746.html ; https://www.himejicastle.jp/en/faq.html | 2026-11-07 |
| JNTO page still shows 1,000 yen ticket | https://www.japan.travel/en/spot/1030/ | 2026-11-07 |
| Digital ticket: choose date/time; no priority when crowded; main keep admits up to 1,000 people/hour | https://www.city.himeji.lg.jp/castle/0000007671.html | 2026-11-07 |
| Digital tickets up to 90 days ahead; tickets valid day of issue only; no re-entry | https://www.himejicastle.jp/en/faq.html | 2026-11-07 |
| Allow about 1.5-2 hours, up to about 1 hour wait in busy seasons | https://www.himejicastle.jp/en/faq.html | 2026-11-07 |
| No tripods/monopods/selfie sticks in buildings; wheeled bags in paid coin lockers; wheelchairs cannot enter buildings | https://www.himejicastle.jp/en/faq.html | 2026-11-07 |
| Steep stairs and low ceilings to top of keep | https://visit-himeji.com/en/trip-ideas/himeji-castle-amazing-history-and-tips-on-how-to-enjoy-your-visit/ | 2026-11-07 |
| Koko-en: nine walled gardens, opened 1992 for Himeji City centenary | https://www.japan.travel/en/spot/1029/ | 2026-11-07 |
| Koko-en: 9:00-17:00, last entry 30 min before close; closed 29-30 Dec; adult 400 yen, group 320 yen, under 18 free, combined 2,600 yen; fees revised from 1 March 2026; hours may differ during events | https://www.himeji-machishin.jp/ryokka/kokoen/en/guidance/index.html | 2026-11-07 |
| About 20 min walk from Himeji Station; Shinki Bus to Himeji-jo Otemon-mae then 5 min walk | https://www.westjr.co.jp/travel-information/en/explore-west-japan/destinations-hyogo/himeji-castle/ ; https://www.city.himeji.lg.jp/castle/0000007671.html | 2026-11-07 |
| Shinkansen to Himeji: Shin-Osaka 28 min, Okayama 20 min, Kyoto 44 min, Tokyo 3 h 10 min, Hakata 1 h 58 min; JR from Osaka 1 h 1 min | https://visit-himeji.com/en/access/ | 2026-11-07 |
| Not all Shinkansen stop at Himeji | https://visit-himeji.com/en/trip-ideas/himeji-castle-amazing-history-and-tips-on-how-to-enjoy-your-visit/ | 2026-11-07 |

## Article: matsumoto-castle.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| One of twelve original castles; National Treasure recognised by Agency for Cultural Affairs | https://www.japan.travel/en/ca/inspiration/discover-japans-twelve-original-castles/ | 2026-11-07 |
| Five structures: Great Keep, Inui Keep, Watari Tower, Tatsumitsuke Tower, Tsukimi Tower; links between them | https://www.matsumoto-castle.jp/eng/about/tower | 2026-11-07 |
| "Oldest extant" five-structure, six-storey castle; 1936 declaration: connected-towers style predating Nagoya Castle | https://www.matsumoto-castle.jp/eng/about/tower | 2026-11-07 |
| Great Keep, Inui Keep, Watari Tower built 1593-1594 by Ishikawa Kazumasa and Yasunaga (city view); other two ~40 years later; stone walls repaired not rebuilt | https://www.matsumoto-castle.jp/eng/about/tower | 2026-11-07 |
| Dating theories: 1958 catalog 1594-1596; 2012 Agency for Cultural Affairs catalog Inui 1592, keep and Watari 1615; completion theories 1596-1601; tree-ring dating planned | https://www.matsumoto-castle.jp/eng/value/construction | 2026-11-07 |
| National Treasure 20 April 1936 under 1929 law; redesignated after WWII under Cultural Properties law | https://www.matsumoto-castle.jp/eng/about/tower ; https://www.matsumoto-castle.jp/eng/value/national-treasure | 2026-11-07 |
| Dismantling repair 1950 (groundbreaking) to 1955 (completion) | https://www.matsumoto-castle.jp/eng/value/national-treasure | 2026-11-07 |
| Hours 8:30-17:00 (last 16:30); Golden Week 8:00-18:00 (last 17:30); mid-August extended hours; closed 29-31 Dec | https://www.matsumoto-castle.jp/eng/info | 2026-11-07 |
| E-ticket adult 1,200 / child (6-15) 400; paper 1,300 / 400; group 20+ e-ticket 1,080 / 360; 5 and under free | https://www.matsumoto-castle.jp/eng/info | 2026-11-07 |
| Combos online only: castle + Kaichi School 1,600 / 600, 2 days; 4-place 2,600 adult, 3 days | https://www.matsumoto-castle.jp/eng/info | 2026-11-07 |
| Timed tickets valid 2 days, non-cancellable; shoes off, bags provided; 6 storeys, steep stairs, no lift; ~140 steps, max 61 degrees; 45-60 min visit | https://www.matsumoto-castle.jp/eng/info | 2026-11-07 |
| Entry limits Golden Week (29 Apr-5 May) and Obon; queue via Honmaru Garden; free for disability certificate + 1 carer and for traditional dress in mid-August extended hours | https://www.matsumoto-castle.jp/eng/info | 2026-11-07 |
| About 15 min walk from Matsumoto Station (JR Shinonoi Line); bus Oshiroguchi to Matsumotojo-Shiyakushomae about 10 min | https://www.matsumoto-castle.jp/eng/access | 2026-11-07 |
| Former Kaichi School: giyofu, 1876, National Treasure; 9:00-17:00, last 16:30; closures; 600/700/300 yen | https://visitmatsumoto.com/en/spot/detail_1002.html | 2026-11-07 |
| Two National Treasures; city walk 9.2 km, 56 m climb; springs; Yayoi Kusama sculpture | https://visitmatsumoto.com/en/article/detail_55.html | 2026-11-07 |
| Azusa: direct from JR Shinjuku, JR East, approx 2 h 30 min, all seats reserved, JR Pass seat reservation at no extra cost | https://visitmatsumoto.com/en/article/detail_33.html | 2026-11-07 |
| Shinano: direct from JR Nagoya, JR Central, approx 2 h, unreserved seats but reservation recommended, JR Pass usable | https://visitmatsumoto.com/en/article/detail_33.html | 2026-11-07 |

## Q&A: which-japanese-castles-are-original.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| "Many of the castles you see in Japan today are in fact, modern replicas." | https://www.japan.travel/en/ca/inspiration/discover-japans-twelve-original-castles/ | 2026-11-07 |
| Twelve original castles and their prefectures (Hirosaki, Matsumoto, Inuyama, Himeji, Maruoka, Hikone, Bitchu-Matsuyama, Matsue, Marugame, Kochi, Uwajima, Matsuyama) | https://www.japan.travel/en/ca/inspiration/discover-japans-twelve-original-castles/ | 2026-11-07 |
| Hikone among Himeji, Inuyama, Matsue, Matsumoto with original main keep recognised as National Treasure | https://www.japan.travel/en/ca/inspiration/discover-japans-twelve-original-castles/ | 2026-11-07 |
| Matsue "one of only five classed as a National Treasure" | https://www.japan.travel/spot/933 | 2026-11-07 |
| Subtitle "untouched by war and natural disaster" | https://www.japan.travel/en/ca/inspiration/discover-japans-twelve-original-castles/ | 2026-11-07 |
| Maruoka levelled in 1948 Fukui earthquake, reassembled with 80% original materials | https://www.japan.travel/en/ca/inspiration/discover-japans-twelve-original-castles/ | 2026-11-07 |
| Inuyama privately owned until 2004 | https://www.japan.travel/en/ca/inspiration/discover-japans-twelve-original-castles/ | 2026-11-07 |
| Himeji World Heritage December 1993 with Horyu-ji | https://www.city.himeji.lg.jp/castle/0000007744.html | 2026-11-07 |
| Matsumoto National Treasure 20 April 1936; five structures | https://www.matsumoto-castle.jp/eng/about/tower | 2026-11-07 |

### Research set O

#### Facts file O

## tohoku-summer-festivals.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Aomori Nebuta: 2 to 7 August every year | https://www.nebuta.jp/ | 2026-11-07 |
| Nebuta eve, 1 August, 5pm to 9pm, Aoi-Umi-Koen (Rasseland) | https://www.nebuta.jp/foreign/english.html | 2026-11-07 |
| Large nebuta 9 m wide, 7 m deep, 5 m high | https://www.nebuta.jp/foreign/english.html | 2026-11-07 |
| Route about 3.1 km | https://www.nebuta.jp/foreign/english.html | 2026-11-07 |
| 2-3 Aug from 7pm, about 25 floats (children's and large) | https://www.nebuta.jp/foreign/english.html | 2026-11-07 |
| 4-6 Aug from 6.45pm, about 20 large nebuta; award winners on 6 Aug | https://www.nebuta.jp/foreign/english.html | 2026-11-07 |
| 7 Aug from 1pm, about 15 floats; 7.15pm-9pm sea procession and Aomori Fireworks Festival | https://www.nebuta.jp/foreign/english.html ; https://www.nebuta.jp/ | 2026-11-07 |
| Haneto: anyone in costume can join, no booking; some stores rent costumes and help dress | https://www.nebuta.jp/foreign/english.html | 2026-11-07 |
| Paid seats: buy in advance; vacancies sold on the day; no prices on English page | https://www.nebuta.jp/foreign/english.html | 2026-11-07 |
| 10-minute walk from JR Aomori Station | https://www.nebuta.jp/foreign/english.html | 2026-11-07 |
| Akita Kanto: 3 to 6 August every year, Kanto Odori | https://www.kantou.gr.jp/faq/ | 2026-11-07 |
| Golden ears of rice; prayer for harvests; National Important Intangible Folk Cultural Property | https://www.kantou.gr.jp/english/ | 2026-11-07 |
| About 280 poles, about 10,000 lanterns | https://www.kantou.gr.jp/english/ ; https://www.kantou.gr.jp/faq/ | 2026-11-07 |
| Pole sizes: Owaka 12 m/50 kg/46; Chuwaka 9 m/30 kg/46; Kowaka 7 m/15 kg/24; Yowaka 5 m/5 kg/24 | https://www.kantou.gr.jp/english/ | 2026-11-07 |
| Five techniques incl. forehead, shoulder, hips | https://www.kantou.gr.jp/faq/ | 2026-11-07 |
| Kanto Odori 800 m; seats on central reservation | https://www.kantou.gr.jp/faq/ | 2026-11-07 |
| 2026 schedule: traffic closures 6.15pm; poles enter 6.45pm (3,6 Aug)/6.50pm (4,5 Aug); performances 7.10/7.15pm; fureai kanto; end 9pm | https://www.kantou.gr.jp/eventa/item.cgi?pro2&1 | 2026-11-07 |
| Shortened in bad weather, not normally cancelled | https://www.kantou.gr.jp/faq/ | 2026-11-07 |
| Myogi Taikai 4-6 Aug, Area Nakaichi Nigiwai Hiroba, ~10 min walk from Akita Station; rain venue CNA Arena Akita | https://www.kantou.gr.jp/faq/ | 2026-11-07 |
| 2026 heats 9am-3.40pm (4,5 Aug); final 9.20am-3pm (6 Aug) | https://www.kantou.gr.jp/eventa/item.cgi?pro2&1 | 2026-11-07 |
| 2026 seat prices: masu 28,000 yen/box (6); S 4,500; A 4,000; B 3,500; same for children; infants without seat free | https://www.kantou.gr.jp/kanran/ ; https://www.kantou.gr.jp/faq/ | 2026-11-07 |
| 2026 bookings: groups (15+) 16 April; individuals (14 or fewer) 14 May; masu 14 per day, lottery; 2026 sales ended | https://www.kantou.gr.jp/kanran/ | 2026-11-07 |
| Sendai Tanabata currently 6-8 August; 2026 guide "August 6-8" | https://www.sendaitanabata.com/ ; 2026_guide_en.pdf | 2026-11-07 |
| Dates from Date Masamune era; revived 1927 by merchants after recession | 2026_guide_en.pdf | 2026-11-07 |
| Over 2 million visitors over 3 days | https://www.sendaitanabata.com/about/ ; 2026_guide_en.pdf | 2026-11-07 |
| Seven ornaments (nanatsu-kazari); cranes = long life; tanzaku = study/calligraphy | 2026_guide_en.pdf | 2026-11-07 |
| 16,000 fireworks on the eve | 2026_guide_en.pdf | 2026-11-07 |
| Suzume Yoi Odori 7 Aug 7.30-8.30pm (2026) | 2026_guide_en.pdf | 2026-11-07 |
| Decorated areas incl. station front, Clis Road, Sunmall, Ichibancho, Omachi | https://www.sendaitanabata.com/ | 2026-11-07 |
| Hanagasa 5-7 Aug every year; route Tokamachi, Honmachi, Nanokamachi, Bunshokan | https://www.hanagasa.jp/en/ | 2026-11-07 |
| Over 10,000 dancers; ~1 million spectators a year; safflower hats | https://www.hanagasa.jp/en/ ; https://www.hanagasa.jp/ | 2026-11-07 |
| 6pm opening at City Office; parade 6.10pm-9.45pm; join 6.10-6.30pm with free fan, and ~8.30pm; free, no booking; weather changes | https://www.hanagasa.jp/en/ | 2026-11-07 |
| Paid seating in front of Yamagata City Office via Lawson Ticket (no prices) | https://www.hanagasa.jp/ | 2026-11-07 |
| From Sendai: Tokyo ~90 min, Shin-Aomori ~95 min (Tohoku Shinkansen); Akita ~135 min (Akita Shinkansen); Yamagata ~70 min (Senzan Line) | https://www.sendaitanabata.com/access/ | 2026-11-07 |

## shikoku-88-temple-pilgrimage.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Pilgrimage definition quote; 88 sacred sites | https://88shikokuhenro.jp/en/ | 2026-11-07 |
| Kobo Daishi born 774 in present Zentsuji City, Kagawa; Shingon; Koyasan; selected 88 sites | https://88shikokuhenro.jp/en/pilgrimage/ | 2026-11-07 |
| Anyone may take part regardless of belief; locals offer food, drink, gifts, lodging | https://www.mlit.go.jp/tagengo-db/en/R2-01920.html | 2026-11-07 |
| Settai continues today; Japan Heritage certification by Agency for Cultural Affairs, 2015 | https://88sekaiisan.org/en/eightyeight | 2026-11-07 |
| Four prefectures Tokushima, Kochi, Ehime, Kagawa; Paths of Awakening/Discipline/Enlightenment/Nirvana | https://88sekaiisan.org/en/eightyeight | 2026-11-07 |
| Length: more than 1,400 km (JTA); approximately 1,400 km (council) | https://www.mlit.go.jp/tagengo-db/en/R2-01920.html ; https://88sekaiisan.org/en/eightyeight | 2026-11-07 |
| Length: about 1,200 km | https://shikoku-tourism.com/en/shikoku-henro/shikoku-henro ; https://www.japan.travel/en/experiences-in-japan/583/ | 2026-11-07 |
| Many start at Temple 1 Ryozenji (Tokushima), finish Temple 88 Okuboji (Kagawa) | https://shikoku-tourism.com/en/shikoku-henro/shikoku-henro | 2026-11-07 |
| Order not required; reverse order 88 to 1; Koyasan optional | https://88shikokuhenro.jp/en/faq/ | 2026-11-07 |
| Walk, car, public transport, can combine | https://88shikokuhenro.jp/en/faq/ | 2026-11-07 |
| Walk ~6 weeks at 30 km/day, ~400,000 yen; bus 9-12 days, ~250,000 yen; car ~10 days, ~140,000 yen; sendatsu; no foreign-language bus tours currently | https://shikoku-tourism.com/en/shikoku-henro/shikoku-henro | 2026-11-07 |
| ~6 weeks on foot; 9-12 days by rental car or bus | https://www.japan.travel/en/experiences-in-japan/583/ | 2026-11-07 |
| Shukubo; reserve ahead | https://88shikokuhenro.jp/en/faq/ | 2026-11-07 |
| No required dress; white recommended; white coat over clothes | https://88shikokuhenro.jp/en/faq/ ; https://88shikokuhenro.jp/en/ | 2026-11-07 |
| Minimum white vest and staff; item list | https://shikoku-tourism.com/en/shikoku-henro/shikoku-henro | 2026-11-07 |
| Staff = symbol of the master; not on bridges; leave in stand | https://88shikokuhenro.jp/en/basic-knowledge/henro-supplies/ | 2026-11-07 |
| Osamefuda colours: white 1-4, green 5-6, red 7-24, silver 25-49, gold 50-99 | https://88shikokuhenro.jp/en/basic-knowledge/henro-supplies/ | 2026-11-07 |
| Nokyocho = proof of chanting at main hall and Daishi hall | https://88shikokuhenro.jp/en/basic-knowledge/henro-supplies/ | 2026-11-07 |
| Stamp 300 yen; 7am-5pm all year; extra time in busy seasons | https://shikoku-tourism.com/en/shikoku-henro/shikoku-henro | 2026-11-07 |
| Payment basically 7am-5pm; colour omie 200 yen | https://88shikokuhenro.jp/en/basic-knowledge/understanding-pilgrimage/ ; henro-supplies | 2026-11-07 |
| Worship steps (gate bow, wash L/R/mouth, ask/ring bell once, main hall, Daishi hall, office, bow leaving); incense/candle placement; don't take offerings | https://88shikokuhenro.jp/en/basic-knowledge/worship-method/ | 2026-11-07 |
| Bad luck to ring bell when leaving | https://shikoku-tourism.com/en/shikoku-henro/shikoku-henro | 2026-11-07 |
| Don't take slips from osamefuda box | https://88shikokuhenro.jp/en/basic-knowledge/henro-supplies/ | 2026-11-07 |
| Gateways: JR Tokushima/Tokushima Awaodori Airport; JR Kochi/Kochi Ryoma Airport; JR Matsuyama/Matsuyama Airport; JR Takamatsu/Takamatsu Airport | https://88shikokuhenro.jp/en/access/ | 2026-11-07 |
| Rapid Marine-Liner Okayama-Takamatsu average 55 minutes | https://www.jr-shikoku.co.jp/global/en/trainbus/syaryou.html | 2026-11-07 |
| All Shikoku Rail Pass covers railways in Shikoku; rental cars near stations/airports | https://shikoku-tourism.com/en/shikoku-henro/shikoku-henro | 2026-11-07 |

### Research set P

#### Facts file P

## eating-with-dietary-needs.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Stocks and sauces usually contain some meat-based ingredients; hidden meat or bonito flakes common | https://www.japan.travel/en/guide/vegetarian-guide/ | 2026-11-07 |
| Natto sauce is typically dashi | https://www.japan.travel/en/guide/vegetarian-guide/ | 2026-11-07 |
| Konbini onigiri often contain fish; umeboshi and kombu are alternatives | https://www.japan.travel/en/guide/vegetarian-guide/ | 2026-11-07 |
| Shojin ryori traditionally vegan, avoids garlic and onion, may include dairy | https://www.japan.travel/en/guide/vegetarian-guide/ | 2026-11-07 |
| Okonomiyaki can be vegetarian but not vegan (egg) | https://www.japan.travel/en/guide/vegetarian-guide/ | 2026-11-07 |
| "Vegetarian" alone may not be sufficient; say no meat, seafood, animal products incl. dashi/stocks; name chicken, pork, fish | https://www.japan.travel/en/guide/vegetarian-guide/ | 2026-11-07 |
| Carry a written card; check photo menus; notify restaurants in advance; contact ryokan ahead; translation apps | https://www.japan.travel/en/guide/vegetarian-guide/ | 2026-11-07 |
| Suitable dishes list (vegetable tempura, tsukemono, tofu, nasu dengaku, zaru soba, kappa maki, takuan maki; edamame, inarizushi) | https://www.japan.travel/en/guide/vegetarian-guide/ | 2026-11-07 |
| Resources: Happy Cow, Vegewel, Japan VegeMap, Japan Vegetarian Society guide (Japanese only); stickers from Japan Vegan Society, VegeProject Japan, Japan Vegetarian Association | https://www.japan.travel/en/guide/vegetarian-guide/ | 2026-11-07 |
| Cooking sake and mirin used in many dishes; some miso contains alcohol unless additive-free "mu-ten-ka"; gelatine and animal fats in breads, snacks, sweets; alcohol served in most restaurants | https://www.japan.travel/en/guide/muslim-travelers/ | 2026-11-07 |
| No central agency for halal accreditation | https://www.japan.travel/en/guide/muslim-travelers/ | 2026-11-07 |
| Halal-friendly restaurants may not have a separate halal-only kitchen | https://www.japan.travel/en/guide/muslim-travelers/ | 2026-11-07 |
| Average supermarket does not stock halal products; halal groceries mostly frozen meat and spices | https://www.japan.travel/en/guide/muslim-travelers/ | 2026-11-07 |
| Prayer rooms/mosques mostly in larger cities; airports, tourist hotspots, Muslim-friendly hotels increasingly offer prayer spaces; some hotels provide prayer mats and Mecca direction | https://www.japan.travel/en/guide/muslim-travelers/ | 2026-11-07 |
| Resources: Halal Gourmet Japan, Halal Media Japan, HalalJapan.jp; apartments/kitchenettes help | https://www.japan.travel/en/guide/muslim-travelers/ | 2026-11-07 |
| JNTO Muslim Guide section with planning articles and external links for prayer rooms and mosques | https://www.japan.travel/en/my/muslim-guide/ | 2026-11-07 |
| CAA Food Allergy Communication Sheet for smartphones in English, Chinese, Korean, Japanese; download before use; check boxes do not work otherwise; Adobe Reader recommended | https://www.caa.go.jp/en/policy/food_labeling/ | 2026-11-07 |
| Mandatory to indicate presence of specified ingredients in foods and additives | https://www.caa.go.jp/en/policy/food_labeling/pdf/food_labelling_cms203_200410_01.pdf | 2026-11-07 |
| Mandatory (8): shrimp, crab, walnut, wheat, buckwheat, egg, dairy products, peanut | https://www.caa.go.jp/en/policy/food_labeling/pdf/food_labelling_cms203_200410_01.pdf | 2026-11-07 |
| Recommended (20): almond, abalone, squid, salmon roe, orange, cashew nut, kiwi fruit, beef, sesame, salmon, mackerel, soybean, chicken, banana, pork, macadamia nut, peach, yam, apple, gelatine | https://www.caa.go.jp/en/policy/food_labeling/pdf/food_labelling_cms203_200410_01.pdf | 2026-11-07 |
| Allergens listed individually as a general rule; collectively on an exceptional basis | https://www.caa.go.jp/en/policy/food_labeling/pdf/food_labelling_cms203_200410_01.pdf | 2026-11-07 |
| Tell ryokan about dietary needs when booking; dashi (consistent with existing page) | /guide/ryokan-and-onsen (site page) and https://www.japan.travel/en/guide/vegetarian-guide/ | 2026-11-07 |

## accessible-travel-in-japan.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| About 95 percent of Japan's train stations entirely accessible | https://www.japan.travel/en/plan/traveling-with-disability/ | 2026-11-07 |
| Little trouble at major stations, airports, hotels, newer shopping centres, city theatres; smooth pavements; yellow tiles; some sites rent wheelchairs | https://www.japan.travel/en/plan/traveling-with-disability/ | 2026-11-07 |
| Most standard taxis cannot support electric wheelchairs | https://www.japan.travel/en/plan/traveling-with-disability/ | 2026-11-07 |
| Some hotels offer bathing/showering facilities and assisted bathing service | https://www.japan.travel/en/plan/traveling-with-disability/ | 2026-11-07 |
| Ecomo rakuraku shows station accessibility; independent research advised | https://www.japan.travel/en/plan/traveling-with-disability/ | 2026-11-07 |
| Station staff help on and off trains; tell them where you get off; bus drivers help; ask for assistance | https://www.japan.travel/en/guide/accessibility-in-japan/ | 2026-11-07 |
| JNTO accessibility page links: Tokyo/Yokohama barrier-free info, MLIT eating guide, 72-hour itinerary, Ecomo rakuraku route mapping, Japan Visitor Hotline | https://www.japan.travel/en/guide/accessibility-in-japan/ | 2026-11-07 |
| JR West: staff assist with guidance to platform and boarding/alighting; arrangements in advance; web contact form | https://www.westjr.co.jp/travel-information/en/train-usage-guide/accessibility/ | 2026-11-07 |
| JR West: apply no earlier than 10:00 one month prior, no later than 2 days prior | https://www.westjr.co.jp/travel-information/en/train-usage-guide/accessibility/ | 2026-11-07 |
| JR West: wheelchairs max 120 cm length/height, 70 cm width; 180-degree turn in passage under 180 cm | https://www.westjr.co.jp/travel-information/en/train-usage-guide/accessibility/ | 2026-11-07 |
| JR West: cars with a deck require multipurpose room; next car with multipurpose room if changed; companion for those who cannot use restroom/move alone | https://www.westjr.co.jp/travel-information/en/train-usage-guide/accessibility/ | 2026-11-07 |
| JR Central Tokaido Shinkansen: wheelchair seat requires reservation, until two days prior; multi-purpose room primarily for disabled passengers; configuration may change | https://global.jr-central.co.jp/en/info/accommodation/ | 2026-11-07 |
| JR Central (2018 PDF): notify in advance at departure station counter or info centre; staff arranged at destination; come early; 70 cm / 120 cm same as wheelchairs; scooters on Tokaido-Sanyo Shinkansen only in N700 multi-purpose room with turning requirements; apply 10:00 one month before to two days before, will try up to day before/day of; companion | https://global.jr-central.co.jp/en/info/_pdf/mobility_scooters.pdf | 2026-11-07 |
| JR Pass site: wheelchair seats on most Shinkansen and conventional limited express; reserve at any JR Ticket Office; from 10:00 up to one month before; may not board if full; size conditions; steering-wheel powered chairs generally not allowed | https://japanrailpass.net/en/use/wheelchair-use/ | 2026-11-07 |

## sunrise-izumo-seto-night-train.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Only sleeper train in Japan on a regular schedule (newspaper) | https://www.sakigake.jp/news/article/20260311CO0037/ | 2026-11-07 |
| Timetable change 14 March 2026; Tokyo departure moved 21:50 to 21:26; journey 24 minutes longer; for track maintenance | https://www.sakigake.jp/news/article/20260311CO0037/ | 2026-11-07 |
| 14 cars; coupled Tokyo-Okayama; split to Takamatsu and Izumoshi | https://www.jr-odekake.net/railroad/train/sunriseseto_izumo/ ; https://timetable.jr-odekake.net/train-timetable/38502?date=20261026 | 2026-11-07 |
| Stop lists for each train; stops vary by train | https://www.jr-odekake.net/railroad/train/sunriseseto_izumo/ | 2026-11-07 |
| Seto extended to Kotohira on certain dates | https://timetable.jr-odekake.net/train-timetable/38502?date=20261026 | 2026-11-07 |
| Westbound (Oct 2026): Tokyo dep 21:26; Yokohama dep 21:52; passes Osaka; Okayama arr 06:27; Takamatsu arr 07:27; Izumoshi arr 10:00; daily; cancellations/time changes possible | https://timetable.jr-odekake.net/train-timetable/38502?date=20261026 | 2026-11-07 |
| Eastbound (Oct 2026): Izumoshi dep 18:57; Takamatsu dep 21:26; Osaka arr 00:31; Tokyo arr 07:08; daily | https://timetable.jr-odekake.net/train-timetable/33651?date=20261021 | 2026-11-07 |
| Room types: Single Deluxe (A, 1), Single (B, 1), Solo (B, 1), Single Twin (B, up to 2 with extra bed), Sunrise Twin (B, 1-2, per room; one person needs two adult fare tickets), Nobinobi ordinary-car seat (1-6 per booking) | https://www.jr-odekake.net/goyoyaku/campaign/sunriseseto_izumo/form.html | 2026-11-07 |
| Nobinobi seats in cars 5 and 12, 14 per level, upper and lower | https://www.jr-odekake.net/railroad/train/sunriseseto_izumo/ | 2026-11-07 |
| Facilities: shower room, outlets only in A and B private rooms, multipurpose toilets, wheelchair room and seat, women-only seats, vending machines, Wi-Fi | https://www.jr-odekake.net/railroad/train/sunriseseto_izumo/ | 2026-11-07 |
| After-midnight Osaka-side boarding: search with origin date and 23:00-hour time; collect tickets before ticket offices close | https://www.jr-odekake.net/goyoyaku/campaign/sunriseseto_izumo/form.html | 2026-11-07 |
| Online reservations open 10:00 JST one month before; private rooms on Sunrise Seto/Izumo excepted from special-facility exclusion | https://www.westjr.co.jp/global/en/howto/train-reservation/condition/ | 2026-11-07 |
| Pass: sleeping car requires sleeping car charge plus limited express charge; Green charge for Green private compartments; cannot change to reserved seat or sleeping car after boarding | https://japanrailpass.net/en/use/conditions-for-use/ | 2026-11-07 |
| Pass holders reserve at ticket office, machine, or online if bought on official site | https://japanrailpass.net/en/use/reserved-seat-reservation/ | 2026-11-07 |
