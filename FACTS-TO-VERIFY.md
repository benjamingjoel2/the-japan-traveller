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
