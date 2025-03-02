'use client'
import { useMediaKeyPress } from '@/hooks/use-media-keypress'
import { cn } from '@/lib/utils'
import { useMusicState } from '@/store/app.store'
import * as Portal from '@radix-ui/react-portal'
import React from 'react'
import { PlayerActions } from './player.actions'
import { PlayerSongInfo } from './player.info'
import { PlayerProgress } from './player.progress'
import { PlayerVolume } from './player.volume'
import { ReactPlayer } from './react-player'

const PlayerPlaylist = React.lazy(() => import('./player.playlist'))

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Player = (props: PlayerProps) => {
  const { className, ...rest } = props

  const { playlist } = useMusicState()

  useMediaKeyPress()

  if (playlist.length === 0) {
    return null
  }

  return (
    <Portal.Root
      className={cn(
        'fixed inset-x-0 bottom-[53px] z-50 sm:bottom-0',
        className,
      )}
    >
      <div className={cn('flex border-t-2 bg-background', className)} {...rest}>
        <div className="container relative w-full">
          <PlayerProgress />

          <div className="flex flex-1 items-center justify-between py-2 sm:gap-5 md:py-3">
            <div className="flex basis-1/2 items-center gap-4">
              <PlayerSongInfo />
            </div>

            <div className="flex basis-1/2 items-center justify-end gap-2 sm:flex-1 sm:justify-center">
              <PlayerActions />
            </div>

            <div className="hidden basis-1/2 items-center justify-end gap-4 sm:flex">
              <PlayerPlaylist className="shrink-0" />

              <div className="flex gap-4">
                <PlayerVolume />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReactPlayer />
    </Portal.Root>
  )
}

export default Player
