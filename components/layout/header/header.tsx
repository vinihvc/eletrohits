import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import { SiGithub } from '@icons-pack/react-simple-icons'
import type React from 'react'
import { HeaderNavigation } from './header.navigation'
import { HeaderTheme } from './header.theme'

interface HeaderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props

  return (
    <header
      className={cn('inset-x-0 top-0 z-10 sm:absolute sm:top-5', className)}
      {...rest}
    >
      <div className="container flex h-14 items-center justify-between sm:rounded-xl sm:bg-background/40 sm:backdrop-blur sm:dark:bg-background/80">
        <Link
          className="inline-flex rounded-full ring-offset-4 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          href="/"
        >
          <Logo />

          <span className="sr-only">Eletrohits, Back to home</span>
        </Link>

        <HeaderNavigation />

        <nav className="flex items-center gap-4">
          <HeaderTheme />

          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/vinihvc/summer-eletrohits"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="size-4" />

              <span className="sr-only">Visit Github repository</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
