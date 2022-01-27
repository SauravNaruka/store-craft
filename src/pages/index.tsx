import * as React from 'react'
import {GetStaticProps} from 'next'
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
import {fetchNavigation} from '@api/fetchNavigations'
import {fetchCollection} from '@api/fetchCollection'
import {fetchGlobalConfig} from '@api/fetchGlobalConfig'
import {fetchFooterNavigation} from '@api/fetchFooter'
import {
  PRODUCT_NAVIGATION,
  HERO_NAVIGATION,
  ROOM_NAVIGATION,
} from '@constants/navigation.constants'
import {FEATURED_PRODUCTS_HANDLE} from '@constants/collection.constants'
import type {Navigation} from '@generated/cms.types'
import type {Collection} from '@generated/storefront.types'
import styles from '@styles/common.module.css'

type PropType = {
  productNavigation: Navigation
  heroNavigation: Navigation
  roomNavigation: Navigation
  footerNavigations: Navigation[]
  featuredCollection: Collection
}

export default function Home({
  productNavigation,
  heroNavigation,
  roomNavigation,
  footerNavigations,
  featuredCollection,
}: PropType) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="robots" content="INDEX,FOLLOW" />
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
        <ProductNavigation navigation={productNavigation} />
        <HeroSection navigation={heroNavigation} />
        <FeaturedProducts collection={featuredCollection} />
        <RoomNavigation navigation={roomNavigation} />
      </main>
      <Footer navigations={footerNavigations} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const globalConfig = await fetchGlobalConfig()
  const theme = getTheme(globalConfig)
  const footerID = getFooterID(theme)

  const [
    productNavigation,
    heroNavigation,
    roomNavigation,
    footerNavigations,
    featuredCollection,
  ] = await Promise.all([
    fetchNavigation(PRODUCT_NAVIGATION),
    fetchNavigation(HERO_NAVIGATION),
    fetchNavigation(ROOM_NAVIGATION),
    fetchFooterNavigation({id: footerID}),
    fetchCollection({
      handle: FEATURED_PRODUCTS_HANDLE,
      numberOfProducts: 10,
      numberOfImages: 1,
    }),
  ])

  return {
    props: {
      productNavigation,
      heroNavigation,
      roomNavigation,
      footerNavigations,
      featuredCollection,
    },
  }
}
