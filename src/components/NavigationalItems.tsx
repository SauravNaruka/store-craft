import * as React from 'react'
import {isShopifyCollection} from '@helpers/collection.helper'
import {isInternalLink} from '@helpers/LinkInternal.helper'
import type {Navigation} from '@generated/cms.types'

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
  imageNavigation?: boolean
  children: (props: CardCallbackProp) => React.ReactNode
}

export function NavigationalItems({
  navigation,
  imageNavigation = true,
  children: render,
}: PropType) {
  return (
    <>
      {navigation?.items?.map((item, index) => {
        if (
          isInternalLink(item) &&
          isShopifyCollection(item.reference) &&
          item.reference.title &&
          item.reference.handle
          // item.reference.sourceData?.image?.originalSrc
        ) {
          return render({
            title: item.reference.title,
            subtitle: item.title,
            link: item.reference.handle,
            imageUrl: item.reference.sourceData?.image?.originalSrc ?? '',
            imageCaption: item.reference.sourceData?.image?.altText ?? '',
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
