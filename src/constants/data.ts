import type { LucideIcon } from 'lucide-react'
import {
  BookOpen,
  Building2,
  Clock,
  Cpu,
  Globe,
  Heart,
  Layers,
  Monitor,
  Presentation,
  Rocket,
  Search,
  Shield,
  Star,
  TrendingUp,
  UserSearch,
  Users,
  Users2,
  Wallet,
  FileText,
} from 'lucide-react'

export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Careers', to: '/careers' },
] as const

export const CLIENTS = [
  { name: 'YouGet Software Solution', category: 'Software Solutions', color: '#3b82f6', initials: 'YG' },
  { name: 'IntactBox Systems', category: 'Enterprise Systems', color: '#8b5cf6', initials: 'IB' },
  { name: 'Appligo Technosoft', category: 'Technology Services', color: '#3b82f6', initials: 'AT' },
  { name: 'Mauli Project Management', category: 'Project Management', color: '#ef4444', initials: 'MP' },
  { name: 'Guru Software Solutions', category: 'Software Consulting', color: '#3b82f6', initials: 'GS' },
  { name: 'Inbatoz Consultancy', category: 'Business Consultancy', color: '#3b82f6', initials: 'IC' },
  { name: 'Incub8 Engineering', category: 'Engineering', color: '#3b82f6', initials: 'I8' },
  { name: 'Webforge Technology', category: 'Web Technology', color: '#10b981', initials: 'WF' },
  { name: 'Zentonia Technologies', category: 'Technology Products', color: '#3b82f6', initials: 'ZT' },
  { name: 'LAPD IT Services', category: 'IT Services', color: '#3b82f6', initials: 'LI' },
  { name: 'Eklakshya Athyasika', category: 'Education', color: '#3b82f6', initials: 'EA' },
  { name: 'Agastya Athyasika', category: 'Education', color: '#ef4444', initials: 'AA' },
  { name: 'Sarathi Study Center', category: 'Education', color: '#3b82f6', initials: 'SS' },
  { name: 'Terra Forge Infra', category: 'Infrastructure', color: '#6b7280', initials: 'TF' },
  { name: 'NimbusCare', category: 'Healthcare Tech', color: '#06b6d4', initials: 'NC' },
  { name: 'FinEdge Solutions', category: 'Fintech', color: '#0ea5e9', initials: 'FE' },
] as const

export const HOME_SERVICES = [
  {
    id: 'crm',
    title: 'CRM Solutions',
    description:
      'Custom CRM platforms for sales pipelines, AI-assisted lead scoring, and real-time analytics dashboards.',
    bg: '#0f172a',
    gradient: 'linear-gradient(135deg, #1fb6e8 0%, #0ea5e9 100%)',
    icon: Users2,
    aspectClass: 'aspect-[329/246]',
    buttonVariant: 'light' as const,
    buttonLabel: 'Learn more',
    buttonWidth: 'group-hover:w-[148px]',
  },
  {
    id: 'talent',
    title: 'Talent Acquisition',
    description:
      'End-to-end recruitment technology from AI resume screening to onboarding workflows.',
    bg: '#1e1b4b',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    icon: UserSearch,
    aspectClass: 'aspect-square',
    buttonVariant: 'dark' as const,
    buttonLabel: 'View service',
    buttonWidth: 'group-hover:w-[168px]',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Solutions',
    description:
      'Large-scale ERP integrations, workflow automation, and cross-department portals engineered for scale.',
    bg: '#064e3b',
    gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    icon: Building2,
    aspectClass: 'aspect-[329/246]',
    buttonVariant: 'light' as const,
    buttonLabel: 'Learn more',
    buttonWidth: 'group-hover:w-[148px]',
  },
  {
    id: 'payroll',
    title: 'Third Party Payroll',
    description:
      'Managed payroll processing, statutory compliance (PF, ESI, TDS), and real-time payroll reporting.',
    bg: '#1c1917',
    gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
    icon: Wallet,
    aspectClass: 'aspect-square',
    buttonVariant: 'dark' as const,
    buttonLabel: 'View service',
    buttonWidth: 'group-hover:w-[168px]',
  },
] as const

export const CORE_VALUES = [
  'Engineering Integrity',
  'Outcome Over Output',
  'Long-Term Partnership',
  'Radical Transparency',
  'Continuous Learning',
  'Community First',
] as const

export const OFFICES = [
  { country: 'India', city: 'Pune', address: 'Primary Development Hub' },
  { country: 'UAE', city: 'Dubai', address: 'Middle East Operations' },
  { country: 'USA', city: 'Delaware', address: 'North America Entity' },
] as const

