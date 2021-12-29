import {renderHook} from '@testing-library/react-hooks'
import {useInterval} from 'src/hooks/useInterval'

describe('useTimer working', () => {
  afterEach(() => {
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  beforeEach(() => {
    jest.spyOn(global, 'setInterval')
  })

  test('useTimer callBack function and stop & restart functionality', async () => {
    jest.useFakeTimers('legacy')
    const mockCallback = jest.fn()
    let delay = 100
    const {result} = renderHook(() => useInterval(mockCallback, delay))
    const {resetInterval, stopInterval} = result.current

    expect(setInterval).toHaveBeenCalledTimes(1)

    expect(mockCallback).not.toHaveBeenCalled()
    jest.advanceTimersByTime(delay)
    expect(mockCallback).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(delay)
    expect(mockCallback).toHaveBeenCalledTimes(2)

    jest.advanceTimersByTime(delay / 2)
    resetInterval()
    expect(setInterval).toHaveBeenCalledTimes(2)
    jest.advanceTimersByTime(delay / 2)
    expect(mockCallback).toHaveBeenCalledTimes(2)
    jest.advanceTimersByTime(delay / 2)
    expect(mockCallback).toHaveBeenCalledTimes(3)

    stopInterval()
    jest.advanceTimersByTime(delay)
    expect(mockCallback).toHaveBeenCalledTimes(3)
  })

  test('inactive timer by passing null value for dealy', () => {
    jest.useFakeTimers('legacy')
    const mockCallback = jest.fn()

    const {result, rerender} = renderHook<
      {delay: number | null},
      {resetInterval: () => void; stopInterval: () => void}
    >(({delay}) => useInterval(mockCallback, delay), {
      initialProps: {delay: null},
    })
    const {resetInterval} = result.current

    expect(setInterval).toHaveBeenCalledTimes(0)
    resetInterval()
    rerender({delay: 100})
    expect(setInterval).toHaveBeenCalledTimes(1)
  })
})
