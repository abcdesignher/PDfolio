export const projects = [
  {
    id: 'agricon',
    slug: 'agricon',
    title: 'Agricon',
    category: 'Product design · Web platform',
    role: 'Product design, UX, UI',
    featured: true,
    cover: {
      accent: '#3E9B6E',
      accentSoft: '#D7EFE2',
    },
    shortDescription:
      'An agriculture product that helps users manage farm operations and make clearer decisions from their data.',
    behanceUrl: 'https://behance.net/valtashvaltash',
    tools: ['Product design', 'UX', 'UI', 'Design systems', 'Prototyping'],
    problem:
      'Agriculture work involves scattered information — records, weather, inputs, finances — spread across tools and paper. Decisions get made from incomplete context.',
    context:
      'Agricon was designed as an agriculture product aimed at simplifying how farm operations are tracked, planned, and reviewed in one place.',
    goals: [
      'Give users a single place to see the full picture of an operation.',
      'Turn routine data into something a farmer can act on quickly.',
      'Keep the interface usable despite a large amount of information.',
    ],
    process:
      'The work started by mapping the core activities a user performs, then grouping them into a small set of clear workflows. Interface structure, states, and navigation were designed around those workflows before visual polish.',
    decisions: [
      'Lead with the most frequent actions instead of dense dashboards.',
      'Organize complex data into progressive levels of detail.',
      'Design empty and in-progress states so the product communicates even without data.',
    ],
    solution:
      'A focused product experience that turns farm data into understandable views, with simple flows for the tasks users do most.',
    engineering:
      'The design treats data, loading, empty, and error states as first-class parts of the interface, so the structure holds up when it connects to real systems.',
    outcome: '',
    lessons:
      'Complex domains get easier when you actively simplify what the user sees first — and keep the details one clear step away.',
  },
  {
    id: 'pocketwise',
    slug: 'pocketwise',
    title: 'Pocketwise AI',
    category: 'Product design · AI fintech app',
    role: 'Product design, UX, UI',
    featured: true,
    cover: {
      accent: '#4B6BF0',
      accentSoft: '#E2E7FD',
    },
    shortDescription:
      'An AI personal finance assistant that helps people understand their money and make confident decisions.',
    behanceUrl: 'https://behance.net/valtashvaltash',
    tools: ['Product design', 'UX', 'UI', 'AI product design', 'Prototyping'],
    problem:
      'Personal finance tools tend to show numbers without meaning. People want to know what to do next, not just what happened.',
    context:
      'Pocketwise AI is an AI personal finance assistant designed to make money advice more approachable — helping users see their situation clearly and act with confidence.',
    goals: [
      'Explain money decisions in plain language.',
      'Turn financial data into a clear sense of what matters.',
      'Make an AI-led experience feel trustworthy and understandable.',
    ],
    process:
      'Design began with the conversation: how a user would ask a question, what the AI needs to answer well, and how the interface should make the exchange legible and safe.',
    decisions: [
      'Present AI guidance with supporting context instead of a bare answer.',
      'Give users control over sensitive financial actions rather than automating them.',
      'Design for uncertainty — when the AI is unsure, the interface says so.',
    ],
    solution:
      'An AI finance experience where guidance is clear, grounded, and never an unexplained black box.',
    engineering:
      'The design anticipates streaming responses, error and retry states, and the careful role an interface plays when AI is the core of the experience.',
    outcome: '',
    lessons:
      'AI products need the interface to carry a lot of trust — clarity about what the AI knows and does not know is a design problem, not just a model problem.',
  },
  {
    id: 'achieve',
    slug: 'achieve',
    title: 'ACHIEVE',
    category: 'Product design · App',
    role: 'Product design, UX, UI',
    featured: true,
    cover: {
      accent: '#D97706',
      accentSoft: '#FDEBCF',
    },
    shortDescription:
      'A goal and habit product that turns intentions into a focused, achievable plan.',
    behanceUrl: 'https://behance.net/valtashvaltash',
    tools: ['Product design', 'UX', 'UI', 'Motion design'],
    problem:
      'Goal-setting apps often focus on recording — streaks, charts, and logs. People get motivation at the start but lose momentum when the plan does not adapt to real life.',
    context:
      'ACHIEVE is a product designed around helping people follow through on goals, by making the plan feel small, clear, and adjustable.',
    goals: [
      'Reduce the friction between setting a goal and showing up for it.',
      'Make progress feel meaningful without relying on pressure.',
      'Let the plan bend when life happens, instead of breaking.',
    ],
    process:
      'The core loop was designed first: choose a goal, break it down, show up, adjust. Every screen either supports that loop or is removed.',
    decisions: [
      'Prioritize a clear next action over graphs and streaks.',
      'Design setback as a normal state with a simple way back in.',
      'Use motion to mark progress without letting it dominate.',
    ],
    solution:
      'A goal product where the next step is always obvious, and where adjusting a plan is just as normal as making it.',
    engineering:
      'The interface is built around consistent states — done, missed, adjusted — so the product logic stays simple and predictable as the app grows.',
    outcome: '',
    lessons:
      'Motivation products succeed on follow-through, not features. Keeping the next action visible and recoverable is the whole job.',
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)

export const getNextProject = (slug) => {
  const index = projects.findIndex((p) => p.slug === slug)
  return projects[(index + 1) % projects.length]
}