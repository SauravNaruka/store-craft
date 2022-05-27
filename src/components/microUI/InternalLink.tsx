import * as React from 'react'
import Link from 'next/link'

type HrefProp = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

type PropType = HrefProp & {
  children: React.ReactNode
}

export function InternalLink({href, children, ...rest}: PropType) {
  return (
    <Link href={href ?? '#'}>
      <a {...rest}>{children}</a>
    </Link>
  )
}
