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
import {fetchNavigation} from '@api/fetchNavigations'
import {fetchCollection} from '@api/fetchCollection'
import {
  PRODUCT_NAVIGATION,
  HERO_NAVIGATION,
  ROOM_NAVIGATION,
} from '@constants/navigation.constants'
import {FEATURED_PRODUCTS_HANDLE} from '@constants/collection.constants'
import type {Navigation} from '@generated/cms.types'
import type {Collection} from '@generated/storefront.types'
import styles from '@styles/common.module.scss'

type PropType = {
  productNavigation: Navigation
  heroNavigation: Navigation
  roomNavigation: Navigation
  featuredCollection: Collection
}

export default function Home({
  productNavigation,
  heroNavigation,
  roomNavigation,
  featuredCollection,
}: PropType) {
  return (
    <div className={styles.container}>
      <Head>
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
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let productNavigation = await fetchNavigation(PRODUCT_NAVIGATION)
  let heroNavigation = await fetchNavigation(HERO_NAVIGATION)
  let roomNavigation = await fetchNavigation(ROOM_NAVIGATION)

  let featuredCollection = await fetchCollection({
    handle: FEATURED_PRODUCTS_HANDLE,
    numberOfProducts: 10,
    numberOfImages: 1,
  })

  return {
    props: {
      productNavigation,
      heroNavigation,
      roomNavigation,
      featuredCollection,
    },
  }
}
