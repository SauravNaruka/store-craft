import {render, screen} from '@testing-library/react'
import first from 'lodash/first'
import {Footer} from '@components/footer/Footer.server'
import {buildFooterResponse} from '../../__mocks__/Footer.mock'
import type {Footer as FooterType} from '@generated/cms.types'

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
    const firstTitle = firstNavigation?.title ?? 'Non Matching title'
    const firstLinkTitle =
      firstNavigation?.items?.[0]?.title ?? 'Non Matching title'
    expect(
      screen.getByRole('heading', {name: new RegExp(firstTitle)}),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', {name: firstLinkTitle})).toBeInTheDocument()
  })
})
