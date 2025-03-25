'use client'

import { USER_ALBUM } from '@/app/likes/data'
import { BlurBackground } from '@/components/backgrounds/blur-background'
import { Button, type ButtonProps } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Songs } from '@/components/ui/songs'
import {
  useMusicState,
  usePlayerActions,
  usePlayerState,
} from '@/store/app.store'
import { ChevronDown, ListVideo } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { ScrollArea } from '../ui/scroll-area'

interface PlayerPlaylistProps extends ButtonProps {}

const PlayerPlaylist = (props: PlayerPlaylistProps) => {
  const { playlist, currentIndex } = useMusicState()

  const { isPlaylistOpen } = usePlayerState()
  const { togglePlaylist } = usePlayerActions()

  const currentSong = playlist?.[currentIndex]

  /**
   * Handle body overflow when drawer is open
   *
   * The drawer component needs to be modal=false to interact with the player
   * But it needs to be modal to prevent the body from scrolling
   * This is a hack to prevent the body from scrolling and to add padding to the body when the drawer is open
   */
  React.useEffect(() => {
    if (isPlaylistOpen) {
      document.body.style.overflowY = 'scroll'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.removeAttribute('style')
    }

    return () => {
      document.body.removeAttribute('style')
    }
  }, [isPlaylistOpen])

  return (
    <Drawer open={isPlaylistOpen} onOpenChange={togglePlaylist} modal={false}>
      <DrawerTrigger
        className="data-[state=open]:bg-primary data-[state=open]:text-primary-foreground"
        asChild
      >
        <Button variant="ghost" size="icon" {...props}>
          <ListVideo className="h-4 w-4" />
          <span className="sr-only">Open Playlist</span>
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <BlurBackground src={USER_ALBUM.thumb} />

        <DrawerTitle className="sr-only">Playlist</DrawerTitle>
        <DrawerDescription className="sr-only">
          Manage your playlist
        </DrawerDescription>

        <DrawerClose className="absolute top-3 right-3 max-sm:hidden" asChild>
          <Button>
            <ChevronDown className="h-4 w-4" />
            Minimize
          </Button>
        </DrawerClose>

        <div className="container flex h-dvh gap-5 py-10 max-md:flex-wrap md:pt-20 md:pb-40">
          <div className="flex w-full flex-col items-center justify-center gap-5">
            <div className="h-64 w-64 overflow-hidden rounded-xl">
              <Image
                src={`https://img.youtube.com/vi/${currentSong?.youtubeId}/0.jpg`}
                alt={currentSong?.name ?? ''}
                width={256}
                height={256}
                className="pointer-events-none h-full w-full scale-125 object-cover"
              />
            </div>

            <div className="text-center">
              <h2 className="font-bold text-lg sm:text-xl">
                {currentSong?.name}
              </h2>

              <div className="text-muted-foreground text-sm">
                {currentSong?.singer}
              </div>
            </div>
          </div>

          <ScrollArea className="w-full">
            <Songs songs={playlist} />
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default PlayerPlaylist
