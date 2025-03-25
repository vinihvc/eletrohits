import { cn } from '@/lib/utils'
import { useMusicState } from '@/store/app.store'
import { useMusicActions } from '@/store/app.store'
import type { SongType } from '@/types/song'
import { Heart } from 'lucide-react'

export const useLike = (data: SongType) => {
  const { liked } = useMusicState()
  const { like, dislike } = useMusicActions()

  const isLiked = liked?.find((item) => item.id === data?.id)

  const handleLike = () => (isLiked ? dislike(data) : like(data))

  const parentClass = { 'text-primary': isLiked }

  const LikeIcon = () => {
    return (
      <Heart
        data-liked={isLiked}
        className={cn('h-4 w-4 transition', {
          'fill-current stroke-current': isLiked,
        })}
      />
    )
  }

  return {
    isLiked,
    handleLike,
    parentClass,
    label: isLiked ? 'Deslike' : 'Like',
    LikeIcon,
  }
}
