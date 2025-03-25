import type { SongType } from '@/types/song'
import React from 'react'
import type ReactPlayer from 'react-player/youtube'
import type { YouTubePlayerProps } from 'react-player/youtube'
import type { StateCreator } from 'zustand'
import type { MusicSlice } from './music.slice'

export interface PlayerSlice {
  /**
   * Reference to the player
   */
  $player: React.RefObject<ReactPlayer | null>
  /**
   * Whether the player is playing
   */
  isPlaying: boolean
  /**
   * Volume of the player
   */
  volume: number
  /**
   * Volume to save when muting
   */
  isMuted: boolean
  /**
   * Progress of the player
   */
  progress: number
  /**
   * Whether the playlist is open
   */
  isPlaylistOpen: boolean
  /**
   *  Actions to manage the player
   */
  playerActions: {
    /**
     * Play a list of songs
     */
    play: (list: SongType[], index?: number) => void
    /**
     * Play a random song from the list
     */
    playRandom: (list: SongType[]) => void
    /**
     * react-player onProgress, update Slider progress
     */
    onProgress: ({ played }: YouTubePlayerProps) => void
    /**
     * Toggle the play state of the player
     */
    togglePlay: () => void
    /**
     * Skip to the next song
     */
    nextSong: () => void
    /**
     * Go back to the previous song
     */
    previousSong: () => void
    /**
     * Toggle the volume of the player
     */
    toggleVolume: () => void
    /**
     * Change the volume of the player
     */
    changeVolume: (volume: number) => void
    /**
     * Increase the volume of the player
     */
    volumeUp: () => void
    /**
     * Decrease the volume of the player
     */
    volumeDown: () => void
    /**
     * User interaction to update the progress of the player
     */
    handleProgress: (progress: number) => void
    /**
     * Toggle the playlist
     */
    togglePlaylist: () => void
  }
}

export const createPlayerSlice: StateCreator<
  PlayerSlice & MusicSlice,
  [],
  [],
  PlayerSlice
> = (set, get) => {
  return {
    $player: React.createRef<ReactPlayer>(),
    isPlaying: false,
    volume: 1,
    progress: 0,
    isMuted: false,
    isPlaylistOpen: false,
    playerActions: {
      play: (list, index = 0) => {
        set((state) => ({
          ...state,
          playlist: list,
          isPlaying: true,
          currentIndex: index,
        }))
      },

      playRandom: (list) => {
        const randomIndex = Math.floor(Math.random() * list.length)

        get().playerActions.play(list, randomIndex)
      },

      onProgress: ({ played }) => {
        set((state) => ({ ...state, progress: played }))
      },

      togglePlay: () => {
        set((state) => ({ ...state, isPlaying: !state.isPlaying }))
      },

      nextSong: () => {
        set((state) => ({
          currentIndex: (state.currentIndex + 1) % state.playlist.length,
        }))
      },

      previousSong: () => {
        set((state) => ({
          currentIndex:
            (state.currentIndex - 1 + state.playlist.length) %
            state.playlist.length,
        }))
      },

      toggleVolume: () => {
        set((state) => ({ ...state, isMuted: !state.isMuted }))
      },

      changeVolume: (volume: number) => {
        set((state) => ({ ...state, volume: Math.max(0, Math.min(1, volume)) }))
      },

      volumeUp: () => {
        get().playerActions.changeVolume(get().volume + 0.1)
      },

      volumeDown: () => {
        get().playerActions.changeVolume(get().volume - 0.1)
      },

      handleProgress: (value: number) => {
        set((state) => ({ ...state, progress: value }))
        get().$player.current?.seekTo(value)
      },

      togglePlaylist: () => {
        set((state) => ({ ...state, isPlaylistOpen: !state.isPlaylistOpen }))
      },
    },
  }
}
