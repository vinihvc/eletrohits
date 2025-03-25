import { LikeButton } from '@/components/player/actions/like'
import { PlayButton } from '@/components/player/actions/play'
import { useBreakpoints } from '@/hooks/use-breakpoints'
import { cn } from '@/lib/utils'
import {
  useMusicState,
  usePlayerActions,
  usePlayerState,
} from '@/store/app.store'
import type { SongType } from '@/types/song'
import React from 'react'
import { BlurImage } from '../blur-image'

const SongsContextMenu = React.lazy(() => import('./songs.context-menu'))

const SongsDropdown = React.lazy(() => import('./songs.dropdown'))

interface SongsItemProps extends React.HTMLAttributes<HTMLDivElement> {
  songs: SongType[]
  index: number
}

export const SongsItem = (props: SongsItemProps) => {
  const { index, songs, className, ...rest } = props

  const { playlist, currentIndex } = useMusicState()
  const { isPlaying } = usePlayerState()
  const { togglePlay, play } = usePlayerActions()
  const { isMaxSm } = useBreakpoints()

  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const song = songs[index]!

  const currentSong = playlist?.[currentIndex]

  const isCurrentSong = currentSong?.id === song?.id

  const isSameSong = currentSong?.id === song?.id

  const handlePlay = () => {
    if (!isMaxSm) return

    if (isPlaying && isSameSong) {
      togglePlay()
    } else {
      play?.(songs, index)
    }
  }

  return (
    <SongsContextMenu data={song}>
      <div
        className={cn(
          'transition odd:bg-background/30 even:bg-background/10 hover:bg-foreground/5',
          className,
        )}
        onClick={handlePlay}
        {...rest}
      >
        <div
          className={cn(
            'group flex items-center gap-3 p-2.5 px-2 text-sm sm:px-5 md:gap-5',
            isCurrentSong && 'bg-background/40',
            className,
          )}
          {...rest}
        >
          <div className="flex w-10 shrink-0 items-center justify-center max-sm:hidden">
            <div
              className={cn('text-muted-foreground group-hover:hidden', {
                hidden: isCurrentSong,
              })}
            >
              {index + 1}
            </div>

            <div
              className={cn('hidden sm:group-hover:block', {
                block: isCurrentSong,
              })}
            >
              <PlayButton songs={songs} index={index} />
            </div>
          </div>

          <div className="shrink-0 overflow-hidden rounded-lg">
            <BlurImage
              width={40}
              height={40}
              className="aspect-square h-10 w-10 scale-125 select-none object-cover"
              src={`https://img.youtube.com/vi/${song?.youtubeId}/0.jpg`}
              alt={song?.name}
            />
          </div>

          <div className="flex flex-1 flex-col sm:flex-row">
            <div
              className={cn('line-clamp-1 flex-1 font-medium', {
                'text-primary': isCurrentSong,
              })}
            >
              {song?.name}
            </div>

            <div className="line-clamp-1 w-full text-muted-foreground text-xs max-sm:text-muted-foreground sm:max-w-[35%]">
              {song?.singer}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LikeButton className="max-sm:hidden" data={song} />

            <SongsDropdown data={song} />
          </div>
        </div>
      </div>
    </SongsContextMenu>
  )
}
