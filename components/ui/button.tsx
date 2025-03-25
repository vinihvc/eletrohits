import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center',
    'gap-2',
    'font-medium sm:text-xs',
    'rounded-full',
    'transition-all',
    'outline-hidden ring-offset-2 ring-offset-background focus-visible:ring-2',
    'gap-2 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
    variant: {
      solid: [
        'bg-primary text-primary-foreground',
        'hover:bg-primary/90',
        'focus-visible:ring-primary',
      ],
      outline: [
        'bg-transparent',
        'text-primary',
        'border border-primary',
        'focus-visible:ring-primary',
        'hover:bg-primary/10',
      ],
      ghost: [
        'bg-transparent hover:bg-primary/20',
        'focus-visible:ring-primary',
      ],
      link: 'bg-transparent text-primary underline-offset-4 hover:bg-transparent hover:underline',
    },
    size: {
      sm: 'h-9 px-4',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8 sm:text-sm',
      icon: 'h-8 w-8',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, the button will be rendered as a child of a slot.
   */
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      asChild,
      type = 'button',
      variant,
      size,
      className,
      ...rest
    } = props

    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(Comp === 'button' && { type })}
        {...rest}
      />
    )
  },
)

Button.displayName = 'Button'
