import {render, screen} from '@testing-library/react'
import first from 'lodash/first.js'
import faker from 'faker'
import {ProductNavigation} from '../../components/ProductNavigation.server'
import {buildAndGetFirstNaigation} from '../../__mocks__/Navigations.handlers'
import type {Navigation, NavigationItem} from '../../../generated/cms.types'

describe('product navigations tests', () => {
  test('navigation to have links', () => {
    const navigation: Navigation = buildAndGetFirstNaigation()

    render(<ProductNavigation navigation={navigation} />)
    const firstNavigationItem = first(navigation.items) as NavigationItem
    expect(
      screen.getByRole('link', {
        name: firstNavigationItem.title!,
      }),
    ).toBeInTheDocument()
  })

  test('navigation item dont render without a valid link', () => {
    const navigation = {
      items: [
        {
          title: 'Some Title',
          link: undefined,
          image: undefined,
        },
      ],
    }
    render(<ProductNavigation navigation={navigation} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  test('navigation item render with a valid link but partial data', async () => {
    const navigation = {
      items: [
        {
          title: 'Some Title',
          link: {url: '/some-url'},
          image: {asset: {url: faker.internet.url()}, caption: 'some text'},
        },
        {
          title: undefined,
          link: {url: '/some-url2'},
          image: {asset: {url: faker.internet.url()}, caption: 'some text'},
        },
      ],
    }
    render(<ProductNavigation navigation={navigation} />)

    expect(screen.queryByRole('link', {name: 'Some Title'})).toBeInTheDocument()
    const links = await screen.findAllByRole('link')
    expect(links).toHaveLength(1)
  })
})
