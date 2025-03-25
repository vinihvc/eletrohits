'use client'

import { useInteractiveBlurBackgroundStore } from '@/components/backgrounds/interactive-blur-background'
import {
  useMusicState,
  usePlayerActions,
  usePlayerState,
} from '@/store/app.store'
import type { AlbumType } from '@/types/album'
import { Pause, Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../button'

interface AlbumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Album data
   */
  album: AlbumType
}

export const AlbumCard = ({ album }: AlbumCardProps) => {
  const { play, togglePlay } = usePlayerActions()
  const { isPlaying } = usePlayerState()

  const { image, setImage } = useInteractiveBlurBackgroundStore()

  const { playlist, currentIndex } = useMusicState()

  const currentSong = playlist?.[currentIndex]

  const songs = album.songs

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    isPlayingAlbum ? togglePlay() : songs && play?.(songs)
  }

  const isPlayingAlbum =
    songs?.some((song) => song.id === currentSong?.id) && isPlaying

  const handleMouseEnter = () => {
    if (album.thumb !== image) {
      setImage(`/img/albums/${album.id}.webp`)
    }
  }

  return (
    <article
      className="rounded-xl"
      onTouchStart={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
    >
      <div className="relative aspect-square h-full w-full overflow-hidden rounded-xl ring-primary ring-offset-2 ring-offset-background transition-all group-focus-visible:ring-2">
        <Image
          src={`/img/albums/${album.id}.webp`}
          alt={album.name}
          className="shadow-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
          fill
        />

        <div className="absolute top-0 left-0 hidden h-full w-full items-center justify-center opacity-0 transition-all group-hover:opacity-100 sm:flex">
          <Button
            tabIndex={-1}
            variant="ghost"
            className="h-14 w-14 bg-black/60 text-white hover:scale-105 hover:bg-black"
            onClick={handleClick}
          >
            {React.cloneElement(isPlayingAlbum ? <Pause /> : <Play />, {
              className: 'w-5 h-5 fill-current',
            })}
          </Button>
        </div>
      </div>

      <div className="flex h-[40px] flex-col justify-center md:h-[60px]">
        <div className="hidden font-medium text-[10px] text-muted-foreground uppercase md:block">
          Album
        </div>

        <div className="line-clamp-1 font-medium">{album.name}</div>
      </div>
    </article>
  )
}
