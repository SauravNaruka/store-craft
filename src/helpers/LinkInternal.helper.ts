import {
  isShopifyCollection,
  getShopifyCollectionNavigationalData,
} from './collection.helper'
import {isPage, getPageNavigationalData} from './page.helper'
import {CollectionsByID, NavigationalData} from '@LocalTypes/interfaces'
import {LinkInternal} from '@generated/cms.types'

export function isInternalLink(object?: unknown): object is LinkInternal {
  return (object as LinkInternal)?.__typename === 'LinkInternal'
}

export function getInternalLinkNavigationData(
  link: LinkInternal | unknown,
  collectionsByID?: CollectionsByID,
): NavigationalData | null {
  if (!isInternalLink(link)) {
    return null
  }

  if (isShopifyCollection(link.reference)) {
    return getShopifyCollectionNavigationalData(
      link,
      link.reference,
      collectionsByID,
    )
  } else if (isPage(link.reference)) {
    return getPageNavigationalData(link.reference)
  }

  // TODO: Implement other internal link type

  return null
}
