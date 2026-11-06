// Editorial reference data (not company data). Every figure here carries a
// source and a checked date, and is listed in FACTS-TO-VERIFY.md.

export const REGIONS = [
  { slug: 'hokkaido', name: 'Hokkaido', ja: '北海道' },
  { slug: 'tohoku', name: 'Tohoku', ja: '東北' },
  { slug: 'kanto', name: 'Kanto and Tokyo', ja: '関東' },
  { slug: 'chubu', name: 'Chubu and the Alps', ja: '中部' },
  { slug: 'kansai', name: 'Kansai and Kyoto', ja: '関西' },
  { slug: 'chugoku', name: 'Chugoku', ja: '中国' },
  { slug: 'shikoku', name: 'Shikoku', ja: '四国' },
  { slug: 'kyushu', name: 'Kyushu', ja: '九州' },
  { slug: 'okinawa', name: 'Okinawa', ja: '沖縄' },
];
export const regionName = (slug) => REGIONS.find((r) => r.slug === slug)?.name ?? slug;

// Ranked lists. `niche: null` = every published operator.
export const NICHES = [
  { slug: 'best-local-operators', ja: '全ての旅行会社', image: 'fuji-blossom', niche: null, title: 'Best local operators in Japan', short: 'All operators', published: '2026-11-02', blurb: 'Every verified or founder-owned operator in the Tourground directory that delivers trips in Japan, in feed rank order.' },
  { slug: 'culture-and-craft', ja: '文化と工芸', image: 'daigoji', niche: 'culture-and-craft', title: 'Best operators in Japan for culture and craft', short: 'Culture and craft', published: '2026-11-02', blurb: 'Operators whose directory record lists culture and craft trips: temples, gardens, workshops and makers.' },
  { slug: 'food-and-sake', ja: '食と酒', image: 'kaiseki', niche: 'food-and-sake', title: 'Best operators in Japan for food and sake', short: 'Food and sake', published: '2026-11-02', blurb: 'Operators whose directory record lists food and sake trips.' },
  { slug: 'hiking', ja: 'ハイキング', image: 'kamikochi', niche: 'hiking', title: 'Best operators in Japan for hiking', short: 'Hiking', published: '2026-11-02', blurb: 'Operators whose directory record lists walking and hiking trips, such as the Kumano Kodo, the Nakasendo and the Japan Alps.' },
  { slug: 'honeymoon', ja: 'ハネムーン', image: 'ryokan-room', niche: 'honeymoon', title: 'Best operators in Japan for honeymoons', short: 'Honeymoon', published: '2026-11-02', blurb: 'Operators whose directory record lists honeymoon trips.' },
  { slug: 'family', ja: '家族旅行', image: 'okinawa', niche: 'family', title: 'Best operators in Japan for family trips', short: 'Family', published: '2026-11-02', blurb: 'Operators whose directory record lists family trips.' },
  { slug: 'winter-and-ski', ja: '冬とスキー', image: 'shirakawago-snow', niche: 'winter-and-ski', title: 'Best operators in Japan for winter and ski', short: 'Winter and ski', published: '2026-11-02', blurb: 'Operators whose directory record lists winter trips: snow country, onsen in winter and skiing.' },
];
export const nicheLabel = (slug) => NICHES.find((n) => n.niche === slug)?.short ?? slug;

const C = '2026-11-02';

