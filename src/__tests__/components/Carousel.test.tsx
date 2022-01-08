import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Carousel from '@components/carousel/Carousel'
import {CarouselDotButtons} from '@components/carousel/CarouselDotButtons'
import {
  CAROUSEL_ACCESSIBILITY_MESSAGE_NAVIGATION,
  CAROUSEL_ACCESSIBILITY_MESSAGE_AUTOPLAY,
} from '@constants/carousel.constants'

describe('the working of carosel', () => {
  afterEach(() => {
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  beforeEach(() => {
    jest.spyOn(global, 'setInterval')
    jest.useFakeTimers('legacy')
  })

  test('to check if child element is present in the DOM', () => {
    render(
      <Carousel id="testid" ariaLabel="test">
        <span aria-label="child" />
        <span aria-label="second element" />
      </Carousel>,
    )
    expect(setInterval).toHaveBeenCalledTimes(1)

    const buttonTochangeSlide = screen.getByRole('tab', {name: /slide 2/i})
    userEvent.click(buttonTochangeSlide)

    expect(screen.getByLabelText('child')).toBeInTheDocument()
    expect(screen.getByLabelText(/test/i)).toBeInTheDocument()
    expect(screen.getAllByRole('tab').length).toBe(2)
  })

  test('auto slide change is disabled', () => {
    render(
      <Carousel id="testid" ariaLabel="test" autoplay={false}>
        <span aria-label="First child" />
        <span aria-label="Second child" />
      </Carousel>,
    )
    jest.advanceTimersByTime(6000)
    expect(setInterval).toHaveBeenCalledTimes(0)
  })

  test('accessibility message for carousel Part 1', () => {
    render(
      <Carousel id="testid" ariaLabel="test">
        <span aria-label="First child" />
      </Carousel>,
    )

    expect(
      screen.getByLabelText(
        new RegExp(CAROUSEL_ACCESSIBILITY_MESSAGE_AUTOPLAY),
      ),
    ).toBeInTheDocument

    expect(
      screen.getByLabelText(
        new RegExp(CAROUSEL_ACCESSIBILITY_MESSAGE_NAVIGATION),
      ),
    ).toBeInTheDocument
  })

  test('accessibility message for carousel Part 2', () => {
    render(
      <Carousel
        id="testid"
        ariaLabel="test"
        autoplay={false}
        dotsNavigation={false}
      >
        <span aria-label="First child" />
      </Carousel>,
    )

    expect(
      screen.queryByLabelText(
        new RegExp(CAROUSEL_ACCESSIBILITY_MESSAGE_AUTOPLAY),
      ),
    ).not.toBeInTheDocument

    expect(
      screen.queryByLabelText(
        new RegExp(CAROUSEL_ACCESSIBILITY_MESSAGE_NAVIGATION),
      ),
    ).not.toBeInTheDocument
  })

  test('removing of dots navigation', () => {
    render(
      <Carousel id="testid" ariaLabel="test" dotsNavigation={false}>
        <span aria-label="First child" />
      </Carousel>,
    )

    expect(screen.queryAllByRole('tab').length).toBe(0)
  })

  test('dots buttons click action', () => {
    const slidesCount = 5
    const activeSlide = 2
    const clickHandler = jest.fn()
    render(
      <CarouselDotButtons
        id="testid"
        numberOfslides={slidesCount}
        activeSlideIndex={activeSlide}
        onClick={clickHandler}
      />,
    )
    expect(screen.getAllByRole('tab').length).toBe(slidesCount)

    const slideNumber = 2
    // We are using slideNumber + 1 becuse slides are zero indexed but user will see slide starting from 1
    const buttonTochangeSlide = screen.getByRole('tab', {
      name: new RegExp(`${slideNumber + 1}`),
    })
    userEvent.click(buttonTochangeSlide)

    expect(clickHandler).toBeCalledTimes(1)
    expect(clickHandler).toBeCalledWith(slideNumber)
  })
})
