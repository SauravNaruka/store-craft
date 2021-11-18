import React from 'react'
import {render, screen} from '@testing-library/react'
import App from '../pages/_app'

describe('Root app component', () => {
  test('root component redring custom component', () => {
    const titleText = 'This will be the test component'
    function MyTestComponent({title = ''} = {}) {
      return <div>{title}</div>
    }
    render(<App Component={MyTestComponent} pageProps={{title: titleText}} />)
    expect(screen.getByText(titleText)).toBeInTheDocument()
  })
})
