'use client'

import {
  useMusicState,
  usePlayerActions,
  usePlayerState,
} from '@/store/app.store'
import type React from 'react'
import RPlayer from 'react-player/youtube'

interface ReactPlayerProps extends React.ComponentProps<typeof RPlayer> {}

export const ReactPlayer = (props: ReactPlayerProps) => {
  const { $player, isPlaying, volume, isMuted } = usePlayerState()

  const { nextSong, onProgress } = usePlayerActions()

  const { playlist, currentIndex } = useMusicState()

  const currentSong = playlist?.[currentIndex]

  return (
    <RPlayer
      ref={$player}
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
      }}
      {...(currentSong && {
        url: `https://youtu.be/${currentSong?.youtubeId}`,
      })}
      // url={playlist?.map((song) => ({
      //   src: `https://youtu.be/${song.youtubeId}`,
      // }))}
      playing={isPlaying}
      muted={isMuted}
      volume={volume}
      onEnded={nextSong}
      onProgress={onProgress}
      {...props}
    />
  )
}
