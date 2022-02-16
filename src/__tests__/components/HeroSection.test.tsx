import {render, screen} from '@testing-library/react'
import HeroSection from '@components/HeroSection.server'
import {buildAndGetFirstNaigation} from 'src/__mocks__/Navigations.handlers'

describe('the layout for hero section', () => {
  test('the component reders only one element', () => {
    const navigation = buildAndGetFirstNaigation()
    render(<HeroSection navigation={navigation} />)

    expect(screen.getAllByRole('link').length).toBe(1)
  })
})
