import {graphql} from 'msw'
import {collection} from './Collection.mock'

export const getCollectionHandler = graphql.query(
  'Collection',
  (req, res, ctx) => {
    return res(ctx.data({collection: collection}))
  },
)
