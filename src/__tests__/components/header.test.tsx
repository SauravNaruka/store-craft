import {render, screen} from '@testing-library/react'
import faker from 'faker'
import Header from 'src/components/header/Header'
import {Header as HeaderType} from '@generated/cms.types'
import {buildHeaderResponse} from '../../__mocks__/header.mock'

describe('Header', () => {
  test('render of the header tag', () => {
    const {Header: headerResponse} = buildHeaderResponse()

    render(
      <Header
        isMenuVisible={false}
        header={headerResponse as HeaderType}
        onMenuToggleClick={() => {
          console.log('Toggle function')
        }}
      />,
    )

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
