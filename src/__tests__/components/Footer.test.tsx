import {render, screen} from '@testing-library/react'
import first from 'lodash/first'
import {Footer} from '@components/footer/Footer.server'
import {buildFooterResponse} from '../../__mocks__/Footer.mock'
import type {Footer as FooterType} from '@generated/cms.types'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import {isPage} from '@helpers/page.helper'

describe('Footer navigation', () => {
  test('footer with no navigation render footer', () => {
    const footer = buildFooterResponse().Footer as FooterType
    render(<Footer data={{...footer, navigations: [null]}} />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  test('footer has footer tag', () => {
    const footer = buildFooterResponse().Footer as FooterType
    render(<Footer data={footer} />)

    const firstNavigation = first(footer?.navigations)
    const firstNavigationItem = first(firstNavigation?.items)
    const navigationTitle = firstNavigation?.title ?? 'Non Matching Nav title'

    const firstLinkTitle =
      isInternalLink(firstNavigationItem) &&
      isPage(firstNavigationItem.reference) &&
      firstNavigationItem.reference.title
        ? firstNavigationItem.reference.title
        : 'Non Matching link title'

    expect(
      screen.getByRole('heading', {name: new RegExp(navigationTitle)}),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', {name: firstLinkTitle})).toBeInTheDocument()
  })
})
