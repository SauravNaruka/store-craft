import {LOCAL_STORAGE_CART_KEY} from '@constants/cart.constants'
import type {
  Cart,
  CartCreateMutation,
  CartLinesAddPayload,
  GetCartQuery,
} from '@generated/storefront.types'
import {Maybe} from '@LocalTypes/interfaces'

export function isCart(object?: unknown): object is Cart {
  return (object as Cart)?.__typename === 'Cart'
}

export async function addToCart(variantId: string) {
  const {id: cartId} = getCartInfoFromLocalStorage()

  if (!cartId) {
    // TODO: handle error
    console.error('missing cartId')
    return
  }

  const result = await fetch(`/api/add-to-cart?cartId=${cartId}`, {
    method: 'POST',
    body: JSON.stringify({cartId, variantId}),
  })

  if (!result.ok) {
    // TODO: handle following two cases
    //  1. Error as cart id is not valid
    //  2. Any other error
    console.error('there was error while adding to cart')
  } else if (result?.body) {
    const cartLinesAddPayload =
      (await result.json()) as Maybe<CartLinesAddPayload>

    if (cartLinesAddPayload) {
      const numberOfProducts = getNumberOfProductsFromCart(
        cartLinesAddPayload.cart,
      )
      setCartInfoToLocalStorage(cartId, numberOfProducts)
    }
  }
}

export function getNumberOfProductsFromCart(cart: Maybe<Cart>): number {
  let quantity = 0

  if (cart) {
    cart?.lines?.edges?.forEach(({node}) => {
      quantity += node.quantity
    })
  }

  return quantity
}

export function getCartInfoFromLocalStorage(): {
  id?: string
  numberOfProducts: number
} {
  const localStorageCart =
    window.localStorage.getItem(LOCAL_STORAGE_CART_KEY) || '{}'
  const cartInfo = JSON.parse(localStorageCart)

  const numberOfProducts = parseInt(cartInfo?.numberOfProducts ?? 0)

  return {id: cartInfo?.id, numberOfProducts}
}

export function setCartInfoToLocalStorage(id: string, numberOfProducts = 0) {
  window.localStorage.setItem(
    LOCAL_STORAGE_CART_KEY,
    JSON.stringify({id, numberOfProducts}),
  )
}

export async function createCart(): Promise<unknown> {
  return fetch('/api/create-cart')
    .then(res => res.json() as CartCreateMutation)
    .then(cartCreateMutation => cartCreateMutation?.cartCreate?.cart)
}

export async function loadCart(cartId: string): Promise<unknown> {
  return fetch(`/api/load-cart?cartId=${cartId}`)
    .then(res => res.json() as GetCartQuery)
    .then(cartQuery => cartQuery.cart)
}
