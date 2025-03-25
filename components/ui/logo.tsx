import type React from 'react'

import { cn } from '@/lib/utils'
import { Music } from '../icons/music'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = (props: LogoProps) => {
  const { className, ...rest } = props

  return (
    <div
      role="img"
      className={cn(
        'flex select-none items-center gap-2 font-semibold text-lg',
        className,
      )}
      {...rest}
      aria-hidden
    >
      <Music className="h-6 w-6 text-primary" />

      <span>Eletrohits</span>
    </div>
  )
}
