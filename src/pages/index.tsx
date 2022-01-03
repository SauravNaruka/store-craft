import * as React from 'react'
import {GetStaticProps} from 'next'
import Head from 'next/head'
import CartIcon from '@components/icons/CartIcon'
import MenuIcon from '@components/icons/MenuIcon'
import IconButton from '@components/IconButton'
import {Header} from '@components/header/Header'
import {SearchInput} from '@components/SearchInput'
import HomeCarousel from '@components/carousel/HomeCarousel'
import {RoomNavigation} from '@components/RoomNavigation'
import {fetchNavigationItems} from '@api/fetchNavigations'
import {ProductNavigation} from '@components/ProductNavigation.server'
import {
  PRODUCT_NAVIGATION,
  HERO_NAVIGATION,
  ROOM_NAVIGATION,
} from '@constants/navigation.constants'
import type {NavigationItem} from '@generated/cms.types'
import styles from '@styles/common.module.scss'

type PropType = {
  productNavigationItems: NavigationItem[]
  heroNavigationItems: NavigationItem[]
  roomNavigationItems: NavigationItem[]
}

export default function Home({
  productNavigationItems,
  heroNavigationItems,
  roomNavigationItems,
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
        <ProductNavigation navigationItems={productNavigationItems} />
        <HomeCarousel navigationItems={heroNavigationItems} />
        <RoomNavigation navigationItems={roomNavigationItems} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let productNavigationItems = await fetchNavigationItems(PRODUCT_NAVIGATION)
  let heroNavigationItems = await fetchNavigationItems(HERO_NAVIGATION)
  let roomNavigationItems = await fetchNavigationItems(ROOM_NAVIGATION)

  return {
    props: {
      productNavigationItems,
      heroNavigationItems,
      roomNavigationItems,
    },
  }
}
