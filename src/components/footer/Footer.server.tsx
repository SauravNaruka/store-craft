import * as React from 'react'
import {FooterCards} from './FooterCards.server'
import {FooterNavigations} from './FooterNavigations.server'
import {FooterBottom} from './FooterBottom.server'
import {Footer as FooterType} from '@generated/cms.types'
import footerStyles from '@styles/footer.module.css'

type PropType = {
  data: FooterType
}

export function Footer({data}: PropType) {
  return (
    <footer className={footerStyles.footerRoot}>
      <FooterNavigations navigations={data.navigations ?? []} />
      <FooterCards phone={data.phone} email={data.email} />
      <FooterBottom social={data.social} />
    </footer>
  )
}
