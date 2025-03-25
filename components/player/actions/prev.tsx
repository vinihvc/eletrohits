import { SkipBack } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { usePlayerActions } from '@/store/app.store'

export const PrevButton = ({ ...props }) => {
  const { previousSong } = usePlayerActions()

  return (
    <Button size="icon" variant="ghost" onClick={previousSong} {...props}>
      <SkipBack className="h-4 w-4" />
      <span className="sr-only">Previous song</span>
    </Button>
  )
}
