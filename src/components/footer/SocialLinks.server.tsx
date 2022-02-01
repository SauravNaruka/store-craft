import * as React from 'react'
import FacebookIcon from '@components/icons/FacebookIcon'
import InstagramIcon from '@components/icons/InstagramIcon'
import PinterestIcon from '@components/icons/PinterestIcon'
import TwitterIcon from '@components/icons/TwitterIcon'
import IconLink from '@components/IconLink'
import type {SocialLinks as SocialLinksType} from '@generated/cms.types'
import footerStyles from '@styles/footer.module.css'

export function SocialLinks({
  instagram,
  facebook,
  pinterest,
  twitter,
}: SocialLinksType) {
  return (
    <div className={footerStyles.footerSocialLinks}>
      {instagram && (
        <IconLink
          href={instagram}
          altText="Crafty Wing on Instagram, opens in new tab"
        >
          <InstagramIcon />
        </IconLink>
      )}
      {facebook && (
        <IconLink
          href={facebook}
          altText="Crafty Wing on Facebook, opens in new tab"
        >
          <FacebookIcon />
        </IconLink>
      )}

      {pinterest && (
        <IconLink
          href={pinterest}
          altText="Crafty Wing on Pinterest, opens in new tab"
        >
          <PinterestIcon />
        </IconLink>
      )}

      {twitter && (
        <IconLink
          href={twitter}
          altText="Crafty Wing on Twitter, opens in new tab"
        >
          <TwitterIcon />
        </IconLink>
      )}
    </div>
  )
}

export default SocialLinks
