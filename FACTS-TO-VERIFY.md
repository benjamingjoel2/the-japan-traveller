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
| Yamato English support  / , 8:00-21:00, 365 days | https://www.global-yamato.com/en/hands-free-travel/ | 2026-11-07 |
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
| Bear guidance: moderate distance, bear bells, no photos/approach, mother bears dangerous, manage food/rubbish; report to Info Center , 08:00-17:00 | https://www.env.go.jp/park/content/000172089.pdf | 2026-11-07 |
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

## Articles, news and Q&As added 2026-11-07 (second round)

News pieces show the date the news was reported; our publication date is 2026-11-07. Corrections made from this research: Daisetsuzan autumn colour (from late August at Asahidake, peak mid September); Furano lavender (peak mid July to early August); JESTA added to entry basics; 2027 Nozomi/Mizuho and Green Car price rises noted in the rail guide and JR Pass Q&A.

Open points:
- Hakodate–Sapporo: the City of Hakodate gives about 3:30 on the Limited Express Hokuto; the rail table says 3h45. Check against JR Hokkaido.
- Hakata–Kagoshima-Chuo: JNTO gives 1 hour 16 minutes; the rail table says 1h20.
- Visa fees reportedly rose on 1 July 2026; not verified (MOFA pages returned 403). Not published.
- Sakurajima ferry no longer runs 24 hours (4:00–23:30 since 1 October 2025).
- Price changes where JNTO is out of date: Kumamoto Castle 800 yen; Tokyo Subway Ticket 1,000/1,500/2,000 yen; Yumepa 1,500 yen; Matsue Castle 1,200 yen from 1 July 2026; Korakuen and Okayama Castle 500 yen.

### Research set Q

#### Facts file Q

## getting-around-kyoto.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| City bus flat-fare zone: adult 230 yen, child 120 yen; child = ages 6-11 | https://www2.city.kyoto.lg.jp/kotsu/webguide/en/fare/fare_bus.html | 2026-11-07 |
| Sightseeing Limited Express Bus: adult 500 yen, child 250 yen | https://www2.city.kyoto.lg.jp/kotsu/webguide/en/bus/limited_express.html | 2026-11-07 |
| Subway fares adult 220-360 yen, child 110-180 yen; effective from 1 October 2025; Karasuma and Tozai lines | https://www2.city.kyoto.lg.jp/kotsu/webguide/en/fare/fare_tika.html | 2026-11-07 |
| Karasuma Line north-south through Kyoto Station; Tozai east-west; transfer at Karasuma-Oike | https://kyoto.travel/en/getting-around/getting-around-kyoto-by-subway-train/ | 2026-11-07 |
| Standard buses: board rear, pay on exit, exit front; EX100/EX101: board front, pay on boarding, exit rear | https://www2.city.kyoto.lg.jp/kotsu/webguide/en/bus/howtoride_bus.html | 2026-11-07 |
| Credit, debit and cash cards cannot be used; Japan Rail Pass not accepted on buses | https://www2.city.kyoto.lg.jp/kotsu/webguide/en/bus/howtoride_bus.html | 2026-11-07 |
| IC cards accepted: PiTaPa, ICOCA, Kitaca, PASMO, Suica, manaca, TOICA, HAYAKAKEN, nimoca, SUGOCA, KANSAI ONE PASS (foreign tourists only); load in advance at station or convenience store | https://www2.city.kyoto.lg.jp/kotsu/webguide/en/ticket/ic_card.html | 2026-11-07 |
| Subway & Bus 1-Day Pass 1,100 yen adult / 550 yen child; coverage (all subway, all city bus, listed Kyoto Bus, Keihan Bus, JR Bus Takao-Keihoku line Kyoto Station-Toganoo; some seasonal Kyoto Bus lines excluded); valid on day of activation only, not 24 hours; sales points | https://www2.city.kyoto.lg.jp/kotsu/webguide/en/ticket/regular_1day_card_comm.html | 2026-11-07 |
| 1-Day Pass usable on sightseeing express bus without extra fare | https://www2.city.kyoto.lg.jp/kotsu/webguide/en/bus/limited_express.html | 2026-11-07 |
| EX100 stops: Kyoto Sta. (D1), Gojo-zaka, Gion, Okazaki Koen Bijutsukan/Heian Jingu-mae, Ginkakuji-mae; EX101 Kyoto Sta.-Gojo-zaka; every 7-8 minutes in morning on operation days | https://www2.city.kyoto.lg.jp/kotsu/webguide/en/bus/limited_express.html | 2026-11-07 |
| Sightseeing express bus running since June 2024 to cut waiting and crowding on parallel routes; first in Japan with fare different from ordinary buses, using national overtourism scheme; runs Sat, Sun, holidays | https://www.city.kyoto.lg.jp/kotsu/cmsfiles/contents/0000350/350985/harutaisaku.pdf | 2026-11-07 |
| Pokeloke plus+ shows bus crowding from 20 March 2026 | https://www.city.kyoto.lg.jp/kotsu/cmsfiles/contents/0000350/350985/harutaisaku.pdf | 2026-11-07 |
| Bureau recommends combining trains and buses in busy season as buses take longer at peaks | https://www.city.kyoto.lg.jp/kotsu/cmsfiles/contents/0000350/350985/harutaisaku.pdf | 2026-11-07 |
| Autumn 2026 campaign: Sat/Sun/holidays 31 Oct-29 Nov 2026; focus days 21-23, 28, 29 Nov | https://www.city.kyoto.lg.jp/kotsu/cmsfiles/contents/0000359/359584/2026aki_houdou.pdf | 2026-11-07 |
| Autumn 2026: extra route 106 (Kyoto Sta-Gojo-zaka-Gion-Sanjo Keihan-mae) and 206 Kyoto-bound runs; route 109 Kitaoji BT-Kinkakuji-michi-Arashiyama on focus days, hourly 8:00-16:00 hours; Karasuma Line extra trains ~10:00-19:00, every ~5-6.5 min vs ~7.5 min | https://www.city.kyoto.lg.jp/kotsu/cmsfiles/contents/0000359/359584/2026aki_houdou.pdf | 2026-11-07 |
| Resident-priority fare plan: new fare about 350-400 yen, residents 200 yen; flat-fare zone during fiscal 2027 (Reiwa 9); subject to national approval | https://www.city.kyoto.lg.jp/kotsu/cmsfiles/contents/0000351/351261/20260317.pdf | 2026-11-07 |
| JR Sagano Line Kyoto-Saga-Arashiyama about 11 min (rapid); 8-min walk to Togetsu-kyo; crowded, board from back of platform; subway + Randen via Uzumasa Tenjingawa; Hankyu change at Katsura; Randen from Shijo-Omiya; bus 11 "tends to be constantly congested" | https://kyoto.travel/en/getting-around/comfortable-access-to-saga-arashiyama/ | 2026-11-07 |
| Fushimi Inari: next to JR Inari Station, 2 stations from Kyoto; 5-min walk east of Keihan Fushimi-Inari | https://inari.jp/en/access/ | 2026-11-07 |
| JR Nara Line about 9 min, rapid and local stop; Keihan Gion-Shijo to Fushimi Inari about 22 min; limited express does not stop | https://kyoto.travel/en/getting-around/comfortable-access-to-fushimi-fushimi-inari-taisha-shrine/ | 2026-11-07 |
| Uji: JR Nara Line about 17 min to JR Uji; Keihan about 40 min from Demachiyanagi | https://www.japan.travel/en/spot/2017/ | 2026-11-07 |
| Keihan Uji Line Chushojima-Uji | https://kyoto.travel/en/getting-around/getting-around-kyoto-by-subway-train/ | 2026-11-07 |
| Gion guidelines (11 March 2026): "Gion is not just a tourist destination; it is a place where people live."; no touching/chasing/photographing geiko/maiko without permission; no entering private property; no blocking streets; violations may result in fines | https://kyoto.travel/en/news/sightseeing-guidelines/ | 2026-11-07 |
| Southern Gionmachi notice (9 Jan 2024): obstructing path fine under 10,000 yen; obstructing traffic fine up to 50,000 yen | https://kyoto.travel/en/responsible-travel/gion-manner-message-from-southern-gionmachi/ | 2026-11-07 |
| Kyoto accommodation tax from 1 March 2026: <6,000 = 200; 6,000-<20,000 = 400; 20,000-<50,000 = 1,000; 50,000-<100,000 = 4,000; 100,000+ = 10,000 yen per person per night; basis excludes meals and consumption tax; school-trip exemption (not universities) | https://www.city.kyoto.lg.jp/gyozai/page/0000236942.html | 2026-11-07 |

## osaka.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Main tower hours 9:00-18:00, last entry 17:30; closed 28 Dec-1 Jan; adults 1,200 yen; high school/university 600 yen with ID; junior high and under free with proof; overseas visitors 15 or under may show passport; hours and fees changed from 1 April 2025 | https://www.osakacastle.net/guide/ | 2026-11-07 |
| Advance tickets via booking site; collection relates to Toyotomi Hideyoshi and Sengoku period; exhibits rotate | https://www.osakacastle.net/english/ | 2026-11-07 |
| "The symbol of Osaka"; 55 m above ground, 5 tiers, 8 floors; 15-20 min walk from Morinomiya or Osakajokoen (JR Loop Line) | https://osaka-info.jp/en/spot/osaka-castle-main-keep/ | 2026-11-07 |
| Dotonbori "popular shopping district of Minami"; named after Doton Yasui, river dug 1612; theatre/kabuki/teahouse history; giant 3D signs; Shochikuza near Ebisubashi; Tombori Riverwalk; right outside Namba (Nankai, Kintetsu); Osaka Metro Midosuji, Sennichimae, Yotsubashi | https://osaka-info.jp/en/spot/dotonbori/ | 2026-11-07 |
| Kuromon: about 150 stores; about 580 m south from Sennichimae; wholesale and retail; ~18,000 weekday visitors, ~150,000 at year end; origins c.1822-1823 near Enmyoji; destroyed 1912 fire and air raids; hours vary by shop; right outside Nippombashi Station (Sennichimae Line) | https://osaka-info.jp/en/spot/kuromon-market/ | 2026-11-07 |
| OCTB site: sales of Osaka Amazing Pass on this site closed; links to new version | https://www.osp.osaka-info.jp/en/ | 2026-11-07 |
| Amazing Pass 1day 3,500 / 2day 5,000; ITM 3,800 / 5,400; KIX 28-hour 5,300; same price adults/children; coverage Osaka Metro, City Bus (some excluded), New Tram, Hankyu, Hanshin, Keihan, Kintetsu, Nankai mainly in Osaka City; ~40 spots; KIX version includes one Nankai KIX-Namba trip, not Namba-KIX, limited express extra; QR code at gates/buses/attractions | https://osaka-amazing-pass.com/en/howto_about_1day.html | 2026-11-07 |
| Sales 25 Mar 2026-31 Mar 2027 (KIX version from 1 Oct 2026); 2day consecutive days; day = 3:00-2:59; no refund after use; sold by SURUTTO KANSAI via SURUTTO QRtto | https://osaka-amazing-pass.com/en/info.html | 2026-11-07 |
| Nankai KIX-Namba: Rapi:t fastest 34 min; Airport Express about 45 min | https://www.nankai.co.jp/en_railway/access-fromkix | 2026-11-07 |
| HARUKA "Direct access to Kyoto"; fare plus express fee required; Kansai-Airport Rapid Service direct to Osaka (Umeda, Tennoji); splits at Hineno, board first four cars to airport; passes at Kansai-airport Station office | https://www.westjr.co.jp/travel-information/en/train-usage-guide/howto/guide/ | 2026-11-07 |
| WEST QR HARUKA covers HARUKA + conventional lines KIX to Tennoji/Osaka/Shin-Osaka/Kobe/Nara/Kyoto; reserved seats in dedicated cars; price changed for tickets sold from 1 Nov 2026 | https://www.westjr.co.jp/global/en/ticket/westqr/haruka/ | 2026-11-07 |
| Osaka Prefecture accommodation tax from 1 Sept 2025: <5,000 not taxed; 5,000-<15,000 = 200; 15,000-<20,000 = 400; 20,000+ = 500 yen; pay to facility; prepaid old-rate bookings owe difference; school trip and diplomatic exemptions | https://www.pref.osaka.lg.jp/o050040/zei/alacarte/osakafunoshukuhakushisetsunishukuhakusuruminasama.html | 2026-11-07 |

### Research set R

#### Facts file R

## fuji-five-lakes.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Kawaguchiko easiest lake to reach from Tokyo, centre of sightseeing; autumn leaves on northern shore early November | https://www.japan.travel/en/destinations/tokai/yamanashi/fuji-five-lakes/ | 2026-11-07 |
| Kawaguchiko most visited, main entry point; lakeside hotels, hot springs, excursion boats | https://www.yamanashi-kankou.jp/english/explore-by-area/fujisan-fujigoko/index.html | 2026-11-07 |
| Yamanakako largest, closest to Fuji, third-highest elevation lake in Japan | https://www.yamanashi-kankou.jp/english/explore-by-area/fujisan-fujigoko/index.html | 2026-11-07 |
| Oshino Hakkai near Yamanakako, springs fed by Fuji groundwater | https://www.japan.travel/en/destinations/tokai/yamanashi/fuji-five-lakes/ | 2026-11-07 |
| Saiko second smallest, second deepest, max depth 71.7 m | https://www.yamanashi-kankou.jp/english/explore-by-area/fujisan-fujigoko/index.html | 2026-11-07 |
| Saiko Bat Cave, Narusawa Ice Cave, Saiko Iyashi no Sato Nenba | https://www.japan.travel/en/destinations/tokai/yamanashi/fuji-five-lakes/ | 2026-11-07 |
| Shojiko smallest, least developed; Eboshi-dake upside-down Fuji | yamanashi-kankou.jp page above; japan.travel Fuji Five Lakes page | 2026-11-07 |
| Motosuko westernmost and deepest; north-shore view on 1,000 yen note | yamanashi-kankou.jp page above; japan.travel Fuji Five Lakes page | 2026-11-07 |
| Buses from Kawaguchiko Station to any of the five lakes | https://www.japan.travel/en/destinations/tokai/yamanashi/fuji-five-lakes/ | 2026-11-07 |
| Retro Bus started spring 2005 by Kawaguchiko town and Fuji Kyuko | https://www.yamanashi-kankou.jp/english/explore-by-area/fujisan-fujigoko/index.html | 2026-11-07 |
| Fujikyu line 26.6 km Otsuki (JR Chuo Line) to Kawaguchiko, climbs nearly/about 500 m | https://www.fujikyu.co.jp/en/transportation/transportation01.html | 2026-11-07 |
| Otsuki 358 m, Kawaguchiko 857 m; stations Shimoyoshida (Arakurayama Sengen Park), Mt. Fuji, Fujikyu Highland, Kawaguchiko | https://www.fujikyu-railway.jp/en/station/ | 2026-11-07 |
| JR Chuo Line express to Otsuki, change to Fuji Kyuko line | https://www.japan.travel/en/destinations/tokai/yamanashi/fuji-five-lakes/ | 2026-11-07 |
| Fuji Excursion (Fuji Kaiyu): from Shinjuku, some from Chiba; 4 round trips daily, +1 some seasons; fastest Shinjuku-Kawaguchiko 1 h 53 min; no unreserved seats; on sale one month before | https://www.fujikyu-railway.jp/en/fujikaiyuu/ | 2026-11-07 |
| Fare Shinjuku-Kawaguchiko 4,200 yen (basic 2,580 + LE 1,620); JR section fares paid separately | https://www.fujikyu-railway.jp/en/fujikaiyuu/ | 2026-11-07 |
| JR direct trains Tokyo-Kawaguchiko: two each way daily (timetable from 14 March 2026); may be suspended without notice | https://www.fujikyu-railway.jp/en/train/jr_train07.php | 2026-11-07 |
| Fujisan View Express and Fujisan Express bookable online | https://www.fujikyu-railway.jp/en/ | 2026-11-07 |
| Highway bus from Busta Shinjuku 4th floor, connected to south exit; ~1 h 45 min to Kawaguchiko Sta.; adult from 2,200 yen, 2,000 yen online; child half; reserved seats; booking opens one month before; stops incl. Shimoyoshida, Fuji-Q Highland; luggage reservations not accepted; operated by Fujikyu and Keio | https://bus.fujikyu.co.jp/en/highway/fujisan/shinjuku-kawaguchiko/ | 2026-11-07 |
| From 1 Oct 2026 Fujikyu services sold online via Fujiyama Connect; Keio on Highwaybus.com; changes/cancellations on site where booked | https://bus.fujikyu.co.jp/en/news/detail/mmpatv00000002xx.html | 2026-11-07 |
| Kawaguchiko to Mt. Fuji 5th Station bus one way 1,950 yen (Jan 2026 schedule, data as of Dec 2025); may be suspended in heavy snow | https://asset.japan.travel/image/upload/v1767774752/pdf/2026_TIC/202601/Bus_Schedule_to_Kawaguchiko_Mt._Fuji_Jan.1_Jan.31.pdf | 2026-11-07 |
| Chureito: 398 steps to observation deck; deck reopened 1 Feb 2022; open 24 h; illumination times vary; ~25 min walk from Shimoyoshida Station; 4 paid car parks 1,000-1,500 yen per 6 h; buses cannot reach car parks | https://en.fujiyoshida.net/spot/index.php?p=12 | 2026-11-07 |
| Manners: no use of Shimoyoshida Station toilets, calls or enquiries there; do not drive to plaza in front of memorial tower; no stopping in front of station except drop-off/pick-up | https://en.fujiyoshida.net/spot/index.php?p=12 | 2026-11-07 |
| About 650 cherry trees in spring; Shimoyoshida Honmachi Street: photograph safely and quietly | https://en.fujiyoshida.net/feature/index.php?p=mtfuji_view | 2026-11-07 |
| Park also good for green leaves, autumn foliage, snow | https://en.fujiyoshida.net/spot/index.php?p=12 | 2026-11-07 |
| Visibility: clear winter days best from afar; often obscured in rainy season early June to mid-July; early morning or late afternoon best up close | https://www.japan.travel/en/fuji-guide/views-of-fuji/ | 2026-11-07 |

