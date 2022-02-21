import * as React from 'react'
import {getInternalLinkNavigationData} from '@helpers/LinkInternal.helper'
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
        const navigationalData = getInternalLinkNavigationData(
          item,
          collectionsByID,
        )

        if (
          navigationalData &&
          navigationalData.title &&
          navigationalData.slug
        ) {
          return render({
            title: navigationalData.title,
            subtitle: navigationalData.subtitle,
            slug: navigationalData.slug,
            image: navigationalData.image,
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
