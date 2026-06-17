export const NAV_LINKS = ['Projects', 'Studio', 'Journal', 'Connect'] as const

export const SMALL_IMAGE_URL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85'

export const LARGE_IMAGE_URL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85'

export const CASE_STUDIES = [
  {
    id: 'narrativ',
    title: 'Narrativ',
    description:
      'Winner of Site of the Month 2025 - an interactive 3D showcase driving record engagement',
    videoSrc:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4',
    aspectClass: 'aspect-[329/246]',
    bgClass: 'bg-[#1a1d2e]',
    buttonVariant: 'light' as const,
    buttonLabel: 'Learn more',
    buttonWidth: 'group-hover:w-[148px]',
  },
  {
    id: 'luminar',
    title: 'Luminar',
    description:
      'Transforming a dated platform into a conversion-focused brand experience',
    videoSrc:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4',
    aspectClass: 'aspect-square',
    bgClass: 'bg-[#6b6b6b]',
    buttonVariant: 'dark' as const,
    buttonLabel: 'View case study',
    buttonWidth: 'group-hover:w-[168px]',
  },
] as const
