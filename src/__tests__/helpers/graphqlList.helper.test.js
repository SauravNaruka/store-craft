import faker from 'faker'
import {convertGraphqlConnectionTypeToArray} from '../../helpers/graphqlList.helper'

describe('graphQL helper functions', () => {
  test('convertGraphqlConnectionTypeToArray', () => {
    const node = faker.random.words()
    const graph = {
      collections: {
        edges: [{node}],
      },
    }

    const nodes = convertGraphqlConnectionTypeToArray(graph.collections)

    expect(nodes.length).toBe(1)
    expect(nodes[0]).toBe(node)
  })

  test('convertGraphqlConnectionTypeToArray with wrong data', () => {
    const consoleWarnMock = jest.spyOn(console, 'error').mockImplementation()
    const graph = [{node: faker.random.words()}]
    expect(() => {
      convertGraphqlConnectionTypeToArray(graph)
    }).toThrow()
    consoleWarnMock.mockRestore()
  })
})
