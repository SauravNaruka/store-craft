import * as React from 'react'
import Head from 'next/head'
import {Footer} from '@components/footer/Footer.server'
import {Header} from '@components/header/Header'
import Image from '@components/Image'
import {fetchCommonNavigation} from '@api/fetchGlobalConfig'
import {getNodesFromConnection} from '@helpers/connection.helper'
import {formatAmount} from '@helpers/price.helper'
import * as logger from '@helpers/logger'
import {parseFilters} from '@helpers/scalars.helper'
import type {GetStaticPaths} from 'next'
import type {Product} from '@generated/storefront.types'
import type {
  Footer as FooterType,
  Header as HeaderType,
} from '@generated/cms.types'
import commonStyles from '@styles/common.module.css'
import {fetchAllProducts} from '@api/fetchProducts'
import {fetchProductBySlug} from '@api/fetchProduct'
import Carousel, {
  CarouselAspectRatio,
  CarouselSliderType,
} from '@components/carousel/Carousel'
import {isValidImageType} from '@helpers/image.helper'

export type PropType = {
  header: HeaderType
  footer: FooterType
  product: Product
}

export default function CollectionPage({header, footer, product}: PropType) {
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
        <Carousel
          id="productCarousel_child"
          autoplay={false}
          sliderType={CarouselSliderType.RESPONSIVE}
          aspectRatio={CarouselAspectRatio.IMAGE}
          className={'md:mr-auto w-full md:w-1/2'}
          ariaLabel="Slides for more product images"
        >
          {product.images.edges
            .map((imageNode, index) => {
              const image = isValidImageType(imageNode.node)
                ? imageNode.node
                : null
              if (image) {
                return (
                  <Image
                    key={imageNode.node.id ?? index}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                    sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 20vw"
                    unoptimized={false}
                    priority={index === 0 ? true : false}
                    alt={image.altText}
                    image={image}
                    aspectRatio={{width: 4, height: 3}}
                  />
                )
              }
            })
            .filter(Boolean)}
        </Carousel>
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
      numberOfImages: 7,
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
