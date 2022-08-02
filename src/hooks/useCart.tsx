import * as React from 'react'
import {
  isCart,
  createCart,
  loadCart,
  getNumberOfProductsFromCart,
  getCartInfoFromLocalStorage,
  setCartInfoToLocalStorage,
} from '@helpers/cart.helper'
import type {Cart} from '@generated/storefront.types'
import type {Maybe} from '@LocalTypes/interfaces'

export function useCart() {
  const [cart, setCart] = React.useState<Maybe<Cart>>(null)

  React.useEffect(() => {
    async function getCart() {
      const {id: cartId} = getCartInfoFromLocalStorage()

      if (cartId) {
        const loadedCart: unknown = await loadCart(cartId)
        setCartInStateAndLocalStore(loadedCart)
      } else {
        const newCart: unknown = await createCart()
        setCartInStateAndLocalStore(newCart)
      }
    }

    function setCartInStateAndLocalStore(mayBeCart: unknown) {
      if (isCart(mayBeCart)) {
        const numberOfProducts = getNumberOfProductsFromCart(mayBeCart)
        setCart(mayBeCart)
        setCartInfoToLocalStorage(mayBeCart.id, numberOfProducts)
      }
    }

    getCart()
  }, [])

  return {cart}
}
