/**
 * ============================================================
 * DM Roofing & Siding — site configuration (single source of truth)
 * ============================================================
 * This file is the ONE place to change your company information.
 * Every page, the header, the footer, the contact page, and the
 * structured data (JSON-LD) read from here.
 */

export type ThemeName = 'maroon-gold' | 'blue-amber';

export interface TrustBadge {
  /** Icon name from src/components/common/Icon.astro */
  icon: string;
  /** Short label, e.g. "Fully Insured" */
  label: string;
}

export const siteConfig = {
  /* ----------------------------------------------------------
   * Company identity
   * -------------------------------------------------------- */
  name: 'DM Roofing & Siding',
  /** Wordmark shown next to the DM logo mark in the header/footer. */
  logoText: 'Roofing & Siding',
  /** Short brand name used in running copy ("Why DM", "call DM"). */
  shortName: 'DM',
  tagline: 'Windows, doors, and exteriors in Niagara',

  /* ----------------------------------------------------------
   * Contact (keep identical everywhere for local SEO)
   * -------------------------------------------------------- */
  phone: '905-341-9090',
  /** tel: link version of the phone number (digits only). */
  phoneHref: 'tel:+19053419090',
  email: 'dmroofingsiding@gmail.com',

  /* ----------------------------------------------------------
   * Service area (no public street address)
   * -------------------------------------------------------- */
  serviceArea: {
    city: 'Niagara Falls',
    province: 'ON',
    region: 'Niagara Peninsula',
    /** Towns named in copy and structured data. */
    towns: ['Niagara Falls', 'St. Catharines'],
  },

  /* ----------------------------------------------------------
   * Availability
   * -------------------------------------------------------- */
  availability: 'Year-round service',
  emergencyNote: 'Emergency service available.',

  /* ----------------------------------------------------------
   * Social profiles (used in footer + JSON-LD sameAs)
   * -------------------------------------------------------- */
  social: {
    facebook: 'https://www.facebook.com/DM-roofing-siding-801417083281078/',
  },

  /** Google Business Profile "write a review" link (from "Ask for reviews"). */
  googleReviewUrl: 'https://g.page/r/CdQcH1i-4HE1EAI/review',

  /* ----------------------------------------------------------
   * Lead form backend (Web3Forms)
   * ----------------------------------------------------------
   * Get a free access key at https://web3forms.com by entering the
   * email address that should receive leads. Set it as
   * PUBLIC_WEB3FORMS_KEY in .env locally and as a GitHub Actions
   * secret for deploys. It can only send mail to that address.
   * -------------------------------------------------------- */
  web3formsAccessKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',

  /* ----------------------------------------------------------
   * Address autocomplete (Geoapify)
   * ----------------------------------------------------------
   * Free key at https://myprojects.geoapify.com (3,000 lookups/day).
   * Set it as PUBLIC_GEOAPIFY_KEY, same as the Web3Forms key. It ends
   * up in the page, so in the Geoapify dashboard restrict it to your
   * domain. Without a key the address field is a normal text box.
   * -------------------------------------------------------- */
  geoapifyKey: import.meta.env.PUBLIC_GEOAPIFY_KEY ?? '',

  /* ----------------------------------------------------------
   * Trust badges (strip under the hero + footer)
   * -------------------------------------------------------- */
  trustBadges: [
    { icon: 'home', label: 'Locally Owned & Operated' },
    { icon: 'shield-check', label: 'Fully Insured' },
    { icon: 'clipboard-check', label: '10-Year Workmanship Guarantee' },
    { icon: 'file-text', label: 'Free Estimates' },
    { icon: 'zap', label: 'Emergency Service' },
  ] satisfies TrustBadge[],

  /* ----------------------------------------------------------
   * Stats
   * -------------------------------------------------------- */
  stats: {
    yearFounded: 2004,
    warrantyYears: 10,
  },

  /* ----------------------------------------------------------
   * Default SEO
   * -------------------------------------------------------- */
  seo: {
    siteName: 'DM Roofing & Siding',
    defaultTitle: 'DM Roofing & Siding | Windows, Doors & Exteriors in Niagara Falls',
    defaultDescription:
      'Windows, doors, siding, soffit, fascia, eavestroughs, and gutter guard in Niagara Falls, St. Catharines, and area. Locally owned, fully insured, in business since 2004. Call 905-341-9090 for a free estimate.',
    /** Path to the default Open Graph image (in /public). */
    ogImage: '/og-default.jpg',
  },

  /* ----------------------------------------------------------
   * Theme — 'maroon-gold' (DM brand colors) or 'blue-amber'
   * -------------------------------------------------------- */
  theme: 'maroon-gold' as ThemeName,
} as const;

export type SiteConfig = typeof siteConfig;
