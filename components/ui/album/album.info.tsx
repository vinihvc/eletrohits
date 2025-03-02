'use client'

import { Pause, Play, Shuffle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  useMusicState,
  usePlayerActions,
  usePlayerState,
} from '@/store/app.store'
import type { AlbumType } from '@/types/album'
import Image from 'next/image'
import React from 'react'

interface AlbumInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Album data
   */
  album: AlbumType
}

export const AlbumInfo = (props: AlbumInfoProps) => {
  const { album, className, ...rest } = props

  const { play, playRandom, togglePlay } = usePlayerActions()
  const { playlist, currentIndex } = useMusicState()
  const { isPlaying } = usePlayerState()

  const currentSong = playlist?.[currentIndex]

  const hasSongInAlbum = album.songs?.some(
    (song) => song.id === currentSong?.id,
  )

  const handlePlay = () => {
    if (hasSongInAlbum) {
      togglePlay()
    } else {
      album.songs && play?.(album.songs, 0)
    }
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-5 sm:flex-row sm:gap-10',
        className,
      )}
      {...rest}
    >
      <Image
        src={album.thumb}
        alt={album.name}
        width={150}
        height={150}
        className="relative size-36 justify-center rounded-xl drop-shadow sm:size-48 sm:justify-start"
      />

      <div className="relative max-sm:text-center">
        <span className="font-medium text-muted-foreground text-xs uppercase">
          Album
        </span>

        <h2 className="font-bold text-lg sm:text-xl">{album.name}</h2>

        {album.songs?.length !== 0 && (
          <div className="text-sm opacity-80">{`${album.songs?.length ?? 0} tracks`}</div>
        )}

        {album.songs?.length !== 0 && (
          <div className="mt-4 flex gap-4">
            <Button size="lg" className="w-[125px]" onClick={handlePlay}>
              {React.cloneElement(
                hasSongInAlbum && isPlaying ? <Pause /> : <Play />,
                { className: 'size-4 fill-current' },
              )}

              {hasSongInAlbum && isPlaying ? 'Pause' : 'Play'}
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => album.songs && playRandom(album.songs)}
            >
              <Shuffle className="size-4" />
              Shuffle
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
