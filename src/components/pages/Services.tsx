import PageHero from '../PageHero'
import SectionBadge from '../SectionBadge'
import TextRollButton from '../TextRollButton'
import AnimatedSection from '../AnimatedSection'
import { CheckCircle2 } from 'lucide-react'
import { SERVICES_DETAIL, WHY_GRAVITYTECH } from '../../constants/data'

const HERO_STATS = [
  '4 Core Services',
  '50+ Deployments',
  'Enterprise Grade',
  '24/7 Support',
]

function Services() {
  return (
    <main>
      <PageHero>
        <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-sm">
          GravityTech Software
        </p>

        <h1 className="max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          Enterprise IT services
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          built for scale
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          and reliability.
        </h1>

        <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          <TextRollButton label="Explore services →" href="#services-list" variant="primary" />
          <div className="flex flex-wrap gap-2">
            {HERO_STATS.map((stat) => (
              <span
                key={stat}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      <section id="services-list" className="overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
            <SectionBadge number="1" label="What we offer" />
          </div>

          <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-28 lg:px-12">
            Four core capabilities.
          </h2>

          <div className="px-5 sm:px-8 lg:px-12">
            {SERVICES_DETAIL.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 1

              return (
                <div
                  key={service.title}
                  className={`flex flex-col items-center gap-12 border-b border-gray-100 py-16 last:border-0 lg:gap-16 ${
                    isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  <div className="relative w-full overflow-hidden rounded-2xl lg:w-[45%]">
                    <div
                      className="relative aspect-[4/3] w-full"
                      style={{ background: service.bg }}
                    >
                      <div
                        className="absolute inset-0 opacity-80"
                        style={{ background: service.color }}
                      />
                      <div className="absolute right-1/4 top-1/4 h-24 w-24 animate-pulse rounded-full bg-white/10 blur-xl" />
                      <div className="animate-float absolute bottom-1/3 left-1/3 h-16 w-16 rounded-full bg-white/5 blur-lg" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={80} className="text-white/20" aria-hidden="true" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-[55%]">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#1fb6e8]">
                      0{index + 1}
                    </p>
                    <h3 className="mb-5 text-3xl font-medium tracking-tight text-gray-900 lg:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mb-8 text-base leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                    <ul className="mb-10 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                          <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1fb6e8]/10">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#1fb6e8]" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <TextRollButton label="Get Started" variant="primary" href="/careers#apply" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-[#f8f9fa] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-gray-900 sm:text-4xl">
              Every service. One delivery partner.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-gray-600">
              You don&apos;t need four different agencies for CRM, HR tech, enterprise software, and
              payroll. GravityTech does all four — with one unified team, one point of contact, and
              one shared context across your entire tech stack.
            </p>
          </div>
          <div className="space-y-4">
            {[
              'Same team across all service lines',
              'Shared context — no repeated briefings',
              'One contract, one invoice, one relationship',
              'Scale up or down across services as needed',
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm text-gray-700">
                <CheckCircle2 size={18} className="shrink-0 text-[#1fb6e8]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
            <SectionBadge number="2" label="Why choose us" borderClassName="border-gray-300" />
          </div>

          <h2 className="mb-10 px-5 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mb-14 sm:px-8 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-16 lg:px-12">
            Built different.
          </h2>

          <div className="grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:gap-7 lg:px-12">
            {WHY_GRAVITYTECH.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-gray-200 hover:shadow-md"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1fb6e8]/10 transition-colors duration-300 group-hover:bg-[#1fb6e8]/20">
                    <Icon size={20} className="text-[#1fb6e8]" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
