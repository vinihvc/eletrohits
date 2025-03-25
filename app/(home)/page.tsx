import { InteractiveBlurBackground } from '@/components/backgrounds/interactive-blur-background'
import { AlbumCard } from '@/components/ui/album/album.card'
import { NavLink } from '@/components/ui/nav-link'
import { getAlbums } from '@/services/queries/album'

const HomePage = async () => {
  const data = await getAlbums()

  return (
    <>
      <InteractiveBlurBackground />

      <div className="container pt-20 sm:py-40">
        <div className="fade-in grid animate-in grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8">
          {data?.map((album) => (
            <NavLink
              key={album.id}
              className="group outline-hidden"
              href={`/albums/${album.id}`}
              aria-label={`View ${album.name}`}
            >
              <AlbumCard album={album} />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage
