import * as React from 'react'

type PropType = {
  id: string
  label: string
  name: string
  value: string
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
export function Checkbox({id, label, ...rest}: PropType) {
  return (
    <div>
      <input type="checkbox" id={id} {...rest} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
