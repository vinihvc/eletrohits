'use client'

import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'
import { cn } from '@/lib/utils'
import { useMusicState } from '@/store/app.store'
import { Disc3 } from 'lucide-react'
import { PartyPopper } from 'lucide-react'
import React from 'react'

interface HeaderNavigationProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const HeaderNavigation = (props: HeaderNavigationProps) => {
  const { className, ...rest } = props

  const { liked } = useMusicState()

  const isFirstRender = React.useRef(true)
  const likedList = React.useRef(liked)
  const [animate, setAnimate] = React.useState(false)

  React.useEffect(() => {
    // first render, no data, because it's a client component
    if (liked.length === 0) return

    // after get liked, the effect will run one more time, so we need to bypass it
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (liked.length > likedList.current.length) {
      setAnimate(true)
    }

    const timeout = setTimeout(() => {
      setAnimate(false)
    }, 1500)

    likedList.current = liked

    return () => clearTimeout(timeout)
  }, [liked])

  return (
    <nav className={cn('flex gap-4 max-sm:hidden', className)} {...rest}>
      <Button variant="ghost" size="sm" className="gap-2" asChild>
        <NavLink
          href="/party"
          className="hover:text-foreground dark:text-muted-foreground [&.active]:bg-primary [&.active]:text-white"
        >
          <PartyPopper className="size-4" />
          Party
        </NavLink>
      </Button>

      <Button variant="ghost" size="sm" className="gap-2" asChild>
        <NavLink
          href="/likes"
          className="group hover:text-foreground dark:text-muted-foreground [&.active]:bg-primary [&.active]:text-white"
        >
          <Disc3
            className={cn('size-4', {
              'animate-spin text-primary group-[&.active]:animate-none group-[&.active]:text-white':
                animate,
            })}
          />
          Likes
        </NavLink>
      </Button>
    </nav>
  )
}
