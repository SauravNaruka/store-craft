import {build, fake} from '@jackfranklin/test-data-bot'
import {
  buildLinkInternalShopifyCollection,
  buildLinkInternalPage,
} from './LinkInternal.mock'
import type {NavigationsQuery, Navigation} from '@generated/cms.types'

export const NUMBER_OF_NAVIGATIONITEMS = 3

export const buildNavigation = build<Navigation>({
  fields: {
    name: fake(f => f.random.words()),
    title: fake(f => f.random.words()),
    link: buildLinkInternalShopifyCollection(),
    items: [],
  },
  postBuild: navigation => {
    navigation.items = Array(NUMBER_OF_NAVIGATIONITEMS)
      .fill(undefined)
      .map(index => {
        if (index % 2) {
          return buildLinkInternalShopifyCollection()
        } else {
          return buildLinkInternalPage()
        }
      })
    return navigation
  },
})

export const buildAllNavigation = build<NavigationsQuery>({
  fields: {
    allNavigation: [buildNavigation()],
  },
})
