import {buildPage} from './Page.mock'
import {buildShopifyCollection} from './ShopifyCollection.mock'
import type {LinkInternal} from '@generated/cms.types'

export function buildLinkInternalShopifyCollection(): LinkInternal {
  return {
    __typename: 'LinkInternal',
    reference: buildShopifyCollection(),
  }
}

export function buildLinkInternalPage(): LinkInternal {
  return {
    __typename: 'LinkInternal',
    reference: buildPage(),
  }
}
