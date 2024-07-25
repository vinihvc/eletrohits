'use client'

import { cn } from '@/lib/cn'
import type { ImageProps } from 'next/image'
import NextImage from 'next/image'
import React from 'react'

export const BlurImage = (props: ImageProps) => {
  const { className, ...rest } = props

  const [isLoading, setLoading] = React.useState(true)

  return (
    <div
      className={cn(
        "flex size-full rounded-xl bg-background/[2%] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:content-['']",
        { 'animate-pulse': isLoading },
      )}
    >
      <NextImage
        {...rest}
        className={cn(
          'transition',
          isLoading
            ? 'scale-[1.02] blur-sm grayscale'
            : 'scale-100 blur-0 grayscale-0',
          className,
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