export const SERVICES_DETAIL = [
  {
    title: 'CRM Solutions',
    color: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    bg: '#0f172a',
    icon: Users2,
    description:
      'Custom CRM platforms built for sales teams, relationship managers, and enterprise pipelines. AI-assisted lead scoring, pipeline automation, and real-time analytics.',
    features: [
      'Lead & Contact Management',
      'Pipeline Automation',
      'AI-Powered Insights',
      'Multi-channel Integration',
      'Custom Reporting Dashboards',
    ],
    tags: ['Sales Pipeline', 'AI Scoring', 'Analytics', 'Integrations'],
  },
  {
    title: 'Talent Acquisition',
    color: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    bg: '#1e1b4b',
    icon: UserSearch,
    description:
      'End-to-end recruitment technology from job posting and AI resume screening to interview scheduling and onboarding workflows. Built for HR teams that need to move fast.',
    features: [
      'AI Resume Screening',
      'Automated Interview Scheduling',
      'Candidate Pipeline Tracking',
      'Onboarding Automation',
      'Analytics & Compliance',
    ],
    tags: ['AI Screening', 'Scheduling', 'Onboarding', 'HR Analytics'],
  },
  {
    title: 'Enterprise Solutions',
    color: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    bg: '#064e3b',
    icon: Building2,
    description:
      'Large-scale enterprise software — ERP integrations, workflow automation, cross-department portals, and custom platforms engineered for scale, security, and maintainability.',
    features: [
      'ERP & System Integration',
      'Workflow Automation',
      'Role-Based Access Control',
      'Audit & Compliance Modules',
      'Scalable Cloud Architecture',
    ],
    tags: ['ERP', 'Automation', 'RBAC', 'Cloud Scale'],
  },
  {
    title: 'Third Party Payroll',
    color: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
    bg: '#1c1917',
    icon: Wallet,
    description:
      'Fully managed payroll processing for enterprises — compliance, statutory filings (PF, ESI, TDS), salary disbursement, and real-time payroll reporting.',
    features: [
      'Multi-vendor Payroll Processing',
      'Statutory Compliance (PF, ESI, TDS)',
      'Salary Slip Automation',
      'Real-time Payroll Dashboard',
      'Year-end Filing Support',
    ],
    tags: ['PF/ESI/TDS', 'Compliance', 'Reporting', 'Automation'],
  },
] as const

export const WHY_GRAVITYTECH = [
  {
    icon: TrendingUp,
    title: '50+ Products Shipped',
    description: "From MVP to enterprise platforms, we've delivered across industries.",
  },
  {
    icon: Cpu,
    title: 'AI-First Engineering',
    description:
      'Every solution we build leverages modern AI to accelerate delivery and reduce cost.',
  },
  {
    icon: Rocket,
    title: 'Live Project Training',
    description: 'Our SCIP program deploys trainees on real client work from week 3.',
  },
  {
    icon: Layers,
    title: 'Domain Expertise',
    description:
      'Deep knowledge across healthcare, BFSI, edtech, logistics, and infrastructure.',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: 'Engineering in Pune. Operations in Dubai. Entity in Delaware.',
  },
  {
    icon: Shield,
    title: 'End-to-End Partnership',
    description: 'We stay with you from discovery to production — and beyond.',
  },
] as const

export const PERKS = [
  { icon: Heart, title: 'Health & Wellness', description: 'Guidance, healthy work habits, and support systems that keep you learning without burnout.' },
  { icon: Clock, title: 'Flexible Work Culture', description: 'Balance project work and learning with hybrid, remote-friendly, and adaptive flexibility.' },
  { icon: TrendingUp, title: 'Transparent Career Growth', description: 'Clear tracks, fair evaluations, real opportunities, and mentor feedback after every sprint.' },
  { icon: BookOpen, title: 'Dedicated Learning Budget', description: 'Access resources, tools, AI workflows, and guided practice for modern software skills.' },
  { icon: Layers, title: 'Real Project Ownership', description: 'Own modules, decisions, demos, and improvements instead of only watching others build.' },
  { icon: Users, title: 'Community Exposure', description: 'Collaborate with developers, analysts, testers, clients, mentors, and project contributors.' },
  { icon: Rocket, title: 'Career Development', description: 'Upskill with workshops, mentorship, code reviews, documentation practice, and mock demos.' },
  { icon: Monitor, title: 'High-end Project Tools', description: 'Use modern editors, AI tools, Git workflows, deployment utilities, and collaboration systems.' },
  { icon: Star, title: 'Bonus & Referrals', description: 'Extra rewards and recognition for strong delivery, referrals, and consistent improvement.' },
  { icon: Shield, title: 'Equal Opportunities', description: 'Freshers, students, switchers, and early-career talent grow through practical work.' },
  { icon: Presentation, title: 'Client Demo Exposure', description: 'Present your modules, dashboards, and delivery stories during showcase-style walkthroughs.' },
  { icon: FileText, title: 'Portfolio Support', description: 'Get help shaping project explanations, resume bullets, and confidence for technical conversations.' },
] as const

export const PERK_TAGS = [
  'Mentor-led reviews',
  'Live client projects',
  'Interview support',
  'Demo-day exposure',
  'Performance recognition',
  'Flexible timings',
] as const

export const ROLE_FILTERS = ['All', 'Engineering', 'Internships', 'Design', 'QA'] as const

export type RoleFilter = (typeof ROLE_FILTERS)[number]

export interface Role {
  title: string
  dept: string
  deptColor: string
  deptColorSoft: string
  location: string
  type: string
  salary: string
  category: string
  description: string
}

