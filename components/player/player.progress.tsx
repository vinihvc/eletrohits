'use client'

import { Slider } from '@/components/ui/slider'
import { usePlayerActions, usePlayerState } from '@/store/app.store'

export const PlayerProgress = () => {
  const { progress } = usePlayerState()
  const { handleProgress } = usePlayerActions()

  const handleOnProgress = (value: number[]) => {
    const [progress] = value

    if (progress) {
      handleProgress(progress)
    }
  }

  return (
    <div className="-top-2.5 absolute inset-x-0 flex">
      <Slider
        className="py-2"
        value={[progress]}
        onValueChange={handleOnProgress}
      />
    </div>
  )
}
