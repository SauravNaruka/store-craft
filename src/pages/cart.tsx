import * as React from 'react'
import Head from 'next/head'
import {Header} from '@components/header/Header'
import {Footer} from '@components/footer/Footer.server'
import {useCart} from '@hooks/useCart'
import {fetchCommonNavigation} from '@api/fetchGlobalConfig'
import type {
  Footer as FooterType,
  Header as HeaderType,
} from '@generated/cms.types'

import cardStyles from '@styles/card.module.css'
import commonStyles from '@styles/common.module.css'

export type PropType = {
  header: HeaderType
  footer: FooterType
}

export default function Cart({header, footer}: PropType) {
  const {cart} = useCart()
  return (
    <div className={commonStyles.container}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Crafty Wing</title>
        <meta
          name="description"
          content="Luxury Wood Furniture Online. Buy Hardwood furniture Online or from store near you in Jaipur. Get Sheesham furniture for the homes of your dream."
        />
      </Head>
      <Header header={header} />
      <main className={commonStyles.main}></main>
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