export const SOURCES = {
  jmaSakura: { url: 'https://www.data.jma.go.jp/sakura/data/index.html', label: 'Japan Meteorological Agency: seasonal observations (cherry blossom, autumn leaves), normals 1991–2020', accessed: C },
  jmaTokyoSakura: { url: 'https://www.data.jma.go.jp/tokyo/shosai/news/pdf/2023/sakurakaika2023.pdf', label: 'JMA Tokyo Regional Headquarters: Tokyo cherry blossom notice 2023 (normal flowering 24 March)', accessed: C },
  tenkiSakura: { url: 'https://tenki.jp/sakura/english/160.html', label: 'tenki.jp (Japan Weather Association): cherry blossom normal dates by city', accessed: C },
  jmaBaiu: { url: 'https://www.data.jma.go.jp/cpd/baiu/', label: 'Japan Meteorological Agency: rainy season (tsuyu) start and end, normals', accessed: C },
  jnto: { url: 'https://www.japan.travel/en/', label: 'Japan National Tourism Organization (JNTO): official travel guide', accessed: C },
  jntoFestivals: { url: 'https://www.japan.travel/en/see-and-do/festivals-and-events/', label: 'JNTO: festivals and events', accessed: C },
  jrpPrice: { url: 'https://japanrailpass.net/en/purchase/price/', label: 'Japan Rail Pass official site: prices', accessed: C },
  jrpAbout: { url: 'https://japanrailpass.net/en/', label: 'Japan Rail Pass official site: coverage and Nozomi/Mizuho special ticket', accessed: C },
  jrCentral: { url: 'https://global.jr-central.co.jp/en/', label: 'JR Central (Tokaido Shinkansen) English site and timetables', accessed: C },
  jrEast: { url: 'https://www.jreast.co.jp/multi/en/', label: 'JR East English site and timetables', accessed: C },
  jrWest: { url: 'https://www.westjr.co.jp/global/en/', label: 'JR West English site and timetables', accessed: C },
  jrKyushu: { url: 'https://www.jrkyushu.co.jp/english/', label: 'JR Kyushu English site', accessed: C },
  jrHokkaido: { url: 'https://www.jrhokkaido.co.jp/global/', label: 'JR Hokkaido English site', accessed: C },
  jrShikoku: { url: 'https://www.jr-shikoku.co.jp/global/en/', label: 'JR Shikoku English site', accessed: C },
  odakyu: { url: 'https://www.odakyu.jp/english/', label: 'Odakyu Electric Railway (Romancecar) English site', accessed: C },
  tobu: { url: 'https://www.tobu.co.jp/en/access/nikko/', label: 'Tobu Railway: access from Tokyo to Nikko', accessed: C },
  jntoOnsen: { url: 'https://www.japan.travel/en/guide/bathing-manners-and-tips-onsen-bathing-guide/', label: 'JNTO: onsen bathing manners and tips', accessed: C },
  jntoRyokan: { url: 'https://www.japan.travel/en/guide/japanese-ryokan/', label: 'JNTO: Japanese ryokan guide', accessed: C },
  jntoVisa: { url: 'https://www.japan.travel/en/plan/visa-info/', label: 'JNTO: visa information', accessed: C },
  jntoWeather: { url: 'https://www.japan.travel/en/plan/weather/', label: 'JNTO: weather and seasons', accessed: C },
  jntoRailPasses: { url: 'https://www.japan.travel/en/plan/jr-rail-passes/', label: 'JNTO: JR rail passes', accessed: C },
};

// ---------------------------------------------------------------------------
// SEASONS: month x region. Short, general windows only. Exact dates vary
// every year; the guide links to live forecasts. Cells left empty = nothing
// notable we can source.
// ---------------------------------------------------------------------------
export const MONTHS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
].map((slug, i) => ({ slug, n: i + 1, name: slug[0].toUpperCase() + slug.slice(1), short: slug.slice(0, 3).toUpperCase(), ja: `${i + 1}月` }));

