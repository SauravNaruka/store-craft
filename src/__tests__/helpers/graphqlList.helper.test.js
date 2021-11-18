import faker from 'faker'
import {convertGraphQLListToList} from '../../helpers/graphqlList.helper'

describe('graphQL helper functions', () => {
  test('convertGraphQLListToList', () => {
    const node = faker.random.words()
    const graph = {
      collections: {
        edges: [{node}],
      },
    }

    const nodes = convertGraphQLListToList(graph)

    expect(nodes.length).toBe(1)
    expect(nodes[0]).toBe(node)
  })

  test('convertGraphQLListToList with wrong data', () => {
    const consoleWarnMock = jest.spyOn(console, 'error').mockImplementation()
    const graph = [{node: faker.random.words()}]
    expect(() => {
      convertGraphQLListToList(graph)
    }).toThrow()
    consoleWarnMock.mockRestore()
  })
})
