export const siteConfig = {
  name: 'Tom d\'Arcy',
  title: 'Operations Leader & Robotics Builder',
  description: 'From prototype to scale. Taking manufacturing technology that works in the lab and making it run 24/7 across continents.',
  url: 'https://tomdarcy.github.io/tom-portfolio',
  links: {
    linkedin: 'https://www.linkedin.com/in/thomasdarcyuk/',
    github: 'https://github.com/tomdarcy',
    email: 'mailto:thomasdarcy@outlook.com',
  },
}

export const heroContent = {
  headline: 'I make robots work for a living.',
  subheadline: 'Operations leader turning manufacturing technology into factories that actually run.',
  stats: [
    { value: '14', label: 'sites' },
    { value: '12', label: 'countries' },
    { value: '£M', label: 'P&L' },
  ],
  ctas: {
    primary: { text: 'See the work', href: '/experience' },
    secondary: { text: 'Get in touch', href: '/contact' },
  },
}

export const aboutContent = {
  headline: 'Taking manufacturing tech from pilot to scale',
  narrative: `I'm an operations leader who specialises in the messy middle—taking cutting-edge manufacturing technology from "it works in the lab" to "it's running 24/7 across 14 sites."

My career started on the factory floor at Rolls-Royce, where I eventually led the team assembling the world's largest jet engine. I've since driven Industry 4.0 transformation across 12 countries, optimised pharmaceutical supply chains at BCG, and now I'm building robotic manufacturing systems at AUAR that are changing how we construct buildings.

What makes me different: I write Python and I run P&Ls. I can debug a PLC and present to a board. That bridge between the technical and the commercial is where I do my best work.

When I'm not on a factory floor, I'm probably in my workshop—woodworking, welding, or building something that didn't exist yesterday.`,
  quickFacts: [
    { label: 'Based', value: 'Leighton Buzzard, UK' },
    { label: 'Nationality', value: 'UK & EU citizen' },
    { label: 'Currently', value: 'Head of Robotics & Deployments, AUAR' },
    { label: 'Background', value: 'Rolls-Royce → Edwards Vacuum → BCG → Startup' },
    { label: 'Makes', value: 'Robots behave. Factories scale. Things with my hands.' },
  ],
  credentials: [
    { icon: '🏆', text: 'UK Manufacturer Top 100 (2021)' },
    { icon: '🏆', text: 'Young Manufacturer of the Year (2017)' },
    { icon: '🎓', text: 'MSc Engineering Business Management, Warwick' },
    { icon: '📜', text: 'IOSH Managing Safely' },
    { icon: '💻', text: 'Le Wagon Full Stack Development' },
  ],
}

export type ExperienceStation = {
  id: string
  company: string
  logo?: string
  role: string
  period: string
  tagline?: string
  highlights: string[]
  caseStudy?: {
    title: string
    href: string
  }
}

export const experienceStations: ExperienceStation[] = [
  {
    id: 'auar',
    company: 'AUAR Ltd',
    logo: '/logos/auar.svg',
    role: 'Head of Robotics & Deployments',
    period: '2025–Present',
    tagline: 'Building the robots that build buildings.',
    highlights: [
      'Took next-gen product from design launch to test launch in <3 months, under budget',
      'Own full customer deployment lifecycle across Europe and North America',
      'Scaled engineering team by 50%+ while implementing agile governance',
    ],
  },
  {
    id: 'factorypulse',
    company: 'FactoryPulse Digital',
    logo: '/logos/fp.png',
    role: 'Founder',
    period: '2025',
    tagline: 'A short chapter building MES tools for SME manufacturers.',
    highlights: [
      'Built bespoke Manufacturing Execution System focused on usability for discrete manufacturing',
      'Supported digital transformation for small and mid-sized manufacturers',
    ],
  },
  {
    id: 'bcg',
    company: 'Boston Consulting Group',
    logo: '/logos/BCG.svg',
    role: 'Consultant, Operations Practice',
    period: '2024–2025',
    tagline: 'Sharpening the strategic toolkit.',
    highlights: [
      'Led Lean production system rollout in QC lab for major sterile pharma manufacturer',
      'Delivered 10% reduction in 6-week lead time through digital tools and lean methods',
      'Drove raw material cost optimisation during critical biologic tech transfer',
    ],
  },
  {
    id: 'edwards',
    company: 'Edwards Vacuum',
    logo: '/logos/AC.svg',
    role: 'Senior Manager, Industry 4.0',
    period: '2023–2024',
    tagline: 'Global digital transformation at scale.',
    highlights: [
      'Directed Industry 4.0 rollout across 14 facilities in 12 countries',
      'Led global team of Manufacturing Engineers, Data Analysts, and Software Engineers',
      'Executed multiple >£1M CapEx projects including fully remote MES deployment in Taiwan',
      'Consolidated business unit\'s digital toolkit by 90%+ onto MS Azure',
    ],
  },
  {
    id: 'rr-innovation',
    company: 'Rolls-Royce',
    logo: '/logos/rr.svg',
    role: 'Innovation & DemoWorks Lead',
    period: '2020–2022',
    tagline: 'Running the factory that built the future of flight.',
    highlights: [
      '24/7 factory operations with full P&L accountability',
      'Team of ~50 engineers, technicians, and shift managers',
      'Directed assembly of the UltraFan—the world\'s largest jet engine',
      'Led MES deployment across 6 factories in UK and Germany',
    ],
    caseStudy: {
      title: 'UltraFan: Building the World\'s Largest Jet Engine',
      href: '#ultrafan',
    },
  },
  {
    id: 'rr-production',
    company: 'Rolls-Royce',
    logo: '/logos/rr.svg',
    role: 'Production Lead',
    period: '2019–2020',
    highlights: [
      'Managed 20-person team across complex project logistics',
      '£2M+ annual logistics spend accountability',
      'Key 3PL partner relationship management',
    ],
  },
  {
    id: 'rr-olp',
    company: 'Rolls-Royce',
    logo: '/logos/rr.svg',
    role: 'Operations Leadership Programme',
    period: '2014–2019',
    tagline: 'Where it started.',
    highlights: [
      '4.5-year accelerated development programme',
      'Rotations across manufacturing functions',
      'Built the operational foundation everything else sits on',
    ],
  },
]

export const credentialsLogos = [
  { name: 'Rolls-Royce', src: 'logos/rr.svg' },
  { name: 'Edwards', src: '/logos/AC.svg' },
  { name: 'BCG', src: '/logos/BCG.svg' },
  { name: 'AUAR', src: '/logos/auar.svg' },
]

export const contactContent = {
  headline: 'Let\'s talk',
  description: 'I\'m always interested in discussing new opportunities, collaborations, or just connecting with fellow builders.',
  openTo: [
    'Advisory roles in manufacturing tech',
    'Speaking opportunities',
    'Collaboration on robotics & automation projects',
  ],
}