// Each entry: [regionSlug, kind, text]. kind: blossom | leaves | snow | festival | weather
export const SEASON_EVENTS = {
  1: [
    ['okinawa', 'blossom', 'Hikan-zakura (early cherry) flowering, from late January'],
    ['hokkaido', 'snow', 'Deep snow; ski season (for example Niseko, Furano)'],
    ['tohoku', 'snow', 'Snow country; heavy snowfall on the Sea of Japan side'],
    ['chubu', 'snow', 'Ski season in the Northern Alps (Hakuba, Nozawa Onsen); Shirakawa-go under snow'],
    ['kanto', 'weather', 'Dry, clear and cold; good visibility of Mount Fuji'],
    ['kansai', 'weather', 'Cold and dry; quiet month for temples outside New Year'],
  ],
  2: [
    ['hokkaido', 'festival', 'Sapporo Snow Festival (early February)'],
    ['hokkaido', 'snow', 'Peak snow; drift ice off the Okhotsk coast (Abashiri, Shiretoko)'],
    ['tohoku', 'snow', 'Snow continues; Zao "snow monsters" (rime-covered trees)'],
    ['chubu', 'snow', 'Ski season; Shirakawa-go winter illuminations on selected evenings'],
    ['okinawa', 'blossom', 'Hikan-zakura continues'],
    ['kansai', 'blossom', 'Plum blossom begins in Kyoto and Nara'],
    ['kyushu', 'blossom', 'Plum blossom (for example Dazaifu)'],
  ],
  3: [
    ['kyushu', 'blossom', 'Cherry blossom opens, from late March'],
    ['shikoku', 'blossom', 'Cherry blossom opens, from late March'],
    ['kansai', 'blossom', 'Cherry blossom opens in late March (Kyoto normal flowering around 26 March)'],
    ['kanto', 'blossom', 'Cherry blossom opens in late March (Tokyo normal flowering 24 March)'],
    ['kansai', 'festival', 'Omizutori at Todai-ji, Nara (1–14 March)'],
    ['hokkaido', 'snow', 'Ski season continues in the mountains'],
    ['chubu', 'snow', 'Spring skiing in the Alps'],
  ],
  4: [
    ['kansai', 'blossom', 'Full bloom in Kyoto, usually early April'],
    ['kanto', 'blossom', 'Full bloom in Tokyo, usually late March to early April'],
    ['chubu', 'blossom', 'Cherry blossom in the highlands (Takayama, Matsumoto), mid to late April'],
    ['tohoku', 'blossom', 'Cherry blossom moves north through Tohoku, mid to late April (Hirosaki)'],
    ['chubu', 'festival', 'Takayama Spring Festival (14–15 April)'],
    ['chubu', 'snow', 'Tateyama Kurobe Alpine Route reopens with its snow corridor (from mid April)'],
  ],
  5: [
    ['hokkaido', 'blossom', 'Cherry blossom in Hokkaido, late April to mid May'],
    ['kansai', 'festival', 'Aoi Matsuri, Kyoto (15 May)'],
    ['kanto', 'festival', 'Sanja Matsuri, Asakusa (third weekend of May); Kanda Matsuri (mid May, main procession in odd-numbered years)'],
    ['okinawa', 'weather', 'Rainy season begins, usually early to mid May'],
    ['kanto', 'weather', 'Golden Week holidays (29 April to 5 May): very busy domestic travel'],
  ],
  6: [
    ['kyushu', 'weather', 'Rainy season (tsuyu), usually from early June'],
    ['shikoku', 'weather', 'Rainy season, usually from early June'],
    ['chugoku', 'weather', 'Rainy season, usually from early June'],
    ['kansai', 'weather', 'Rainy season, usually from early June; hydrangea season'],
    ['kanto', 'weather', 'Rainy season, usually from early June; hydrangea season (Kamakura)'],
    ['tohoku', 'weather', 'Rainy season, usually from mid June'],
    ['okinawa', 'weather', 'Rainy season ends, usually late June'],
    ['hokkaido', 'weather', 'No formal rainy season; early summer'],
  ],
  7: [
    ['kansai', 'festival', 'Gion Matsuri, Kyoto (all July; Yamaboko processions 17 and 24 July)'],
    ['kyushu', 'festival', 'Hakata Gion Yamakasa, Fukuoka (1–15 July)'],
    ['kansai', 'festival', 'Nachi Fire Festival, Kumano (14 July)'],
    ['kanto', 'weather', 'Rainy season usually ends mid to late July; heat and humidity follow'],
    ['chubu', 'weather', 'Alpine hiking season opens; Mount Fuji climbing season (July to early September)'],
    ['hokkaido', 'blossom', 'Lavender in Furano, usually July'],
  ],
  8: [
    ['tohoku', 'festival', 'Aomori Nebuta (2–7 August), Akita Kanto (3–6 August), Sendai Tanabata (6–8 August)'],
    ['shikoku', 'festival', 'Awa Odori, Tokushima (12–15 August); Yosakoi, Kochi (9–12 August)'],
    ['kansai', 'festival', 'Gozan no Okuribi bonfires, Kyoto (16 August)'],
    ['kanto', 'weather', 'Hottest month; Obon holidays mid August are very busy'],
    ['okinawa', 'weather', 'Typhoon season, August to September most active'],
    ['chubu', 'weather', 'High-alpine hiking season'],
  ],
  9: [
    ['hokkaido', 'leaves', 'First autumn colour in Daisetsuzan, from mid September'],
    ['okinawa', 'weather', 'Typhoon season continues'],
    ['kyushu', 'weather', 'Typhoon season; can affect all of western Japan'],
    ['kansai', 'festival', 'Kishiwada Danjiri Matsuri, Osaka (September)'],
  ],
  10: [
    ['hokkaido', 'leaves', 'Autumn leaves in the lowlands and Sapporo, from mid to late October'],
    ['tohoku', 'leaves', 'Autumn leaves in the mountains (Hakkoda, Oirase), mid to late October'],
    ['chubu', 'leaves', 'Autumn leaves in the Alps (Kamikochi, Tateyama), early to late October'],
    ['chubu', 'festival', 'Takayama Autumn Festival (9–10 October)'],
    ['kansai', 'festival', 'Jidai Matsuri and Kurama Fire Festival, Kyoto (22 October)'],
    ['kyushu', 'festival', 'Nagasaki Kunchi (7–9 October)'],
    ['okinawa', 'festival', 'Naha Great Tug-of-War (October)'],
  ],
  11: [
    ['kansai', 'leaves', 'Autumn leaves in Kyoto, mid November to early December'],
    ['kanto', 'leaves', 'Autumn leaves in Nikko (October) and Hakone; Tokyo ginkgo and maples from late November'],
    ['kyushu', 'leaves', 'Autumn leaves, mid to late November'],
    ['shikoku', 'leaves', 'Autumn leaves (Iya Valley), November'],
    ['chugoku', 'leaves', 'Autumn leaves (Miyajima Momijidani), mid to late November'],
    ['hokkaido', 'snow', 'First snow in Sapporo, usually November'],
  ],
  12: [
    ['kanto', 'leaves', 'Last of the autumn colour in Tokyo, early December'],
    ['kanto', 'festival', 'Chichibu Night Festival (2–3 December)'],
    ['hokkaido', 'snow', 'Ski season opens'],
    ['chubu', 'snow', 'Ski season opens in the Alps, usually mid December'],
    ['tohoku', 'snow', 'Snow arrives on the Sea of Japan side'],
    ['kansai', 'weather', 'Cold, dry, quiet; very busy from 29 December to 3 January'],
  ],
};