## snow-monkeys-jigokudani.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Over 160 Japanese macaques; Yokoyu River valley upriver of Yudanaka and Shibu; snow about a third of the year; name means Hell's Valley | https://db.go-nagano.net/en/topics_detail6/id=12291 | 2026-11-07 |
| Monkeys use hot spring baths December to March; babies in spring; irregular in autumn; daily updates on Facebook/X; appearance forecasts | https://en.jigokudani-yaenkoen.co.jp/flow/ | 2026-11-07 |
| Hours Apr-Oct 8:30-17:00; Nov-Mar 9:00-16:00; no fixed closing days; may close without notice; arrive 30 min before closing | https://en.jigokudani-yaenkoen.co.jp/guide/ | 2026-11-07 |
| Winter hours from Sunday 1 November (2026 notice) | https://en.jigokudani-yaenkoen.co.jp/information/winter-operating-hours-will-begin-on-sundaynovember-1/ | 2026-11-07 |
| Fees: single 800/400, group (20+) 680/340, annual 5,000/2,500; under 5 free with guardian; no senior discount; cards and e-money OK, no QR/barcode; fees revised from 1 Dec 2026 | https://en.jigokudani-yaenkoen.co.jp/guide/ | 2026-11-07 |
| Dec-Apr priority entry for online ticket holders | https://en.jigokudani-yaenkoen.co.jp/ | 2026-11-07 |
| Rules: no showing/giving food; no touching/yelling; never touch babies; step away; no staring; selfie sticks, drones, cameras in bath prohibited; flash allowed; no pets incl. guide dogs; no catching animals/collecting plants; may be asked to leave | https://en.jigokudani-yaenkoen.co.jp/caution/ | 2026-11-07 |
| No bathing with monkeys; no paved roads; wheelchairs/carts not accessible | https://en.jigokudani-yaenkoen.co.jp/guide/ | 2026-11-07 |
| Footwear: sneakers/hiking shoes warm season, rubber/snow boots winter, simple crampons | https://en.jigokudani-yaenkoen.co.jp/caution/ | 2026-11-07 |
| Walk: Snow Monkey Park (bus stop) ~35 min; Kanbayashi Onsen via Yumichi trail ~2 km ~30 min; Jigokudani Parking ~15 min, 500 yen; Shibu road narrow logging road closed in winter | https://en.jigokudani-yaenkoen.co.jp/access/ | 2026-11-07 |
| Tokyo-Nagano Hokuriku Shinkansen fastest ~79 min; Nagano-Yudanaka Nagaden LE ~38 min; Yudanaka-park bus ~15 min; Nagano Stn express bus to Shiga Kogen ~41 min | https://en.jigokudani-yaenkoen.co.jp/access/ | 2026-11-07 |
| LE trains Snow Monkey and Yukemuri; transfers at Shinshu-Nakano or Suzaka on some trains; express bus stops 23 and 24 at Nagano Stn | https://www.nagaden-net.co.jp/hubfs/timetable_2026sp.pdf?hsLang=ja | 2026-11-07 |
| Express bus from east exit of Nagano Station; Snow Monkey Pass combines access and entry | https://www.go-nagano.net/en/trip-idea/id7062?hsLang=en | 2026-11-07 |
| Shibu: history over 1,300 years; rest stop for Zenkoji pilgrims; nine soto-yu run by inns, free for inn guests; Oyu for non-guests for small fee at information centre; next to Yudanaka, last stop of Nagaden; ~half-hour walk or short taxi from station; ~10 min bus to park entrance | https://www.japan.travel/en/spot/1339/ | 2026-11-07 |

### Research set S

#### Facts file S

## yakushima.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Registered as UNESCO World Heritage site in 1993; Japan's first inscription | https://www.japan.travel/en/destinations/kyushu/kagoshima/yakushima/ | 2026-11-07 |
| Microclimates subtropical (beaches) to subarctic (high mountains) | https://www.japan.travel/en/destinations/kyushu/kagoshima/yakushima/ | 2026-11-07 |
| Almost 3 times Tokyo's annual rainfall; "rainy 35 days a month" | https://www.kagoshima-kankou.com/for/highlights/yakushima_island | 2026-11-07 |
| Forestry Agency uses the "35 days' worth of rain" saying | https://www.rinya.maff.go.jp/e/national_forest/recreation_forest/yakushima_shiratani.html | 2026-11-07 |
| Jomon Sugi officially discovered 1966; 25.3 m high; circumference 16.4 m; age est. 2,000-7,200 years; viewed from deck 15 m away | https://www.japan.travel/en/spot/596/ | 2026-11-07 |
| Hike about 10 hours; leave before dawn to return by sunset | https://www.japan.travel/en/spot/596/ | 2026-11-07 |
| Arakawa trail entrance to Jomon Sugi round trip 9-10 hours; depart 5:00-7:00 | https://www.env.go.jp/en/park/yakushima/ywhcc/tozan/jyoumon.html | 2026-11-07 |
| Toilets: Arakawa entrance, Sandai-sugi, Okabu entrance, Takatsuka Hut; no public phones at Arakawa | https://www.env.go.jp/en/park/yakushima/ywhcc/tozan/jyoumon.html | 2026-11-07 |
| Forest railway track rules (single file, passing places, sleepers slippery); deck rules; no tents/overnight at Jomon Sugi generally; Wilson-kabu rules; best-day calendar exists | https://www.env.go.jp/en/park/yakushima/ywhcc/tozan/jyoumon.html | 2026-11-07 |
| Ordinary vehicles restricted from Arakawa trail entrance all day 1 March-30 November; take Arakawa hiking bus from in front of Yakusugi Museum; outside period don't park in prohibited places (blocks large trucks) | https://www.env.go.jp/en/park/yakushima/ywhcc/tozan/jyoumon.html | 2026-11-07 |
| Arakawa trailhead 30-min bus from Anbo; March-November private cars not allowed, shuttle from Yakusugi Museum recommended | https://www.japan.travel/en/spot/596/ | 2026-11-07 |
| Shiratani: 426.52 ha; mainly 600-800 m, highest 1,050 m | https://www.rinya.maff.go.jp/e/national_forest/recreation_forest/yakushima_shiratani.html | 2026-11-07 |
| Trails: Taiko-iwa about 4 h (most popular), Bugyo-sugi about 3 h, Yayoi-sugi about 1 h | same | 2026-11-07 |
| Open 365 days; may close under severe weather warning; leeches all year; streams rise after heavy rain; no sandals/pumps | same | 2026-11-07 |
| Bus Miyanoura Port to Shiratani about 35 min; free parking for 50 vehicles | same | 2026-11-07 |
| Shiratani donation ¥500 (high school+), ¥400 groups 15+, ¥200 discount ticket from Yakusugi Land; pay at admin building 8:30-16:30, otherwise box | same | 2026-11-07 |
| Flights Kagoshima-Yakushima about 30 min; Fukuoka about 1 h; Itami about 1 h 30 min | same | 2026-11-07 |
| Mountain donation set up March 2017; ¥1,000 day trip, ¥2,000 overnight; junior high and older; elementary and younger exempt; pay before trek; at Arakawa pay with shuttle bus ticket; funds toilets and trail inspection/repair | https://www.env.go.jp/en/park/yakushima/ywhcc/tozan/donation.html | 2026-11-07 |
| Speed ferry Kagoshima Port to Miyanoura or Anbo 2.5 h; car ferry 4 h (cheaper); flight Kagoshima-Yakushima 40 min | https://www.japan.travel/en/destinations/kyushu/kagoshima/yakushima/ | 2026-11-07 |
| Two companies run local and sightseeing buses on the island | https://www.kagoshima-kankou.com/for/highlights/yakushima_island | 2026-11-07 |

## kagoshima-and-sakurajima.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Kyushu Shinkansen Kagoshima-Kumamoto 42 min, Fukuoka 1 h 16 min, Shin-Osaka 3 h 41 min | https://www.japan.travel/en/destinations/kyushu/kagoshima/kagoshima-and-around/ | 2026-11-07 |
| Airport bus to Kagoshima-Chuo 38 min direct, 40 via Ishiki, 55 via Yoshino | https://visitor.sakurajima.gr.jp/en/access.html | 2026-11-07 |
| Ferry crossing about 15 min, around 20 min in poor weather/sea; runs year-round | https://www.city.kagoshima.lg.jp/sakurajima-ferry/howtouse/hajimete.html | 2026-11-07 |
| 24-hour operation revised from 1 October 2025; now 4:00-23:30 | same | 2026-11-07 |
| Fares paid at Sakurajima Port (passengers and vehicles) | same | 2026-11-07 |
| Fare revision effective 1 July 2024 | https://www.city.kagoshima.lg.jp/sakurajima-ferry/unchin/unchinkaitei202404.html | 2026-11-07 |
| Adult ¥200 to ¥250; child ¥100 to ¥130 | https://www.city.kagoshima.lg.jp/sakurajima-ferry/unchin/documents/hp_genko04.pdf | 2026-11-07 |
| Kagoshima-Chuo to Kagoshima Suizokukan-mae bus about 14 min + 1 min walk; Island View Bus port to Visitor Center about 6 min | https://visitor.sakurajima.gr.jp/en/access.html | 2026-11-07 |
| Smoke or ash almost daily; 1,117 m; about 50 km around; 4 km by ferry; access prohibited within 2 km of Minami-dake and Showa craters | https://www.kagoshima-kankou.com/for/areaguide/sakurajima | 2026-11-07 |
| Yunohira Observatory 373 m, highest accessible; Arimura Lava Observatory on 1946 lava; Kurokami buried torii; Visitor Center exhibits | same | 2026-11-07 |
| JMA Level 3 (entry restricted); lowered from Level 5 to 3 in warning of 27 July 2022; statement 6 Nov 2026 Level 3 continues | https://www.data.jma.go.jp/svd/vois/data/tokyo/STOCK/activity_info/506.html | 2026-11-07 |
| Within about 2 km of Minamidake and Showa craters: large bombs, pyroclastic flows; downwind ash and small rocks; air shocks can break windows; debris flows in rain if ashfall continues | same | 2026-11-07 |
| By law area within 2 km radius of crater off-limits; city-side residents often have falling ash; city links JMA ashfall forecast | https://www.city.kagoshima.lg.jp/kikikanri/leadingcity/current.html | 2026-11-07 |
| Ash usually within 2 km of crater; ashfall usually stops within ~10 min, take cover; mask helps; brush off by hand | https://www.kagoshima-yokanavi.jp/en/feature/kagoshima-safey-tips | 2026-11-07 |
| Sengan-en built 1658 as a Shimazu residence; borrowed scenery of Sakurajima and Kagoshima Bay; house blends Japanese, Chinese, Western styles; with Shoko Shuseikan recognised as UNESCO site (Meiji Industrial Revolution) 2015; trail to top about 30 min one way; about 30 min from Kagoshima-Chuo by City View Bus or Machi Meguri Bus | https://www.japan.travel/en/spot/602/ | 2026-11-07 |
| Nationally designated scenic site; Shimazu family villa of Satsuma domain; open 9:00-17:00 every day | https://www.senganen.jp/ | 2026-11-07 |

## nagasaki.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Nishi Kyushu Shinkansen began 23 September 2022; 5 stations (Takeo-onsen, Ureshino-onsen, Shin-omura, Isahaya, Nagasaki); Takeo-onsen-Nagasaki 66 km; Hakata-Nagasaki approx. 80 min | https://www.jrkyushu.co.jp/english/news/index.html | 2026-11-07 |
| Relay KAMOME Hakata-Takeo-onsen; transfer to train on opposite side of same platform; buy ticket covering distance | https://www.jrkyushu.co.jp/english/train/relay_kamome.html | 2026-11-07 |
| Relay KAMOME and KAMOME not on online booking; Rail Pass holders reserve at JR station counter; no Green Car or on-board sales; timetables valid only a few months | https://www.jrkyushu.co.jp/english/train/shinkansen_kamome.html | 2026-11-07 |
| Museum address 7-8 Hirano-machi | https://nagasakipeace.jp/en/visit/abm/ | 2026-11-07 |
| Museum 8:30-17:30; closed 29-31 Dec; ¥200 age 15+; high school and younger free (ID); group rates abolished; special-exhibition-only entry free; renewal with partial closure Sept 2026 to March 2027 (planned); most of artefact section open during work | https://nabmuseum.jp/ | 2026-11-07 |
| Peace Park north of Hypocenter Park; statue 9.7 m, bronze, by Kitamura Seibo; tram Line 1 or 3 about 15 min to Peace Park stop + 3 min walk | https://en.at-nagasaki.jp/spot/130 | 2026-11-07 |
| Dejima completed 1636; Dutch moved from Hirado 1641; monopoly ended 1859; restoration to c.1820; 16 buildings restored incl. Chief Factor's Quarters | https://nagasakidejima.jp/en/ | 2026-11-07 |
| Dejima 8:00-21:00, entry closes 20:40; adults ¥1,100, students ¥550; no group discount, no re-entry; tram about 5 min from Nagasaki Station | same | 2026-11-07 |
| Former Glover House component of "Sites of Japan's Meiji Industrial Revolution" | https://glover-garden.jp/ | 2026-11-07 |
| Japan's oldest wooden Western-style building | https://en.at-nagasaki.jp/barrierfree/64125 | 2026-11-07 |
| Glover Garden 8:00-18:00; 1 Nov-31 Dec 2026 8:00-20:00; last entry 20 min before closing; from 1 April 2026 ¥1,300 (15+), ¥650 children | https://glover-garden.jp/guide | 2026-11-07 |
| Former Alt House viewing suspended Dec 2022-Feb 2027 (planned); reopening March 2027 planned | https://glover-garden.jp/event-and-news/24032/ | 2026-11-07 |
| Oura completed November 1864; dedication 19 Feb 1865; discovery of Hidden Christians 17 March; National Treasure 1933 | https://discover-nagasaki.com/en/featured-topics/shin-kirishitan/5 | 2026-11-07 |
| "The Hidden Christian Sites in the Nagasaki Region" inscribed 1 July 2018 | https://www.discover-nagasaki.com/en/featured-topics/worldheritage | 2026-11-07 |
| Oura admission adults ¥1,000, junior high/high ¥400, elementary ¥300, incl. Christian museum | https://en.at-nagasaki.jp/barrierfree/64039 | 2026-11-07 |
| Hashima about 40 min by boat from Nagasaki Port; listed July 2015 in Meiji Industrial Revolution site; landing only via operators' landing tours; facility fee ¥650 (15+), ¥320 children, boat fare extra; landing may not be possible due to weather | https://www.at-nagasaki.jp/spot/51797 | 2026-11-07 |
| Trial since 22 April 2023: wave height (Iojima offshore gauge) max 0.6 m; ship anemometer 5 m or less; visibility 500 m+; wind direction condition; captain's judgement; standards not revised; answer dated 18 May 2023, page updated 5 Feb 2025 | https://www.city.nagasaki.lg.jp/teian/31312.html | 2026-11-07 |

### Research set T

#### Facts file T

