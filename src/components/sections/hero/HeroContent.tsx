import { ArrowRight } from 'lucide-react'
import PartnerIcon from '../../icons/PartnerIcon'
import TextRollButton from '../../ui/TextRollButton'

function HeroContent() {
  return (
    <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
      <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-sm">
        Axion Studio
      </p>

      <h1 className="max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
        We craft digital experiences
        <span className="sm:hidden"> </span>
        <br className="hidden sm:block" />
        for brands ready to dominate
        <span className="sm:hidden"> </span>
        <br className="hidden sm:block" />
        their category online.
      </h1>

      <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
        <TextRollButton
          label="Start a project"
          className="rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:pl-6"
          textClassName="text-[13px] font-medium sm:text-sm"
          circleClassName="h-7 w-7 bg-white sm:h-8 sm:w-8"
          icon={<ArrowRight size={16} className="text-[#F26522]" />}
        />

        <div className="inline-flex w-fit items-center gap-2 rounded-[4px] bg-white px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] sm:gap-3 sm:px-4">
          <PartnerIcon />
          <span className="text-[13px] font-medium text-gray-900 sm:text-sm">
            Certified Partner
          </span>
          <span className="rounded bg-gray-900 px-1.5 py-0.5 text-[10px] text-white sm:px-2 sm:text-[11px]">
            Featured
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeroContent
