import { Link } from 'react-router-dom'
import TextRollButton from './TextRollButton'

const footerLinks = {
  pages: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Careers', to: '/careers' },
  ],
  services: [
    { label: 'CRM', to: '/services' },
    { label: 'Talent Acquisition', to: '/services' },
    { label: 'Enterprise', to: '/services' },
    { label: 'Payroll', to: '/services' },
  ],
  programs: [
    { label: 'SCIP Program', to: '/careers#scip' },
    { label: 'Internships', to: '/careers#openings' },
    { label: 'Apply Now', to: '/careers#apply' },
  ],
  connect: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
  ],
}

function Footer() {
  return (
    <footer className="mx-4 mb-4 rounded-3xl bg-gray-900 px-8 py-12 sm:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <span className="text-[11px] font-bold tracking-tight text-white">GT</span>
            </div>
            <span className="text-sm font-medium text-white">GravityTech Software</span>
          </div>

          <TextRollButton
            label="Start a Project"
            href="/careers#apply"
            variant="primary"
            size="sm"
          />
        </div>

        <div className="my-8 border-t border-white/10" />

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Pages
            </p>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Services
            </p>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Programs
            </p>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Connect
            </p>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p className="text-xs text-white/30">
              © 2026 GravityTech Software. All rights reserved.
            </p>
            <p className="text-xs text-white/30">Pune · Dubai · Delaware</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
