import {graphql} from 'msw'
import {build, fake} from '@jackfranklin/test-data-bot'

const buildCollectionsResponse = build({
  fields: {
    title: fake(f => f.random.words),
  },
})

export const getCollectionsHandler = graphql.query(
  'Collections',
  (req, res, ctx) => {
    return res(
      ctx.data({
        collections: {
          edges: [{node: buildCollectionsResponse}],
        },
      }),
    )
  },
)
