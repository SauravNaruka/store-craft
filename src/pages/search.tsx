import * as React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {Header} from '@components/header/Header'
import {Footer} from '@components/footer/Footer.server'
import {fetchCommonNavigation} from '@api/fetchGlobalConfig'
import type {
  Footer as FooterType,
  Header as HeaderType,
} from '@generated/cms.types'
import styles from '@styles/common.module.css'

export type PropType = {
  header: HeaderType
  footer: FooterType
}

export default function Search({header, footer}: PropType) {
  // const {query} = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Crafty Wing</title>
        <meta
          name="description"
          content="Luxury Wood Furniture Online. Buy Hardwood furniture Online or from store near you in Jaipur. Get Sheesham furniture for the homes of your dream."
        />
      </Head>
      <Header header={header} />
      <main className={styles.main}>{}</main>
      <Footer data={footer} />
    </div>
  )
}

export const getStaticProps = async () => {
  const {header, footer} = await fetchCommonNavigation()

  return {
    props: {
      header,
      footer,
    },
  }
}
