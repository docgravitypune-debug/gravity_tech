import HeroBackground from '../HeroBackground'
import SectionBadge from '../SectionBadge'
import TextRollButton from '../TextRollButton'
import ExpandHoverButton from '../ExpandHoverButton'
import { CLIENTS, HOME_SERVICES } from '../../constants/data'

function PartnerBadgeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="h-5 w-5 fill-current text-[#1fb6e8] sm:h-6 sm:w-6"
      aria-hidden="true"
    >
      <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
    </svg>
  )
}

function ClientCard({
  name,
  category,
  color,
  initials,
}: {
  name: string
  category: string
  color: string
  initials: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 transition-all duration-300 hover:border-gray-300 hover:shadow-sm">
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
        style={{ background: color }}
      >
        {initials}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{category}</p>
      </div>
    </div>
  )
}

function ClientGrid({ clients }: { clients: typeof CLIENTS }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {clients.map((client) => (
        <ClientCard key={client.name} {...client} />
      ))}
    </div>
  )
}

function ServiceCard({
  title,
  description,
  bg,
  gradient,
  imageUrl,
  icon: Icon,
  aspectClass,
  buttonVariant,
  buttonLabel,
  buttonWidth,
}: (typeof HOME_SERVICES)[number]) {
  const isLight = buttonVariant === 'light'

  return (
    <article>
      <div
        className={`group relative ${aspectClass} cursor-pointer overflow-hidden rounded-2xl`}
        style={{ background: bg }}
      >
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-35"
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{ background: gradient }}
        />
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute left-5 top-5 z-10">
          <Icon className="text-white/70" size={20} aria-hidden="true" />
        </div>
        <ExpandHoverButton
          label={buttonLabel}
          variant={buttonVariant}
          widthClass={buttonWidth}
          useLinkIcon={isLight}
        />
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

function Home() {
  const leftClients = CLIENTS.slice(0, 4)
  const rightClients = CLIENTS.slice(4)

  return (
    <main>
      <section className="relative flex min-h-screen flex-col bg-[#EFEFEF]">
        <HeroBackground />
        <div className="flex-1" />
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-sm">
            GravityTech Software
          </p>

          <h1 className="max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
            We engineer software
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            that drives enterprise
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            growth at scale.
          </h1>

          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
            <TextRollButton label="Start a Project" href="/careers#apply" variant="primary" />

            <div className="inline-flex w-fit items-center gap-2 rounded-[4px] bg-white px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] sm:gap-3 sm:px-4">
              <PartnerBadgeIcon />
              <span className="text-[13px] font-medium text-gray-900 sm:text-sm">
                Trusted Partner
              </span>
              <span className="rounded bg-gray-900 px-1.5 py-0.5 text-[10px] text-white sm:px-2 sm:text-[11px]">
                Verified
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
            <SectionBadge number="1" label="Our Clients" />
          </div>

          <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-28 lg:px-12">
            Trusted by software,
            <br />
            education, consulting,
            <br />
            and infrastructure teams.
          </h2>

          <div className="px-5 sm:px-8 lg:hidden">
            <p className="text-[15px] font-medium leading-[1.6] text-gray-900 sm:text-[17px]">
              GravityTech Software supports real-time project work and technology
              delivery for a diverse client network across modern business sectors.
            </p>
            <div className="mt-6">
              <TextRollButton label="Meet our team →" href="/about" variant="primary" />
            </div>
            <ClientGrid clients={CLIENTS} />
          </div>

          <div className="hidden items-end gap-6 px-5 sm:px-8 lg:grid lg:grid-cols-[26%_1fr_48%] lg:px-12 xl:gap-8">
            <div className="self-end">
              <div className="grid grid-cols-1 gap-3">
                {leftClients.map((client) => (
                  <ClientCard key={client.name} {...client} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end justify-end self-start">
              <p className="whitespace-nowrap text-base font-medium leading-[1.65] text-gray-900 lg:text-lg">
                GravityTech Software supports real-time
                <br />
                project work and technology delivery for
                <br />
                a diverse client network across sectors.
              </p>
              <div className="mt-6">
                <TextRollButton label="Meet our team →" href="/about" variant="primary" />
              </div>
            </div>

            <div className="self-end">
              <div className="grid grid-cols-2 gap-3">
                {rightClients.map((client) => (
                  <ClientCard key={client.name} {...client} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
            <SectionBadge number="2" label="What we deliver" borderClassName="border-gray-300" />
          </div>

          <h2 className="mb-10 px-5 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mb-14 sm:px-8 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-16 lg:px-12">
            Our services
          </h2>

          <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-2 lg:gap-7 lg:px-12">
            {HOME_SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
