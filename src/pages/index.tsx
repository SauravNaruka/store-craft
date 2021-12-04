import React from 'react'
import {GetStaticProps} from 'next'
import Head from 'next/head'
import {Header} from '@components/header/Header'
import {IconButton} from '@components/IconButton'
import {SearchInput} from '@components/SearchInput'
import {MenuIconPath, CartIconPath} from '@components/IconPaths'
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
          <MenuIconPath />
        </IconButton>
        <SearchInput />
        <IconButton name={'Shopping Cart'}>
          <CartIconPath />
        </IconButton>
      </Header>

      <main className={styles.main}>
        <ProductNavigation navigationItems={navigationItems} />
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
