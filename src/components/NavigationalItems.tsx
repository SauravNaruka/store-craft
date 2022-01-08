import * as React from 'react'
import type {Navigation, NavigationItem} from '@generated/cms.types'

type CardCallbackProp = {
  title: string
  link: string
  imageUrl: string
  imageCaption: string
  index: number
  subtitle?: string | null
}

type PropType = {
  navigation: Navigation
  children: (props: CardCallbackProp) => React.ReactNode
}

export function NavigationalItems({navigation, children: render}: PropType) {
  const navigationItems: NavigationItem[] = navigation?.items?.length
    ? (navigation.items as NavigationItem[])
    : []
  return (
    <>
      {navigationItems.map(({title, subtitle, link, image}, index) => {
        if (title && link?.url && image?.asset?.url && image?.caption) {
          return render({
            title,
            subtitle,
            link: link.url,
            imageUrl: image.asset.url,
            imageCaption: image.caption,
            index,
          })
        } else {
          return null
        }
      })}
    </>
  )
}

export default NavigationalItems
