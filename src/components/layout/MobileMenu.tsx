import { ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '../../constants/content'
import { useLondonTime } from '../../hooks/useLondonTime'
import TextRollButton from '../ui/TextRollButton'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const londonTime = useLondonTime()

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-label="Close menu"
      />

      <div
        className={`absolute inset-x-3 bottom-3 rounded-2xl bg-white p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
          <span>{londonTime} in London</span>
        </div>

        <nav className="mb-8 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[28px] font-medium text-gray-900 sm:text-[32px]"
              onClick={onClose}
            >
              {link}
            </a>
          ))}
        </nav>

        <TextRollButton
          label="Start a project"
          className="w-full justify-between rounded-full bg-gray-900 py-3 pl-6 pr-3 text-white"
          textClassName="text-base font-medium"
          circleClassName="h-8 w-8 bg-white"
          icon={<ArrowRight size={16} className="text-gray-900" />}
        />
      </div>
    </div>
  )
}

export default MobileMenu
