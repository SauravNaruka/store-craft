import React from 'react'
import type {NextPage} from 'next'
import Head from 'next/head'
import {Header} from '@/components/header/Header'
import {IconButton} from '@/components/IconButton'
import {SearchInput} from '@/components/SearchInput'
import {MenuIconPath, CartIconPath} from '@/components/IconPaths'
import styles from 'styles/common.module.scss'

const Home: NextPage = () => {
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
        <h1 className={styles.title}>Coming Soon.</h1>
      </main>
    </div>
  )
}

export default Home
