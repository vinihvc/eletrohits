import { cn } from '@/lib/utils'
import type React from 'react'

interface RainbowLineProps extends React.HTMLAttributes<HTMLDivElement> {}

const RainbowLine = (props: RainbowLineProps) => {
  const { className, ...rest } = props

  return (
    <div
      className={cn(
        '-z-1 relative h-10 w-full dark:h-6',
        'dark:opacity-60',
        'before:absolute before:bottom-0 before:left-0 before:z-0 before:h-2/5 before:w-full',
        'before:bg-[length:200%] before:[filter:blur(calc(0.8*2rem))]',
        'before:animate-rainbow',
        'before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]',
        className,
      )}
      {...rest}
    />
  )
}

export default RainbowLine
