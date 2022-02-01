import * as React from 'react'
import Link from 'next/link'
import {SocialLinks} from './SocialLinks.server'
import type {Maybe} from '@LocalTypes/interfaces'
import type {SocialLinks as SocialLinksType} from '@generated/cms.types'
import footerStyles from '@styles/footer.module.css'

type PropType = {
  social?: Maybe<SocialLinksType>
}

export function FooterBottom({social}: PropType) {
  return (
    <div className={footerStyles.footerBottom}>
      <SocialLinks {...social} />
      <Link href="/">
        <a className={footerStyles.footerLogo}>CRAFTY WING</a>
      </Link>
      <div className={footerStyles.footerPrivacy}>
        © {new Date().getFullYear()} All Rights Reserved
      </div>
    </div>
  )
}
