import * as React from 'react'
import {
  isInternalLink,
  getInternalLinkNavigationData,
} from '@helpers/LinkInternal.helper'
import type {CollectionsByID, ImageType, Maybe} from '@LocalTypes/interfaces'
import type {Navigation} from '@generated/cms.types'

type CardCallbackProp = {
  title: string
  subtitle?: string | null
  slug: string
  image?: Maybe<ImageType>
  index: number
}

type PropType = {
  navigation: Navigation
  collectionsByID?: CollectionsByID
  imageNavigation?: boolean
  children: (props: CardCallbackProp) => React.ReactNode
}

export function NavigationalItems({
  navigation,
  collectionsByID,
  children: render,
}: PropType) {
  return (
    <>
      {navigation?.items?.map((item, index) => {
        if (isInternalLink(item)) {
          const {title, subtitle, slug, image} = getInternalLinkNavigationData(
            item,
            collectionsByID,
          )

          return render({
            title,
            subtitle,
            slug,
            image,
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
