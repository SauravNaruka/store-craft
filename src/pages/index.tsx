import React from 'react'
import {InferGetStaticPropsType, GetStaticProps} from 'next'
import Head from 'next/head'
import {Header} from '@components/header/Header'
import {IconButton} from '@components/IconButton'
import {SearchInput} from '@components/SearchInput'
import {MenuIconPath, CartIconPath} from '@components/IconPaths'
import {fetchCollections} from '@api/fetchCollections'
import {HStack} from '@components/HStack.server'
import {Card} from '@components/Card.server'
import type {Collection} from '@helpers/storefrontTypes'
import styles from '@styles/common.module.scss'

export default function Home({
  collections,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
        <HStack>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </HStack>
        <ul>
          {/* {collections.map((collection: Collection, index: number) => {
            return <li key={collection.title + index}>{collection.title}</li>
          })} */}
        </ul>
        {/* <h1 className={styles.title}>Coming Soon.</h1> */}
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // let collections: Collection[] = await fetchCollections()
  let collections: Collection[] = []

  return {
    props: {
      collections,
    },
  }
}
