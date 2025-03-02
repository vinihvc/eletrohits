'use client'

import * as RPrimitive from '@radix-ui/react-dropdown-menu'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Check, ChevronRight, Dot } from 'lucide-react'

const Dropdown = RPrimitive.Root

const DropdownTrigger = RPrimitive.Trigger

const DropdownGroup = RPrimitive.Group

const DropdownPortal = RPrimitive.Portal

const DropdownSub = RPrimitive.Sub

const DropdownRadioGroup = RPrimitive.RadioGroup

const DropdownSubTrigger = React.forwardRef<
  React.ComponentRef<typeof RPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <RPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto size-4" />
  </RPrimitive.SubTrigger>
))
DropdownSubTrigger.displayName = RPrimitive.SubTrigger.displayName

const DropdownSubContent = React.forwardRef<
  React.ComponentRef<typeof RPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof RPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <RPrimitive.SubContent
    ref={ref}
    className={cn(
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in',
      className,
    )}
    {...props}
  />
))
DropdownSubContent.displayName = RPrimitive.SubContent.displayName

const DropdownContent = React.forwardRef<
  React.ComponentRef<typeof RPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof RPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <RPrimitive.Portal>
    <RPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-lg border bg-popover/80 p-1 text-popover-foreground shadow-md backdrop-blur-sm',
        'data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in',
        'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        'data-[side=bottom]:slide-in-from-top-2',
        className,
      )}
      {...props}
    />
  </RPrimitive.Portal>
))
DropdownContent.displayName = RPrimitive.Content.displayName

const DropdownItem = React.forwardRef<
  React.ComponentRef<typeof RPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <RPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm p-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))
DropdownItem.displayName = RPrimitive.Item.displayName

const DropdownCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof RPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <RPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RPrimitive.ItemIndicator>
        <Check className="size-4" />
      </RPrimitive.ItemIndicator>
    </span>
    {children}
  </RPrimitive.CheckboxItem>
))
DropdownCheckboxItem.displayName = RPrimitive.CheckboxItem.displayName

const DropdownRadioItem = React.forwardRef<
  React.ComponentRef<typeof RPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof RPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <RPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <RPrimitive.ItemIndicator>
        <Dot className="size-4 fill-current" />
      </RPrimitive.ItemIndicator>
    </span>
    {children}
  </RPrimitive.RadioItem>
))
DropdownRadioItem.displayName = RPrimitive.RadioItem.displayName

const DropdownLabel = React.forwardRef<
  React.ComponentRef<typeof RPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof RPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <RPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 font-semibold text-sm',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))
DropdownLabel.displayName = RPrimitive.Label.displayName

const DropdownSeparator = React.forwardRef<
  React.ComponentRef<typeof RPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof RPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <RPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
))
DropdownSeparator.displayName = RPrimitive.Separator.displayName

const DropdownShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  )
}
DropdownShortcut.displayName = 'DropdownShortcut'

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownShortcut,
  DropdownGroup,
  DropdownPortal,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownRadioGroup,
}
