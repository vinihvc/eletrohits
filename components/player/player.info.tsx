'use client'

import { LikeButton } from '@/components/player/actions/like'

import { useMusicState } from '@/store/app.store'
import { BlurImage } from '../ui/blur-image'

export const PlayerSongInfo = () => {
  const { playlist, currentIndex } = useMusicState()

  const currentSong = playlist?.[currentIndex]

  return (
    <>
      <div className="relative size-10 overflow-hidden rounded-full">
        <BlurImage
          width={40}
          height={40}
          className="aspect-square size-10 scale-125 select-none object-cover"
          src={`https://img.youtube.com/vi/${currentSong?.youtubeId}/0.jpg`}
          alt={`${currentSong?.name} album cover`}
        />
      </div>

      <div>
        <div className="line-clamp-1 font-medium text-sm">
          {currentSong?.name}
        </div>

        <div className="line-clamp-1 text-muted-foreground text-xs">
          {currentSong?.singer}
        </div>
      </div>

      {currentSong && (
        <LikeButton className="max-sm:hidden" data={currentSong} />
      )}
    </>
  )
}
