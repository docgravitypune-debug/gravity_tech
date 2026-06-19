import { Check, ExternalLink } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import PrivacyModal from '../modals/PrivacyModal'
import TermsModal from '../modals/TermsModal'

interface EnquiryFormData {
  firstName: string
  companyEmail: string
  designation: string
  phone: string
  requirements: string
}

const PERSONAL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'icloud.com',
]

const INITIAL_DATA: EnquiryFormData = {
  firstName: '',
  companyEmail: '',
  designation: '',
  phone: '',
  requirements: '',
}

function BusinessEnquiryForm() {
  const [data, setData] = useState<EnquiryFormData>(INITIAL_DATA)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false)
  const [hasReadTerms, setHasReadTerms] = useState(false)
  const [hasReadPrivacy, setHasReadPrivacy] = useState(false)
  const [termsModalOpen, setTermsModalOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const update = <K extends keyof EnquiryFormData>(key: K, value: EnquiryFormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all duration-200 ${
      hasError
        ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/10'
        : 'border-gray-200 focus:border-[#1fb6e8] focus:ring-2 focus:ring-[#1fb6e8]/10'
    }`

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!data.firstName.trim()) newErrors.firstName = 'First name is required'

    const emailDomain = data.companyEmail.split('@')[1]?.toLowerCase()
    if (!data.companyEmail.trim()) newErrors.companyEmail = 'Company email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.companyEmail))
      newErrors.companyEmail = 'Enter a valid email address'
    else if (PERSONAL_DOMAINS.includes(emailDomain))
      newErrors.companyEmail = 'Please use your work email address'

    if (data.phone.trim() && !/^[+]?[\d\s\-()]{8,15}$/.test(data.phone.trim()))
      newErrors.phone = 'Enter a valid phone number'

    if (!data.requirements.trim()) newErrors.requirements = 'Please describe your requirements'
    else if (data.requirements.trim().length < 20)
      newErrors.requirements = 'Please add more detail about your requirements'

    if (!agreeToTerms) {
      newErrors.agreeToTerms = hasReadTerms
        ? 'Please check the box to agree to the Terms & Conditions'
        : 'Please read and agree to the Terms & Conditions'
    }

    if (!agreeToPrivacy) {
      newErrors.agreeToPrivacy = hasReadPrivacy
        ? 'Please check the box to agree to the Privacy Policy'
        : 'Please read and agree to the Privacy Policy'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateForm()) return
    setFormSubmitted(true)
    setData(INITIAL_DATA)
    setAgreeToTerms(false)
    setAgreeToPrivacy(false)
    setHasReadTerms(false)
    setHasReadPrivacy(false)
    setErrors({})
  }

  if (formSubmitted) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
        <p className="text-lg font-semibold text-gray-900">Message sent!</p>
        <p className="mt-2 text-sm text-gray-500">
          We&apos;ll get back to you within a few business days.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#1fb6e8]">
          Business Enquiry
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Build an IT Strategy Your Teams Can Act On
        </h2>
      </div>

      <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={data.firstName}
              onChange={(e) => update('firstName', e.target.value)}
              className={inputClass(!!errors.firstName)}
            />
            {errors.firstName && <p className="mt-1.5 text-xs text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Company Email"
              value={data.companyEmail}
              onChange={(e) => update('companyEmail', e.target.value)}
              className={inputClass(!!errors.companyEmail)}
            />
            {errors.companyEmail && (
              <p className="mt-1.5 text-xs text-red-500">{errors.companyEmail}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <input
              type="text"
              placeholder="Designation / Position"
              value={data.designation}
              onChange={(e) => update('designation', e.target.value)}
              className={inputClass(false)}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              value={data.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={inputClass(!!errors.phone)}
            />
            {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <textarea
            rows={4}
            placeholder="Describe your requirements..."
            value={data.requirements}
            onChange={(e) => update('requirements', e.target.value)}
            className={inputClass(!!errors.requirements)}
          />
          {errors.requirements && (
            <p className="mt-1.5 text-xs text-red-500">{errors.requirements}</p>
          )}
        </div>

        <div className="space-y-3">
          <div>
            <label className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => {
                  if (!hasReadTerms) {
                    setTermsModalOpen(true)
                  } else {
                    setAgreeToTerms((v) => !v)
                  }
                }}
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-all duration-200 ${
                  agreeToTerms
                    ? 'border-[#1fb6e8] bg-[#1fb6e8]'
                    : hasReadTerms
                      ? 'cursor-pointer border-gray-300 hover:border-[#1fb6e8]'
                      : 'cursor-pointer border-gray-200 bg-gray-50'
                }`}
              >
                {agreeToTerms && <Check size={12} className="text-white" strokeWidth={3} />}
              </button>

              <span className="text-sm leading-relaxed text-gray-600">
                I agree to GravityTech&apos;s{' '}
                <button
                  type="button"
                  onClick={() => setTermsModalOpen(true)}
                  className="inline-flex items-center gap-1 font-medium text-[#1fb6e8] underline underline-offset-2 hover:text-[#0da8da]"
                >
                  Terms & Conditions
                  <ExternalLink size={11} />
                </button>
                {!hasReadTerms && (
                  <span className="mt-1 block text-xs text-amber-600">
                    Please open and read the full document to enable this checkbox
                  </span>
                )}
              </span>
            </label>
            {errors.agreeToTerms && (
              <p className="ml-8 mt-1.5 text-xs text-red-500">{errors.agreeToTerms}</p>
            )}
          </div>

          <div>
            <label className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => {
                  if (!hasReadPrivacy) {
                    setPrivacyModalOpen(true)
                  } else {
                    setAgreeToPrivacy((v) => !v)
                  }
                }}
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-all duration-200 ${
                  agreeToPrivacy
                    ? 'border-[#1fb6e8] bg-[#1fb6e8]'
                    : hasReadPrivacy
                      ? 'cursor-pointer border-gray-300 hover:border-[#1fb6e8]'
                      : 'cursor-pointer border-gray-200 bg-gray-50'
                }`}
              >
                {agreeToPrivacy && <Check size={12} className="text-white" strokeWidth={3} />}
              </button>

              <span className="text-sm leading-relaxed text-gray-600">
                I agree to GravityTech&apos;s{' '}
                <button
                  type="button"
                  onClick={() => setPrivacyModalOpen(true)}
                  className="inline-flex items-center gap-1 font-medium text-[#1fb6e8] underline underline-offset-2 hover:text-[#0da8da]"
                >
                  Privacy Policy
                  <ExternalLink size={11} />
                </button>
                {!hasReadPrivacy && (
                  <span className="mt-1 block text-xs text-amber-600">
                    Please open and read the full document to enable this checkbox
                  </span>
                )}
              </span>
            </label>
            {errors.agreeToPrivacy && (
              <p className="ml-8 mt-1.5 text-xs text-red-500">{errors.agreeToPrivacy}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gray-900 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>

      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => {
          setTermsModalOpen(false)
          if (hasReadTerms) setAgreeToTerms(true)
        }}
        onFullyRead={() => setHasReadTerms(true)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => {
          setPrivacyModalOpen(false)
          if (hasReadPrivacy) setAgreeToPrivacy(true)
        }}
        onFullyRead={() => setHasReadPrivacy(true)}
      />
    </>
  )
}

export default BusinessEnquiryForm
