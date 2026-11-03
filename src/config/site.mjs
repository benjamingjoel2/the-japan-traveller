// =============================================================================
// THE ONE CONFIG FILE
// Name, domain, editor line, accent colour, address, links and ALL disclosure /
// paid-label / legal wording live here, so editors and lawyers change one file.
// Legal sign-off (US, UK, EU, Brazil) is required before launch: see README.
// =============================================================================

export const site = {
  name: 'The Japan Traveller',
  // Short descriptor used under the name and in <title> of the home page
  tagline: 'The reference for planning Japan with a local operator',
  positioning:
    'The reference for planning Japan with a local operator: regions, seasons, rail, ryokan etiquette and which verified operators deliver which kind of trip.',
  domain: 'thejapantraveller.tourground.com',
  url: 'https://thejapantraveller.tourground.com',
  language: 'en',
  locale: 'en_GB',
  // Destination this booster covers. Must match a destinations[].slug in the feed
  // and the ISO country code used in companies[].rank and delivers_in[].
  destination: { slug: 'japan', name: 'Japan', country: 'JP' },

  email: 'thejapantraveller@tourground.com',

  editorLine: 'Edited by the Tourground Japan publishing desk.',

  // Colour tokens. The accent (vermilion) is used for rank numbers ONLY.
  colors: {
    accent: '#b8321b', // on washi background (contrast checked >= 4.5:1)
    accentOnDark: '#ff7a5c', // on the dark departure board (contrast checked >= 4.5:1)
  },

  // Business address. PLACEHOLDER until the founders confirm the publishing
  // desk's coworking space. Listed in FACTS-TO-VERIFY.md.
  address: {
    placeholder: true,
    lines: ['Marunouchi Nijubashi Building', '3-2-3 Marunouchi, Chiyoda-ku', 'Tokyo 100-0005', 'Japan'],
    streetAddress: 'Marunouchi Nijubashi Building, 3-2-3 Marunouchi',
    locality: 'Chiyoda-ku, Tokyo',
    postalCode: '100-0005',
    country: 'JP',
  },

  publisher: {
    name: 'Tourground',
    // Legal entity name: TO CONFIRM before launch (FACTS-TO-VERIFY.md)
    legalName: 'Tourground',
    url: 'https://tourground.com',
  },

  // Use the published contact email until the main-site correction flow is available.
  correctionsUrl: 'mailto:thejapantraveller@tourground.com?subject=Correction%20or%20removal%20request%20%E2%80%94%20The%20Japan%20Traveller',

  // Founder-owned brand group label
  founderGroup: 'Tourground Geotrax',

  // Analytics: Vercel Web Analytics only (cookieless). No other tracking.
  analytics: { vercel: true },

  // Image credits. The site currently ships no photographs. Every image added
  // must be owned or licensed and listed here (Unsplash allowed, no credit line
  // shown on the site, but record it here for our files).
  images: [
    {
      file: '/og/default.png',
      credit: 'Generated in-house from the site typography. Owned by Tourground.',
      licence: 'Owned',
    },
  ],

  // Date the legal pages were last updated (not legal approval or sign-off).
  legalLastUpdated: '2026-11-02',
};

// =============================================================================
// DISCLOSURE AND PAID-LABEL WORDING (lawyer-editable)
// =============================================================================
export const disclosure = {
  footerPublishedBy: 'Published by Tourground.',
  footerShort:
    'An independent reference published by Tourground. Rankings are based on merit and are never paid for.',
  founderOwnedLabel: 'Founder-owned (Tourground Geotrax)',
  founderOwnedExplainer:
    'Founder-owned means the brand belongs to Tourground Geotrax, a company owned by Tourground’s founders. It is ranked by exactly the same rules as every other company and receives no adjustment to its rank.',
  advertisementLabel: 'Advertisement feature',
  advertisementExplainer:
    'This is a paid placement. It is shown separately from our rankings and does not affect any rank on this site.',
  adSlotEmpty: 'No advertisement is booked for this space.',
  rankingStatement:
    'Rank is merit, never paid. Every rank on this site is taken directly from the rank field of the Tourground directory export. We do not reorder it, and no company can pay to change it.',
  verifiedOnlyStatement:
    'We list only companies the Tourground directory marks as verified, plus Tourground’s founder-owned brands, which are labelled as such.',
  sponsoredLinkNote:
    'Links to a company’s own website appear only for Platinum members and are marked as sponsored. All other companies link to their Tourground profile.',
  correctionLinkText: 'Request a correction or removal',
  publisherDisclosure: [
    'The Japan Traveller is published by Tourground. Tourground operates a directory and booking platform for travel companies, and earns money when travellers book through it and from paid memberships held by travel companies.',
    'Some companies on this site may hold a paid Tourground membership. Membership tiers (Verified, Black, Platinum) are shown on each company page. A paid membership never changes a company’s rank on this site.',
    'Tourground’s founders also own Tourground Geotrax, which operates travel brands. Where one of those brands appears on this site it is labelled “Founder-owned (Tourground Geotrax)” every time. For Japan, that brand is Komorebi.',
    'Paid placements, when they exist, are labelled “Advertisement feature”, shown at the top of a page, visually separate from the editorial content, and never mixed into a ranking.',
    'Links to company websites from Platinum members carry rel="sponsored nofollow". All other company links point to the company’s Tourground profile.',
  ],
};

// Legal page headings and the contact wording used inside them
export const legal = {
  privacyContact: 'thejapantraveller@tourground.com',
  governingLawNote:
    'These terms are governed by the laws named below, without prejudice to any mandatory consumer protection rights you have in the country where you live.',
  // TO CONFIRM by counsel before launch
  governingLaw: 'the laws of England and Wales',
};
