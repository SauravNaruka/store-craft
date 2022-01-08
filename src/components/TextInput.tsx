import * as React from 'react'
import inputStyles from '@styles/input.module.scss'

export function TextInput({...props}) {
  return <input className={inputStyles.input} {...props} />
}
