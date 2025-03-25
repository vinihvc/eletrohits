import { cn } from '@/lib/utils'
import Image, { type ImageProps } from 'next/image'

interface BlurBackgroundProps extends Omit<ImageProps, 'alt'> {}

export const BlurBackground = (props: BlurBackgroundProps) => {
  const { src, className, ...rest } = props

  const hasImage = !!src

  return (
    <div
      className={cn(
        '-z-1 absolute inset-0 h-dvh overflow-clip opacity-60 dark:opacity-20',
        className,
      )}
      {...rest}
    >
      {hasImage && (
        <Image
          className="scale-125 object-cover blur-xl"
          src={src}
          sizes="(max-width: 768px) 100vw, 33vw"
          aria-hidden
          fill
          {...rest}
          alt=""
        />
      )}

      <div className="absolute inset-0 bg-linear-to-b from-transparent to-background" />
    </div>
  )
}
