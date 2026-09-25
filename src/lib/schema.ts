import { siteConfig } from '../config/site';

/**
 * LocalBusiness structured data, rendered on every page. There's no
 * public street address, so the business is described by its town and
 * the areas it serves. No aggregateRating: the testimonials have no
 * star ratings, and Google penalizes self-published ones anyway.
 */
export async function buildRoofingContractor(site: URL) {
  const { serviceArea } = siteConfig;

  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': new URL('/#business', site).href,
    name: siteConfig.name,
    description: siteConfig.seo.defaultDescription,
    url: site.href,
    telephone: siteConfig.phoneHref.replace('tel:', ''),
    email: siteConfig.email,
    image: new URL(siteConfig.seo.ogImage, site).href,
    foundingDate: String(siteConfig.stats.yearFounded),
    address: {
      '@type': 'PostalAddress',
      addressLocality: serviceArea.city,
      addressRegion: serviceArea.province,
      addressCountry: 'CA',
    },
    areaServed: [
      ...serviceArea.towns.map((name) => ({ '@type': 'City', name })),
      { '@type': 'Place', name: serviceArea.region },
    ],
    sameAs: Object.values(siteConfig.social),
  };
}
