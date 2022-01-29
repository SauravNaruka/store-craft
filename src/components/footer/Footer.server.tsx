import * as React from 'react'
import Link from 'next/link'
import {NavigationalItems} from '@components/NavigationalItems'
import EmailIcon from '@components/icons/EmailIcon'
import FacebookIcon from '@components/icons/FacebookIcon'
import InformationIcon from '@components/icons/InformationIcon'
import InstagramIcon from '@components/icons/InstagramIcon'
import PinterestIcon from '@components/icons/PinterestIcon'
import SmartPhoneIcon from '@components/icons/SmartPhoneIcon'
import TwitterIcon from '@components/icons/TwitterIcon'
import {FooterCard} from './FooterCard.server'
import {Navigation, Footer as FooterType} from '@generated/cms.types'
import footerStyles from '@styles/footer.module.css'

type PropType = {
  data: FooterType
}

export function Footer({data}: PropType) {
  const navigations = data.navigations
  return (
    <footer className={footerStyles.footerRoot}>
      <div className={footerStyles.footerGrid}>
        {navigations?.map((navigation, index) => (
          <div key={index} className={footerStyles.footerColumn}>
            <h3>{navigation?.title}</h3>
            <ul>
              <NavigationalItems navigation={(navigation ?? []) as Navigation}>
                {({title, link}) => (
                  <li key={`Footer_NavigationItem_${title}`}>
                    <a href={link}>{title}</a>
                  </li>
                )}
              </NavigationalItems>
            </ul>
          </div>
        ))}
      </div>
      <div className={footerStyles.footerCard}>
        <p>Available 11am–8pm IST, 7 days a week.</p>
        <FooterCard
          href="tel:+91-9829081142"
          title="Call"
          subtitle="9829081142"
          position="first"
          icon={<SmartPhoneIcon fill="var(--color-neutral-5)" />}
        />
        <FooterCard
          href="mailto:support@craftywing.com"
          title="Email"
          subtitle="Send us a message"
          icon={<EmailIcon fill="var(--color-neutral-5)" />}
        />
        <FooterCard
          href="/faq"
          title="FAQs"
          subtitle="Answers of most common questions"
          position="last"
          icon={<InformationIcon />}
        />
      </div>
      <div className={footerStyles.footerSocial}>
        <div className={footerStyles.footerSocialLinks}>
          <InstagramIcon />
          <FacebookIcon />
          <PinterestIcon />
          <TwitterIcon />
        </div>
        <Link href="/">
          <a className={footerStyles.footerLogo}>CRAFTY WING</a>
        </Link>
        <div className={footerStyles.footerPrivacy}>
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
