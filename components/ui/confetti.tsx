'use client'

import { cn } from '@/lib/utils'
import React from 'react'

import ReactCanvasConfetti from 'react-canvas-confetti/dist/presets/photons'
import type { TConductorInstance } from 'react-canvas-confetti/dist/types'

interface ConfettiProps extends React.HTMLAttributes<HTMLDivElement> {}

const Confetti = (props: ConfettiProps) => {
  const { className, ...rest } = props

  const controller = React.useRef<TConductorInstance>(undefined)

  const $ref = React.useRef<HTMLDivElement>(null)

  // trigger confetti on click
  // React.useEffect(() => {
  //   $ref.current?.addEventListener('click', () => controller.current?.shoot())

  //   return () => {
  //     $ref.current?.removeEventListener('click', () =>
  //       controller.current?.shoot(),
  //     )
  //   }
  // }, [])

  return (
    <div ref={$ref} className={cn('fixed inset-0 h-full w-full', className)}>
      <ReactCanvasConfetti
        // comment this to stop
        autorun={{ speed: 20 }}
        onInit={({ conductor }) => {
          controller.current = conductor
        }}
        {...rest}
      />
    </div>
  )
}

export default Confetti
