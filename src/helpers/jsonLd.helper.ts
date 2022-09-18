import * as logger from '@helpers/logger'
import type {Footer as FooterType} from '@generated/cms.types'
import {WEB_STORE_DOMAIN} from '@constants/navigation.constants'
import {MoneyV2, Image} from '@generated/storefront.types'
import {Maybe} from '@LocalTypes/interfaces'

export function getOrganizationJsonLd({footer}: {footer: FooterType}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Natural Living Jaipur',
    alternateName: 'Crafty Wing',
    url: `${WEB_STORE_DOMAIN}`,
    logo: `${WEB_STORE_DOMAIN}/favicon.png`,
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
      target: `${WEB_STORE_DOMAIN}/search?q={search_term_string}`,
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
      item: `${WEB_STORE_DOMAIN}/${item.slug}`,
    })),
  }

  return getJsonLdString(jsonLd)
}

export function getProductJsonLd(item: {
  title: string
  description: string
  sku: Maybe<string>
  imageURL: Maybe<Image>
  slug: string
  price: MoneyV2
}) {
  if (!item.imageURL?.url || item.sku) {
    const error = new Error(
      `Missing information for the product variant ${item.title}. Image url is ${item.imageURL?.url} & SKU is ${item.sku}`,
    )
    logger.error(error)
  }

  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: item.title,
    image: item.imageURL?.url ?? '',
    description: item.description,
    brand: {
      '@type': 'Brand',
      name: 'Natural Living Jaipur',
    },
    sku: item.sku ?? '',
    offers: {
      '@type': 'Offer',
      url: `${WEB_STORE_DOMAIN}/${item.slug}`,
      priceCurrency: item.price.currencyCode,
      price: item.price.amount,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
    // TODO: Add actual rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '1',
    },
  }

  return getJsonLdString(jsonLd)
}
function getJsonLdString(jsonLd: Record<string, unknown>) {
  return {
    __html: JSON.stringify(jsonLd),
  }
}
