'use client'

import { useBypassFirstRender } from '@/hooks/use-bypass-first-render'
import React from 'react'
import { create } from 'zustand'
import { BlurBackground } from './blur-background'

const TRANSITION_DURATION = 0.5

interface BackgroundState {
  /**
   * The image to display
   *
   * @default ''
   */
  image: string
  /**
   * Set the image to display
   */
  setImage: (image: string) => void
}

export const useInteractiveBlurBackgroundStore = create<BackgroundState>(
  (set) => ({
    image: '',
    setImage: (image) => set({ image }),
  }),
)

export const InteractiveBlurBackground = () => {
  const { image } = useInteractiveBlurBackgroundStore()

  const [delayedImage, setDelayedImage] = React.useState(image)
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const isFirstRender = useBypassFirstRender()

  React.useEffect(() => {
    if (isFirstRender) return

    setIsTransitioning(true)

    const imageTimer = setTimeout(() => {
      setDelayedImage(image)
    }, TRANSITION_DURATION * 1000)

    const transitionTimer = setTimeout(
      () => {
        setIsTransitioning(false)
      },
      TRANSITION_DURATION * 1000 - TRANSITION_DURATION * 100,
    )

    return () => {
      clearTimeout(imageTimer)
      clearTimeout(transitionTimer)
    }
  }, [image, isFirstRender])

  return (
    <BlurBackground
      src={delayedImage}
      style={{
        transition: `opacity ${TRANSITION_DURATION}s ease-in-out`,
        opacity: isTransitioning ? 0.1 : undefined,
      }}
    />
  )
}
