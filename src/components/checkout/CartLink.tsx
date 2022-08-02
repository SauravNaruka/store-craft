import * as React from 'react'
import CartIcon from '@components/icons/CartIcon'
import {InternalLink} from '@components/microUI/InternalLink'
import {useInterval} from '@hooks/useInterval'
import {getCartInfoFromLocalStorage} from '@helpers/cart.helper'

export function CartLink() {
  const [count, setCount] = React.useState(0)

  useInterval(() => {
    const {numberOfProducts} = getCartInfoFromLocalStorage()
    if (numberOfProducts != count) {
      setCount(numberOfProducts)
    }
  }, 30000)

  return (
    <InternalLink href="/cart">
      {count > 0 && <span>{count}</span>}
      <CartIcon name={'Shopping Cart'} />
    </InternalLink>
  )
}
