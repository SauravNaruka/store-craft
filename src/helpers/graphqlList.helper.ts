import * as Logger from '@helpers/logger'
type GraphQLNode = {
  node: unknown
}

type GraphList = {
  collections: {
    edges: GraphQLNode[]
  }
}

export function convertGraphQLListToList(graphList: GraphList): unknown[] {
  try {
    return graphList.collections.edges.map((item: GraphQLNode) => item.node)
  } catch (error) {
    Logger.error(error)
    throw error
  }
}
