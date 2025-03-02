import { BlurBackground } from '@/components/backgrounds/blur-background'
import { AlbumInfo } from '@/components/ui/album/album.info'
import { Songs } from '@/components/ui/songs'
import { getAlbum, getAlbums } from '@/services/queries/album'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
  const data = await getAlbums()

  if (!data) {
    return notFound()
  }

  return data.map((album) => ({
    id: album.id.toString(),
  }))
}

export const generateMetadata = async (
  props: AlbumsPageProps,
): Promise<Metadata> => {
  const { params } = props

  const idParam = await params

  const album = await getAlbum(idParam.id)

  if (!album) {
    return notFound()
  }

  return {
    title: album.name,
    description: `Album ${album.name}`,
    openGraph: {
      images: [
        {
          url: `/img/albums/${album.id}.webp`,
          width: 800,
          height: 600,
        },
      ],
    },
  }
}

interface AlbumsPageProps {
  params: Promise<{ id: string }>
}

const AlbumsPage = async (props: AlbumsPageProps) => {
  const { params } = props

  const idParam = await params

  const album = await getAlbum(idParam.id)

  if (!album) {
    return notFound()
  }

  return (
    <>
      <BlurBackground src={`/img/albums/${album.id}.webp`} />

      <div className="container space-y-10 py-20 sm:py-40">
        <AlbumInfo
          album={{ ...album, thumb: `/img/albums/${album.id}.webp` }}
        />

        {album.songs && <Songs songs={album.songs} />}
      </div>
    </>
  )
}

export default AlbumsPage
