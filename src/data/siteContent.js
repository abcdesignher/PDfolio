export const siteContent = {
  brand: {
    name: 'Valerie Osuamkpe',
    role: 'Product designer with an engineering edge',
  },

  seo: {
    title: 'Valerie Osuamkpe — Product Designer',
    description:
      'Valerie Osuamkpe is a product designer with an engineering edge, focused on turning complex problems into clear, useful digital experiences.',
    author: 'Valerie Osuamkpe',
    url: 'https://valerie-portfolio.vercel.app',
    image: '/assets/og-cover.png',
    twitterHandle: '@valerieosuamkpe',
  },

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Thinking', href: '/#thinking' },
    { label: 'Contact', href: '/#contact' },
  ],

  hero: {
    eyebrow: 'Portfolio',
    headline: 'I design products and build the systems behind them.',
    supporting:
      'Product designer with an engineering edge, focused on turning complex problems into clear, useful digital experiences.',
    primaryCta: { label: 'Explore work', href: '#work' },
    secondaryCta: { label: 'Let’s talk', href: '#contact' },
    scrollLabel: 'Scroll',
  },

  selectedWork: {
    eyebrow: 'Selected work',
    heading: 'Selected work',
    intro:
      'Three recent products, chosen to show how the work moves from problem to decision to working interface.',
    label: 'Projects',
  },

  about: {
    eyebrow: 'About',
    heading: 'Design that holds up under pressure.',
    body: [
      'Valerie is a product designer who works between interface and system. She designs workflows that are simple to use and practical to build — connecting what people need with how a product actually works.',
      'Her background spans product design and software fundamentals, which means she thinks about states, data, and constraints as part of the design, not after it.',
      'She is especially interested in taking complex or ambiguous problems and turning them into clear, usable experiences.',
    ],
    portraitAlt: 'Portrait of Valerie Osuamkpe',
    portraitPath: '/val2.png',
  },

  articles: {
    eyebrow: 'Thinking',
    heading: 'Thinking in public',
    intro:
      'Writing about product engineering, systems, AI, and building digital products.',
    label: 'Articles',
  },

  moreWork: {
    eyebrow: 'More work',
    heading: 'More work on Behance',
    intro:
      'The wider archive — process studies, experiments, and earlier product work.',
    cta: { label: 'See the full portfolio', href: 'https://www.behance.net/' },
  },

  contact: {
    eyebrow: 'Contact',
    heading: 'Let’s talk',
    intro:
      'Open to product design roles and interesting problems. The quickest way to reach me is email.',
    email: 'osuamkpevalerie@gmail.com',
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        fallbackText: 'Connect on LinkedIn',
      },
      {
        label: 'Behance',
        href: 'https://www.behance.net/',
        fallbackText: 'See work on Behance',
      },
    ],
    form: {
      headline: 'Send a message',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitLabel: 'Send message',
      formEndpoint: '',
      successMessage:
        'Thanks — your message is on its way. I usually reply within a day or two.',
      errorMessage:
        'Something went wrong sending your message. Please try again, or email me directly.',
      missingEndpointNote:
        'The contact form will open your email app until the form endpoint is configured.',
    },
  },

  footer: {
    tagline: 'Product designer with an engineering edge.',
    copyright: '© {year} Valerie Osuamkpe.',
  },
}