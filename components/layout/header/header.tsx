import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { NavLink } from '@/components/ui/nav-link'
import { cn } from '@/lib/utils'
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
      <div className="container flex h-14 items-center justify-between sm:rounded-xl sm:bg-background/40 sm:backdrop-blur-sm sm:dark:bg-background/80">
        <NavLink
          className="inline-flex rounded-full ring-offset-4 ring-offset-background focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
          href="/"
        >
          <Logo />

          <span className="sr-only">Eletrohits, Back to home</span>
        </NavLink>

        <HeaderNavigation />

        <nav className="flex items-center gap-4">
          <HeaderTheme />

          <Button variant="ghost" size="icon" asChild>
            <NavLink href="https://github.com/vinihvc/eletrohits">
              <SiGithub className="h-4 w-4" />

              <span className="sr-only">Visit Github repository</span>
            </NavLink>
          </Button>
        </nav>
      </div>
    </header>
  )
}
