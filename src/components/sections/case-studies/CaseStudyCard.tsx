import { ArrowRight } from 'lucide-react'
import LinkChainIcon from '../../icons/LinkChainIcon'

interface CaseStudyCardProps {
  title: string
  description: string
  videoSrc: string
  aspectClass: string
  bgClass: string
  buttonVariant: 'light' | 'dark'
  buttonLabel: string
  buttonWidth: string
}

function CaseStudyCard({
  title,
  description,
  videoSrc,
  aspectClass,
  bgClass,
  buttonVariant,
  buttonLabel,
  buttonWidth,
}: CaseStudyCardProps) {
  const isLight = buttonVariant === 'light'

  return (
    <article>
      <div
        className={`group relative ${aspectClass} cursor-pointer overflow-hidden rounded-2xl ${bgClass}`}
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />

        <div
          className={`absolute bottom-4 left-4 flex h-9 w-9 items-center overflow-hidden rounded-full transition-all duration-300 ease-in-out ${buttonWidth} ${
            isLight ? 'bg-white' : 'bg-gray-900'
          }`}
        >
          <span
            className={`min-w-0 flex-1 whitespace-nowrap pl-4 text-[13px] font-medium opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100 ${
              isLight ? 'text-gray-900' : 'text-white'
            }`}
          >
            {buttonLabel}
          </span>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center">
            {isLight ? (
              <LinkChainIcon className="h-[14px] w-[14px] -rotate-45 text-gray-900 transition-transform duration-300 ease-in-out group-hover:rotate-0" />
            ) : (
              <ArrowRight
                size={14}
                className="-rotate-45 text-white transition-transform duration-300 ease-in-out group-hover:rotate-0"
                aria-hidden="true"
              />
            )}
          </span>
        </div>
      </div>

      <p className="mt-4 text-[13px] leading-relaxed text-gray-600 sm:text-sm">
        {description}
      </p>
      <h3 className="mt-1 text-sm font-semibold text-gray-900 sm:text-[15px]">
        {title}
      </h3>
    </article>
  )
}

export default CaseStudyCard
