import type {Footer as FooterType} from '@generated/cms.types'

type OrganizationJSONLDProp = {
  footer: FooterType
}

export function getOrganizationJsonLd({footer}: OrganizationJSONLDProp) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Natural Living Jaipur',
    alternateName: 'Crafty Wing',
    url: 'https://www.CraftyWing.com/',
    logo: 'https://www.dev.craftylive.com/favicon.png',
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
    url: 'https://www.craftywing.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.craftywing.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return getJsonLdString(jsonLd)
}

function getJsonLdString(jsonLd: Record<string, unknown>) {
  return {
    __html: JSON.stringify(jsonLd),
  }
}
