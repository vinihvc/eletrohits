'use client'

import { cn } from '@/lib/utils'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

interface LottiePlayerProps
  extends React.ComponentProps<typeof DotLottieReact> {
  /**
   * Path to the animation file
   */
  path: string
  /**
   * Whether the animation should loop
   *
   * @default true
   */
  loop?: boolean
  /**
   * Whether the animation should autoplay
   *
   * @default true
   */
  autoplay?: boolean
}

const LottiePlayer = (props: LottiePlayerProps) => {
  const { path, loop = true, autoplay = true, className, ...rest } = props

  return (
    <DotLottieReact
      src={path}
      className={cn(className)}
      loop={loop}
      autoplay={autoplay}
      {...rest}
    />
  )
}

export default LottiePlayer
