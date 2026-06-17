import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import SectionBadge from '../SectionBadge'
import TextRollButton from '../TextRollButton'
import {
  APPLY_ROLES,
  PERKS,
  PERK_TAGS,
  ROLE_FILTERS,
  ROLES,
  SCIP_BENEFITS,
  SCIP_STEPS,
  type RoleFilter,
} from '../../constants/data'

function Careers() {
  const [activeFilter, setActiveFilter] = useState<RoleFilter>('All')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    linkedin: '',
    message: '',
  })

  const filteredRoles =
    activeFilter === 'All'
      ? ROLES
      : ROLES.filter((role) => role.category === activeFilter)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <section
        className="relative flex min-h-screen flex-col"
        style={{
          background: 'linear-gradient(160deg, #f0f9ff 0%, #eaf8fe 60%, #e0f2fe 100%)',
        }}
      >
        <div className="flex-1" />
        <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-sm">
            GravityTech Software
          </p>

          <h1 className="max-w-5xl text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
            Build your career
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            on real projects
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            that ship.
          </h1>

          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-5">
            <TextRollButton label="View Open Positions →" href="#openings" variant="primary" />
            <TextRollButton label="Learn About SCIP →" href="#scip" variant="dark" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 flex flex-col gap-6 px-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">
            <SectionBadge number="1" label="Why join us" />
            <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
              We support your growth in and out of work through monitoring,
              flexibility, real project practice, and portfolio-focused outcomes.
            </p>
          </div>

          <h2 className="mb-8 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:px-8 lg:px-12">
            Perks and benefits.
          </h2>

          <div className="mb-10 flex flex-wrap gap-2 px-5 sm:px-8 lg:px-12">
            {PERK_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="columns-1 gap-5 px-5 sm:columns-2 sm:px-8 lg:columns-3 lg:px-12">
            {PERKS.map((perk, index) => {
              const Icon = perk.icon
              const isStaggered = [1, 4, 7, 10].includes(index)

              return (
                <div
                  key={perk.title}
                  style={{ breakInside: 'avoid', marginBottom: '20px' }}
                  className={`rounded-2xl border border-transparent bg-[#F5F5F5] p-7 transition-all duration-300 hover:border-gray-200 hover:bg-white hover:shadow-sm ${
                    isStaggered ? 'pb-14' : ''
                  }`}
                >
                  <div className="mb-5 text-[#1fb6e8]">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">{perk.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{perk.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="openings" className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 flex flex-col gap-6 px-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">
            <SectionBadge number="2" label="Join the team" borderClassName="border-gray-300" />
            <p className="text-sm text-gray-600">Don&apos;t see a fit? Send your resume anyway.</p>
          </div>

          <h2 className="mb-8 px-5 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:px-8 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:px-12">
            Open positions.
          </h2>

          <div className="mb-8 flex flex-wrap gap-2 px-5 sm:px-8 lg:px-12">
            {ROLE_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 text-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 px-5 sm:px-8 md:grid-cols-2 lg:px-12">
            {filteredRoles.map((role) => (
              <div
                key={role.title}
                role="button"
                tabIndex={0}
                onClick={scrollToApply}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    scrollToApply()
                  }
                }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-gray-200 hover:shadow-md"
              >
                <div className="h-1.5 w-full" style={{ background: role.deptColor }} />
                <div className="p-7">
                  <span
                    className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                    style={{
                      background: role.deptColorSoft,
                      color: role.deptColor,
                    }}
                  >
                    {role.dept}
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">{role.title}</h3>
                  <p className="mb-5 text-sm text-gray-500">
                    {role.location} · {role.type}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">{role.description}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center overflow-hidden rounded-full bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-[130px]">
                      <span className="min-w-0 flex-1 whitespace-nowrap pl-4 text-xs font-medium text-white opacity-0 transition-opacity delay-100 duration-200 group-hover:opacity-100">
                        Apply now
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                        <ArrowRight
                          size={14}
                          className="-rotate-45 text-white transition-transform duration-300 group-hover:rotate-0"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">{role.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="scip" className="mx-5 my-10 rounded-2xl bg-gray-900 px-6 py-16 sm:mx-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-8 inline-block rounded-full border border-[#1fb6e8]/40 bg-[#1fb6e8]/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#1fb6e8]">
              Exclusive Program
            </span>

            <h2 className="mb-3 text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              SCIP Program
            </h2>

            <p className="mb-6 text-lg font-medium text-white/50 sm:text-xl">
              Specialized Corporate Incubation Program
            </p>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/60">
              We hire driven individuals — freshers, career switchers, and
              early-stage professionals — and put them through an intensive,
              job-oriented training program. Every SCIP participant works on live
              client projects from day one, building a real portfolio under expert
              mentorship.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TextRollButton label="Apply for SCIP" variant="primary" href="#apply" />
              <a
                href="#apply"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                Learn more about the program ↓
              </a>
            </div>
          </div>

          <div className="relative mb-16 flex items-start">
            <div className="absolute left-[16.67%] right-[16.67%] top-6 hidden h-px bg-gradient-to-r from-[#1fb6e8] via-[#7c3aed] to-[#1fb6e8] opacity-30 sm:block" />

            {SCIP_STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className="flex flex-1 flex-col items-center px-4 text-center"
                >
                  <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#1fb6e8]/40 bg-gray-800">
                    <Icon size={20} className="text-[#1fb6e8]" aria-hidden="true" />
                  </div>
                  <p className="mb-3 font-mono text-xs tracking-widest text-[#1fb6e8]/60">
                    0{index + 1}
                  </p>
                  <h3 className="mb-2 text-base font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{step.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SCIP_BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-[#1fb6e8]/30 hover:bg-white/[0.08]"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-[#1fb6e8]"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-white/70">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-white/30">
            SCIP runs in quarterly cohorts · Next batch: Q3 2026
          </p>
        </div>
      </section>

      <section id="apply" className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
            <SectionBadge number="3" label="Apply now" borderClassName="border-gray-300" />
          </div>

          <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-20 lg:px-12">
            Tell us about yourself.
          </h2>

          <div className="grid grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
            <div>
              <p className="mb-8 text-base leading-relaxed text-gray-600">
                Fill out the form and our talent team will get back to you within
                a few business days.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  '⚡ Fast response — within 2 business days',
                  '🌐 Remote-friendly roles available',
                  '🎓 Freshers and switchers welcome',
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm text-gray-600 shadow-sm"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#1fb6e8]/10">
                    <CheckCircle2 size={28} className="text-[#1fb6e8]" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Application received!
                  </h3>
                  <p className="text-sm text-gray-500">
                    We&apos;ll review it and reach out within a few business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="tel"
                      required
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                    />
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                    >
                      <option value="">Select Role</option>
                      {APPLY_ROLES.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="url"
                    placeholder="LinkedIn / Portfolio"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Why GravityTech?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10"
                  />
                  <TextRollButton
                    label="Submit Application"
                    type="submit"
                    variant="primary"
                    className="w-full justify-between"
                    size="lg"
                  />
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Careers
