'use client'

import { AlbumInfo } from '@/components/ui/album/album.info'
import { Button } from '@/components/ui/button'
import { Songs } from '@/components/ui/songs'
import { useMusicState } from '@/store/app.store'
import Link from 'next/link'

const LibraryPage = () => {
  const { liked } = useMusicState()

  const hasLiked = liked.length > 0

  return (
    <div className="container space-y-10 pt-20 sm:py-40">
      <AlbumInfo
        album={{
          id: 0,
          name: 'Likes',
          thumb: '/img/albums/library.webp',
          songs: liked,
          releaseDate: new Date('2020-01-01').toDateString(),
        }}
      />

      {!hasLiked && (
        <div className="space-y-5">
          <div className="font-medium text-base">
            Nothing in your library yet, go discover!
          </div>

          <Button size="lg" asChild>
            <Link href="/">Discover</Link>
          </Button>
        </div>
      )}

      {hasLiked && <Songs songs={liked} />}
    </div>
  )
}

export default LibraryPage
