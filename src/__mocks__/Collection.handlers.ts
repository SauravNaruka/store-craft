import {graphql} from 'msw'
import {collection, buildCollectionShortInfo} from './Collection.mock'

export const getCollectionHandler = graphql.query(
  'Collection',
  (req, res, ctx) => {
    return res(ctx.data({collection: collection}))
  },
)

export const getCollectionShortInfoHandler = graphql.query(
  'CollectionShortInfo',
  (req, res, ctx) => {
    return res(
      ctx.data({
        collection: buildCollectionShortInfo({
          overrides: {id: req.variables.id},
        }),
      }),
    )
  },
)
