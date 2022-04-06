import * as React from 'react'

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef(callback)
  const intervalIdRef = React.useRef<ReturnType<typeof setInterval>>()

  const stopInterval = React.useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current)
    }
  }, [])

  const resetInterval = React.useCallback(() => {
    stopInterval()
    if (delay !== null) {
      intervalIdRef.current = setInterval(savedCallback.current, delay)
    }
  }, [delay, stopInterval])

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
      const id = setInterval(tick, delay)
      intervalIdRef.current = id
      return () => clearInterval(id)
    }
  }, [delay])

  React.useEffect(() => {
    // clear interval on when component gets removed to avoid memory leaks
    return stopInterval
  }, [stopInterval])

  return {
    resetInterval,
    stopInterval,
  }
}
