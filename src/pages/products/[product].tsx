import * as React from 'react'
import Head from 'next/head'
import {Footer} from '@components/footer/Footer.server'
import {Header} from '@components/header/Header'
import {ProductPageDetails} from '@components/product/ProductPageDetails'
import {fetchCommonNavigation} from '@api/fetchGlobalConfig'
import {fetchAllProducts} from '@api/fetchProducts'
import {fetchProductBySlug} from '@api/fetchProduct'
import type {GetStaticPaths} from 'next'
import type {Product} from '@generated/storefront.types'
import type {
  Footer as FooterType,
  Header as HeaderType,
} from '@generated/cms.types'
import commonStyles from '@styles/common.module.css'
import {getProductJsonLd, getWebsiteJsonLd} from '@helpers/jsonLd.helper'
import {useVariantSelector} from '@hooks/useVariantSelector'

export type PropType = {
  header: HeaderType
  footer: FooterType
  product: Product
  slug: string
}

export default function ProductPage({header, footer, product, slug}: PropType) {
  const variant = useVariantSelector(product.variants)

  return (
    <div className={commonStyles.container}>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getWebsiteJsonLd()}
          key="website-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getProductJsonLd({
            title: `${product.title} ${variant.title}`,
            description: product.description,
            sku: variant.sku,
            imageURL: variant.image,
            slug: slug,
            price: variant.priceV2,
          })}
          key="product-jsonld"
        />
      </Head>
      <Header header={header} />
      <main className={commonStyles.main}>
        <ProductPageDetails product={product} variant={variant} slug={slug} />
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
      slug: params.product,
    },
  }
}
