// JSON-LD builders. Validated after build by scripts/validate-jsonld.mjs.
import { site } from '../config/site.mjs';
import { countryName, KIND_LABEL, TIER_LABEL } from './feed.mjs';
import { regionName } from '../data/reference.mjs';
import { isoDate } from './dates.mjs';

export const abs = (p) => new URL(p, site.url).href.replace(/\/$/, p === '/' ? '/' : '');

export const publisherRef = () => ({
  '@type': 'Organization',
  '@id': `${site.publisher.url}/#organization`,
  name: site.publisher.name,
  url: site.publisher.url,
});

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: `${site.url}/`,
    description: site.positioning,
    inLanguage: site.language,
    publisher: publisherRef(),
  };
}

export function publisherNode() {
  return {
    ...publisherRef(),
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
  };
}

export function breadcrumbNode(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function articleNode({ title, description, path, published, reviewed, sources = [] }) {
  return {
    '@type': 'Article',
    headline: title.slice(0, 110),
    description,
    url: abs(path),
    mainEntityOfPage: abs(path),
    datePublished: isoDate(published),
    dateModified: isoDate(reviewed),
    inLanguage: site.language,
    author: { '@type': 'Organization', name: `${site.name} editorial desk`, url: `${site.url}/about` },
    publisher: { ...publisherRef(), logo: { '@type': 'ImageObject', url: `${site.url}/icon-512.png` } },
    image: `${site.url}/og/default.png`,
    ...(sources.length ? { citation: sources.map((s) => s.url) } : {}),
  };
}

export function destinationNode() {
  return {
    '@type': ['TouristDestination', 'Place'],
    '@id': `${site.url}/guide#destination`,
    name: site.destination.name,
    description:
      'Island country in East Asia. Main regions: Hokkaido, Tohoku, Kanto, Chubu, Kansai, Chugoku, Shikoku, Kyushu and Okinawa.',
    url: `${site.url}/guide`,
    address: { '@type': 'PostalAddress', addressCountry: site.destination.country },
    touristType: ['Culture and craft', 'Food and sake', 'Hiking', 'Honeymoon', 'Family', 'Winter and ski'],
  };
}

export function companyNode(c, path) {
  return {
    '@type': 'TravelAgency',
    '@id': `${abs(path)}#company`,
    name: c.name,
    description: c.summary,
    url: abs(path),
    sameAs: [c.profile_url].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      ...(c.base_city ? { addressLocality: c.base_city } : {}),
      addressCountry: c.country_base,
    },
    areaServed: [
      ...c.delivers_in.map((cc) => ({ '@type': 'Country', name: countryName(cc) })),
      ...(c.regions ?? []).map((r) => ({ '@type': 'AdministrativeArea', name: regionName(r) })),
    ],
    knowsAbout: c.niches,
    additionalType: KIND_LABEL[c.kind],
    ...(c.memberships?.length ? { memberOf: c.memberships.map((m) => ({ '@type': 'Organization', name: m })) } : {}),
    ...(c.founder_owned ? { parentOrganization: { '@type': 'Organization', name: site.founderGroup } } : {}),
    disambiguatingDescription: `Tourground directory tier: ${TIER_LABEL[c.tier]}`,
  };
}

export function itemListNode({ name, path, companies }) {
  return {
    '@type': 'ItemList',
    name,
    url: abs(path),
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: companies.length,
    itemListElement: companies.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: abs(`/operators/${c.id}`),
      name: c.name,
    })),
  };
}

export function faqNode(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}

export function graph(...nodes) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) };
}
