import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...css: ClassValue[]) => {
  return twMerge(clsx(css))
}
