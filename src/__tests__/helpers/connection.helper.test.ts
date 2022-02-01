import faker from 'faker'
import {
  getNodesFromConnection,
  getFirstNodeFromConnection,
} from '../../helpers/connection.helper'
import {aPageInfo} from 'generated/storefront.types'

describe('Connection helper functions', () => {
  test('getNodesFromConnection return expected node', () => {
    const cursor: string = faker.random.word()
    const node1: string = faker.random.words()
    const node2: string = faker.random.words()

    const collection = {
      edges: [
        {
          cursor,
          node: node1,
        },
        {
          cursor,
          node: node2,
        },
      ],
      pageInfo: aPageInfo(),
    }

    expect(getNodesFromConnection<string>(collection)?.length).toBe(2)
    expect(getNodesFromConnection<string>(collection)?.[1]).toBe(node2)
    expect(
      getNodesFromConnection<string>(collection, {
        numberOfElements: 1,
      })?.[0],
    ).toBe(node1)
    expect(
      getNodesFromConnection<string>(collection, {
        numberOfElements: 5,
      })?.length,
    ).toBe(2)
  })

  test('getNodesFromConnection return empty array when no node', () => {
    const collection = {
      edges: [],
      pageInfo: aPageInfo(),
    }
    expect(getNodesFromConnection<string>(collection).length).toBe(0)
  })

  test('getFirstNodeFromConnection return empty array when no node', () => {
    const cursor: string = faker.random.word()
    const node1: string = faker.random.words()
    const node2: string = faker.random.words()
    const collection = {
      edges: [
        {
          cursor,
          node: node1,
        },
        {
          cursor,
          node: node2,
        },
      ],
      pageInfo: aPageInfo(),
    }
    expect(getFirstNodeFromConnection<string>(collection)).toBe(node1)
    expect(
      getFirstNodeFromConnection<string>({edges: [], pageInfo: aPageInfo()}),
    ).toBeNull()
  })
})
