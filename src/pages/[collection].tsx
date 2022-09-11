import * as React from 'react'
import Head from 'next/head'
import {Card} from '@components/Card.server'
import {Footer} from '@components/footer/Footer.server'
import Filters from '@components/filters/Filters'
import {Header} from '@components/header/Header'
import ProductsMap from '@components/ProductsMap'
import {restClient} from '@api/clientRest'
import {fetchAllCollections} from '@api/fetchCollections'
import {fetchCollectionWithProductFiltersBySlug} from '@api/fetchCollection'
import {fetchCommonNavigation} from '@api/fetchGlobalConfig'
import {isCollection} from '@helpers/collection.helper'
import {getNodesFromConnection} from '@helpers/connection.helper'
import {Maybe} from '@LocalTypes/interfaces'
import {formatAmount} from '@helpers/price.helper'
import * as logger from '@helpers/logger'
import {parseFilters} from '@helpers/scalars.helper'
import type {GetStaticPaths} from 'next'
import type {Filter, Product} from '@generated/storefront.types'
import type {
  Footer as FooterType,
  Header as HeaderType,
} from '@generated/cms.types'
import cardStyles from '@styles/card.module.css'
import commonStyles from '@styles/common.module.css'
import navigationStyles from '@styles/navigation.module.css'
import {
  getBreadCrumbJsonLd,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
} from '@helpers/jsonLd.helper'

const style = {
  rootClass: `${cardStyles.glassmorphicCard} ${commonStyles.backgroundGlassmorphic} ${commonStyles.shadowSmallLightSpread}`,
  imageClass: `${cardStyles.glassmorphicImage} ${navigationStyles.productNavigationImage}`,
  linkTextClass: `${cardStyles.glassmorphicLink} ${navigationStyles.textLeft}`,
}

export type PropType = {
  header: HeaderType
  footer: FooterType
  title: string
  description: string
  slug: string
  products: Product[]
  filters: Filter[]
}

export default function CollectionPage({
  header,
  footer,
  title: pageTitle,
  description,
  slug,
  products: initialProducts,
  filters,
}: PropType) {
  const [products, setProducts] = React.useState(initialProducts)

  const search = React.useCallback(
    async (filterString: string) => {
      const filteredProducts = await searchCollection(slug, filterString)
      filteredProducts && setProducts(filteredProducts)
    },
    [slug],
  )

  return (
    <div className={commonStyles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getOrganizationJsonLd({footer})}
          key="organization-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getWebsiteJsonLd()}
          key="website-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getBreadCrumbJsonLd([
            {name: 'home', slug: '/'},
            {name: pageTitle, slug},
          ])}
          key="website-jsonld"
        />
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>

      <Header header={header} />
      <main className={commonStyles.main}>
        <Filters filters={filters} search={search} />

        <p>{pageTitle}</p>
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
    fetchCollectionWithProductFiltersBySlug({
      handle: params.collection,
      numberOfProducts: 25,
    }),
  ])
  const title = collection.title
  const description = collection.description
  const products = getNodesFromConnection<Product>(collection.products)
  const filters = parseFilters(collection.products.filters)

  return {
    props: {
      header,
      footer,
      title,
      description,
      slug: params.collection,
      products,
      filters,
    },
  }
}

async function searchCollection(
  slug: string,
  filterString: string,
): Promise<Maybe<Product[]>> {
  try {
    const collection: unknown = await restClient(
      `/api/searchCollection?collection=${encodeURIComponent(
        slug,
      )}&filter=${encodeURIComponent(filterString)}`,
    )

    if (isCollection(collection)) {
      const products = getNodesFromConnection<Product>(collection.products)
      return products
    } else {
      throw new Error(
        `Unknown result from quick search for filter ${filterString}`,
      )
    }
  } catch (error) {
    logger.error(error)
  }
}