export const ROLES: Role[] = [
  {
    title: 'Java Intern',
    dept: 'Engineering',
    deptColor: '#3b82f6',
    deptColorSoft: '#eff6ff',
    location: 'Pune · Hybrid',
    type: 'Internship',
    salary: 'Stipend: ₹8k–15k/mo',
    category: 'Internships',
    description:
      'Work on live Java Spring Boot microservices for real enterprise clients. Learn through code reviews, sprint demos, and direct mentor feedback.',
  },
  {
    title: 'Python Intern',
    dept: 'AI & Data',
    deptColor: '#8b5cf6',
    deptColorSoft: '#f5f3ff',
    location: 'Pune · Hybrid',
    type: 'Internship',
    salary: 'Stipend: ₹8k–15k/mo',
    category: 'Internships',
    description:
      'Build Python automation scripts, data pipelines, and AI-assisted features deployed to real client environments from week 3.',
  },
  {
    title: 'QA Intern',
    dept: 'Quality',
    deptColor: '#10b981',
    deptColorSoft: '#f0fdf4',
    location: 'Remote',
    type: 'Internship',
    salary: 'Stipend: ₹6k–12k/mo',
    category: 'Internships',
    description:
      'Write and run automated test suites using Selenium and Playwright on live products. Gain real QA experience with JIRA and CI/CD pipelines.',
  },
  {
    title: 'Data Analytics Intern',
    dept: 'Analytics',
    deptColor: '#f59e0b',
    deptColorSoft: '#fffbeb',
    location: 'Remote',
    type: 'Internship',
    salary: 'Stipend: ₹8k–14k/mo',
    category: 'Internships',
    description:
      'Analyze real client datasets, build dashboards in Power BI and Tableau, and present insights directly in client demos.',
  },
  {
    title: 'Senior Full Stack Developer',
    dept: 'Engineering',
    deptColor: '#3b82f6',
    deptColorSoft: '#eff6ff',
    location: 'Pune · Hybrid',
    type: 'Full-time',
    salary: '₹8–18 LPA',
    category: 'Engineering',
    description:
      'Lead development of enterprise React + Node.js platforms. Mentor junior engineers and own architecture decisions end to end.',
  },
  {
    title: 'AI/ML Engineer',
    dept: 'AI & Data',
    deptColor: '#8b5cf6',
    deptColorSoft: '#f5f3ff',
    location: 'Pune · Hybrid',
    type: 'Full-time',
    salary: '₹10–20 LPA',
    category: 'Engineering',
    description:
      'Design, evaluate, and deploy AI features — LLM assistants, document processing, recommendation engines — with proper monitoring.',
  },
  {
    title: 'DevOps Engineer',
    dept: 'Infrastructure',
    deptColor: '#06b6d4',
    deptColorSoft: '#f0fdfa',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹8–16 LPA',
    category: 'Engineering',
    description:
      'Own CI/CD pipelines, AWS/Azure cloud infrastructure, and observability stacks across multiple live client projects.',
  },
  {
    title: 'UI/UX Designer',
    dept: 'Design',
    deptColor: '#ec4899',
    deptColorSoft: '#fdf2f8',
    location: 'Pune · Hybrid',
    type: 'Full-time',
    salary: '₹6–14 LPA',
    category: 'Design',
    description:
      'Design intuitive interfaces for enterprise software and AI products. Own the design system from wireframes to final handoff.',
  },
  {
    title: 'QA Automation Engineer',
    dept: 'Quality',
    deptColor: '#10b981',
    deptColorSoft: '#f0fdf4',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹6–13 LPA',
    category: 'QA',
    description:
      'Build and maintain automated test suites, integrate into CI pipelines, and help all teams ship with confidence.',
  },
  {
    title: 'HR & Talent Specialist',
    dept: 'HR',
    deptColor: '#f97316',
    deptColorSoft: '#fff7ed',
    location: 'Pune · On-site',
    type: 'Full-time',
    salary: '₹4–8 LPA',
    category: 'Engineering',
    description:
      "Own talent acquisition, SCIP cohort coordination, and employer branding for GravityTech's growing engineering team.",
  },
]

export const SCIP_STEPS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Search,
    title: 'Selective Hiring',
    desc: 'We identify raw talent — aptitude and drive matter more than years of experience.',
  },
  {
    icon: BookOpen,
    title: 'Job-Oriented Training',
    desc: '8–12 weeks of structured domain training with daily reviews and mentored sprints.',
  },
  {
    icon: Rocket,
    title: 'Live Project Deployment',
    desc: 'Real client deliverables from week 3. No dummy projects. Real responsibility.',
  },
]

export const SCIP_BENEFITS = [
  'Guaranteed live project exposure',
  'Mentorship from senior engineers',
  'Portfolio-ready by program end',
  'Job placement assistance',
  'Certification upon completion',
  'Pathway to full-time role at GravityTech',
] as const

export const APPLY_ROLES = [
  ...ROLES.map((r) => r.title),
  'SCIP Program',
] as const
