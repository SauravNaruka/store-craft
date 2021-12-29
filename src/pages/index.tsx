import * as React from 'react'
import {GetStaticProps} from 'next'
import Head from 'next/head'
import {Header} from '@components/header/Header'
import {SearchInput} from '@components/SearchInput'
import CartIcon from '@components/icons/CartIcon'
import MenuIcon from '@components/icons/MenuIcon'
import HomeCarousel from '@components/carousel/HomeCarousel'
import IconButton from '@components/IconButton'
import {fetchNavigationItems} from '@api/fetchNavigations'
import {ProductNavigation} from '@components/ProductNavigation.server'

import type {NavigationItem} from '@generated/cms.types'
import styles from '@styles/common.module.scss'

type PropType = {
  navigationItems: NavigationItem[]
}

export default function Home({navigationItems}: PropType) {
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
        <ProductNavigation navigationItems={navigationItems} />
        <HomeCarousel navigationItems={navigationItems} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let navigationItems = await fetchNavigationItems()

  return {
    props: {
      navigationItems,
    },
  }
}
