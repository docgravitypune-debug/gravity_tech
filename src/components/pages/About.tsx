import SectionBadge from '../SectionBadge'
import TextRollButton from '../TextRollButton'
import { CORE_VALUES, OFFICES } from '../../constants/data'

const STATS = ['50+ Products', '30+ Engineers', '3 Offices', '100% Live Projects']

function About() {
  return (
    <main>
      <section
        className="relative flex min-h-screen flex-col"
        style={{
          background: 'linear-gradient(160deg, #eaf8fe 0%, #f0f9ff 50%, #e8f4f8 100%)',
        }}
      >
        <div className="flex-1" />
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-sm">
            GravityTech Software
          </p>

          <h1 className="max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
            We engineer what&apos;s
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            next for enterprise
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            software teams.
          </h1>

          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <TextRollButton label="Meet the team →" href="/careers" variant="primary" />
            <div className="flex flex-wrap gap-2">
              {STATS.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
            <SectionBadge number="1" label="Our Story" />
          </div>

          <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-28 lg:px-12">
            Strategy-led engineers,
            <br />
            delivering results in
            <br />
            software and beyond.
          </h2>

          <div className="px-5 sm:px-8 lg:hidden">
            <p className="text-[15px] font-medium leading-[1.6] text-gray-900 sm:text-[17px]">
              Through engineering excellence, AI-first thinking, and relentless
              iteration we help growing enterprises realize their full technology
              potential.
            </p>
            <div className="mt-6">
              <TextRollButton label="About GravityTech →" href="/services" variant="primary" />
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-5">
              <div className="flex aspect-[438/346] w-full flex-col justify-between rounded-xl bg-gray-900 p-8 sm:w-[45%] sm:rounded-2xl">
                <p className="text-sm font-medium uppercase tracking-widest text-white/50">
                  Founded
                </p>
                <div>
                  <p className="text-6xl font-bold text-white">2020</p>
                  <p className="mt-2 text-sm text-white/60">
                    Building enterprise software for the next decade
                  </p>
                </div>
              </div>
              <div className="aspect-[900/600] w-full rounded-xl border border-[#1fb6e8]/20 bg-[#f8fffe] p-8 sm:w-[55%] sm:rounded-2xl">
                <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#1fb6e8]">
                  Core Values
                </p>
                {CORE_VALUES.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 border-b border-gray-100 py-3 last:border-0"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1fb6e8]" />
                    <p className="text-sm font-medium text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden items-end gap-6 px-5 sm:px-8 lg:grid lg:grid-cols-[26%_1fr_48%] lg:px-12 xl:gap-8">
            <div className="self-end">
              <div className="flex aspect-[438/346] flex-col justify-between rounded-2xl bg-gray-900 p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-white/50">
                  Founded
                </p>
                <div>
                  <p className="text-6xl font-bold text-white">2020</p>
                  <p className="mt-2 text-sm text-white/60">
                    Building enterprise software for the next decade
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end justify-end self-start">
              <p className="whitespace-nowrap text-base font-medium leading-[1.65] text-gray-900 lg:text-lg">
                Through engineering excellence, AI-first
                <br />
                thinking, and relentless iteration we help
                <br />
                growing enterprises realize their full potential.
              </p>
              <div className="mt-6">
                <TextRollButton label="About GravityTech →" href="/services" variant="primary" />
              </div>
            </div>

            <div className="self-end">
              <div className="aspect-[3/2] rounded-2xl border border-[#1fb6e8]/20 bg-[#f8fffe] p-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#1fb6e8]">
                  Core Values
                </p>
                {CORE_VALUES.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 border-b border-gray-100 py-3 last:border-0"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1fb6e8]" />
                    <p className="text-sm font-medium text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
            <SectionBadge number="2" label="Where we work" borderClassName="border-gray-300" />
          </div>

          <h2 className="mb-10 px-5 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mb-14 sm:px-8 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-16 lg:px-12">
            Our global offices
          </h2>

          <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-3 lg:gap-7 lg:px-12">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="rounded-2xl border border-gray-100 bg-white p-8"
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {office.country}
                </p>
                <p className="mb-2 text-2xl font-semibold text-gray-900">{office.city}</p>
                <p className="text-sm text-gray-500">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
