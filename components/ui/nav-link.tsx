'use client'

import { cn } from '@/lib/utils'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface LinkProps
  extends NextLinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * If `true`, the link will be active only if the href is exactly the same as the pathname
   *
   * @default false
   */
  exact?: boolean
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
}

export const NavLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const {
      exact = false,
      href,
      isExternal,
      className,
      children,
      ...rest
    } = props

    const pathname = usePathname()

    const isActive = exact
      ? href === pathname
      : pathname.startsWith(href.toString())

    return (
      <NextLink
        href={href}
        className={cn({ active: isActive }, className)}
        aria-current={isActive || undefined}
        prefetch
        ref={ref}
        {...(isExternal && {
          href,
          target: '_blank',
          rel: 'noopener noreferrer nofollow',
          prefetch: false,
        })}
        {...rest}
      >
        {children}
      </NextLink>
    )
  },
)

NavLink.displayName = 'NavLink'
