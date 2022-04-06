import * as React from 'react'
import {useTimeout} from './useTimeout'

export function useDebounce<ValueType>(value: ValueType, delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState<ValueType>(value)

  const [setTimeout, clearTimeout] = useTimeout(() => {
    setDebouncedValue(value)
  }, delay)

  React.useEffect(() => {
    clearTimeout()
    setTimeout()

    return () => {
      clearTimeout()
    }
  }, [value, delay, clearTimeout, setTimeout])

  return debouncedValue
}
