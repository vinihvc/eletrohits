'use client'

import { Button } from '@/components/ui/button'
import { usePlayerActions } from '@/store/app.store'
import { SkipForward } from 'lucide-react'

export const NextButton = ({ ...props }) => {
  const { nextSong } = usePlayerActions()

  return (
    <Button variant="ghost" size="icon" onClick={nextSong} {...props}>
      <SkipForward className="h-4 w-4" />
      <span className="sr-only">Next song</span>
    </Button>
  )
}
