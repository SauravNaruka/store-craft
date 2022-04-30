import {isValidImageType} from './image.helper'
import {CollectionsByID, NavigationalData, Maybe} from '@LocalTypes/interfaces'
import {LinkInternal, ShopifyCollection} from '@generated/cms.types'
import {Collection, CollectionConnection} from '@generated/storefront.types'

export function isShopifyCollection(
  object?: unknown,
): object is ShopifyCollection {
  return (object as ShopifyCollection)?.__typename === 'ShopifyCollection'
}

export function isCollectionConnection(
  object?: unknown,
): object is CollectionConnection {
  return (object as CollectionConnection)?.__typename === 'CollectionConnection'
}

export function isCollection(object?: unknown): object is Collection {
  return (object as Collection)?.__typename === 'Collection'
}

export function getShopifyCollectionNavigationalData(
  _link: LinkInternal,
  shopifyCollection: ShopifyCollection,
  collectionsByID?: CollectionsByID,
): NavigationalData | null {
  if (!shopifyCollection.title || !shopifyCollection.handle) {
    return null
  }
  return {
    title: shopifyCollection.title,
    subtitle: shopifyCollection.subtitle ?? undefined,
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
    return isValidImageType(collection?.image) ? collection.image : null
  }

  return null
}
