import {Navigation, ShopifyCollection} from '@generated/cms.types'
import {isShopifyCollection} from './collection.helper'
import {isInternalLink} from './LinkInternal.helper'

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
