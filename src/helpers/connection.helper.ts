import type {Connection} from '../types/interfaces'

type Options = {
  numberOfElements?: number
}

export function getFirstNodeFromConnection<Node>(
  connection: Connection<Node>,
): Node | null {
  const nodes = getNodesFromConnection<Node>(connection, {numberOfElements: 1})
  if (nodes.length > 0) {
    return nodes[0]
  }

  return null
}

export function getNodesFromConnection<Node>(
  connection: Connection<Node>,
  {numberOfElements}: Options = {},
): Node[] {
  const edges = connection?.edges?.length ? connection.edges : []

  if (!numberOfElements) {
    return edges.map(({node}) => node)
  } else {
    return edges
      .filter((_, index) => index < numberOfElements)
      .map(({node}) => node)
  }
}
