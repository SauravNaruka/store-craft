import {build, fake} from '@jackfranklin/test-data-bot'
import type {LinkInternal, ShopifyCollection, Page} from '@generated/cms.types'

export const buildShopifyCollection = build<ShopifyCollection>({
  fields: {
    title: fake(f => f.random.words()),
    subtitle: fake(f => f.random.words()),
    shopifyId: fake(f => f.random.word()),
  },
})

export const buildPage = build<Page>({
  fields: {
    title: fake(f => f.random.words()),
    slug: {current: fake(f => f.random.word())},
  },
})

export const buildLinkInternalShopifyCollection = build<LinkInternal>({
  fields: {
    reference: buildShopifyCollection(),
  },
})

export const buildLinkInternalPage = build<LinkInternal>({
  fields: {
    reference: buildPage(),
  },
})
