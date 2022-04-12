import {graphql} from 'msw'
import {buildProductShortInfoFields} from './Product.mock'
import {buildImageSmall} from './Image.mock'

export const getProductShortInfoBySearchQueryHandler = graphql.query(
  'ProductsShortInfoBySearchQuery',
  (req, res, ctx) => {
    return res(
      ctx.data({
        collection: {
          ...buildProductShortInfoFields(),
          featuredImage: buildImageSmall(),
        },
      }),
    )
  },
)
