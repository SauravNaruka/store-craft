import type {Footer as FooterType} from '@generated/cms.types'
import {WEB_STORE_DOMAIN} from '@constants/navigation.constants'

export function getOrganizationJsonLd({footer}: {footer: FooterType}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Natural Living Jaipur',
    alternateName: 'Crafty Wing',
    url: `${WEB_STORE_DOMAIN}`,
    logo: `${WEB_STORE_DOMAIN}//favicon.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: footer.phone,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'Hindi'],
    },
    sameAs: [
      footer.social?.facebook ?? '',
      footer.social?.instagram ?? '',
      footer.social?.pinterest ?? '',
      footer.social?.twitter ?? '',
    ],
  }

  return getJsonLdString(jsonLd)
}

export function getWebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: 'Crafty Wing',
    url: `${WEB_STORE_DOMAIN}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${WEB_STORE_DOMAIN}//search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return getJsonLdString(jsonLd)
}

export function getBreadCrumbJsonLd(items: {name: string; slug: string}[]) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${WEB_STORE_DOMAIN}\\${item.slug}`,
    })),
  }

  return getJsonLdString(jsonLd)
}

function getJsonLdString(jsonLd: Record<string, unknown>) {
  return {
    __html: JSON.stringify(jsonLd),
  }
}
