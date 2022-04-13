import * as React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {Header} from '@components/header/Header'
import {Footer} from '@components/footer/Footer.server'
import ProductsMap from '@components/Products'
import {restClient} from '@api/clientRest'
import {fetchAllCollections} from '@api/fetchCollections'
import {fetchCollectionBySlug} from '@api/fetchCollection'
import {fetchCommonNavigation} from '@api/fetchGlobalConfig'
import * as logger from '@helpers/logger'
import type {GetStaticPaths} from 'next'
import type {
  Footer as FooterType,
  Header as HeaderType,
} from '@generated/cms.types'
import type {Product} from '@generated/storefront.types'
import styles from '@styles/common.module.css'
import {getNodesFromConnection} from '@helpers/connection.helper'
import {Card} from '@components/Card.server'
import {formatAmount} from '@helpers/price.helper'
import commonStyles from '@styles/common.module.css'
import cardStyles from '@styles/card.module.css'
import navigationStyles from '@styles/navigation.module.css'

const style = {
  rootClass: `${cardStyles.glassmorphicCard} ${commonStyles.backgroundGlassmorphic} ${commonStyles.shadowSmallLightSpread}`,
  imageClass: `${cardStyles.glassmorphicImage} ${navigationStyles.productNavigationImage}`,
  linkTextClass: `${cardStyles.glassmorphicLink} ${navigationStyles.textLeft}`,
}

export type PropType = {
  header: HeaderType
  footer: FooterType
  products: Product[]
}

export default function CollectionPage({header, footer, products}: PropType) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crafty Wing</title>
        <meta
          name="description"
          content="Luxury Wood Furniture Online. Buy Hardwood furniture Online or from store near you in Jaipur. Get Sheesham furniture for the homes of your dream."
        />
      </Head>
      <Header header={header} />
      <main className={styles.main}>
        <ProductsMap products={products}>
          {({
            title,
            // subtitle,
            slug,
            currencyCode,
            amount,
            originalAmount,
            image,
            index,
          }) =>
            image && (
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
                link={slug}
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
      </main>
      <Footer data={footer} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const collectionConnections = await fetchAllCollections()

  const paths = collectionConnections.edges.map(({node}) => ({
    params: {collection: node.handle},
  }))

  return {paths, fallback: false}
}

type StaticProps = {
  params: {collection: string}
}
export const getStaticProps = async ({params}: StaticProps) => {
  const [{header, footer}, collection] = await Promise.all([
    fetchCommonNavigation(),
    fetchCollectionBySlug({
      handle: params.collection,
      numberOfProducts: 25,
      numberOfImages: 0,
    }),
  ])
  const products = getNodesFromConnection<Product>(collection.products)

  return {
    props: {
      header,
      footer,
      products,
    },
  }
}

// async function search(query: string): Promise<Maybe<ProductConnection>> {
//   try {
//     const {products} = await restClient(
//       `/.netlify/functions/search?query=${encodeURIComponent(query)}`,
//     )
//     if (isProductConnection(products)) {
//       return products
//     } else {
//       throw new Error(`Unknown result from quick search for query ${query}`)
//     }
//   } catch (error) {
//     logger.error(error)
//   }
// }