export const SEASON_SOURCES = [SOURCES.jntoWeather, SOURCES.jmaSakura, SOURCES.jmaTokyoSakura, SOURCES.tenkiSakura, SOURCES.jmaBaiu, SOURCES.jntoFestivals, SOURCES.jnto];

// ---------------------------------------------------------------------------
// RAIL ROUTES. Typical fastest scheduled journey time on the named service.
// pass: yes | special (Nozomi/Mizuho needs the JR Pass special ticket) | partial | no
// ---------------------------------------------------------------------------
export const RAIL_ROUTES = [
  { from: 'Tokyo', to: 'Kyoto', service: 'Tokaido Shinkansen Nozomi', time: '2h15', pass: 'special', alt: 'Hikari about 2h40, covered by the pass', source: 'jrCentral' },
  { from: 'Tokyo', to: 'Shin-Osaka', service: 'Tokaido Shinkansen Nozomi', time: '2h30', pass: 'special', alt: 'Hikari about 2h55, covered', source: 'jrCentral' },
  { from: 'Shin-Osaka', to: 'Hiroshima', service: 'Sanyo Shinkansen Nozomi', time: '1h25', pass: 'special', alt: 'Sakura about 1h30, covered', source: 'jrWest' },
  { from: 'Tokyo', to: 'Hiroshima', service: 'Tokaido/Sanyo Shinkansen Nozomi', time: '3h50', pass: 'special', alt: 'Hikari plus Sakura with a change, covered', source: 'jrWest' },
  { from: 'Shin-Osaka', to: 'Hakata (Fukuoka)', service: 'Sanyo Shinkansen Mizuho/Nozomi', time: '2h25', pass: 'special', alt: 'Sakura about 2h35, covered', source: 'jrWest' },
  { from: 'Hakata (Fukuoka)', to: 'Kagoshima-Chuo', service: 'Kyushu Shinkansen Mizuho', time: '1h20', pass: 'special', alt: 'Sakura slightly slower, covered', source: 'jrKyushu' },
  { from: 'Hiroshima', to: 'Miyajima', service: 'JR Sanyo Line to Miyajimaguchi + JR ferry', time: '0h40', pass: 'yes', alt: 'Train about 27 min, ferry about 10 min', source: 'jrWest' },
  { from: 'Tokyo', to: 'Kanazawa', service: 'Hokuriku Shinkansen Kagayaki', time: '2h30', pass: 'yes', alt: '', source: 'jrEast' },
  { from: 'Kyoto', to: 'Kanazawa', service: 'Thunderbird to Tsuruga + Hokuriku Shinkansen', time: '2h10', pass: 'yes', alt: 'One change at Tsuruga since March 2024', source: 'jrWest' },
  { from: 'Tokyo', to: 'Nagano', service: 'Hokuriku Shinkansen Kagayaki', time: '1h20', pass: 'yes', alt: '', source: 'jrEast' },
  { from: 'Nagoya', to: 'Takayama', service: 'Limited Express Hida', time: '2h20', pass: 'yes', alt: '', source: 'jrCentral' },
  { from: 'Nagoya', to: 'Nakatsugawa (Nakasendo)', service: 'Limited Express Shinano', time: '0h50', pass: 'yes', alt: 'Bus onward to Magome is not JR', source: 'jrCentral' },
  { from: 'Tokyo', to: 'Sendai', service: 'Tohoku Shinkansen Hayabusa', time: '1h30', pass: 'yes', alt: '', source: 'jrEast' },
  { from: 'Tokyo', to: 'Shin-Aomori', service: 'Tohoku Shinkansen Hayabusa', time: '3h00', pass: 'yes', alt: '', source: 'jrEast' },
  { from: 'Tokyo', to: 'Shin-Hakodate-Hokuto', service: 'Tohoku/Hokkaido Shinkansen Hayabusa', time: '4h00', pass: 'yes', alt: '', source: 'jrHokkaido' },
  { from: 'Hakodate', to: 'Sapporo', service: 'Limited Express Hokuto', time: '3h45', pass: 'yes', alt: '', source: 'jrHokkaido' },
  { from: 'Kyoto', to: 'Nara', service: 'JR Nara Line Miyakoji rapid', time: '0h45', pass: 'yes', alt: 'Kintetsu is faster but not covered', source: 'jrWest' },
  { from: 'Kansai Airport', to: 'Kyoto', service: 'Limited Express Haruka', time: '1h15', pass: 'yes', alt: '', source: 'jrWest' },
  { from: 'Narita Airport', to: 'Tokyo', service: "Narita Express (N'EX)", time: '1h00', pass: 'yes', alt: '', source: 'jrEast' },
  { from: 'Shin-Osaka', to: 'Kii-Tanabe (Kumano Kodo)', service: 'Limited Express Kuroshio', time: '2h15', pass: 'yes', alt: 'Bus onward to trailheads is not JR', source: 'jrWest' },
  { from: 'Okayama', to: 'Takamatsu', service: 'Rapid Marine Liner', time: '0h55', pass: 'yes', alt: 'Ferry onward to Naoshima is not JR', source: 'jrShikoku' },
  { from: 'Tokyo (Shinjuku)', to: 'Hakone-Yumoto', service: 'Odakyu Romancecar', time: '1h25', pass: 'no', alt: 'Private railway. JR Shinkansen to Odawara (covered) then Hakone Tozan (not covered)', source: 'odakyu' },
  { from: 'Tokyo', to: 'Nikko', service: 'Tohoku Shinkansen to Utsunomiya + JR Nikko Line', time: '1h50', pass: 'yes', alt: 'Tobu direct train from Asakusa about 1h50, not covered', source: 'jrEast' },
];
export const RAIL_CHECKED = C;

export const PASS_LABEL = {
  yes: 'Covered',
  special: 'Covered with special ticket',
  partial: 'Partly',
  no: 'Not covered',
};
