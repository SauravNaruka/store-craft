import {graphql} from 'msw'
import {build, fake} from '@jackfranklin/test-data-bot'
import type {NavigationsQuery} from '@generated/cms.types'

const buildNavigationResponse = build<NavigationsQuery>({
  fields: {
    allNavigation: [
      {
        name: fake(f => f.random.words()),
        items: [
          {
            title: fake(f => f.random.words()),
            link: {url: fake(f => f.random.word())},
            image: {
              caption: fake(f => f.random.word()),
              asset: {
                url: fake(f => f.internet.url()),
              },
            },
          },
        ],
      },
    ],
  },
})

export const getNavigationsHandler = graphql.query(
  'Navigations',
  (req, res, ctx) => {
    return res(ctx.data(buildNavigationResponse()))
  },
)
