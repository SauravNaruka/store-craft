import {gql} from 'graphql-request'
import {postToShopify} from '@helpers/ShopifyPost.helper'
import {convertGraphQLListToList} from '@helpers/graphqlList.helper'

const query = gql`
  query Collections {
    collections(first: 11) {
      edges {
        node {
          title
        }
      }
    }
  }
`

export function fetchCollections() {
  return postToShopify(query).then(convertGraphQLListToList)
}
