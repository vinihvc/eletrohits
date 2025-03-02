'use client'

import { cn } from '@/lib/utils'
import type { SongType } from '@/types/song'
import type React from 'react'
import { SongsItem } from './songs.item'
import { SongProvider } from './songs.store'

interface SongsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * List of songs
   */
  songs: SongType[]
}

export const Songs = (props: SongsProps) => {
  const { songs, className, ...rest } = props

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        'rounded-lg',
        'divide-y divide-border/60',
        'border black:border-border/20 border-border/60',
        'fade-in animate-in',
        className,
      )}
      {...rest}
    >
      {songs?.map((song, index) => (
        <SongProvider key={song.id}>
          <SongsItem index={index} songs={songs} />
        </SongProvider>
      ))}
    </div>
  )
}
