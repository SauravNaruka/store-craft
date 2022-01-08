import {graphql} from 'msw'
import {build, fake} from '@jackfranklin/test-data-bot'
import type {
  NavigationsQuery,
  Navigation,
  NavigationItem,
} from '@generated/cms.types'
import first from 'lodash/first.js'

export const NUMBER_OF_NAVIGATIONITEMS = 3

export const getNavigationsHandler = graphql.query(
  'Navigations',
  (req, res, ctx) => {
    return res(ctx.data(buildNavigationResponse()))
  },
)

export function buildAndGetFirstNaigation() {
  const navigations = buildNavigationResponse()
  return first(navigations.allNavigation) as Navigation
}

const buildNavigationResponse = build<NavigationsQuery>({
  fields: {
    allNavigation: [
      {
        name: fake(f => f.random.words()),
        title: fake(f => f.random.words()),
        subtitle: fake(f => f.random.words()),
        image: {
          caption: fake(f => f.random.word()),
          asset: {
            url: fake(f => f.internet.url()),
          },
        },
        items: [],
      },
    ],
  },
  postBuild: user => {
    user.allNavigation[0].items = Array(NUMBER_OF_NAVIGATIONITEMS)
      .fill(undefined)
      .map(() => buildNavigationItem())
    return user
  },
})

export const buildNavigationItem = build<NavigationItem>({
  fields: {
    title: fake(f => f.random.words()),
    subtitle: fake(f => f.random.words()),
    link: {url: fake(f => f.random.word())},
    image: {
      caption: fake(f => f.random.word()),
      asset: {
        url: fake(f => f.internet.url()),
      },
    },
  },
})
