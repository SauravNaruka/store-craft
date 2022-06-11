import * as React from 'react'
import {useRouter} from 'next/router'
import type {
  ProductVariantConnection,
  ProductVariant,
} from '@generated/storefront.types'

type ParsedUrlQuery = NodeJS.Dict<string | string[]>

export function useVariantSelector(
  variantConnection: ProductVariantConnection,
) {
  const [variant, setVariant] = React.useState<ProductVariant>(
    getDefaultVariant(variantConnection),
  )

  const router = useRouter()
  const searchedQuery = router?.query

  React.useEffect(() => {
    if (searchedQuery) {
      const variant = getVariantByQueryParameter(
        variantConnection,
        searchedQuery,
      )
      setVariant(variant)
    }
  }, [searchedQuery, variantConnection])

  return variant
}

export function getVariantByQueryParameter(
  variantConnection: ProductVariantConnection,
  query: ParsedUrlQuery,
): ProductVariant {
  const edges = variantConnection.edges
  const numberOfEdges = edges.length

  for (let index = 0; index < numberOfEdges; index++) {
    const node = edges[index].node
    if (isVariantHasQueryOptions(node, query)) {
      return node
    }
  }

  return getDefaultVariant(variantConnection)
}

function isVariantHasQueryOptions(
  {selectedOptions}: ProductVariant,
  query: ParsedUrlQuery,
): boolean {
  const numberOfOptions = selectedOptions.length

  for (let index = 0; index < numberOfOptions; index++) {
    const selectedOption = selectedOptions[index]
    const queryValue = query[selectedOption.name]

    if (queryValue !== selectedOption.value) {
      return false
    }
  }

  return true
}

function getDefaultVariant(variantConnection: ProductVariantConnection) {
  const firstEdge = variantConnection.edges[0]
  return firstEdge.node
}
