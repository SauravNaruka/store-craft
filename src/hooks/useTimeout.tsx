import * as React from 'react'

export function useTimeout(callback: () => void, delay: number) {
  const savedCallback = React.useRef(callback)
  const timeoutIdRef = React.useRef<ReturnType<typeof setTimeout>>()

  const clear = React.useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }
  }, [])

  const set = React.useCallback(() => {
    clear()
    timeoutIdRef.current = setTimeout(savedCallback.current, delay)
  }, [clear, delay])

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    const id = setTimeout(tick, delay)
    timeoutIdRef.current = id
    return () => clearTimeout(id)
  }, [delay])

  React.useEffect(() => {
    // clear interval on when component gets removed to avoid memory leaks
    return clear
  }, [clear])

  return [set, clear]
}
