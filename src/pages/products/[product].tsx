import * as React from 'react'
import Head from 'next/head'
import {Footer} from '@components/footer/Footer.server'
import {Header} from '@components/header/Header'
import {ProductCarousel} from '@components/carousel/ProductCarousel'
import {ProductOptions} from '@components/ProductOptions'
import {fetchCommonNavigation} from '@api/fetchGlobalConfig'
import {fetchAllProducts} from '@api/fetchProducts'
import {fetchProductBySlug} from '@api/fetchProduct'
import {getNodesFromConnection} from '@helpers/connection.helper'
import {formatAmount} from '@helpers/price.helper'
import * as logger from '@helpers/logger'
import {parseFilters} from '@helpers/scalars.helper'
import type {GetStaticPaths} from 'next'
import type {
  Product,
  ProductOption,
  ProductVariant,
  ProductVariantEdge,
  SelectedOption,
} from '@generated/storefront.types'
import type {
  Footer as FooterType,
  Header as HeaderType,
} from '@generated/cms.types'
import commonStyles from '@styles/common.module.css'

export type PropType = {
  header: HeaderType
  footer: FooterType
  product: Product
}

export default function ProductPage({header, footer, product}: PropType) {
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
        <h1>{product.title}</h1>
        <ProductCarousel product={product} />
        <span>{product.productType}</span>
        <span>{product.descriptionHtml}</span>
        <ProductOptions options={product.options} variants={product.variants} />
      </main>
      <Footer data={footer} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productConnections = await fetchAllProducts()

  const paths = productConnections.edges.map(({node}) => ({
    params: {product: node.handle},
  }))

  return {paths, fallback: false}
}

type StaticProps = {
  params: {product: string}
}
export const getStaticProps = async ({params}: StaticProps) => {
  const [{header, footer}, {product}] = await Promise.all([
    fetchCommonNavigation(),
    fetchProductBySlug({
      handle: params.product,
      numberOfImages: 100,
      numberOfVariants: 25,
    }),
  ])

  return {
    props: {
      header,
      footer,
      product,
    },
  }
}
