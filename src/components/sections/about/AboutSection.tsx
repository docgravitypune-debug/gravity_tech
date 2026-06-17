import { ArrowRight } from 'lucide-react'
import { LARGE_IMAGE_URL, SMALL_IMAGE_URL } from '../../../constants/content'
import TextRollButton from '../../ui/TextRollButton'
import SectionBadge from '../../ui/SectionBadge'

function AboutSection() {
  return (
    <section className="overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <SectionBadge number="1" label="Introducing Axion" />
        </div>

        <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-28 lg:px-12">
          Strategy-led creatives, delivering
          <br />
          results in digital and beyond.
        </h2>

        <div className="px-5 sm:px-8 lg:hidden">
          <p className="text-[15px] font-medium leading-[1.6] text-gray-900 sm:text-[17px]">
            Through research, creative thinking and iteration we help growing
            brands realize their digital full potential.
          </p>

          <div className="mt-6">
            <TextRollButton
              label="About our studio"
              className="rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-white transition-colors duration-300 hover:bg-[#e05a1a] sm:pl-6"
              textClassName="text-[13px] font-medium sm:text-sm"
              circleClassName="h-7 w-7 bg-white sm:h-8 sm:w-8"
              icon={<ArrowRight size={16} className="text-[#F26522]" />}
            />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-5">
            <img
              src={SMALL_IMAGE_URL}
              alt="Axion Studio creative workspace"
              className="aspect-[438/346] w-full rounded-xl object-cover sm:w-[45%] sm:rounded-2xl"
            />
            <img
              src={LARGE_IMAGE_URL}
              alt="Axion Studio team collaboration"
              className="aspect-[900/600] w-full rounded-xl object-cover sm:w-[55%] sm:rounded-2xl"
            />
          </div>
        </div>

        <div className="hidden items-end gap-6 px-5 sm:px-8 lg:grid lg:grid-cols-[26%_1fr_48%] lg:px-12 xl:gap-8">
          <div className="self-end">
            <img
              src={SMALL_IMAGE_URL}
              alt="Axion Studio creative workspace"
              className="aspect-[438/346] w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-col items-end justify-end self-start">
            <p className="whitespace-nowrap text-base font-medium leading-[1.65] text-gray-900 lg:text-lg">
              Through research, creative thinking
              <br />
              and iteration we help growing brands
              <br />
              realize their digital full potential.
            </p>

            <div className="mt-6">
              <TextRollButton
                label="About our studio"
                className="rounded-full bg-[#F26522] py-2 pl-6 pr-2 text-white transition-colors duration-300 hover:bg-[#e05a1a]"
                textClassName="text-sm font-medium"
                circleClassName="h-8 w-8 bg-white"
                icon={<ArrowRight size={16} className="text-[#F26522]" />}
              />
            </div>
          </div>

          <div className="self-end">
            <img
              src={LARGE_IMAGE_URL}
              alt="Axion Studio team collaboration"
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
