import { ArrowRight, Clock, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NAV_LINKS } from '../../constants/content'
import { useLondonTime } from '../../hooks/useLondonTime'
import TextRollButton from '../ui/TextRollButton'
import MobileMenu from './MobileMenu'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const londonTime = useLondonTime()

  return (
    <>
      <nav className="relative z-20 mx-auto max-w-[1440px] p-2 sm:p-3">
        <div className="flex items-center justify-between rounded-full bg-white p-[5px]">
          <div className="flex items-center gap-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 sm:h-10 sm:w-10">
              <span className="text-[10px] font-bold tracking-tight text-white sm:text-[11px]">
                AX
              </span>
            </div>

            <div className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-900 transition-colors duration-300 hover:text-gray-500"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <span className="hidden text-[13px] text-gray-600 lg:inline">
              Taking on projects for Q1 2026
            </span>

            <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} aria-hidden="true" />
              <span>{londonTime} in London</span>
            </div>

            <TextRollButton
              label="Book a strategy call"
              className="rounded-full bg-gray-900 py-2 pl-5 pr-2 text-white"
              textClassName="text-[13px] font-medium"
              circleClassName="h-6 w-6 bg-white"
              icon={<ArrowRight size={14} className="text-gray-900" />}
            />
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <>
                Close
                <X size={16} aria-hidden="true" />
              </>
            ) : (
              <>
                Menu
                <Menu size={16} aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Navbar
