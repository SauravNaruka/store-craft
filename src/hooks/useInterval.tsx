import * as React from 'react'

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef<any>()
  const intervalIdRef = React.useRef<any>()

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      intervalIdRef.current = id
      return () => clearInterval(id)
    }
  }, [delay])

  React.useEffect(() => {
    // clear interval on when component gets removed to avoid memory leaks
    return () => clearInterval(intervalIdRef.current)
  }, [])

  const resetInterval = React.useCallback(() => {
    clearInterval(intervalIdRef.current)
    if (delay !== null) {
      intervalIdRef.current = setInterval(savedCallback.current, delay)
    }
  }, [delay])

  const stopInterval = () => clearInterval(intervalIdRef.current)

  return {
    resetInterval,
    stopInterval,
  }
}
