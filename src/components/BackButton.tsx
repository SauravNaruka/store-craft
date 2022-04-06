import * as React from 'react'
import ChevronLeftIcon from '@components/icons/ChevronLeftIcon'

type PropType = {
  className: string | undefined
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function BackButton({
  className: customClass,
  onClick: onClickHandler,
}: PropType) {
  return (
    <button className={customClass} onClick={onClickHandler}>
      <ChevronLeftIcon />
    </button>
  )
}
