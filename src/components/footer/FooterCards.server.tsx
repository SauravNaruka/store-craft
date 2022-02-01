import * as React from 'react'
import EmailIcon from '@components/icons/EmailIcon'
import InformationIcon from '@components/icons/InformationIcon'
import SmartPhoneIcon from '@components/icons/SmartPhoneIcon'
import {FooterCard} from './FooterCard.server'
import type {Maybe} from '@LocalTypes/interfaces'
import footerStyles from '@styles/footer.module.css'

type PropType = {
  phone?: Maybe<string>
  email?: Maybe<string>
}
export function FooterCards({phone, email}: PropType) {
  return (
    <div className={footerStyles.footerCard}>
      <p>Available 11am–8pm IST, 7 days a week.</p>
      {phone && (
        <FooterCard
          href={`tel:${phone}`}
          title="Call"
          subtitle={phone}
          position="first"
          icon={<SmartPhoneIcon fill="var(--color-neutral-5)" />}
        />
      )}
      {email && (
        <FooterCard
          href={`mailto:${email}`}
          title="Email"
          subtitle="Send us a message"
          icon={<EmailIcon fill="var(--color-neutral-5)" />}
        />
      )}
      <FooterCard
        href="/faq"
        title="FAQs"
        subtitle="Answers of most common questions"
        position="last"
        icon={<InformationIcon />}
      />
    </div>
  )
}

export default FooterCards
