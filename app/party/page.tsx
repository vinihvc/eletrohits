import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { RemoveScroll } from 'react-remove-scroll'
import { PartyBackground } from './_components/party-background'

const LottiePlayer = dynamic(() => import('@/components/ui/lottie'))
const Confetti = dynamic(() => import('@/components/ui/confetti'))

export const metadata: Metadata = {
  title: 'Party',
}

const PartyPage = () => {
  return (
    <PartyBackground
      className={cn(
        'flex flex-1 items-center justify-center',
        RemoveScroll.classNames.fullWidth,
      )}
    >
      <div className="relative aspect-video w-[450px]">
        <LottiePlayer path="/lottie/parrot.lottie" />
      </div>

      <Confetti />
    </PartyBackground>
  )
}

export default PartyPage
