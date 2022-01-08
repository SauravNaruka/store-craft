import {GraphQLClient} from 'graphql-request'
import {getSdk} from '../../generated/cms.types'

const client = new GraphQLClient(process.env.SANITY_STUDIO_ENDPOINT!, {
  headers: {
    Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN!}`,
  },
})

// export const postToShopify = async (query: string, variables?: unknown) => {
//   return client.request(query, variables)
// }

const cmsClient = getSdk(client)
export default cmsClient
