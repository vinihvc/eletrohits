import { usePlayer } from 'contexts/player'

import { MdShuffle } from 'react-icons/md'

import { IconButton } from '@chakra-ui/react'

export const Shuffle = ({ ...props }) => {
  const { isShuffling, toggleShuffle } = usePlayer()

  return (
    <IconButton
      icon={<MdShuffle />}
      variant={isShuffling ? 'solid' : 'ghost'}
      aria-label="Shuffle songs"
      onClick={toggleShuffle}
      {...props}
    />
  )
}