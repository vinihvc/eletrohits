'use client'

import { Slider } from '@/components/ui/slider'
import { usePlayerActions, usePlayerState } from '@/store/app.store'
import { VolumeButton } from './actions/volume'

export const PlayerVolume = () => {
  const { volume, isMuted } = usePlayerState()
  const { changeVolume } = usePlayerActions()

  const handleOnProgress = (value: number[]) => {
    const [progress] = value

    if (progress) {
      changeVolume(progress)
    }
  }

  return (
    <>
      <VolumeButton />

      <Slider
        className="w-[100px]"
        value={isMuted ? [0] : [volume]}
        onValueChange={handleOnProgress}
      />
    </>
  )
}
