import {getInternalLinkNavigationData} from '@helpers/LinkInternal.helper'
import {buildLinkInternalPage} from '../../__mocks__/LinkInternal.mock'

describe('Internal Link helper functions: ', () => {
  test('getInternalLinkNavigationData return null when invalid refrence', () => {
    const invalidInternalLink = {...buildLinkInternalPage(), reference: {}}
    const data = getInternalLinkNavigationData(invalidInternalLink)
    expect(data).toBeNull()
  })
})
