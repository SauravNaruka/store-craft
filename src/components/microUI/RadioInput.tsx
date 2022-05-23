import * as React from 'react'

type RadioInputProp = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type PropType = RadioInputProp & {
  id: string | number
  className?: string
  children: React.ReactNode
}

export function RadioInput({
  id,
  onChange,
  className,
  children,
  ...rest
}: PropType) {
  return (
    <div>
      <input
        type="radio"
        id={id}
        className={className}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

export default RadioInput
