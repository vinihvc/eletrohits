import { useId } from 'react'

import { cn } from '@/lib/utils'

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  squares?: Array<[x: number, y: number]>
  strokeDasharray?: string
  className?: string
  [key: string]: unknown
}

export const GridPattern = (props: GridPatternProps) => {
  const {
    width = 20,
    height = 20,
    x = -1,
    y = -1,
    strokeDasharray = '0',
    squares,
    className,
    ...rest
  } = props

  const id = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed inset-0 z-[-1] h-full w-full fill-card-forestroke-card-foreground/10 stroke-card-foreground/10 dark:fill-card-forestroke-card-foreground/5 dark:stroke-card-foreground/5',
        className,
      )}
      {...rest}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

export default GridPattern
