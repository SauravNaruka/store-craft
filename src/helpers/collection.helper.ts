import {isValidImageType} from './image.helper'
import {CollectionsByID, NavigationalData, Maybe} from '@LocalTypes/interfaces'
import {LinkInternal, ShopifyCollection} from '@generated/cms.types'

export function isShopifyCollection(
  object?: unknown,
): object is ShopifyCollection {
  return (object as ShopifyCollection)?.__typename === 'ShopifyCollection'
}

export function getShopifyCollectionNavigationalData(
  link: LinkInternal,
  shopifyCollection: ShopifyCollection,
  collectionsByID?: CollectionsByID,
): NavigationalData {
  if (!shopifyCollection.title || !shopifyCollection.handle) {
    throw new Error(
      `Missing critical data for navigation for ${shopifyCollection?.shopifyId}`,
    )
  }
  return {
    title: shopifyCollection.title,
    subtitle: link.title ?? undefined,
    slug: shopifyCollection.handle,
    image: getShopifyCollectionImage(
      shopifyCollection.shopifyId,
      collectionsByID,
    ),
  }
}

export function getShopifyCollectionImage(
  shopifyId?: Maybe<string>,
  collectionsByID?: CollectionsByID,
) {
  if (shopifyId && collectionsByID) {
    const collection = collectionsByID[shopifyId]
    return isValidImageType(collection.image) ? collection.image : null
  }

  return null
}
