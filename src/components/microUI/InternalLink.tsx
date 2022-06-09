import * as React from 'react'
import Link from 'next/link'
import type {HrefProp} from '@LocalTypes/interfaces'

type PropType = HrefProp & {
  children?: React.ReactNode
}

export function InternalLink({href, children, ...rest}: PropType) {
  return (
    <Link href={href ?? '#'}>
      <a {...rest}>{children}</a>
    </Link>
  )
}
