import { Clock, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useIndiaTime } from '../hooks/useIndiaTime'
import TextRollButton from './TextRollButton'

const NAV_ITEMS = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Careers', to: '/careers' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkHeroVisible, setIsDarkHeroVisible] = useState(false)
  const indiaTime = useIndiaTime()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const darkRoutes = ['/about', '/careers']
    if (!darkRoutes.includes(location.pathname)) {
      setIsDarkHeroVisible(false)
      return
    }

    const hero = document.querySelector('[data-dark-nav-hero]')
    if (!hero) {
      setIsDarkHeroVisible(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkHeroVisible(entry.isIntersecting)
      },
      { threshold: 0.25 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [location.pathname])

  const useDarkCapsules = useMemo(
    () => ['/about', '/careers'].includes(location.pathname) && isDarkHeroVisible,
    [location.pathname, isDarkHeroVisible]
  )

  const capsuleClass = useMemo(() => {
    if (useDarkCapsules) {
      return `rounded-full border backdrop-blur-sm ${
        isScrolled
          ? 'bg-gray-900/90 border-gray-800 shadow-md'
          : 'bg-gray-900/80 border-gray-800'
      }`
    }
    return `rounded-full border backdrop-blur-sm ${
      isScrolled ? 'bg-white/95 border-gray-100 shadow-md' : 'bg-white/90 border-gray-100'
    }`
  }, [isScrolled, useDarkCapsules])

  const logoTextClass = useDarkCapsules ? 'text-white' : 'text-gray-900'
  const navTextClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      useDarkCapsules
        ? isActive
          ? 'text-white'
          : 'text-gray-300 hover:text-white'
        : isActive
          ? 'text-gray-900'
          : 'text-gray-600 hover:text-gray-900'
    }`
  const clockText = useDarkCapsules ? 'text-gray-300' : 'text-gray-600'

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className={`${capsuleClass} flex items-center gap-2.5 px-4 py-2.5`}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
            GT
          </div>
          <span className={`hidden text-sm font-semibold sm:block ${logoTextClass}`}>GravityTech</span>
        </Link>

        <nav
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 px-5 py-2.5 md:flex ${capsuleClass}`}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navTextClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className={`${capsuleClass} hidden items-center gap-1.5 px-3 py-2 lg:flex`}>
            <Clock size={13} className={useDarkCapsules ? 'text-gray-400' : 'text-gray-500'} />
            <span className={`text-xs ${clockText}`}>{indiaTime} IST</span>
          </div>
          <TextRollButton
            label="Start a Project"
            href="/careers#apply"
            variant="dark"
            className="!rounded-full !py-2.5 !pl-5 !pr-2 text-sm"
          />
          <button
            type="button"
            className="rounded-full bg-gray-900 p-2.5 text-white md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 md:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        />

        <div
          className={`absolute inset-x-3 bottom-3 rounded-2xl bg-white p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
            <span>{indiaTime} IST</span>
          </div>

          <nav className="mb-8 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-[28px] font-medium text-gray-900 sm:text-[32px]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <TextRollButton
            label="Start a Project"
            href="/careers#apply"
            variant="dark"
            size="lg"
            className="w-full justify-between"
          />
        </div>
      </div>
    </>
  )
}

export default Navbar
