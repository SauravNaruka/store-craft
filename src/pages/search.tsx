import * as React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import isArray from 'lodash/isArray'
import {Card} from '@components/Card.server'
import {getNodesFromConnection} from '@helpers/connection.helper'
import {Header} from '@components/header/Header'
import ProductsMap from '@components/ProductsMap'
import {Footer} from '@components/footer/Footer.server'
import {restClient} from '@api/clientRest'
import {fetchCommonNavigation} from '@api/fetchGlobalConfig'
import * as logger from '@helpers/logger'

import {Maybe} from '@LocalTypes/interfaces'
import {Product} from '@generated/storefront.types'
import type {
  Footer as FooterType,
  Header as HeaderType,
} from '@generated/cms.types'
import {isProductConnection} from '@helpers/product.helper'

import cardStyles from '@styles/card.module.css'
import commonStyles from '@styles/common.module.css'
import navigationStyles from '@styles/navigation.module.css'
import {formatAmount} from '@helpers/price.helper'

export type PropType = {
  header: HeaderType
  footer: FooterType
}

const style = {
  rootClass: `${cardStyles.glassmorphicCard} ${commonStyles.backgroundGlassmorphic} ${commonStyles.shadowSmallLightSpread}`,
  imageClass: `${cardStyles.glassmorphicImage} ${navigationStyles.productNavigationImage}`,
  linkTextClass: `${cardStyles.glassmorphicLink} ${navigationStyles.textLeft}`,
}

export default function Search({header, footer}: PropType) {
  const [products, setProducts] = React.useState<Maybe<Product[]>>()
  const router = useRouter()
  const searchedQuery = router?.query?.q

  React.useEffect(() => {
    async function handleSearch() {
      if (searchedQuery) {
        const response = await search(searchedQuery)
        setProducts(response)
      }
    }
    handleSearch()
  }, [searchedQuery])

  return (
    <div className={commonStyles.container}>
      <Head>
        <title>Crafty Wing</title>
        <meta
          name="description"
          content="Luxury Wood Furniture Online. Buy Hardwood furniture Online or from store near you in Jaipur. Get Sheesham furniture for the homes of your dream."
        />
      </Head>
      <Header header={header} />
      <main className={commonStyles.main}>
        {searchedQuery}
        {products && (
          <ProductsMap products={products}>
            {({
              title,
              slug: productSlug,
              currencyCode,
              amount,
              originalAmount,
              image,
              index,
            }) =>
              image &&
              amount &&
              originalAmount && (
                <Card
                  key={title + index}
                  title={title}
                  subtitle={
                    <div className={navigationStyles.navigationalPrice}>
                      <span>{formatAmount(amount, currencyCode)}</span>
                      {originalAmount && (
                        <del>{formatAmount(originalAmount, currencyCode)}</del>
                      )}
                    </div>
                  }
                  link={productSlug}
                  width={96}
                  height={72}
                  image={image}
                  aspectRatio={{width: 4, height: 3}}
                  style={style}
                  role="listitem"
                />
              )
            }
          </ProductsMap>
        )}
      </main>
      <Footer data={footer} />
    </div>
  )
}

export const getStaticProps = async () => {
  const {header, footer} = await fetchCommonNavigation()

  return {
    props: {
      header,
      footer,
    },
  }
}

async function search(query: string | string[]): Promise<Maybe<Product[]>> {
  try {
    const searchedQuery = isArray(query) ? query.join(' ') : query
    const {products: productsConnection} = await restClient(
      `/.netlify/functions/searchProducts?query=${encodeURIComponent(
        searchedQuery,
      )}`,
    )
    if (isProductConnection(productsConnection)) {
      const products = getNodesFromConnection<Product>(productsConnection)
      return products
    } else {
      throw new Error(
        `Unknown result from quick search for query ${searchedQuery}`,
      )
    }
  } catch (error) {
    logger.error(error)
  }
}
