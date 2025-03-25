'use client'

import type { SongType } from '@/types/song'
import { EllipsisVertical } from 'lucide-react'
import { Button } from '../button'
import { useSong } from './songs.store'
import { SongsTypeMenu } from './songs.type-menu'

interface SongsDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Song data
   */
  data: SongType
}

const SongsDropdown = (props: SongsDropdownProps) => {
  const { data } = props

  const { isDropdownOpen, onChangeDropdown } = useSong()

  return (
    <SongsTypeMenu
      type="dropdown"
      data={data}
      open={isDropdownOpen}
      onOpenChange={onChangeDropdown}
    >
      <Button variant="ghost" size="icon">
        <EllipsisVertical className="h-5 w-5 text-muted-foreground" />
      </Button>
    </SongsTypeMenu>
  )
}

export default SongsDropdown
