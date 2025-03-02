import React from 'react'

import tailwindConfig from '@/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const {
  theme: { screens },
} = resolveConfig(tailwindConfig)

// Define breakpoints based on Tailwind's default breakpoints
const breakpoints = Object.fromEntries(
  Object.entries(screens).map(([key, value]) => [key, Number.parseInt(value)]),
)

type Breakpoint = keyof typeof breakpoints

export const useBreakpoints = () => {
  const [windowWidth, setWindowWidth] = React.useState(0)

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isGreaterThan = (breakpoint: Breakpoint) =>
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    windowWidth > breakpoints[breakpoint!]!

  const isLessThan = (breakpoint: Breakpoint) =>
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    windowWidth < breakpoints[breakpoint!]!

  return {
    windowWidth,
    isSm: isGreaterThan('sm'),
    isMd: isGreaterThan('md'),
    isLg: isGreaterThan('lg'),
    isXl: isGreaterThan('xl'),
    is2Xl: isGreaterThan('2xl'),
    isMaxSm: isLessThan('sm'),
    isMaxMd: isLessThan('md'),
    isMaxLg: isLessThan('lg'),
    isMaxXl: isLessThan('xl'),
    isMax2Xl: isLessThan('2xl'),
  }
}
