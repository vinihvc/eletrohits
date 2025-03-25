import { Button } from '@/components/ui/button'
import { usePlayerActions, usePlayerState } from '@/store/app.store'
import { Volume2, VolumeX } from 'lucide-react'
import React from 'react'

export const VolumeButton = ({ ...props }) => {
  const { volume, isMuted } = usePlayerState()
  const { toggleVolume } = usePlayerActions()

  return (
    <Button
      variant={volume ? 'ghost' : 'solid'}
      size="icon"
      onClick={toggleVolume}
      {...props}
    >
      {React.cloneElement(isMuted ? <VolumeX /> : <Volume2 />, {
        className: 'w-4 h-4',
      })}

      <span className="sr-only">{isMuted ? 'Mute' : 'Unmute'}</span>
    </Button>
  )
}
