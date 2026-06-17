import { Clock, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../constants/data'
import { useIndiaTime } from '../hooks/useIndiaTime'
import TextRollButton from './TextRollButton'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const indiaTime = useIndiaTime()

  return (
    <>
      <nav className="relative z-20 mx-auto max-w-[1440px] p-2 sm:p-3">
        <div className="flex items-center justify-between rounded-full bg-white p-[5px]">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 sm:h-10 sm:w-10"
            >
              <span className="text-[10px] font-bold tracking-tight text-white sm:text-[11px]">
                GT
              </span>
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm transition-colors duration-300 ${
                      isActive
                        ? 'text-gray-900 underline'
                        : 'text-gray-900 hover:text-gray-500'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <span className="hidden text-[13px] text-gray-600 lg:inline">
              Based in Pune, India · Global delivery
            </span>

            <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} aria-hidden="true" />
              <span>{indiaTime} IST</span>
            </div>

            <TextRollButton
              label="Start a Project"
              href="/careers#apply"
              variant="dark"
              size="sm"
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
            label="Talk to Us"
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
