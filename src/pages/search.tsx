import * as React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {Header} from '@components/header/Header'
import {Footer} from '@components/footer/Footer.server'
import {restClient} from '@api/clientRest'
import {fetchCommonNavigation} from '@api/fetchGlobalConfig'
import * as logger from '@helpers/logger'
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
  const router = useRouter()
  const searchedQuery = router.query.q

  // React.useEffect(() => {
  //   searchedQuery()
  // }, [searchedQuery])

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
      <main className={styles.main}>{router.query.q}</main>
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

// async function search(query: string): Promise<Maybe<ProductConnection>> {
//   try {
//     const {products} = await restClient(
//       `/.netlify/functions/search?query=${encodeURIComponent(query)}`,
//     )
//     if (isProductConnection(products)) {
//       return products
//     } else {
//       throw new Error(`Unknown result from quick search for query ${query}`)
//     }
//   } catch (error) {
//     logger.error(error)
//   }
// }
