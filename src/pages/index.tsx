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
        {/* <meta name="robots" content="INDEX,FOLLOW" /> */}
        {/*  TODO: Remove noindex meta tag */}
        <meta name="robots" content="noindex" />
        <title>Crafty Wing</title>
        <meta
          name="description"
          content="Luxury Wood Furniture Online. Buy Hardwood furniture Online or from store near you in Jaipur. Get Sheesham furniture for the homes of your dream."
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