## Article: driving-in-japan.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| To drive you need a Japanese licence, a Geneva Convention IDP, or a licence from Switzerland, Germany, France, Belgium, Monaco or Taiwan with a Japanese translation | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf | 2026-11-07 |
| NPA examples of IDP countries: US, Italy, UK, Canada, South Korea, Thailand, Philippines | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf | 2026-11-07 |
| Only IDPs under the 19 September 1949 Geneva Convention are valid; IDPs under other treaties such as the 1968 Vienna Convention are not | https://english.jaf.or.jp/use-jaf-more/drive-in-japan | 2026-11-07 |
| Original paper IDP must be carried; a digital version on a phone cannot be used | https://www.npa.go.jp/english/bureau/traffic/English20240112.pdf | 2026-11-07 |
| Only vehicle types stamped in the IDP's category columns may be driven | https://www.npa.go.jp/english/bureau/traffic/English20240112.pdf | 2026-11-07 |
| IDP must be obtained before departure; card-type and smartphone IDPs not valid | https://www.japan.travel/en/plan/getting-around/cars/ | 2026-11-07 |
| Translation must be by the issuing country's consulate or a body designated by the National Public Safety Commission | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf | 2026-11-07 |
| JAF prepares translations; online applications only; about 2-3 business days for the six countries/regions | https://english.jaf.or.jp/use-jaf-more/drive-in-japan | 2026-11-07 |
| Drive up to one year from arrival or until licence expires, whichever is sooner; IDP valid one year from issue | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf ; https://www.npa.go.jp/policies/application/license_renewal/have_DL_issed_another_country.html | 2026-11-07 |
| Foreign licence not valid one year after entry even with translation; police may ask for passport | https://english.jaf.or.jp/use-jaf-more/drive-in-japan | 2026-11-07 |
| Arrival confirmed by passport entry stamp; automated gates give none; use staffed gate or inspection desk | https://www.japan.travel/en/plan/getting-around/cars/ | 2026-11-07 |
| Cars drive on the left | https://www.japan.travel/en/plan/getting-around/cars/ | 2026-11-07 |
| Drivers and cyclists must keep to the left | https://english.jaf.or.jp/safe-driving/traffic-rules-in-japan | 2026-11-07 |
| "If you drink, do not drive"; heavy penalties, licence revocation; providing vehicle / asking to ride also penalised; driving hungover is illegal | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf | 2026-11-07 |
| Driver and all passengers must wear seatbelts | https://english.jaf.or.jp/safe-driving/traffic-rules-in-japan | 2026-11-07 |
| Child younger than six must be in a child seat | https://english.jaf.or.jp/safe-driving/traffic-rules-in-japan | 2026-11-07 |
| No mobile phone use or distraction by navigation while driving | https://english.jaf.or.jp/safe-driving/traffic-rules-in-japan | 2026-11-07 |
| Stop at red light; green arrow allows that direction; full stop at stop sign and check both sides | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf | 2026-11-07 |
| Yield to pedestrians at intersections; stop when pedestrians crossing or about to cross | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf | 2026-11-07 |
| Stop before railway crossing and check both directions | https://www.japan.travel/en/plan/getting-around/cars/ | 2026-11-07 |
| Report all accidents to police; first aid and ambulance if injured | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf | 2026-11-07 |
| Heavy penalties for unlicensed driving, for knowingly providing vehicle, and passengers | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf | 2026-11-07 |
| Toll gates: manual cash/credit (green sign), ETC (purple sign); ETC card from rental company, settle on return | https://www.japan.travel/en/plan/getting-around/cars/ | 2026-11-07 |
| Tokyo to Kyoto toll approx. 10,070 yen at time of JNTO's writing | https://www.japan.travel/en/plan/getting-around/cars/ | 2026-11-07 |
| Japan Expressway Pass not sold since December 2023; regional passes listed (Hokkaido, Tohoku, San'in-Setouchi-Shikoku, Kyusyu, Central Nippon); CEP new bookings closed 1 October 2024 | https://www.japan.travel/en/plan/getting-around/cars/ | 2026-11-07 |
| Hokkaido Expressway Pass terms from 1 Oct 2024: apply/pay at designated rental company counter; ordinary and light vehicles; designated ETC card; 4-8 day period; unlimited travel on covered sections; carry passport/permanent residence permit and international licence; covered expressways Hokkaido, Sasson, Shiribeshi, Doto, Hidaka, Fukagawa-Rumoi; other sections charged separately | https://en.driveplaza.com/assets/pdf/drawari/hokkaido_expass/policy_en.pdf | 2026-11-07 |
| Install winter tyres or chains in snowy areas | https://www.japan.travel/en/plan/getting-around/cars/ | 2026-11-07 |
| Winter advice (regular tyres extremely dangerous; carry chains and jack; no high speed with chains except on snow; avoid sudden braking/lane changes/sharp turns; following distance; black ice on bridges, overpasses, tunnel mouths; whiteout hazards and stop; exhaust/CO risk; main roads, extra time, check forecasts) | https://english.jaf.or.jp/safe-driving/disaster/snow-covered-and-icy-roads | 2026-11-07 |
| Most major destinations on main roads signposted in English; may not be true in rural areas | https://www.japan.travel/en/plan/getting-around/cars/ | 2026-11-07 |

## Article: temple-and-shrine-etiquette.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Shrines serve Shinto, marked by torii; every shrine has a torii; torii marks boundary of sacred ground | https://www.japan.travel/en/guide/shrine-and-temple-traditions/ | 2026-11-07 |
| Temples serve Buddhism, marked by sanmon gate; Todaiji and Sensoji gates have niozo guardian statues | https://www.japan.travel/en/guide/shrine-and-temple-traditions/ | 2026-11-07 |
| Torii: two pillars, two lintels; wood or stone; sometimes vermilion; "a clear indication of a jinja" | https://www.jinjahoncho.or.jp/en/at-a-jinja/precinct/torii/ | 2026-11-07 |
| Bow once before torii; walk slightly left or right of centre | https://www.japan.travel/en/guide/shrine-and-temple-traditions/ | 2026-11-07 |
| Pause and bow slightly at torii; rinse hands and mouth at font if available | https://www.jinjahoncho.or.jp/en/at-a-jinja/entering/ | 2026-11-07 |
| Temizuya steps: right hand pours over left; switch; cupped left hand to rinse mouth, spit beside fountain; never touch ladle to mouth | https://www.japan.travel/en/guide/shrine-and-temple-traditions/ | 2026-11-07 |
| Prayer: face hall; optional coins and bell; bow deeply twice; hands together; clap twice; optional quiet prayer; bow deeply once | https://www.jinjahoncho.or.jp/en/at-a-jinja/entering/ | 2026-11-07 |
| JNTO gives same sequence (coin, bell, two bows, two claps, pray, bow) | https://www.japan.travel/en/guide/shrine-and-temple-traditions/ | 2026-11-07 |
| Standard way acceptable at any jinja in Japan | https://www.jinjahoncho.or.jp/en/at-a-jinja/ | 2026-11-07 |
| Pray before haiden at larger shrines; do not enter prayer hall without permission; most pray from outside | https://www.jinjahoncho.or.jp/en/at-a-jinja/entering/ | 2026-11-07 |
| Temples "not as strict as shrines"; no clapping; purify first if temizuya; incense bought with coin; extinguish by waving not blowing | https://www.japan.travel/en/guide/shrine-and-temple-traditions/ | 2026-11-07 |
| Goshuin: red stamp plus black ink; own design; goshuincho; loose sheet option; pray before lining up; open book to page; may leave book at busy times; no other stamps; find at amulet counter or ask; donation around 300-500 yen (2020 post) | https://www.japan.travel/en/blog/collecting-goshuin-shrine-and-temple-stamps/ | 2026-11-07 |
| May need to remove shoes in temple buildings; shelves or plastic bags; wear good socks; signs prohibiting photography inside temples | https://www.japan.travel/en/guide/shrine-and-temple-traditions/ | 2026-11-07 |
| Some temples have no-shoe policies, check first | https://www.japan.travel/en/guide/japanese-manners-dos-and-donts/ | 2026-11-07 |

## Q&A: can-i-drive-in-japan-with-a-foreign-licence.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Three accepted documents; NPA example countries | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf | 2026-11-07 |
| Only Geneva Convention IDPs by authorised body of party country; paper original; digital not allowed; vehicle category stamps | https://www.npa.go.jp/english/bureau/traffic/English20240112.pdf | 2026-11-07 |
| 1949 Geneva only; Vienna 1968 not valid | https://english.jaf.or.jp/use-jaf-more/drive-in-japan | 2026-11-07 |
| Get IDP before departure; card/smartphone IDPs not valid; passport entry stamp, automated gates | https://www.japan.travel/en/plan/getting-around/cars/ | 2026-11-07 |
| Translation by consulate or NPSC-designated body | https://www.npa.go.jp/english/bureau/traffic/document/r8_followtherules_en01.pdf | 2026-11-07 |
| JAF translations online only; 2-3 business days for six countries/regions; one-year limit applies even with translation; police may check passport | https://english.jaf.or.jp/use-jaf-more/drive-in-japan | 2026-11-07 |
| One year from arrival or licence expiry, whichever sooner; IDP valid one year from issue | https://www.npa.go.jp/policies/application/license_renewal/have_DL_issed_another_country.html | 2026-11-07 |

### Research set U

#### Facts file U

## spring-flowers-beyond-cherry-blossom.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| 131st Mito Ume Matsuri, 11 February to 22 March 2027, at Kairakuen and Kodokan | https://mitokoumon.com/event/history/mitoplumblossumfestival/ | 2026-11-07 |
| 2026 Mito festival 11 February to 22 March | https://visit.ibarakiguide.jp/en/?p=42243 | 2026-11-07 |
| About 3,000 plum trees at Kairakuen, about 800 at Kodokan | https://mitokoumon.com/event/history/mitoplumblossumfestival/ | 2026-11-07 |
| Plum flowers in late winter/early spring, earlier and longer than cherry | https://visit.ibarakiguide.jp/en/?p=42243 | 2026-11-07 |
| Kairakuen 500 yen adults, 250 yen children and 70+; Kodokan 420 / 210 yen; may differ during events | https://mitokoumon.com/event/history/mitoplumblossumfestival/ | 2026-11-07 |
| No closure days during the festival | https://mitokoumon.com/event/history/mitoplumblossumfestival/ | 2026-11-07 |
| Online advance/fast-pass tickets let visitors skip queue | https://visit.ibarakiguide.jp/en/?p=42243 | 2026-11-07 |
| Japan Umeshu Festival usually three days in early March at Tokiwa Shrine near Kairakuen | https://visit.ibarakiguide.jp/en/?p=42243 | 2026-11-07 |
| Ashikaga Great Wisteria Festival 2026: 11 April to 20 May; wisteria light-up from 15 April | https://www.ashikaga.co.jp/fujinohana_special2026/en/ | 2026-11-07 |
| Over 350 wisteria trees, about 5,000 azaleas, Great Wisteria over 160 years old on 600-tatami trellis | https://www.ashikaga.co.jp/fujinohana_special2026/en/ | 2026-11-07 |
| Flowering order: pale pink mid-late April; Great Wisteria/Yae-kokuryu late April-early May; white (80 m tunnel) early May; laburnum early-mid May | https://www.ashikaga.co.jp/fujinohana_special2026/en/ | 2026-11-07 |
| 2026 admission adults 1,200-2,300 yen, children 600-1,200 yen, depending on bloom; evening tickets from 17:30 | https://www.ashikaga.co.jp/fujinohana_special2026/en/ | 2026-11-07 |
| Longest hours 18 April-6 May, 7:00-21:00 | https://www.ashikaga.co.jp/fujinohana_special2026/en/ | 2026-11-07 |
| JR Ryomo Line, Ashikaga Flower Park station; arrive early, station crowded at departure; top up IC card | https://www.ashikaga.co.jp/fujinohana_special2026/en/ | 2026-11-07 |
| Kawachi Fujien in Yahatahigashi-ku, Kitakyushu, Fukuoka | https://kawachi-fujien.com/2026/05/11/post-2627/ | 2026-11-07 |
| 80 m tunnel 1977, dome 1990, 110 m tunnel 1990 (improved 1997) | https://kawachi-fujien.com/ | 2026-11-07 |
| Reservation ticket system since 2016 to prevent traffic jams; no on-site sales in wisteria season; online or convenience stores | https://kawachi-fujien.com/2026/05/11/post-2627/ | 2026-11-07 |
| Convenience stores: Seven-Eleven, FamilyMart, Lawson, Ministop | https://kawachi-fujien.com/ | 2026-11-07 |
| Advance ticket 600 yen, applied to 1,600 yen entrance fee; fee fluctuates with flowering | https://kawachi-fujien.com/2026/05/11/post-2627/ ; https://kawachi-fujien.com/ | 2026-11-07 |
| Time slots 8:00-18:00, last slot used by 17:20, no night lighting; no cancel/change | https://kawachi-fujien.com/ | 2026-11-07 |
| One adult (junior high+) brings up to two primary-age or younger free | https://kawachi-fujien.com/2026/05/11/post-2627/ | 2026-11-07 |
| Ticket period about 20 April to about 6 May each year; 2026 provisionally 18 April-6 May; closes after season for pruning/disinfection; next sales schedule undecided | https://kawachi-fujien.com/ | 2026-11-07 |
| Meigetsu-in about 2,500 hydrangeas, uniform blue, "Meigetsu-in Blue", "The Temple of Hydrangeas"; around June | https://visitkanagawa.jp/destination/meigetsu-in-temple/1190 | 2026-11-07 |
| Meigetsu-in June 8:30-17:00, other months 9:00-16:00; JR Yokosuka Line Kita-Kamakura Station | https://visitkanagawa.jp/destination/meigetsu-in-temple/1190 | 2026-11-07 |
| Hasedera lists hydrangea (ajisai) under June | https://www.hasedera.jp/en/garden/ | 2026-11-07 |
| Hasedera April-June 8:00-17:30, last entry 17:00 | https://www.hasedera.jp/en/guide/ | 2026-11-07 |
| Hakone Tozan line hydrangeas from around mid-June; best viewing moves up with altitude until mid-July | https://www.hakonenavi.jp/hakone-tozan/ajisai/ | 2026-11-07 |

## summer-fireworks.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| 49th Sumida River Fireworks Festival, Saturday 25 July 2026, 19:00-20:30 | https://www.sumidagawa-hanabi.com/about/index.html ; https://www.gotokyo.org/en/spot/ev100/index.html | 2026-11-07 |
| Location Taito City and Sumida City | https://www.gotokyo.org/en/spot/ev100/index.html | 2026-11-07 |
| Origins 1733 Ryogoku river opening for those who died in 1732 famine and disease; contest of new designs | https://www.gotokyo.org/en/spot/ev100/index.html | 2026-11-07 |
| Renamed Sumida River Fireworks Festival in 1978, revived | https://www.sumidagawa-hanabi.com/about/index.html | 2026-11-07 |
| Two launch venues, each by a different company | https://www.sumidagawa-hanabi.com/about/index.html | 2026-11-07 |
| Cancelled (no postponement mentioned) if bad weather; decision normally 8am on the day | https://www.sumidagawa-hanabi.com/about/index.html | 2026-11-07 |
| Sudden weather change may cancel; notices on site and X | https://www.sumidagawa-hanabi.com/ | 2026-11-07 |
| Nearest stations: First Venue Asakusa, Oshiage, Tokyo Skytree, Hikifune; Second Venue Asakusa, Kuramae, Ryogoku, Asakusabashi | https://www.sumidagawa-hanabi.com/venue/index.html | 2026-11-07 |
| Asakusa Station very crowded after; use other stations | https://www.sumidagawa-hanabi.com/ | 2026-11-07 |
| Main venue about 15 min walk from Asakusa; second about 5 min from Kuramae | https://www.gotokyo.org/en/spot/ev100/index.html | 2026-11-07 |
| Citizen sponsor seats sold out (2026); no other seated viewing places | https://www.sumidagawa-hanabi.com/ | 2026-11-07 |
| No spot reservation or marking with tape/chalk/spray; one-way pedestrian flow; no drones; take rubbish home | https://www.sumidagawa-hanabi.com/manner/index.html | 2026-11-07 |
| Prepare for heatstroke and sudden downpours | https://www.sumidagawa-hanabi.com/ | 2026-11-07 |
| Nagaoka held annually 2-3 August, Shinano River near Ote Bridge | https://www.japan.travel/en/spot/256/ | 2026-11-07 |
| Began 1946 as reconstruction event mourning WWII dead; up to a million spectators a year | https://www.japan.travel/en/spot/256/ | 2026-11-07 |
| Reconstruction Phoenix: about 5 min to "Jupiter" by Ayaka Hirahara, written for Chuetsu recovery after earthquake | https://www.japan.travel/en/spot/256/ | 2026-11-07 |
| Grand Tickets; reserve as early as May; riverbank viewing free; extremely crowded, arrive hours early | https://www.japan.travel/en/spot/256/ | 2026-11-07 |
| Joetsu Shinkansen to Nagaoka; venue 20 min walk; parking limited, mostly paid; heavy traffic after | https://www.japan.travel/en/spot/256/ | 2026-11-07 |
| 98th National Fireworks Competition, Saturday 29 August 2026, Omagari Hanabi Park, Omono riverbank, Daisen | https://www.omagari-hanabi.com/en/overview/summer | 2026-11-07 |
| First held 1910; 28 companies; only competition with daytime fireworks; smoke not light; 3 evening categories | https://www.omagari-hanabi.com/en/overview/summer | 2026-11-07 |
| Prime Minister's Prize, highest honour in Japanese fireworks | https://www.omagari-hanabi.com/en/ | 2026-11-07 |
| Gates 15:00; daytime 17:10-18:00; evening 19:00-21:30; bad weather: new date decided from forecast | https://www.omagari-hanabi.com/en/overview/summer | 2026-11-07 |
| JR Omagari Station, about 30 min walk (about 2 km); extra trains; vehicle-restricted zone; jams from about 3pm to late night | https://www.omagari-hanabi.com/en/access | 2026-11-07 |
| Autumn Chapter 3 October 2026 | https://www.omagari-hanabi.com/en/ | 2026-11-07 |

## hokkaido-in-summer.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Early lavender from late June; Okamurasaki largest area, peak mid-July; later varieties into early August; peak mid-July to early August; some farms cut back in August | https://furanotourism.com/en/bigkey/flower/lavender_kaika.php | 2026-11-07 |
| Farm Tomita greenhouse lavender earlier | https://furanotourism.com/en/bigkey/flower/lavender_kaika.php | 2026-11-07 |
| Best lavender season mid to late July; Farm Tomita best-known farm, Nakafurano | https://visit-hokkaido.jp/en/feature/lavender | 2026-11-07 |
| Furano Lavender Express Sapporo-Furano about 2 h no transfer; June-September 2026; all reserved; limited express + basic fare; no IC Takikawa-Furano; on-board adjustments cash only | https://www.jrhokkaido.co.jp/global/english/travel/furanobiei/train/index.html ; https://www.jrhokkaido.co.jp/global/english/train/guide/lavender.html | 2026-11-07 |
| Norokko train "will end this year" (2026) | https://www.jrhokkaido.co.jp/global/english/travel/furanobiei/course/1c.html | 2026-11-07 |
| Norokko 77 days between 6 June and 23 September 2026 | https://www.visit-hokkaido.jp/en/event/detail_10149.html | 2026-11-07 |
| Biei hills: rural scenery, colours best summer to autumn; Kashiwa Park potato flowers and wheat | https://www.biei-hokkaido.jp/en/hill-town-biei | 2026-11-07 |
| Fields private property; photos from paved road; crop disease from shoes | https://www.biei-hokkaido.jp/en/hill-town-biei | 2026-11-07 |
| Blue Pond formed in dam from Tokachi-dake disaster prevention work; mineral rivers; cloudy after snowmelt/heavy rain | https://www.biei-hokkaido.jp/en/shirogane-blue-pond | 2026-11-07 |
| About 20 min by car or bus from Biei or Asahikawa; Dohoku Bus; traffic peak 1-3pm sunny days, visit morning | https://www.biei-hokkaido.jp/en/shirogane-blue-pond | 2026-11-07 |
| Never enter farmland; paved roads only; no obstruction; drones prohibited in principle without permission; no rocks/trash in pond; no illegal dumping | https://www.biei-hokkaido.jp/en/bieikankou-manner110 | 2026-11-07 |
| Daisetsuzan 226,764 ha; established 1934; average about 2,000 m; "roof of Hokkaido"; 1.5-2 h from Asahikawa | https://www.japan.travel/national-parks/parks/daisetsuzan/ | 2026-11-07 |
| Summer roughly July-August; alpine plants; Sugatamiike rare plants; snow and ice most of year | https://www.japan.travel/national-parks/parks/daisetsuzan/explore | 2026-11-07 |
| Asahidake summit about 2h30 from Sugatami; Kurodake ropeway from Sounkyo, 60-90 min to summit; colours peak mid-September; first snow usually October; Brown Bear Information Center at Daisetsu Kogen Onsen | https://www.japan.travel/national-parks/parks/daisetsuzan/explore | 2026-11-07 |
| Asahidake Ropeway: about 500 m gain, 10 min, Sugatami ~1,600 m; 1.7 km loop ~90 min; 6:30-17:30 varies; autumn colours from late August | https://visit-hokkaido.jp/en/spot/detail_10355.html | 2026-11-07 |
| Goko about 14 km (about 20 min by car) from Utoro; paid parking 100 cars; Shari Bus seasonal from Memanbetsu Airport and Shiretoko-Shari Station; field house opening dates 20 April-8 November | https://www.goko.go.jp/multilingual_eng/access.html | 2026-11-07 |
| Elevated path 800 m; free; level, wheelchair accessible, free wheelchair rental; electric fence; toward 1st lake | https://www.goko.go.jp/multilingual_eng/elevated_wooden_path.html | 2026-11-07 |
| Elevated path round trip about 1.6 km, about 40 min | https://www.goko.go.jp/multilingual_eng/ | 2026-11-07 |
| Ground loops: long about 3 h, short 1 h 45 min; opening-9 May lecture; 10 May-31 July guide only; 1 Aug-closing lecture; lecture 450 yen adult; guided short 4,000, long from 6,000; same-day 4,000/7,000; 10-min intervals, max 10 per tour; lecture up to 50; closes when bears appear; no toilets/shops | https://www.goko.go.jp/multilingual_eng/ground_pathway.html | 2026-11-07 |
| Loops 1.6 km and 3 km; field house end April-end November | https://www.japan.travel/national-parks/parks/shiretoko/see-and-do/shiretoko-goko-lakes-field-house/ | 2026-11-07 |
| Rules: no feeding, littering, cooking/eating, smoking; stay on paths; no taking plants/animals; no drones | https://www.goko.go.jp/multilingual_eng/rule.html | 2026-11-07 |
| Since 1 April 2022 approaching/following/feeding bears illegal in special zones of national and quasi-national parks; fine up to 300,000 yen after ignoring stop order | https://brownbear.shiretoko.or.jp/higumakisei/ | 2026-11-07 |

### Research set V

#### Facts file V (entry rules, taxes, fees news)

## news-jesta-travel-authorisation-law.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Diet enacted the amending act on 29 May 2026, 221st special session | https://www.moj.go.jp/isa/01_00643.html ; https://www.mlit.go.jp/kankocho/content/002019837.pdf | 2026-11-07 |
| Act promulgated 5 June 2026 (Act No. 32 of 2026) | https://www.moj.go.jp/isa/01_00643.html | 2026-11-07 |
| Government decided to amend the immigration law to create JESTA on 10 March 2026 | https://www.nippon.com/en/articles/-/20183 | 2026-11-07 |
| JESTA covers visa-exempt foreign nationals on short stays for tourism etc.; designated cruise-ship passengers landing for sightseeing; some transit passengers | https://www.moj.go.jp/isa/content/001464339.pdf | 2026-11-07 |
| Authorisation required for each new entry | https://www.moj.go.jp/isa/content/001464339.pdf | 2026-11-07 |
| Entry banned for foreign nationals with neither authorisation nor visa | https://www.moj.go.jp/isa/content/001464339.pdf | 2026-11-07 |
| Carriers must report booker names etc. when issuing tickets; must not carry persons the agency notifies; breaches subject to administrative fine (karyo) | https://www.moj.go.jp/isa/content/001464339.pdf | 2026-11-07 |
| Fee to be charged, amount set by Cabinet Order | https://www.moj.go.jp/isa/content/001464339.pdf | 2026-11-07 |
| Landing stamp omitted for approved visa-exempt visitors meeting conditions; walk-through gates in practice | https://www.moj.go.jp/isa/content/001464339.pdf | 2026-11-07 |
| JESTA provisions take effect on date set by Cabinet Order, no later than 31 March 2029 | https://www.moj.go.jp/isa/01_00643.html | 2026-11-07 |
| Introduction planned during fiscal 2028 | https://www.mlit.go.jp/kankocho/content/002019837.pdf ; https://www.nippon.com/en/articles/-/20183 | 2026-11-07 |
| Tax-free shops check eligibility mainly including the landing stamp; JTA asked for review of checks | https://www.mlit.go.jp/kankocho/content/002019837.pdf | 2026-11-07 |
| Same act raises caps on residence-permit fees | https://www.moj.go.jp/isa/content/001464339.pdf | 2026-11-07 |

## news-tokyo-accommodation-tax-2027.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Minister of Internal Affairs and Communications consented 30 June 2026; announced same day | https://www.metro.tokyo.lg.jp/information/press/2026/06/2026063004 | 2026-11-07 |
| New system applies to stays from 1 April 2027 | https://www.metro.tokyo.lg.jp/information/press/2026/06/2026063004 ; https://www.tax.metro.tokyo.lg.jp/kazei/leisure/shuk/shuk_minaoshi | 2026-11-07 |
| New rate 3% of the room charge | same as above | 2026-11-07 |
| Exemption threshold rises from under ¥10,000 to under ¥13,000 per person per night | same as above | 2026-11-07 |
| Current rates: ¥100 for ¥10,000 to under ¥15,000; ¥200 for ¥15,000 or more | same as above | 2026-11-07 |
| Currently hotels and ryokan only; from April 2027 also simple lodgings and minpaku (incl. special-zone and new-law minpaku) | same as above | 2026-11-07 |
| Taxable charge is room-only price excluding meals; operator collects | https://www.tax.metro.tokyo.lg.jp/kazei/leisure/shuk/shuk_minaoshi | 2026-11-07 |
| Registration of new collectors from 1 July 2026 | https://www.metro.tokyo.lg.jp/information/press/2026/06/2026063004 | 2026-11-07 |
| Over 70% of school-trip rates below new threshold; about 30% of private lodging facilities expected to be taxable | https://www.tax.metro.tokyo.lg.jp/kazei/leisure/shuk/shuk_minaoshi | 2026-11-07 |
| Example: ¥20,000 room-only => ¥600 tax (arithmetic from 3% rate) | derived from https://www.tax.metro.tokyo.lg.jp/kazei/leisure/shuk/shuk_minaoshi | 2026-11-07 |
| Tax introduced 1 October 2002 | https://www.tax.metro.tokyo.lg.jp/kazei/leisure/shuk/shuk_minaoshi | 2026-11-07 |
| Tokyo was first local government with accommodation tax (2002) | https://www.thestar.com.my/aseanplus/aseanplus-news/2026/06/14/more-japanese-local-governments-introducing-hotel-tax-despite-industry-concerns | 2026-11-07 |
| Assembly passed ordinance March 2026; promulgated 1 July 2026 | https://www.metro.tokyo.lg.jp/information/press/2026/06/2026063004 | 2026-11-07 |
| Purpose: Tokyo's appeal as international city, tourism promotion | https://www.tax.metro.tokyo.lg.jp/kazei/leisure/shuk/shuk_minaoshi | 2026-11-07 |
| Revenue expected to more than double to ¥19 billion; hotel-industry concern (The Japan News) | https://www.thestar.com.my/aseanplus/aseanplus-news/2026/06/14/more-japanese-local-governments-introducing-hotel-tax-despite-industry-concerns | 2026-11-07 |
| 45 local governments (7 prefectures, 38 municipalities) had the tax as of 1 June 2026 (The Japan News) | same as above | 2026-11-07 |

## news-okinawa-accommodation-tax-2027.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Tax starts 1 February 2027 | https://www.pref.okinawa.jp/kurashikankyo/zeikin/1003660/1036559/1036550.html ; https://www.pref.okinawa.jp/_res/projects/default_project/_page_/001/038/948/syukuhakuzei_en_poster.pdf | 2026-11-07 |
| Minister consent 13 February 2026; rules promulgated 25 February 2026 | https://www.pref.okinawa.jp/kurashikankyo/zeikin/1003660/1036559/1036550.html | 2026-11-07 |
| Page updated 5 November 2026 | same | 2026-11-07 |
| Rate 2%, max ¥2,000 per person per night | same; poster PDF | 2026-11-07 |
| Base: room-only price per person per night, rounded down to ¥1,000, capped at ¥100,000 | https://www.pref.okinawa.jp/kurashikankyo/zeikin/1003660/1036559/1036550.html | 2026-11-07 |
| Charged per night for longer stays; operator collects and pays prefecture | same | 2026-11-07 |
| Covered: hotels, ryokan, simple lodgings, minpaku incl. special-zone | same; https://www.pref.okinawa.jp/_res/projects/default_project/_page_/001/036/550/syukuhakuzei_seido_gaiyou.pdf | 2026-11-07 |
| Example ¥8,500 -> ¥8,000 -> ¥160; split ¥64 / ¥96 | https://www.pref.okinawa.jp/kurashikankyo/zeikin/1003660/1036559/1036550.html | 2026-11-07 |
| Six municipalities: Motobu, Onna, Chatan, Miyakojima, Ishigaki, Nago | same | 2026-11-07 |
| Split 0.8% (cap ¥800) prefecture / 1.2% (cap ¥1,200) municipality; total 2% / ¥2,000 | same; seido gaiyou PDF | 2026-11-07 |
| Exemptions: school pupils/staff on designated school activities (not universities); designated competitions e.g. Japan Junior High School Athletic Federation; certificate shown at front desk | same; seido gaiyou PDF | 2026-11-07 |
| Uses: infrastructure/visitor support, scenery/nature, culture/history, safe tourism, sustainable tourism | poster PDF | 2026-11-07 |
| Review three years after introduction (FY2029) | https://www.pref.okinawa.jp/kurashikankyo/zeikin/1003660/1036559/1036550.html | 2026-11-07 |

### Research set W

#### Facts file W (rail and transport news)

N = https://www.nikkei.com/article/DGXZRSP713992_W6A011C2000000/
A = https://release.nikkei.co.jp/attach/713992/01_202610161539.pdf
EX = https://www.westjr.co.jp/press/article/2026/10/16/items/261016_00_press_exyoyaku.pdf
STAR = https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/17/japan-bullet-train-fares-for-some-routes-to-go-up-from-july-2027
JRP = https://japanrailpass.net/en/use/special-ticket/

## news-nozomi-green-fares-2027.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Announced 16 Oct 2026 by JR Central and JR West | N; STAR | 2026-11-07 |
| Nozomi/Mizuho reserved-seat charge revised for tickets purchased from 1 July 2027 | N; EX | 2026-11-07 |
| Green charge on all trains revised for travel from 15 Dec 2027 | N; A (appendix 4); EX | 2026-11-07 |
| Unreserved Nozomi/Mizuho charge not revised | N; EX | 2026-11-07 |
| Reason: inflation raising cost of safety and service | N | 2026-11-07 |
| Applies to Tokaido/Sanyo section of trips continuing onto Kyushu Shinkansen | A (appendix 1-1, 4 notes) | 2026-11-07 |
| First Tokaido rise since Nozomi debut March 1992 excluding consumption tax (per The Japan News) | STAR | 2026-11-07 |
| Reserved: Tokyo-Nagoya 11,300 to 11,880; Tokyo-Shin-Osaka 14,720 to 15,420; Tokyo-Okayama 17,770 to 18,530; Tokyo-Hiroshima 19,760 to 20,620; Shin-Osaka-Hiroshima 10,950 to 11,210; Shin-Osaka-Hakata 16,020 to 16,300 (regular season, adult, one way) | A (appendix 1-2 reference table) | 2026-11-07 |
| Green: Tokyo-Nagoya 14,960 to 18,050; Tokyo-Shin-Osaka 19,590 to 23,290; Tokyo-Okayama 23,840 to 28,400; Tokyo-Hiroshima 27,020 to 32,390; Shin-Osaka-Hiroshima 14,610 to 17,380; Shin-Osaka-Hakata 22,090 to 26,170 | A (appendix 4) | 2026-11-07 |
| Green charge up to 100 km 1,300 to 2,100; 801 km+ 7,790 to 12,300; adult and child same | A (appendix 4) | 2026-11-07 |
| EX services revised by same amounts; smartEX Tokyo-Shin-Osaka reserved 14,520 to 15,220 | EX | 2026-11-07 |
| Early-booking discounts to be revised, details later | EX | 2026-11-07 |
| Supreme Class prices revised on same dates; Supreme Class compartments began in October 2026 | A (section 3); STAR | 2026-11-07 |
| Green improvements on N700A and N700S cars 8-10 from 15 Dec 2027 in stages; two seat types incl. partition seats; recline 123 to 116 degrees; fold-up footrest | A (appendix 2-1) | 2026-11-07 |
| Waiting rooms: Shinagawa, Shin-Yokohama, Kyoto, Kokura, Hakata 15 Dec 2027; Tokyo, Shin-Osaka FY2028; Nagoya FY2029; Hiroshima FY2028 or later, date TBD | A (appendix 3) | 2026-11-07 |
| Wi-Fi extended to more Green Cars on N700S from 26 Oct 2026 in stages | A (appendix 2-3) | 2026-11-07 |
| JR Pass needs special ticket for Nozomi/Mizuho; Tokyo-Shin-Osaka 4,960 yen; no price change mentioned | JRP | 2026-11-07 |
| All Nozomi seats reserved during peak periods | JRP | 2026-11-07 |

## news-qr-paper-tickets-2027.md

R = https://www.tobu.co.jp/cms-pdf/releases/20261013113521ls0GuXPuwv4ZPSGfzl6WgQ.pdf (joint release of 7 operators)

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Announced 13 Oct 2026 by Keisei, Keikyu, Sendai Airport Transit, Tokyo Monorail, Tobu, JR East, Hokuso | R | 2026-11-07 |
| Magnetic tickets replaced by QR tickets from spring 2027 | R | 2026-11-07 |
| Reason: sustainable rail services in future | R | 2026-11-07 |
| Covers all lines and all stations of the seven | R | 2026-11-07 |
| Hold QR over gate on entry and exit; put ticket in collection box on exit | R | 2026-11-07 |
| Stations without QR gates: staffed window | R | 2026-11-07 |
| Size: QR tickets 57.5 x 85 mm (with some exceptions); current magnetic 30 x 57.5 mm | R | 2026-11-07 |
| Operators expanding ticketless services around IC cards, Mobile Suica, Mobile PASMO | R | 2026-11-07 |
| Operators starting FY2027 or later to announce themselves | R | 2026-11-07 |
| Coordinating with through-service railways | R | 2026-11-07 |
| Earlier eight-operator announcement 29 May 2024 | R (reference section) | 2026-11-07 |
| Details of magnetic-ticket service changes to be announced later | R | 2026-11-07 |

## news-jr-kyushu-card-tap-fukuoka.md

K = https://www.jrkyushu.co.jp/railway/touch/pdf/news260908_1.pdf ; KE = https://www.jrkyushu.co.jp/railway/touch/en/

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Announced 8 Sept 2026; expansion from first train 18 Sept 2026 | K; KE | 2026-11-07 |
| 92 stations total (duplicates counted once) | K; KE | 2026-11-07 |
| Trials from July 2022, first in JR group; full service from 1 April 2026 on Kagoshima Main Line Mojiko-Kurume and Kashii Line Uminonakamichi | K | 2026-11-07 |
| Kagoshima Main Line Mojiko-Kurume 49; Fukuhoku Yutaka Line Orio-Hakata 27; Kashii Line Saitozaki-Umi 16; Wakamatsu Line Wakamatsu-Orio 6 | K | 2026-11-07 |
| Fukuoka area only | KE | 2026-11-07 |
| Not covered: Shinkansen and Shinkansen transfer gates at Kokura and Hakata; Sanyo Main Line, Sanin Main Line incl. Shimonoseki | KE | 2026-11-07 |
| Brands: Visa, Mastercard, JCB, American Express, Diners Club, Discover, UnionPay; all 92 stations | K; KE | 2026-11-07 |
| Credit, debit, prepaid; Apple Pay/Google Pay phones and wearables | KE; K | 2026-11-07 |
| Same card for entry and exit; gate-integrated reader or post-style terminal | KE; K | 2026-11-07 |
| No registration/app/top-up; billed later per issuer cycle | KE | 2026-11-07 |
| Adult fares only; one card per person; card in own name; not combinable with other tickets e.g. commuter passes | KE | 2026-11-07 |
| Cannot exit by card at unsupported station; ask staff | KE | 2026-11-07 |
| Aim: smoother travel in Fukuoka urban area incl. overseas visitors | K | 2026-11-07 |

### Research set X

#### Facts file X

## news-asuka-fujiwara-world-heritage.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Inscribed on UNESCO World Heritage List on 26 July 2026 | https://japan.kantei.go.jp/105/statement/202607/26message.html ; https://asuka-fujiwara.jp/en/ (news item 2026.07.26) | 2026-11-07 |
| PM Takaichi Sanae message same day; Japan's 27th World Heritage property | https://japan.kantei.go.jp/105/statement/202607/26message.html | 2026-11-07 |
| Capitals of early state formed between 6th and 8th centuries; 19 component parts incl. Asuka Palace Site and Fujiwara Palace Site; illustrates formation of centralised state via two successive capitals | https://japan.kantei.go.jp/105/statement/202607/26message.html | 2026-11-07 |
| List of 19 component parts and their municipalities (Asuka Village, Kashihara City, Sakurai City; Daikandaiji address in both Asuka and Kashihara) | https://asuka-fujiwara.jp/en/asuka-fujiwara/property/ | 2026-11-07 |
| Promotion site run with Nara Prefecture, Kashihara City, Sakurai City, Asuka Village | https://asuka-fujiwara.jp/en/ | 2026-11-07 |
| Some Asuka-dera remains exposed above ground; Tachibana-dera used as monastery; Kitora murals removed for conservation, strict safekeeping | https://asuka-fujiwara.jp/en/asuka-fujiwara/property/ | 2026-11-07 |
| Takamatsuzuka murals kept at nearby conservation facility; Shobuike stone chamber viewable; Kengoshizuka restored 2022; feature published 28 July 2026 | https://www.nippon.com/en/guide-to-japan/gu900323/ | 2026-11-07 |
| Ten visitor facilities listed incl. Manyo Culture Museum, Asuka Museum, Takamatsuzuka Mural Museum, Shijin no Yakata, Kashihara Archaeological Institute Museum, Fujiwara-kyu Site Materials Room; no hours/fees on page | https://asuka-fujiwara.jp/en/visit/ | 2026-11-07 |
| Stations: Kintetsu Asuka, Sakurai (Kintetsu/JR), Kintetsu Yamato-Yagi | https://asuka-fujiwara.jp/en/visit/ | 2026-11-07 |
| Walking legs: 2 min/190 m; 5 min/450 m; 4 min/350 m; 8 min/700 m; 5 min/450 m; 30 min/2.5 km | https://asuka-fujiwara.jp/en/visit/ | 2026-11-07 |
| Bus about 22 min (station end); bus about 20 min Fujiwara Palace Site to Yamato-Yagi | https://asuka-fujiwara.jp/en/visit/ | 2026-11-07 |
| New pamphlets/maps posted October 2026 (news list) | https://asuka-fujiwara.jp/ (news list, Japanese) | 2026-11-07 |
| Historic Monuments of Ancient Nara is a separate listing (existing site article) | /articles/nara-day-trip | 2026-11-07 |

## news-shuri-castle-seiden-reopening.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Seiden opens to public 23 November 2026, due at noon | https://oki-park.jp/shurijo/ ; https://oki-park.jp/shurijo/ticket_guide/ | 2026-11-07 |
| Opening date announced 4 June 2026; fees and reservation system announced 31 July 2026 (notice list) | https://oki-park.jp/shurijo/ | 2026-11-07 |
| Fire in 2019 | https://visitokinawajapan.com/news-media/syurijo_reservation/ | 2026-11-07 |
| Two ticket types; no extra charge for time slot; non-reservation ticket sees exterior from viewing deck; same paid-area fee either way | https://oki-park.jp/shurijo/ticket_guide/ ; https://oki-park.jp/shurijo/info/14/ | 2026-11-07 |
| Free-admission visitors (70+ Okinawa residents, disability certificate holders) still need booking; preschoolers excepted | https://oki-park.jp/shurijo/ticket_guide/ | 2026-11-07 |
| Old fees to 21 Nov: ¥400 / ¥300 / ¥160; new from 23 Nov: ¥1,000 / ¥760 / ¥370; under 6 free; groups ¥800 / ¥610 / ¥300 | https://oki-park.jp/shurijo/info/14/ | 2026-11-07 |
| Reason for rise: fire/disaster prevention, higher running costs | https://oki-park.jp/shurijo/info/14/ | 2026-11-07 |
| Yui Rail 1-day/2-day pass gets group rate | https://oki-park.jp/shurijo/info/14/ | 2026-11-07 |
| Sales for 23 Nov–31 Dec: 13:00 on 1 Sept and 1 Oct; first come first served | https://oki-park.jp/shurijo/ticket_guide/ ; https://visitokinawajapan.com/news-media/syurijo_reservation/ | 2026-11-07 |
| From 1 Jan 2027: sales open 13:00 on 1st of month two months before visit | https://oki-park.jp/shurijo/ticket_guide/ | 2026-11-07 |
| Same-day online up to 15 min before slot or at Kofukumon ticket office | https://oki-park.jp/shurijo/ticket_guide/ ; https://visitokinawajapan.com/news-media/syurijo_reservation/ | 2026-11-07 |
| No group Seiden bookings 23 Nov–6 Dec 2026; groups from 7 Dec in stages | https://oki-park.jp/shurijo/ticket_guide/ | 2026-11-07 |
| Shoes removed; bring shoe bag | https://oki-park.jp/shurijo/ticket_guide/ | 2026-11-07 |
| Book slot 40–50 min after Shuri Station arrival; visit 90–120 min; about 15 min inside Seiden; public transport recommended; may limit entry | https://oki-park.jp/shurijo/ticket_guide/ | 2026-11-07 |
| Park closed all day 22 Nov (completion ceremony) and morning of 23 Nov | https://oki-park.jp/shurijo/info/14/ ; https://oki-park.jp/shurijo/ | 2026-11-07 |
| Foreign-language pages temporarily unavailable (notice 9 Oct 2026) | https://oki-park.jp/shurijo/ | 2026-11-07 |

## news-imperial-collections-museum-reopens.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Opened Nov 1993; new building construction began 2019; management moved from Imperial Household Agency to NICH 2023; partial opening Nov 2023; full opening Nov 2026 | https://shozokan.nich.go.jp/en/about | 2026-11-07 |
| Grand opening exhibition from 3 Nov 2026 | https://shozokan.nich.go.jp/en/exhibitions/grand-opening-1 | 2026-11-07 |
| Three exhibitions, dates and prices ¥2,500 / ¥3,000 / ¥2,500 incl. tax | https://shozokan.nich.go.jp/en/visit/ticket | 2026-11-07 |
| Rotations: 3–23 Nov; 26 Nov–20 Dec; 23 Dec–24 Jan 2027 | https://shozokan.nich.go.jp/en/visit/ticket | 2026-11-07 |
| Includes National Treasures, Important Cultural Properties, Shosoin and Horyuji treasures | https://shozokan.nich.go.jp/en/exhibitions/grand-opening-1 | 2026-11-07 |
| Date/time tickets; not sold at venue on the day; don't phone; free categories need booking; under-23 free; elementary and younger and disabled + 1 caregiver free without booking; may be a wait | https://shozokan.nich.go.jp/en/visit/ticket | 2026-11-07 |
| Hours 9:30–17:00 (last 16:30); Fri/Sat to 20:00 (last 19:30); closures | https://shozokan.nich.go.jp/en/visit/calendar | 2026-11-07 |
| Exhibition-specific closures: Mondays; 24–25 Nov; 22 Dec; 28 Dec–3 Jan; 12 Jan 2027; open 23 Nov and 11 Jan | https://shozokan.nich.go.jp/en/exhibitions/grand-opening-1 | 2026-11-07 |
| Ote-mon Gate about 100 m; 5 min from Otemachi Exit C13a; 15 min from Tokyo Station Marunouchi North Exit; bag screening; Hirakawa-mon and Kita-Hanebashi-mon closed Mon/Fri | https://shozokan.nich.go.jp/en/visit/access | 2026-11-07 |
| Fridays East Gardens closed, enter via Ote-mon | https://shozokan.nich.go.jp/en/visit/calendar | 2026-11-07 |
| Daytime East Gardens access restricted 28 Nov–6 Dec 2026 (Inui-dori autumn opening); notice dated 6 Nov 2026 | https://shozokan.nich.go.jp/en/news/261106 | 2026-11-07 |

## news-miraikan-closed-until-april-2027.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Closed from 1 October 2026; grand reopening Friday 23 April 2027; notice 16 Sept 2026 | https://www.miraikan.jst.go.jp/en/news/general/202609164750.html | 2026-11-07 |
| First announced 27 March 2025; about six months, 1 Oct 2026 to mid-April 2027; entire museum closed; reason aging building/facilities | https://www.miraikan.jst.go.jp/en/news/general/202503273946.html | 2026-11-07 |
| Opened July 2001; 20 million visitors reached May 2025 | https://www.miraikan.jst.go.jp/en/news/general/202609164750.html | 2026-11-07 |
| Off-site events and online information during closure | https://www.miraikan.jst.go.jp/en/news/general/202503273946.html | 2026-11-07 |
| Planned: genome/brain exhibitions, own special exhibitions, Dome Theater programmes, Keparan update, Curiosity Field renewal, restaurant/cafe, larger shop, new signs | https://www.miraikan.jst.go.jp/en/news/general/202609164750.html | 2026-11-07 |
| Spring 2027 special exhibition "New Bodies. New Selves." | https://www.miraikan.jst.go.jp/en/ | 2026-11-07 |
| Address 2-3-6 Aomi, Koto-ku, Tokyo | https://www.miraikan.jst.go.jp/en/news/general/202503273946.html (page footer) | 2026-11-07 |

Note: miraikan.jst.go.jp, oki-park.jp and shozokan.nich.go.jp pages were retrieved with plain curl (no custom user agent) because WebFetch hit a redirect loop on Miraikan; text was extracted and read in full.

### Research set Y

#### Facts file Y (seasonal news pieces)

## news-winter-2026-27-outlook.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| JMA cold-season outlook for Dec 2026 to Feb 2027 issued 18 September 2026 | https://www.jma.go.jp/bosai/season/data/P6M/010000.json | 2026-11-07 |
| 20 October 2026 three-month outlook: winter forecast reviewed, no change to 18 September content | https://www.jma.go.jp/bosai/season/data/P3M/010000.json | 2026-11-07 |
| Temperature Dec-Feb: Northern Japan 20/40/40; Eastern 10/30/60; Western 10/30/60; Okinawa-Amami 10/20/70 (below/near/above) | https://www.jma.go.jp/bosai/season/data/P6M/010000.json | 2026-11-07 |
| Snowfall: N Japan Sea of Japan side 40/40/20; E Japan Sea of Japan side 50/30/20; W Japan Sea of Japan side excl. northern Kyushu 50/30/20 | https://www.jma.go.jp/bosai/season/data/P6M/010000.json | 2026-11-07 |
| Precipitation 50% above normal: Pacific side of eastern Japan, western Japan, Okinawa-Amami | https://www.jma.go.jp/bosai/season/data/P6M/010000.json | 2026-11-07 |
| Weather description: Sea of Japan side N/E as normal; W Sea of Japan side more cloudy snow/rain days; Pacific side fewer sunny days; Okinawa-Amami more cloud/rain | https://www.jma.go.jp/bosai/season/data/P6M/010000.json | 2026-11-07 |
| El Nino report No. 409 dated 9 October 2026; El Nino since spring 2026 at record strength | https://www.data.jma.go.jp/cpd/elnino/kanshi_joho/kanshi_joho1.html | 2026-11-07 |
| September deviation +4.0 C; previous highest since 1949 +3.6 C in December 1997 | https://www.data.jma.go.jp/cpd/elnino/kanshi_joho/kanshi_joho1.html ; https://ds.data.jma.go.jp/tcc/tcc/products/elnino/elmonout.html | 2026-11-07 |
| 100% chance record-strength El Nino continues into winter | https://www.data.jma.go.jp/cpd/elnino/kanshi_joho/kanshi_joho1.html | 2026-11-07 |
| El Nino report refers to seasonal forecasts for Japan's weather | https://www.data.jma.go.jp/cpd/elnino/kanshi_joho/kanshi_joho1.html | 2026-11-07 |
| JWA outlook 8 October 2026: warm winter nationwide; near/below normal snow on Sea of Japan side; short cold spells/heavy snow possible; cites El Nino | https://weather-jwa.jp/?p=16335 | 2026-11-07 |
| Next three-month outlook 24 November 2026 14:00 | https://www.jma.go.jp/bosai/season/data/P3M/010000.json | 2026-11-07 |
| Next El Nino report 10 November 2026 | https://www.data.jma.go.jp/cpd/elnino/kanshi_joho/kanshi_joho1.html | 2026-11-07 |
| One-month forecasts every Thursday | https://www.jma.go.jp/bosai/season/data/P6M/010000.json | 2026-11-07 |

## news-autumn-leaves-2026-late-season.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| JMC third and final forecast issued 4 November 2026; last of the season | https://n-kishou.com/corp/news-contents/autumn/?lang=en | 2026-11-07 |
| JMC forecasts first day most of tree's leaves turn red/yellow; based on JMA sample-tree standards | https://n-kishou.com/corp/news-contents/autumn/?lang=en | 2026-11-07 |
| City table: Sendai 26 Nov (21 Nov) / 1 Dec (23 Nov); Tokyo 30 Nov (28 Nov) / 29 Nov (23 Nov); Nagano 22 Nov (12 Nov) / 15 Nov (10 Nov); Kanazawa 2 Dec (24 Nov) / 26 Oct (10 Nov); Nagoya 4 Dec (28 Nov) / 20 Nov (18 Nov); Kyoto 14 Dec (5 Dec) / 30 Nov (24 Nov); Osaka 6 Dec (1 Dec) / 27 Nov (22 Nov); Hiroshima 30 Nov (22 Nov) / 23 Nov (15 Nov); Fukuoka 10 Dec (1 Dec) / 30 Nov (20 Nov), with day differences | https://n-kishou.com/corp/news-contents/autumn/?lang=en | 2026-11-07 |
| 14 cities in JMC table; only Aomori and Kagoshima maple earlier than average; 12 of 14 on/after 22 Nov | https://n-kishou.com/corp/news-contents/autumn/?lang=en | 2026-11-07 |
| JWA third forecast 28 October 2026: nationwide normal or later; northern Japan around usual, mountains early; eastern/western usual or later, western slow | https://tenki.jp/kouyou/expectation/ ; https://weather-jwa.jp/en/news/announcements/post16208 | 2026-11-07 |
| Reasons: cool early Sept/early Oct; warmer since; cooler early Nov expected; warmer late Nov | https://weather-jwa.jp/en/news/announcements/post16208 | 2026-11-07 |
| 118 locations peaked as of 28 Oct vs about 180 at same point in 2022 and 2023 | https://weather-jwa.jp/en/news/announcements/post16208 | 2026-11-07 |
| JWA peak dates: Naruko Gorge 25 Oct; Takao-san 15 Nov; Arashiyama 13 Nov; Korankei 16 Nov; Miyajima 18 Nov | https://tenki.jp/kouyou/expectation/ | 2026-11-07 |
| JWA updates 3-4 times through November; daily forecaster commentary | https://weather-jwa.jp/en/news/announcements/post16208 | 2026-11-07 |

## news-mount-fuji-first-snowcap-new-method.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Mount Fuji first snowcap 30 October 2026 | https://www.data.jma.go.jp/stats/data/mdrr/fsn_cap/index.php ; https://weathernews.jp/news/202610/300081/ | 2026-11-07 |
| JMA press release 31 July 2026; 44 mountains previously observed by staff by eye | https://www.data.jma.go.jp/kofu/image/2026/kansetsu202607.pdf | 2026-11-07 |
| New "analysed snow depth" uses AMeDAS, radar, Himawari; works in cloud and at night; also shows current summit snow | https://www.data.jma.go.jp/kofu/image/2026/kansetsu202607.pdf | 2026-11-07 |
| Page updates about 25 minutes past each hour; season August to July | https://www.data.jma.go.jp/stats/data/mdrr/fsn_cap/index.php | 2026-11-07 |
| Kofu office could not see Fuji on 30 Oct morning (according to Weathernews) | https://weathernews.jp/news/202610/300081/ | 2026-11-07 |
| 2026 first snowcaps: Asahidake 2 Oct; Hakkoda 22 Oct; Tateyama 27 Oct; Zao 28 Oct; Hakusan 28 Oct; Fuji 30 Oct; Kai-Komagatake 2 Nov; none yet at Ibukiyama, Hira-san, Sefurisan, Yufudake | https://www.data.jma.go.jp/stats/data/mdrr/fsn_cap/index.php | 2026-11-07 |
| Kofu ended Fuji/Kai-Komagatake series with 2026 cold-season year due to method change | https://www.data.jma.go.jp/kofu/shosai/chousa.html | 2026-11-07 |
| No normal or year-on-year comparison under new method | https://weathernews.jp/news/202610/300081/ | 2026-11-07 |
| Old method: 2025 23 Oct; normal 2 Oct; earliest 9 Aug 2008; latest 7 Nov 2024 | https://www.data.jma.go.jp/kofu/shosai/chousa.html | 2026-11-07 |

### Research set Z1

#### Facts file Z1

## tokyo-for-first-timers.md

| Fact (as stated on the site) | Source URL | Checked |
| --- | --- | --- |
| GO TOKYO areas: Central, Eastern, Western, Southern, Northern Tokyo, Tama Area, Izu and Ogasawara Islands | https://www.gotokyo.org/en/destinations/index.html | 2026-11-07 |
| Asakusa in Eastern Tokyo; Ueno in Northern; Ginza, Tokyo Station & Marunouchi in Central; Shinjuku, Shibuya, Harajuku in Western | https://www.gotokyo.org/en/destinations/index.html | 2026-11-07 |
| JNTO Tokyo page singles out Shinjuku, Asakusa ("the heart of Tokyo's downtown"), Harajuku, Shibuya, Ginza | https://www.japan.travel/en/destinations/kanto/tokyo/ | 2026-11-07 |
| Sensoji is Asakusa's largest temple; Thunder Gate with giant red lantern; Nakamise from gate to temple with souvenir/snack stalls; Sumida River; Kappabashi | https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html | 2026-11-07 |
| Asakusa Station on Tokyo Metro Ginza Line, Toei Asakusa Line, Tobu Skytree Line | https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html | 2026-11-07 |
| Tokyo Station to Asakusa about 20 min (Yamanote to Kanda, then Ginza Line) | https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html | 2026-11-07 |
| Ueno Park: boating pond, shrine with pagoda, "Japan's oldest zoo"; busy in April with cherry blossom; allow about half a day for zoo; Tokyo National Museum etc.; Ameyoko | https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/index.html | 2026-11-07 |
| Tokyo to Ueno about 8 min, Shinjuku to Ueno about 24 min, Yamanote Line | https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/index.html | 2026-11-07 |
| Ginza: department stores, boutiques, restaurants, Kabukiza, galleries; main street pedestrian on weekends and national holidays; Ginza Station on Ginza, Marunouchi, Hibiya lines; about 5 min walk from JR Yurakucho | https://www.gotokyo.org/en/destinations/central-tokyo/ginza/index.html | 2026-11-07 |
| Tokyo Station "Japan's busiest station by number of trains"; red-brick building; shinkansen across the country; Marunouchi office district; Imperial Palace a stone's throw from west exits | https://www.gotokyo.org/en/destinations/central-tokyo/tokyo-station-and-marunouchi/index.html | 2026-11-07 |
| Shinjuku: Tokyo Metropolitan Government Building observatory decks, Shinjuku Gyoen National Garden, Kabukicho; Tokyo Station to Shinjuku about 14 min on JR Chuo Line Rapid | https://www.gotokyo.org/en/destinations/western-tokyo/shinjuku/index.html | 2026-11-07 |
| Harajuku: station between Shibuya and Shinjuku on JR Yamanote loop; Takeshita Street; kawaii culture; Meiji Shrine; Yoyogi Park; Shinjuku about 4 min, Tokyo about 26 min | https://www.gotokyo.org/en/destinations/western-tokyo/harajuku/index.html | 2026-11-07 |
| Shibuya: Scramble Crossing; SHIBUYA SKY 360-degree view from about 230 m; Shinjuku 7 min, Tokyo 23 min on Yamanote | https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/index.html | 2026-11-07 |
| Yamanote called "City Circle Loop" (page data as of 24 Dec 2024) | https://www.japan.travel/en/au/plan/useful-tickets-tokyo/ | 2026-11-07 |
| Subway: IC card, travel pass or individual tickets | https://www.gotokyo.org/en/plan/getting-around/index.html | 2026-11-07 |
| Tokyo Metro 9 lines, 195 km, 180 stations, fares 180-330 yen; Toei 4 lines (Asakusa, Mita, Shinjuku, Oedo), 106 stations, fares 180-430 yen; separate tickets; JR Pass not valid on subway; Asakusa Line connects through to Narita and Haneda; passport needed for visitor subway pass | https://www.gotokyo.org/en/plan/getting-around/subways/index.html | 2026-11-07 |
| Tokyo Subway Ticket 24h 1,000/500 yen, 48h 1,500/750, 72h 2,000/1,000; paper ticket valid from first use before expiry date on back; on PASMO from purchase; sold at airports, subway stations, TICs; page updated 1 Sept 2026 | https://www.gotokyo.org/en/plan/getting-around/ic-card/index.html | 2026-11-07 |
| Older official page shows lower prices (800/1,200/1,500 yen adult, data as of 24 Dec 2024) | https://www.japan.travel/en/au/plan/useful-tickets-tokyo/ | 2026-11-07 |
| Haneda officially Tokyo International Airport; Narita "Japan's largest international airport" | https://www.japan.travel/en/destinations/kanto/tokyo/ | 2026-11-07 |
| N'EX approx. 60 min to Tokyo, 90 min to Shinjuku, also stops Shinagawa, Shibuya; Skyliner approx. 45 min to Ueno, stops Nippori; TYO-NRT approx. 68 min to Tokyo, 1,500 yen, 3,000 yen late night/early morning | https://www.gotokyo.org/en/plan/airport-access/narita-airport/index.html | 2026-11-07 |
| Haneda T3: monorail 13 min to Hamamatsucho, then 7 min Yamanote to Tokyo; Keikyu Rapid Express 11 min to Shinagawa, then 13 min to Tokyo; limousine bus 55 min to Tokyo Station and Shinjuku | https://www.gotokyo.org/en/plan/airport-access/haneda-airport/index.html | 2026-11-07 |

## tokyo-day-trips.md

| Fact (as stated on the site) | Source URL | Checked |
| --- | --- | --- |
| Tobu SPACIA Asakusa to Tobu-Nikko about 1 h 50 min direct; from JR Shinjuku about 2 h direct; from JR Ikebukuro about 1 h 55 min direct | https://www.tobu.co.jp/en/access/nikko/ | 2026-11-07 |
| JR Yokosuka Line to Kamakura: Tokyo about 60 min, Shinagawa about 50 min, Yokohama about 25 min | https://visit.trip-kamakura.com/access/ | 2026-11-07 |
| Romancecar Shinjuku to Hakone-Yumoto about 80 min; all seats reserved | https://odakyu-global.com/romancecar/ | 2026-11-07 |
| Fuji Excursion fastest Shinjuku to Kawaguchiko 1 h 53 min (page graphic shows 1 h 54); four round trips daily plus one seasonal; no unreserved seats | https://www.fujikyu-railway.jp/en/fujikaiyuu/ | 2026-11-07 |
| Highway bus Busta Shinjuku to Kawaguchiko Station approx. 1 h 45 min, traffic dependent; reservations open one month before, close 10 min before departure | https://bus.fujikyu.co.jp/en/highway/fujisan/shinjuku-kawaguchiko/ | 2026-11-07 |
| Kawagoe in Saitama Prefecture | https://www.koedo.or.jp/en/ (homepage) and https://www.koedo.or.jp/en/kawagoe/ | 2026-11-07 |
| Main sights Kurazukuri townscape, Toki no Kane, Kashiya Yokocho; Toki no Kane is the symbol, present building 4th generation after fires; Kawagoe Castle built 1457 | https://www.koedo.or.jp/en/kawagoe/ | 2026-11-07 |
| "Koedo Kawagoe" / "Little Edo"; kurazukuri clay warehouses and merchant homes, most now shops/restaurants; bell tower chimes four times a day; Candy Alley with 20 old sweet shops; Kawagoe Discount Pass for foreign tourists (one day, three stations and Tobu buses, discounts) | https://www.japan.travel/en/spot/1424/ | 2026-11-07 |
| Ikebukuro 26 min at fastest (Tobu Tojo Kawagoe Limited Express); Shinjuku JR Saikyo rapid approx. 50 min; Seibu Shinjuku Line Red Arrow "Koedo" as little as 44 min to Hon-Kawagoe; Shibuya approx. 45 min Tokyo Metro Fukutoshin Line | https://www.koedo.or.jp/en/access/ | 2026-11-07 |
| Tobu Tojo Line Ikebukuro to Kawagoe approximately 30 min | https://www.tobu.co.jp/en/access/kawagoe/ | 2026-11-07 |
| Yokohama "first harbor city introduced to the world as the entrance to Japan"; port opened 1859; population 3.7 million, second after Tokyo's 23 wards; areas Minato Mirai 21 (Landmark Tower 296 m), Yamashita Park/Kannai, Chinatown (approx. 500 restaurants, grocery stores and shops), Motomachi/Yamate | https://www.yokohamajapan.com/about/ | 2026-11-07 |
| Red Brick Warehouse: customs inspection house early 1920s; Building 1 10:00-19:00, Building 2 11:00-20:00; 6 min walk from Nihon Odori / Bashamichi (Minatomirai Line) | https://www.yokohamajapan.com/things-to-do/detail.php?bbid=184 | 2026-11-07 |
| Christmas Market 20 Nov to 25 Dec 2026; regular admission ticket 500 yen | https://www.yokohamajapan.com/events/detail.php?id=164 | 2026-11-07 |
| JR or private railways from downtown Tokyo to Yokohama Station in an hour or less | https://www.japan.travel/en/destinations/kanto/kanagawa/yokohama-and-around/ | 2026-11-07 |

### Research set Z2

#### Facts file Z2

## sendai-and-matsushima.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Sendai Station described as gateway to Tohoku; base for Yamagata, Iwate, Fukushima | https://www.sentabi.jp/en/ | 2026-11-07 |
| Tokyo to Sendai about 1 hr 32 min, Tohoku Shinkansen (shortest) | https://www.sentabi.jp/en/access | 2026-11-07 |
| Morioka about 39 min; Shin-Aomori about 1 hr 28 min; Akita about 2 hr 18 min (Akita Shinkansen); Shin-Hakodate-Hokuto about 2 hr 35 min | https://www.sentabi.jp/en/access | 2026-11-07 |
| Direct flights from New Chitose, Nagoya, Osaka, Kobe, Hiroshima, Fukuoka, Naha | https://www.sentabi.jp/en/access | 2026-11-07 |
| Highway bus from Tokyo Station about 5 hr to 5 hr 30 min | https://www.sentabi.jp/en/access | 2026-11-07 |
| Zuihoden: Date Masamune mausoleum, built 1637, Momoyama style, National Treasure 1931, destroyed in war, rebuilt 1979 | https://www.sentabi.jp/en/spots/2 | 2026-11-07 |
| Zuihoden hours 1 Feb-30 Nov 9:00-16:50 (last entry 16:30); 1 Dec-31 Jan 9:00-16:20 (last entry 16:00); closed 31 Dec | https://www.sentabi.jp/en/spots/2 | 2026-11-07 |
| Zuihoden fees adult 570, high school 410, elementary/junior high 210 yen | https://www.sentabi.jp/en/spots/2 | 2026-11-07 |
| Zuihoden access: Loople from stop 16 to Zuihoden-mae + 5 min walk, stairs; 15 min walk from Omachi-Nishikoen (Tozai Line) | https://www.sentabi.jp/en/spots/2 | 2026-11-07 |
| Osaki Hachimangu founded 1607 by Date Masamune, National Treasure 1952, no closing days | https://www.sentabi.jp/en/spots/3 | 2026-11-07 |
| Matsutaki festival (Dontosai) 14 January, Sendai City Intangible Folk Cultural Property | https://www.sentabi.jp/en/spots/3 | 2026-11-07 |
| Osaki access: bus stops 10, 15 (Oridate/Sakunami, Kunimigaoka, Minamiyoshinari), 230 yen; Loople stop 16 to Osaki Hachimangu-mae; stairs | https://www.sentabi.jp/en/spots/3 | 2026-11-07 |
| Sightseeing page titled "Three Most Scenic Spots of Japan" | https://www.matsushima-kanko.com/en/sightseeing/ | 2026-11-07 |
| "260 small pine-covered islands" | https://www.matsushima-kanko.com/en/ | 2026-11-07 |
| Zuiganji National Treasure and Important Cultural Property; opened 828 by Ennin; present buildings completed by Date Masamune 1609, five years' work | https://www.matsushima-kanko.com/en/sightseeing/ | 2026-11-07 |
| Zuiganji hours Apr-Sep 8:30-17:00; Oct & Mar 8:30-16:30; Nov & Feb 8:30-16:00; Dec & Jan 8:30-15:30; last entry 30 min before | https://www.matsushima-kanko.com/en/sightseeing/ | 2026-11-07 |
| Zuiganji admission adults 700, children 400 yen | https://www.matsushima-kanko.com/en/sightseeing/ | 2026-11-07 |
| Godaido Important Cultural Property, built by Date Masamune 1604, free, closed evenings | https://www.matsushima-kanko.com/en/sightseeing/ | 2026-11-07 |
| Kanrantei two rooms, named by Date Yoshimura (5th lord); hours Apr-Oct 8:30-17:00, Nov-Mar 8:30-16:30; 200/150/100 yen | https://www.matsushima-kanko.com/en/sightseeing/ | 2026-11-07 |
| Oshima legend 108 caves, about 50 remain | https://www.matsushima-kanko.com/en/sightseeing/ | 2026-11-07 |
| Oshima and Fukuurajima reachable on foot over red bridge; Fukuurabashi and Godaido illuminated at night; oyster lunch cruises in winter; Zuiganji Osegakie 16 August | https://www.matsushima-kanko.com/en/ | 2026-11-07 |
| Three boat routes (bay round trip; Matsushima Bay-Shiogama Bay; Matsushima-Oku-Matsushima Sagakei) | https://www.matsushima-kanko.com/en/leisure/ | 2026-11-07 |
| Bay round trip and Matsushima-Shiogama cruise each take 50 minutes | https://www.matsushima-kanko.com/en/faq/ | 2026-11-07 |
| Senseki Line Sendai-Matsushimakaigan about 40 min, 410 yen, platform 10, trains for Ishinomaki/Takagimachi; Shiogama/Tagajo need change | https://www.matsushima-kanko.com/en/ | 2026-11-07 |
| Tohoku Line to Matsushima about 25 min, 410 yen, 15-20 min walk | https://www.matsushima-kanko.com/en/ | 2026-11-07 |
| Senseki-Tohoku express to Takagimachi from about 25 min, about 20 min walk | https://www.matsushima-kanko.com/en/ | 2026-11-07 |
| Sendai Airport Access Line to Sendai 17 min | https://www.matsushima-kanko.com/en/faq/ | 2026-11-07 |
| Coin lockers at Matsushimakaigan and Matsushima stations; large luggage kept by association for 700 yen | https://www.matsushima-kanko.com/en/faq/ | 2026-11-07 |

## hakodate-and-otaru.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Hakodate Liner Shin-Hakodate-Hokuto to Hakodate approx. 20 min, 440 yen, runs to Shinkansen schedule | https://www.hakodate.travel/en/information/transportation | 2026-11-07 |
| Tram 1-day pass 800/400 yen; 24-hour pass (online) 1,130/570 yen; tram + bus 1-day 1,600 yen; prices subject to change | https://www.hakodate.travel/en/information/transportation | 2026-11-07 |
| Tokyo Station to Hakodate Station about 4 hr 30 min; Sapporo to Hakodate about 3 hr 30 min (limited express) | https://www.hakodate.travel/en/information/access | 2026-11-07 |
| Night view three stars in Michelin Green Guide | https://www.hakodate.travel/en/top7 | 2026-11-07 |
| Ropeway about 3 min; gondola capacity 125; every 15 min, 5-10 min at busy times; annual legally required inspection late Oct-early Nov | https://www.hakodate.travel/en/information/mt-hakodate | 2026-11-07 |
| Ropeway hours 20 Apr-30 Sep first 10:00, last up 21:30, last down 22:00; 1 Oct-19 Apr first 10:00, last up 20:30, last down 21:00; may change with weather | https://www.334.co.jp/en/en-price/ | 2026-11-07 |
| Ropeway fares round trip 1,800/900 yen; one way 1,200/600 yen; children up to 2 free | https://www.334.co.jp/en/en-price/ | 2026-11-07 |
| Ropeway inspection closure 20 Oct-8 Nov 2026 | https://www.334.co.jp/en/ | 2026-11-07 |
| Climbing bus Route 1: about 30 min, 700 yen; ran 17 Apr-30 Sep and 20 Oct-8 Nov 2026; not 9 Nov 2026-12 Apr 2027 | https://www.hakodate.travel/en/information/mt-hakodate | 2026-11-07 |
| Summit road evening closures to private cars; winter closure 9 Nov 2026 11:00 to 12 Apr 2027 11:00 | https://www.hakodate.travel/en/information/mt-hakodate | 2026-11-07 |
| Three ways to summit: climbing bus, ropeway shuttle bus, tram to Jujigai + ~10 min steep walk | https://www.hakodate.travel/en/top7 | 2026-11-07 |
| Goryokaku five-sided star fort, first Western-style fortification, completed 1864; Magistrate's Office at centre, destroyed 1871, reconstruction reopened 2010 | https://www.japan.travel/en/spot/1904/ | 2026-11-07 |
| Goryokaku final battle of Boshin War; around 1,500 cherry trees; park hours 5:00-19:00 (Nov-Mar 5:00-18:00); festival every May | https://www.visit-hokkaido.jp/en/spot/detail_10034.html | 2026-11-07 |
| Goryokaku Tower: tram to Goryokaku-koen-mae, 13 min walk; observation deck shows star shape | https://www.hakodate.travel/en/top7 | 2026-11-07 |
| Morning market about 1 min walk from JR Hakodate Station; opens early; squid fishing at Ekini Market; Donburi Yokocho about 20 shops | https://www.hakodate.travel/en/top7 | 2026-11-07 |
| Motomachi hilly cobblestone streets at foot of Mt Hakodate; Hakodate first port in Hokkaido to open; Kanemori Red Brick Warehouse on the quay, Jujigai tram | https://www.hakodate.travel/en/top7 | 2026-11-07 |
| Motomachi foreign churches and old consulate buildings | https://www.japan.travel/en/uk/inspiration/launch-of-hokkaido-shinkansen/ | 2026-11-07 |
| Otaru Canal completed 1923; offshore reclamation, gently curved; 1986 partial fill after 10+ years of dispute, half width road, walkway; 1,140 m; 20 m / 40 m North Canal; 63 gas lamps sunset-24:00; from 15:00 during Snow Light Path; 10 min walk from JR Otaru | https://otaru.gr.jp/shop/otarucanal | 2026-11-07 |
| Warehouse light-up sunset to 22:30 all year (page dated 2022-05-19) | https://otaru.gr.jp/tourist/otaruungagasutou%EF%BC%86raitoappu | 2026-11-07 |
| Blue Canal 1 Nov 2026-31 Jan 2027, Asakusabashi-Chuobashi, sunset-22:30 | https://otaru.gr.jp/winter | 2026-11-07 |
| Otaru Canal Candle Night 18-27 Dec 2026, Otaru Port Square, ~10 min walk from JR Otaru, 16:00-20:00 | https://otaru.gr.jp/winter | 2026-11-07 |
| Sapporo-Otaru shortest 32 min by Rapid Airport; stops Otaru-Chikko, Minami-Otaru, Otaru; U-seat +520 yen | https://otaru.gr.jp/access | 2026-11-07 |
| New Chitose Airport to Otaru 73 min fastest; some trains direct; reserved seats car 4, basic fare + reserved seat ticket | https://www.jrhokkaido.co.jp/global/english/travel/airport.html | 2026-11-07 |

### Research set Z3

#### Facts file Z3

## okayama-and-kurashiki.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Korakuen: "One of the Three Great Gardens of Japan" | https://okayama-korakuen.jp/section/english/ | 2026-11-07 |
| Ikeda Tsunamasa ordered Tsuda Nagatada to begin garden in 1687; groundwork 13 years until 1700 | https://okayama-korakuen.jp/section/english/intro/index.html | 2026-11-07 |
| 1884 ownership to Okayama Prefecture, opened to public; 1934 typhoon, 1945 air raid damage; restored from plans/photos; 1952 Special Place of Scenic Beauty | https://okayama-korakuen.jp/section/english/intro/index.html | 2026-11-07 |
| Hours 20 Mar-30 Sep 7:30-18:00 (last 17:45); 1 Oct-19 Mar 8:00-17:00 (last 16:45) | https://okayama-korakuen.jp/section/english/info/index.html | 2026-11-07 |
| Fees adult 15-64 500/400 group; senior 65+ 200/160; child 0-14 free; students to 18 temporarily free with proof | https://okayama-korakuen.jp/section/english/info/index.html | 2026-11-07 |
| Combined: + castle 800; + Prefectural Museum 610; + castle + Hayashibara 1,280; not on other facility closing days/special exhibitions | https://okayama-korakuen.jp/section/english/info/index.html | 2026-11-07 |
| Access: walk ~25 min via Momotaro Ave and Tsurumi Bridge; bus line 18 Fujiwara Danchi from platform 1 ~12 min to Korakuen-mae; streetcar Higashiyama ~15 min to Shiroshita | https://okayama-korakuen.jp/section/english/access/index.html | 2026-11-07 |
| Ukita Hideie; keep completed 1597; black clapboards, Ujo; gilded tiles, Kin-ujo; destroyed by fire in WWII; rebuilt 1966 | https://okayama-castle.jp/?p=190 | 2026-11-07 |
| Castle hours 9:00-17:30 (last 17:00); closed 29-31 Dec; may close bad weather/inspections; adult (HS+) 500, group 20+ 400; junior high free; combined 800 / 1,280 / 1,440 (Yumeji) | https://okayama-castle.jp/guide-en | 2026-11-07 |
| Castle access: streetcar ~5 min to Shiroshita + ~10 min walk; bus via Higashiyama to Kencho-mae + ~5 min walk | https://okayama-castle.jp/guide-en | 2026-11-07 |
| Kurashiki flourished in Edo (1603-1868) and Meiji (1868-1912); ~15 min walk from Kurashiki Station | https://www.westjr.co.jp/travel-information/en/explore-west-japan/destinations-okayama/kurashiki-bikan-historical-quarter/?LANG=en | 2026-11-07 |
| 1642 tenryo; cotton and igusa after reclamation; merchants along Kurashiki River; river boats recreate Edo cargo boats, same-day tickets (some online), buy at Kurashikikan tourist information; night lighting; Japan Heritage | https://www.kurashiki-tabi.jp/standard/kurashiki-bikan-historical-quarter/ | 2026-11-07 |
| Ohara Museum founded 1930 by Ohara Magosaburo in memory of Kojima Torajiro; Japan's first private museum centred on Western art; El Greco, Gauguin, Monet, Matisse | https://www.ohara.or.jp/history | 2026-11-07 |
| Hours Mar-Nov 9:00-17:00 (last 16:30); Dec-Feb 9:00-15:00 (last 14:30); closed Mondays (open holidays), no closures in August; adults 2,000, under 18 500, preschool free; no group rates; covers main building, Kogeikan/Toyokan, Kojima Memorial Hall; stamped ticket; annex closed long-term | https://www.ohara.or.jp/visitor_info | 2026-11-07 |
| Sanyo Shinkansen to Okayama; Okayama-Kurashiki JR Sanyo Line ~18 min; Shin-Kurashiki-Kurashiki ~10 min; museum ~15 min walk from station | https://www.ohara.or.jp/access | 2026-11-07 |
| Sunrise Izumo stops at Okayama and Kurashiki | https://www.jr-odekake.net/railroad/train/sunriseseto_izumo/ | 2026-11-07 |
| Yakumo starts at Okayama | https://www.westjr.co.jp/global/en/train/yakumo/ | 2026-11-07 |

## izumo-and-matsue.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Deity Okuninushi-no-Okami; prayer "two bows, four claps, silent prayer, and one more bow (2-4-1)" | https://www.izumo-kankou.gr.jp/english/4760 | 2026-11-07 |
| Present shrine built 1744, National Treasure; main hall 48 m in 10th century, ~24 m today; Kagura-den largest shimenawa in Japan | https://www.izumo-kankou.gr.jp/english/4760 | 2026-11-07 |
| Hours: front area ~6:00-19:00 daily; prayers 9:15-16:30 (reception 8:40-16:00); Soga Shrine 6:00-16:30 | https://www.izumo-kankou.gr.jp/english/4760 | 2026-11-07 |
| Bus ~25 min JR Izumoshi to Seimon Mae; Ichibata ~25 min from Dentetsu Izumoshi, change at Kawato; JR Pass not valid; taxi ~20 min | https://www.izumo-kankou.gr.jp/english/4760 | 2026-11-07 |
| Okuninushi associated with marriage and relationships; two bows, four claps, one bow; Kamiari Festival ~a week, usually November | https://www.japan.travel/en/experiences-in-japan/1953/ | 2026-11-07 |
| Matsue Castle completed 1611; one of 12 remaining original castles; National Treasure 2015; 2 km from JR Matsue Station; 10 min by Ichibata bus to Kencho-mae | https://www.visit-matsue.com/discover/city_centre/north_side/castle_area/matsue_castle | 2026-11-07 |
| Keep designated National Treasure | https://www.matsue-castle.jp/ | 2026-11-07 |
| Keep hours 1 Apr-30 Sep 8:30-18:00 (last 17:30); 1 Oct-31 Mar 8:30-17:00 (last 16:30); Honmaru 8:00-18:30 / 8:00-17:30, free; open all year; fees revised 1 July 2026 for keep repairs: adult 1,200, group 30+ 960, elementary/junior high free; disability + 1 carer free; cards, IC, e-money; shoes off, bag | https://www.matsue-castle.jp/userguide/index | 2026-11-07 |
| Lake Shinji brackish, Japan's largest source of shijimi; sunset among Japan's 100 famous landscapes; ~10 min walk from JR Matsue Station | https://www.kankou-shimane.com/en/destinations/9303 | 2026-11-07 |
| Sunset spot south of Shimane Art Museum along promenade, view of Yomegashima; Shirakata Park; sunset index | https://www.visit-matsue.com/discover/city_centre/lake_shinji/sunset_over_lake_shinji | 2026-11-07 |
| Sunrise Izumo stops Okayama-Izumoshi: Kurashiki, Bitchu-Takahashi, Niimi, Yonago, Yasugi, Matsue, Shinji, Izumoshi; stops vary | https://www.jr-odekake.net/railroad/train/sunriseseto_izumo/ | 2026-11-07 |
| Yakumo: Okayama to Yonago, Matsue, Izumo(shi); "three-hour travel time"; 30 trains daily; 273 series tilting; 4 or 8 cars; Green and ordinary reserved | https://www.westjr.co.jp/global/en/train/yakumo/ | 2026-11-07 |
| Ichibata founded 1912, trains from 1914; Dentetsu Izumoshi short walk from JR Izumoshi; Kawato transfer; Izumo Taisha Mae terminal; bikes for small fee | https://izumo-kankou.gr.jp/english/4768 | 2026-11-07 |

## kinosaki-onsen-and-tottori-dunes.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Seven bathhouses and hours/closed days (Kono-yu 7-23 Tue; Mandara-yu 15-23 Wed; Goshono-yu 7-23 Thu; Ichino-yu 7-23 Wed; Yanagi-yu 15-23 Thu; Jizo-yu 7-23 Mon; Satono-yu closed for renovation from 1 Apr 2024) | https://visitkinosaki.com/about-kinosaki/the-7-mystic-onsen/ | 2026-11-07 |
| Kono-yu closed for renovation 11 May-30 Oct 2026 | https://visitkinosaki.com/about-kinosaki/the-7-mystic-onsen/ | 2026-11-07 |
| Yumepa day pass 1,500 yen at any bathhouse; accommodation guests usually given yumepa at check-in; all baths allow tattoos | https://visitkinosaki.com/about-kinosaki/the-7-mystic-onsen/ | 2026-11-07 |
| ~1,300 years history; Naoya Shiga; town like a single ryokan quote; Otani River willow-lined; Ichino-yu was Arayu, renamed after Kagawa Shutoku; all inns and baths tattoo-friendly; pass 1,500 adult / 750 child, excludes Satonoyu; ~2.5 h from Kobe, Osaka, Kyoto by limited express | https://www.hyogo-tourism.jp/world/feature/detail_131.html | 2026-11-07 |
| Legend: Douchi Shonin arrived 717; San'in Main Line; ~2.5 h from Kyoto or Osaka by direct express; pass 1,300 yen as of Nov 2021; ryokan guests use baths free check-in to check-out | https://www.japan.travel/en/spot/2005/ | 2026-11-07 |
| Yukata provided by accommodation; encouraged to stroll; welcomed by shops etc.; originally alternative to towels; day rental available | https://visitkinosaki.com/about-kinosaki/strolling-the-town-in-yukata/ | 2026-11-07 |
| JR limited express from Kyoto, Osaka, Sannomiya, Himeji; all limited express require seat reservation in advance; JR Pass or JR West Rail Pass usable | https://visitkinosaki.com/access/ | 2026-11-07 |
| Limited Express Kinosaki: Kyoto to Fukuchiyama, Toyooka, Kinosaki Onsen | https://www.jr-odekake.net/railroad/train/kinosaki/ | 2026-11-07 |
| Limited Express Konotori: Shin-Osaka to Fukuchiyama, Toyooka, Kinosaki Onsen | https://www.jr-odekake.net/railroad/train/kounotori/ | 2026-11-07 |
| Dunes 2.4 km N-S, 16 km E-W; Umanose "horse's back"; San'in Kaigan Geopark; camel rides, paragliding, Dune Lift, cycling, sandboarding | https://www.tottori-tour.jp/en/sightseeing/456/ | 2026-11-07 |
| Dunes 2 km N-S, 16 km E-W; section part of San'in Kaigan National Park | https://www.westjr.co.jp/travel-information/en/explore-west-japan/destinations-tottori/tottori-sand-dunes/ | 2026-11-07 |
| Visitor center open year round 9:00-17:00; free maps; sand graffiti prohibited by ordinance | https://sakyu-vc.com/en/ | 2026-11-07 |
| Buses from Tottori Bus Terminal (north exit): 39 or 32/33, ~22 min, 380 yen; Loop Kirinjishi weekends/holidays ~20 min, 400 yen or 700 day pass; Sakyu-kaikan closest; last bus 18:30; IC cards not accepted; no convenience stores/ATMs near dunes | https://www.torican.jp/en/feature/busstop | 2026-11-07 |
| Tokyo-Himeji Nozomi ~3 h; Himeji-Tottori Super Hakuto ~1 h 35 min | https://www.torican.jp/en/access/ | 2026-11-07 |

### Research set Z4

#### Facts file Z4

## articles/travelling-with-children.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| JR age bands: adult 12+, child 6-11, infant 1-5, baby under 1 | https://global.jr-central.co.jp/en/tickets/type/adults_children.html | 2026-11-07 |
| 12-year-old still in elementary school (established under Japanese law) counts as child | https://global.jr-central.co.jp/en/tickets/type/adults_children.html | 2026-11-07 |
| Child basic fare, limited express, express and reserved seat tickets are half the adult price | https://global.jr-central.co.jp/en/tickets/type/adults_children.html | 2026-11-07 |
| Infants and babies free except: more than two infants per adult/child (3rd+ pays); infant/baby using reserved seat, Green Car seat (not unreserved Green) or bed; infant travelling alone | https://global.jr-central.co.jp/en/tickets/type/adults_children.html | 2026-11-07 |
| JNTO: 12+ pay adult fare, 6-11 discount, "usually, toddlers and infants (5 years old and under) travel free" | https://www.japan.travel/en/sg/guide/family-friendly-travel-tips-japan/ | 2026-11-07 |
| JR Pass "children" = aged 6 to 11 at time of use; online: 11 on payment date counts as child; overseas: 11 on voucher issue date counts as child | https://japanrailpass.net/en/purchase/price/ | 2026-11-07 |
| Child JR Pass prices: 7-day ordinary ¥25,000 online / ¥27,000 overseas; Green ¥35,000 / ¥37,000; 14-day ordinary ¥40,000 / ¥42,000, Green ¥55,000 / ¥58,000; 21-day ordinary ¥50,000 / ¥53,000, Green ¥70,000 / ¥74,000 | https://japanrailpass.net/en/purchase/price/ | 2026-11-07 |
| JR Pass pages checked do not state separate rules for under-6s | https://japanrailpass.net/en/purchase/price/ ; https://japanrailpass.net/en/about_jrp/riyou/ ; https://japanrailpass.net/en/use/conditions-for-use/ | 2026-11-07 |
| Oversized baggage rules (Tokaido, Sanyo, Kyushu, Nishi-Kyushu Shinkansen) do not apply to strollers; can go in overhead racks or deck storage without booking; oversized baggage area/compartment needs reservation | https://global.jr-central.co.jp/en/info/oversized-baggage/ | 2026-11-07 |
| JNTO: certain carriages stroller- and wheelchair-friendly; look for stroller pictograms on platform; fold pram and use carrier on crowded trains; avoid busy hours; most major stations have elevators | https://www.japan.travel/en/plan/traveling-with-children/ ; https://www.japan.travel/en/sg/guide/family-friendly-travel-tips-japan/ | 2026-11-07 |
| JR West: area around doors not to be used for suitcases/large items | https://www.westjr.co.jp/travel-information/en/train-usage-guide/howto/manners/ | 2026-11-07 |
| Tokaido-Sanyo Shinkansen: toilets in all cars Western style with diaper changing table; multipurpose room for nursing a baby or changing; disabled customers get priority | https://www.westjr.co.jp/global/en/train/shinkansen/tokaido-sanyo-shinkansen/user-friendly-equipment/ | 2026-11-07 |
| JR Central: multi-purpose room "primarily for disabled passengers" | https://global.jr-central.co.jp/en/info/accommodation/ | 2026-11-07 |
| JNTO: multi-purpose rooms usually locked, ask train staff | https://www.japan.travel/en/sg/guide/family-friendly-travel-tips-japan/ | 2026-11-07 |
| JNTO: nursing rooms in department stores, stations, malls; many have microwaves, private cubicles, changing mats; baby food at most convenience stores | https://www.japan.travel/en/plan/traveling-with-children/ | 2026-11-07 |
| Priority seats for expectant mothers, nursing mothers, elderly, disabled, others | https://www.westjr.co.jp/travel-information/en/train-usage-guide/howto/manners/ | 2026-11-07 |
| JNTO: ryokan may lack Western beds/travel cots; futons on tatami; switch stroller/carrier; stroller rental at theme parks, museums, airports; restaurants welcoming, fami-resu; rental cars offer child seats | https://www.japan.travel/en/plan/traveling-with-children/ | 2026-11-07 |

## articles/train-manners-and-smoking-rules.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| JR West: set phone to silent, refrain from making/accepting calls; no loud speaking; no smartphone use while walking in station/train | https://www.westjr.co.jp/travel-information/en/train-usage-guide/howto/manners/ | 2026-11-07 |
| JNTO: soft talking acceptable; phone at any volume frowned upon | https://www.japan.travel/en/guide/understanding-and-mastering-japanese-manners-and-etiquette/ | 2026-11-07 |
| JNTO: on Shinkansen, okay to use corridor between cars for calls | https://www.japan.travel/en/guide/how-to-travel-by-train-and-bus-in-japan/ | 2026-11-07 |
| Priority seats marked with stickers; for expectant/nursing mothers, disabled, elderly | https://www.westjr.co.jp/travel-information/en/train-usage-guide/howto/manners/ | 2026-11-07 |
| Women Only cars: female passengers; males up to elementary school age and those needing assistance may ride | https://www.westjr.co.jp/travel-information/en/train-usage-guide/howto/manners/ | 2026-11-07 |
| JNTO: women-only cars often during morning rush hour | https://www.japan.travel/en/guide/how-to-travel-by-train-and-bus-in-japan/ | 2026-11-07 |
| Form lines, board in order; no cutting in | https://www.westjr.co.jp/travel-information/en/train-usage-guide/howto/manners/ | 2026-11-07 |
| Line up to side of door, let passengers off first | https://www.japan.travel/en/guide/understanding-and-mastering-japanese-manners-and-etiquette/ | 2026-11-07 |
| Backpack off / on rack; backpack on front good manners | https://www.japan.travel/en/guide/how-to-travel-by-train-and-bus-in-japan/ ; https://www.japan.travel/en/responsible-travel-guide/features/traveling-comfortably/ | 2026-11-07 |
| "No smoking or vaping" on public transport | https://www.japan.travel/en/guide/how-to-travel-by-train-and-bus-in-japan/ | 2026-11-07 |
| Tokaido Shinkansen: all cars non-smoking | https://global.jr-central.co.jp/en/info/accommodation/ | 2026-11-07 |
| Revised Health Promotion Act fully in force 1 April 2020; indoor smoking banned in principle; three room types (smoking-only, heated-tobacco-only, smoking-permitted); signs mandatory; under-20s (customers and staff) barred from smoking areas | https://jyudokitsuen.mhlw.go.jp/ | 2026-11-07 |
| 1 April 2020 rule change; under 20 not permitted in smoking areas | https://www.city.inagi.tokyo.jp/en/kenko/iryou_kenkou/1003022/1003024.html | 2026-11-07 |
| Tokyo: facilities used by 2+ people generally no smoking inside; covers heated tobacco; Type I (hospitals, schools) no smoking rooms; restaurants must post policy; izakaya/restaurants not purpose-built smoking facilities; guidance and possible fines; outdoor obligation to avoid affecting others | https://kenko-station.metro.tokyo.lg.jp/category2/tokyo/engkangaekata_public.html | 2026-11-07 |
| JNTO: smoking not allowed in most restaurants and bars except designated areas | https://www.japan.travel/en/plan/local-laws/ | 2026-11-07 |
| JNTO: some restaurants and coffee shops still allow smoking; smoking while walking prohibited and may incur fine; outdoor smoking areas limited | https://www.japan.travel/en/guide/understanding-and-mastering-japanese-manners-and-etiquette/ | 2026-11-07 |
| JNTO FAQ: smoking incl. vaping prohibited in many public places; use designated areas | https://www.japan.travel/en/faq/ | 2026-11-07 |
| Chiyoda: first in Japan to ban street smoking with penalty; ordinance enacted 2002 | https://www.city.chiyoda.lg.jp/koho/kuse/koho/pressrelease/r6/r610/20241001.html | 2026-11-07 |
| Chiyoda: roads across ward except Imperial Palace no smoking all day; fine 2,000 yen currently, max 20,000 yen | https://www.city.chiyoda.lg.jp/koho/machizukuri/sekatsu/jore/faq.html | 2026-11-07 |
| Chiyoda English page: violators fined 2000 yen | https://www.city.chiyoda.lg.jp/welcome.html | 2026-11-07 |
| Chiyoda: heated tobacco street smokers fined from 1 November 2024 | https://www.city.chiyoda.lg.jp/koho/kuse/koho/pressrelease/r6/r610/20241001.html | 2026-11-07 |

## qa/can-i-bring-medication-into-japan.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Limits without procedures: prescription/poison 1-month; external-use 24 per item; injectables 1-month (pre-filled syringe or self-injection kit); other drugs and quasi-drugs 2-month; disposable contact lenses 2-month; household medical devices 1 set | https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/topics/tp010401-1_00001.html | 2026-11-07 |
| Import Confirmation needed above limits; apply before leaving; show at customs | same | 2026-11-07 |
| Insulin-type self-injection with syringes under 1 month: no certificate; syringes alone need confirmation even for 1 | https://www.mhlw.go.jp/content/001686827.pdf | 2026-11-07 |
| Online application; certificate PDF to registered email; documents: prescription/doctor's note (patient, medicine, doctor name), airline/cruise document (arrival date, place, flight no., name); issued in a few business days; corrected certificate invalid | https://www.mhlw.go.jp/content/001686827.pdf | 2026-11-07 |
| Methamphetamine prohibited (Q&A) | https://www.mhlw.go.jp/content/001686827.pdf | 2026-11-07 |
| Methamphetamine and amphetamine (dexamphetamine, levamfetamine) prohibited for individual travellers | https://www.ncd.mhlw.go.jp/en/application2.html | 2026-11-07 |
| Narcotics (morphine, fentanyl, oxycodone) and stimulant raw materials (lisdexamfetamine, pseudoephedrine) need prior permission; apply at least 14 days before travel | https://www.ncd.mhlw.go.jp/en/application2.html | 2026-11-07 |
| Psychotropics (methylphenidate, zolpidem, alprazolam) up to table amounts need no certificate or permission; cannot send or have others carry | https://www.ncd.mhlw.go.jp/en/application2.html | 2026-11-07 |
| Cannabis treated like other drugs; do not bring even if prescribed | https://www.japan.travel/en/plan/local-laws/ | 2026-11-07 |

## qa/what-plugs-and-voltage-does-japan-use.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| 100 volts AC throughout Japan | https://www.japan.travel/en/plan/plug-and-electricity/ | 2026-11-07 |
| 50 Hz east, 60 Hz west incl. Nagoya, Kyoto, Osaka | https://www.japan.travel/en/plan/plug-and-electricity/ | 2026-11-07 |
| Type A plugs; may need adapter | https://www.japan.travel/en/faq/ | 2026-11-07 |
| "Two flat parallel prong plugs"; buy adapter beforehand | https://www.japan.travel/en/plan/ | 2026-11-07 |
| Dual-voltage hair dryers, irons, shavers work; others need step-down transformer | https://www.japan.travel/en/plan/plug-and-electricity/ | 2026-11-07 |
| Adapters/transformers easy to find in urban areas, e.g. Akihabara, Nipponbashi | https://www.japan.travel/en/plan/plug-and-electricity/ | 2026-11-07 |
| New Shinkansen models have outlets by window seats | https://www.japan.travel/en/plan/plug-and-electricity/ | 2026-11-07 |

## qa/is-tap-water-safe-in-japan.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Tap water safe to drink; restaurants commonly serve complimentary water | https://www.japan.travel/en/faq/ | 2026-11-07 |
| Bottled water widely available but tap water perfectly safe | https://www.japan.travel/en/plan/ | 2026-11-07 |
| Most restaurants offer tap water free, ask staff; vending machines; all convenience stores stock bottled water; tap water source of pride in mountain regions; hydrate esp. in summer; sports drinks; carry water | https://www.japan.travel/en/plan/drinking-water/ | 2026-11-07 |

### Research set Z5

#### Facts file Z5

## kumamoto-castle-and-aso.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Two earthquakes in April 2016, each shindo 7 | https://kumamoto.guide/en/season/detail/94 | 2026-11-07 |
| Main tower: tiles and shachihoko fell, parts of stone wall crumbled | https://castle.kumamoto-guide.jp/en/about/ | 2026-11-07 |
| Nagabei Long Wall: 80 m section of eastern wall collapsed; restored 2021 | https://castle.kumamoto-guide.jp/en/about/ | 2026-11-07 |
| Nishi-otemon Gate foundation stones collapsed, turret slanted; demolished, restoration scheduled | https://castle.kumamoto-guide.jp/en/about/ | 2026-11-07 |
| Honmaru-goten Palace: floor sank, walls broke; no entry (restoration scheduled) | https://castle.kumamoto-guide.jp/en/about/ | 2026-11-07 |
| Uto-Yagura: Tsuduki-Yagura partly collapsed; demolished (restoration scheduled) | https://castle.kumamoto-guide.jp/en/about/ | 2026-11-07 |
| Akazu-no-mon Gate demolished, restoration scheduled | https://castle.kumamoto-guide.jp/en/about/ | 2026-11-07 |
| Kenmotsu-Yagura restored 2023; Iidamaru Gokai-Yagura stone wall restored 2024 | https://castle.kumamoto-guide.jp/en/about/ | 2026-11-07 |
| Main tower rebuilt 1960 in steel-reinforced concrete | https://castle.kumamoto-guide.jp/en/ ; /en/about/ | 2026-11-07 |
| Main tower full restoration completed March 2021 | https://castle.kumamoto-guide.jp/en/about/ | 2026-11-07 |
| Visitors could enter main keep from 26 April 2021 (3rd stage) | https://kumamoto.guide/en/season/detail/94 | 2026-11-07 |
| Main tower 6 floors plus basement; exhibits each floor; top viewing floor | https://castle.kumamoto-guide.jp/en/about/ ; /grand-unveiling/en/ | 2026-11-07 |
| Three elevators for wheelchair/pushchair users and those who find stairs difficult | https://castle.kumamoto-guide.jp/en/info/ | 2026-11-07 |
| Uto Yagura dismantling began 2022; repair/reassembly by 2032 | https://kumamoto-guide.jp/en/article/detail/387 | 2026-11-07 |
| Honmaru Goten major reconstruction start 2027, completion by 2032 | https://kumamoto-guide.jp/en/article/detail/387 | 2026-11-07 |
| Overall completion "currently projected for 2052" (article dated 10 July 2025) | https://kumamoto-guide.jp/en/article/detail/387 | 2026-11-07 |
| Earlier figure 2037 (January 2021 archive page) | https://kumamoto.guide/en/season/detail/94 | 2026-11-07 |
| Special Observation Path opened 1 June 2020; 350 m; about 6 m high | https://www.japan.travel/en/experiences-in-japan/1028/ | 2026-11-07 |
| Path 350 m, 5 to 7 m above ground | https://kumamoto.guide/en/season/detail/94 | 2026-11-07 |
| Tago Yagura complex visible from the path | https://kumamoto-guide.jp/en/article/detail/387 | 2026-11-07 |
| Hours 9:00-17:00, last admission 16:00; main tower final admission 16:30 | https://castle.kumamoto-guide.jp/en/info/ | 2026-11-07 |
| Closed 29 December; may close in severe weather | https://castle.kumamoto-guide.jp/en/info/ | 2026-11-07 |
| Weekdays South Gate only; weekends/holidays North and South Gates | https://castle.kumamoto-guide.jp/en/info/ | 2026-11-07 |
| Fees: ¥800 (group ¥640); ¥300 (group ¥240); under 6 free | https://castle.kumamoto-guide.jp/en/info/ | 2026-11-07 |
| Combo: castle+Wakuwaku-za ¥850/¥300; +City Museum ¥1,100/¥400 | https://castle.kumamoto-guide.jp/en/info/ | 2026-11-07 |
| Free shuttle Sakuranobaba Josaien-South Gate-Ninomaru, 9:00-17:00, every 10-15 min | https://castle.kumamoto-guide.jp/en/access/ | 2026-11-07 |
| Kumamoto Dentetsu bus to Shiyakusho Mae ~14 min, then 2-min walk | https://www.japan.travel/en/experiences-in-japan/1028/ | 2026-11-07 |
| Aso caldera 18 km E-W, 25 km N-S; one of largest; five peaks; Nakadake active; acidic pale turquoise pool | https://www.japan.travel/national-parks/parks/aso-kuju/explore/ | 2026-11-07 |
| JMA raised Asosan to Level 3 on 14 Aug 2026 (SO2 surge, tremor); lowered to Level 2 on 1 Sep 2026 | https://www.jma.go.jp/jma/press/2609/01b/asosan_20260901.html | 2026-11-07 |
| Level 2 continues as of JMA update 6 Nov 2026 16:00; ~1 km of Nakadake No.1 crater: ballistic rocks, pyroclastic flows; ash downwind; gas; Aso City and Minamiaso Village keep crater-area restrictions | https://www.data.jma.go.jp/vois/data/report/activity_info/503.html | 2026-11-07 |
| Crater access depends on alert level and weather | https://www.jrkyushu.co.jp/english/train/asoboy.html | 2026-11-07 |
| Aso Volcano Museum shows 15-minute video when crater closed; Kusasenri between Mt Kishima and Mt Eboshi, opposite museum | https://www.japan.travel/en/destinations/kyushu/kumamoto/aso-and-around/ | 2026-11-07 |
| Aso Shrine tower gate (National Treasure) and worship hall badly damaged in 2016; under reconstruction, open | https://www.japan.travel/en/destinations/kyushu/kumamoto/aso-and-around/ | 2026-11-07 |
| Hohi Line Higo-Ozu-Aso (~27 km) reopened 8 Aug 2020 after 4 years 4 months; Tateno slope collapse cut Route 57 and line | https://kyushu.env.go.jp/blog/2020/08/jr44-jr-kyushu-hohi-line-reopend-fully-after-4-years-and-4-months.html | 2026-11-07 |
| Kumamoto-Higo-Ozu ~40 min; Higo-Ozu-Aso ~45 min; Aso Station-Aso Sanjo Terminal bus ~35 min | https://www.japan.travel/en/japans-local-treasures/experience-the-power-mt-aso-2025/ | 2026-11-07 |
| ASO BOY! Kumamoto-Shin-Suizenji-Higo-Ozu-Tateno-Aso-Miyaji; 2 round trips (timetable as of Jan 2026); 1 h 35 min; all reserved; another train may run on some dates | https://www.jrkyushu.co.jp/english/train/asoboy.html | 2026-11-07 |
| Kumamoto Airport-Aso Station Kyushu Odan Bus ~50 min; Beppu-Aso by train via Oita 2 h 20 min | https://www.japan.travel/national-parks/parks/aso-kuju/how-to-get-there/ | 2026-11-07 |
| Asochiho from 1 July 2026 via Kusasenri and Aso Sanjo Terminal; reservations priority | https://asocity-kanko.jp/en/information/260601.php | 2026-11-07 |
| Public buses limited, stations far from many sights | https://www.japan.travel/en/destinations/kyushu/kumamoto/aso-and-around/ | 2026-11-07 |

## takachiho-gorge.md

| Fact (as stated on the site) | Source URL | Checked |
|---|---|---|
| Gorge formed over 100,000 years ago by volcanic activity; lit until 22:00 in warmer months | https://www.japan.travel/en/destinations/kyushu/miyazaki/takachiho/ | 2026-11-07 |
| Manai Falls 17 m; paved path 1 km along gorge; riverside walk rocky/slippery; can't go under falls without boat | https://www.japan.travel/en/spot/615/ | 2026-11-07 |
| Miyazaki-Takachiho 140 km, about 2.5 h by toll road | https://www.japan.travel/en/spot/615/ | 2026-11-07 |
| Boat reception 8:30-17:00, last check-in 16:30, may close early if queue | https://takachiho-kanko.info/boat/detail.php | 2026-11-07 |
| 30 minutes; +¥1,000 per extra 10 min; fee calendar ¥5,100 every day Nov 2026 | https://takachiho-kanko.info/boat/detail.php | 2026-11-07 |
| 3 per boat, 4 with preschool child; junior high and older row; prohibited items/actions | https://takachiho-kanko.info/boat/detail.php | 2026-11-07 |
| Life jacket inflation near Manai Falls: ¥3,000 cylinder replacement | https://takachiho-kanko.info/boat/detail.php | 2026-11-07 |
| Closures: high river; inspections Jan/Apr/Jul/Oct; emergency inspections; seismic intensity 3+ | https://takachiho-kanko.info/boat/detail.php | 2026-11-07 |
| Online-only booking from 9:00 two weeks before; closes 9:00 two days before; no phone; sold-out days no same-day sales, no waitlist; status ~8:00 | https://takachiho-kanko.info/boat/ | 2026-11-07 |
| No. 1 Mishiroi car park not dedicated to boats | https://takachiho-kanko.info/boat/ | 2026-11-07 |
| Takachiho Shrine founded about 1,900 years ago; three generations incl. Ninigi no Mikoto; joined cedars; ~15 min walk from bus centre; hotels' free shuttles | https://www.japan.travel/en/spot/614/ | 2026-11-07 |
| Kagura 20:00-21:00 nightly; four of 33 dances (names) | https://takachiho-kanko.info/kagura/ | 2026-11-07 |
| Yokagura: national Important Intangible Folk Cultural Property; mid-Nov to early Feb in kagura lodgings | https://takachiho-kanko.info/kagura/ | 2026-11-07 |
| Fee ¥1,000 adult; elementary and younger free; groups 20+ ¥900 (not online); no 31 Dec/1 Jan; 22-23 Nov replaced by festival; ~300 seats, tatami, own cushion/chair OK; online ~230 seats from ~10:00 30 days ahead to 17:00 on day, credit card, max 10; ~50-60 same-day from 19:30; check-in 19:00; cancellation 10/50/100%; no pets | https://takachiho-kanko.info/kagura/information/ | 2026-11-07 |
| All 33 dances dusk to dawn; Amano Iwato kagura at spring (early May), autumn (late Sept) festivals and Culture Day 3 Nov | https://www.japan.travel/en/spot/498/ | 2026-11-07 |
| Amano Iwato Shrine: Amaterasu; cave across Iwato River; view with priest; Amano Yasukawara 10-min walk; 10-15 min from centre; bus about once an hour | https://www.japan.travel/en/spot/617/ | 2026-11-07 |
| Not easily reached by public transport | https://www.japan.travel/en/destinations/kyushu/miyazaki/takachiho/ | 2026-11-07 |
| Kumamoto Aso-go/Takachiho-go ~3 h, 1 trip/day, booking required; Asochiho Aso Station ~1 h 50 min, booking; Yamabiko airport-Aso ~50 min; Kyushu Odan ~1 h; Nobeoka local bus ~1 h 30 min; Gokase-go Fukuoka Airport ~3 h 30 min, 4 trips/day, booking | https://takachiho-kanko.info/access/ | 2026-11-07 |
| Asochiho new route from 1 July 2026 (stops listed); reserved passengers priority | https://asocity-kanko.jp/en/information/260601.php | 2026-11-07 |
