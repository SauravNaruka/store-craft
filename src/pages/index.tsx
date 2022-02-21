import * as React from 'react'
import Head from 'next/head'
import CartIcon from '@components/icons/CartIcon'
import MenuIcon from '@components/icons/MenuIcon'
import IconButton from '@components/IconButton'
import {Header} from '@components/header/Header'
import {SearchInput} from '@components/SearchInput'
import HeroSection from '@components/HeroSection.server'
import FeaturedProducts from '@components/FeaturedProducts.server'
import {RoomNavigation} from '@components/RoomNavigation'
import {ProductNavigation} from '@components/ProductNavigation.server'
import {Footer} from '@components/footer/Footer.server'
import {getFooterID, getTheme} from '@helpers/globalConfig.helper'
import {fetchNavigationAndRelatedCollectionBySlug} from '@api/fetchNavigations'
import {fetchCollectionBySlug} from '@api/fetchCollection'
import {fetchGlobalConfig} from '@api/fetchGlobalConfig'
import {fetchFooter} from '@api/fetchFooter'
import {
  PRODUCT_NAVIGATION,
  HERO_NAVIGATION,
  ROOM_NAVIGATION,
} from '@constants/navigation.constants'
import {FEATURED_PRODUCTS_HANDLE} from '@constants/collection.constants'
import type {NavigationAndCollectionsByID} from '@LocalTypes/interfaces'
import type {Footer as FooterType} from '@generated/cms.types'
import type {Collection} from '@generated/storefront.types'
import styles from '@styles/common.module.css'

export type PropType = {
  productNavigationAndCollectionsByID: NavigationAndCollectionsByID
  heroNavigationAndCollectionsByID: NavigationAndCollectionsByID
  roomNavigationAndCollectionsByID: NavigationAndCollectionsByID
  footer: FooterType
  featuredCollection: Collection
}

export default function Home({
  productNavigationAndCollectionsByID,
  heroNavigationAndCollectionsByID,
  roomNavigationAndCollectionsByID,
  footer,
  featuredCollection,
}: PropType) {
  return (
    <div className={styles.container}>
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

      <Header>
        <IconButton name={'Menu'}>
          <MenuIcon />
        </IconButton>
        <SearchInput />
        <CartIcon name={'Shopping Cart'} />
      </Header>

      <main className={styles.main}>
        <ProductNavigation
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
    </div>
  )
}

export const getStaticProps = async () => {
  const globalConfig = await fetchGlobalConfig()
  const theme = getTheme(globalConfig)
  const footerID = getFooterID(theme)

  const [
    productNavigationAndCollectionsByID,
    heroNavigationAndCollectionsByID,
    roomNavigationAndCollectionsByID,
    footer,
    featuredCollection,
  ] = await Promise.all([
    fetchNavigationAndRelatedCollectionBySlug({slug: PRODUCT_NAVIGATION}),
    fetchNavigationAndRelatedCollectionBySlug({slug: HERO_NAVIGATION}),
    fetchNavigationAndRelatedCollectionBySlug({slug: ROOM_NAVIGATION}),
    fetchFooter({id: footerID}),
    fetchCollectionBySlug({
      handle: FEATURED_PRODUCTS_HANDLE,
      numberOfProducts: 10,
      numberOfImages: 1,
    }),
  ])

  return {
    props: {
      productNavigationAndCollectionsByID,
      heroNavigationAndCollectionsByID,
      roomNavigationAndCollectionsByID,
      footer,
      featuredCollection,
    },
  }
}
