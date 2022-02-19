import {getPageNavigationalData, isPage} from '@helpers/page.helper'
import {buildPage} from '../../__mocks__/Page.mock'

describe('The working of page helpers: ', () => {
  test('isPage return expected result', () => {
    expect(isPage()).toBeFalsy()
    expect(isPage(buildPage())).toBeTruthy()
  })

  test('getPageNavigationalData return expected data', () => {
    const page = buildPage()
    const data = getPageNavigationalData(page)

    expect(data?.title).toEqual(page.title)
    expect(data?.slug).toEqual(page.slug?.current)
  })

  test('getPageNavigationalData handle partial data ', () => {
    const page = {...buildPage(), title: null}
    const data = getPageNavigationalData(page)

    expect(data).toBeNull()
  })
})
