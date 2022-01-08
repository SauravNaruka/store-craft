import * as Logger from '@helpers/logger'

type Connection<NodeType> = {
  edges: CollectionEdge<NodeType>[]
}

type CollectionEdge<NodeType> = {
  node: NodeType
}

export function convertGraphqlConnectionTypeToArray<NodeType>(
  connection: Connection<NodeType>,
): NodeType[] {
  try {
    return connection.edges.map(item => item.node)
  } catch (error) {
    Logger.error(error)
    throw error
  }
}
