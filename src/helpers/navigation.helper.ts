import {isShopifyCollection} from './collection.helper'
import {isInternalLink} from './LinkInternal.helper'
import type {
  Navigation,
  NavigationProduct,
  ShopifyCollection,
} from '@generated/cms.types'

export function getFirstShopifyCollection(
  navigation: Navigation,
): ShopifyCollection | undefined {
  let shopifyCollection
  navigation.items?.every(item => {
    if (isInternalLink(item) && isShopifyCollection(item.reference)) {
      shopifyCollection = item.reference
      return false
    }
  })

  return shopifyCollection
}

export function isNavigation(object?: unknown): object is Navigation {
  return (object as Navigation)?.__typename === 'Navigation'
}

export function isNavigationProduct(
  object?: unknown,
): object is NavigationProduct {
  return (object as NavigationProduct)?.__typename === 'NavigationProduct'
}
