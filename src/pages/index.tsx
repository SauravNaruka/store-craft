import * as React from 'react'
import Head from 'next/head'
import {Header} from '@components/header/Header'
import {Footer} from '@components/footer/Footer.server'
import HeroSection from '@components/HeroSection.server'
import FeaturedProducts from '@components/FeaturedProducts.server'
import {RoomNavigation} from '@components/RoomNavigation'
import {ItemCollectionsNavigation} from '@components/ItemCollectionsNavigation.server'
import {fetchCommonNavigation} from '@api/fetchGlobalConfig'
import {fetchNavigationAndRelatedCollectionBySlug} from '@api/fetchNavigations'
import {fetchCollectionWithProductsBySlug} from '@api/fetchCollection'
import {
  PRODUCT_NAVIGATION,
  HERO_NAVIGATION,
  ROOM_NAVIGATION,
} from '@constants/navigation.constants'
import {FEATURED_PRODUCTS_HANDLE} from '@constants/collection.constants'
import type {NavigationAndCollectionsByID} from '@LocalTypes/interfaces'
import type {Collection} from '@generated/storefront.types'
import type {
  Footer as FooterType,
  Header as HeaderType,
} from '@generated/cms.types'
import styles from '@styles/common.module.css'
import {getOrganizationJsonLd, getWebsiteJsonLd} from '@helpers/jsonLd.helper'

export type PropType = {
  productNavigationAndCollectionsByID: NavigationAndCollectionsByID
  heroNavigationAndCollectionsByID: NavigationAndCollectionsByID
  roomNavigationAndCollectionsByID: NavigationAndCollectionsByID
  featuredCollection: Collection
  header: HeaderType
  footer: FooterType
}

export default function Home({
  productNavigationAndCollectionsByID,
  heroNavigationAndCollectionsByID,
  roomNavigationAndCollectionsByID,
  featuredCollection,
  header,
  footer,
}: PropType) {
  return (
    <>
      <Head>
        <meta name="robots" content="INDEX,FOLLOW" />
        <title>
          Furniture store: Buy best wooden furniture for home in Jaipur India |
          CraftyWing
        </title>
        <meta
          name="description"
          content="Top furniture store in Jaipur. Luxuries Hardwood furniture. Exclusive Sheesham wood furniture. Quality Solid wood furniture for Bedroom, Dining Room and Living Room | CraftyWing Jaipur."
        />
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
      </Head>
      <Header header={header} />
      <main className={styles.main}>
        <ItemCollectionsNavigation
          navigation={productNavigationAndCollectionsByID.navigation}
          collectionsByID={productNavigationAndCollectionsByID.collectionsByID}
        />
        <HeroSection
          navigation={heroNavigationAndCollectionsByID.navigation}
          collectionsByID={heroNavigationAndCollectionsByID.collectionsByID}
        />
        <FeaturedProducts collection={featuredCollection} />

        <RoomNavigation
          navigation={roomNavigationAndCollectionsByID.navigation}
          collectionsByID={roomNavigationAndCollectionsByID.collectionsByID}
        />
      </main>
      <Footer data={footer} />
    </>
  )
}

export const getStaticProps = async () => {
  const [
    productNavigationAndCollectionsByID,
    heroNavigationAndCollectionsByID,
    roomNavigationAndCollectionsByID,
    featuredCollection,
    {header, footer},
  ] = await Promise.all([
    fetchNavigationAndRelatedCollectionBySlug({slug: PRODUCT_NAVIGATION}),
    fetchNavigationAndRelatedCollectionBySlug({slug: HERO_NAVIGATION}),
    fetchNavigationAndRelatedCollectionBySlug({slug: ROOM_NAVIGATION}),
    fetchCollectionWithProductsBySlug({
      handle: FEATURED_PRODUCTS_HANDLE,
      numberOfProducts: 10,
    }),
    fetchCommonNavigation(),
  ])

  return {
    props: {
      productNavigationAndCollectionsByID,
      heroNavigationAndCollectionsByID,
      roomNavigationAndCollectionsByID,
      featuredCollection,
      header,
      footer,
    },
  }
}
