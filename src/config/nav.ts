/**
 * Navigation structure for header and footer.
 */

export interface NavLink {
  label: string;
  href: string;
}

/** Primary navigation (desktop header + mobile menu). */
export const mainNav: NavLink[] = [
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
];

/** Extra links shown in the mobile menu. */
export const secondaryNav: NavLink[] = [];

/** Footer "Company" column. */
export const footerCompanyNav: NavLink[] = [
  { label: 'About us', href: '/about/' },
  { label: 'Get a free estimate', href: '/quote/' },
];
