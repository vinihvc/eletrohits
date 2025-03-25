import { BOTTOM_NAVIGATION } from '@/constants/menu'
import React from 'react'
import { NavLink } from '../ui/nav-link'

export const BottomNavigation = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between border-t bg-background p-4 pb-safe-or-4 shadow sm:hidden">
      {BOTTOM_NAVIGATION.map(({ label, href, icon }) => (
        <div className="flex flex-1 justify-center" key={href}>
          <NavLink
            href={href}
            className="text-muted-foreground [&.active]:text-foreground"
          >
            {React.createElement(icon, {
              className: 'w-5 h-5',
            })}

            <span className="sr-only">{label}</span>
          </NavLink>
        </div>
      ))}
    </div>
  )
}
