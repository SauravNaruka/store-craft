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
import {fetchNavigationById} from '@api/fetchNavigations'
import {ProductNavigation} from '@components/ProductNavigation.server'
import {
  PRODUCT_NAVIGATION,
  HERO_NAVIGATION,
  ROOM_NAVIGATION,
} from '@constants/navigation.constants'
import type {Navigation} from '@generated/cms.types'
import styles from '@styles/common.module.scss'

type PropType = {
  productNavigation: Navigation
  heroNavigation: Navigation
  roomNavigation: Navigation
}

export default function Home({
  productNavigation,
  heroNavigation,
  roomNavigation,
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
        <HomeCarousel navigation={heroNavigation} />
        <RoomNavigation navigation={roomNavigation} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let productNavigation = await fetchNavigationById(PRODUCT_NAVIGATION)
  let heroNavigation = await fetchNavigationById(HERO_NAVIGATION)
  let roomNavigation = await fetchNavigationById(ROOM_NAVIGATION)

  return {
    props: {
      productNavigation,
      heroNavigation,
      roomNavigation,
    },
  }
}
