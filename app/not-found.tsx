import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const LottiePlayer = dynamic(() => import('@/components/ui/lottie'))

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="container relative flex max-w-screen-md flex-1 flex-col py-20">
        <div className="order-2 flex flex-col gap-5">
          <div>
            <output className="font-medium text-sm">Error 404</output>

            <h2 className="font-bold text-2xl md:text-5xl">Hey Buddy</h2>
          </div>

          <p className="text-balance">
            We can't seem to find the page
            <br />
            you are looking for.
          </p>

          <div>
            <Button className="font-semibold" size="lg" asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>

        <LottiePlayer
          className="-z-[1] inset-0 order-1 size-full sm:absolute"
          path="/lottie/astronaut.lottie"
        />
      </div>
    </div>
  )
}

export default NotFoundPage
