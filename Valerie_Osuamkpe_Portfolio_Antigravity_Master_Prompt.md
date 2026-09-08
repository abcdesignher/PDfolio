# Antigravity IDE Master Prompt
## Valerie Osuamkpe Portfolio Website

You are an experienced product engineer, frontend engineer, and product designer.

Build a complete, production-ready MVP portfolio website for **Valerie Osuamkpe**.

The website must feel like a real product, not a generic portfolio template. It should communicate that Valerie is a **product designer with an engineering edge** through both the content and the way the website behaves.

The primary audience is **hiring managers and recruiters**.

The website should be interactive, well organized, responsive, accessible, fast, and visually distinctive without becoming an animation experiment.

---

# 1. Product Goal

Create a personal portfolio website that:

1. Clearly communicates Valerie's positioning within the first few seconds.
2. Makes selected work easy to discover.
3. Shows product design thinking and an engineering mindset.
4. Allows hiring managers to explore projects without unnecessary friction.
5. Surfaces Valerie's writing and technical thinking naturally.
6. Provides a quick way to contact Valerie.
7. Uses motion and interaction to improve the experience.
8. Works well on desktop, tablet, and mobile.
9. Supports light and dark themes.
10. Can be maintained easily by an AI coding agent without a database or CMS.

The first version should prioritize **clarity, usability, content, and product quality** over visual complexity.

---

# 2. Core Positioning

## Primary positioning

**PRODUCT DESIGNER WITH AN ENGINEERING EDGE**

The website should make this positioning believable through its design, interactions, case studies, and engineering details.

Do not rely on generic statements such as:

- "I create beautiful experiences."
- "I am passionate about design."
- "I solve problems with creativity."
- "I turn ideas into reality."

Instead, communicate practical product thinking.

The website should suggest:

- understanding users
- simplifying complex problems
- designing workflows
- thinking about systems
- understanding how interfaces connect to logic and data
- collaborating across design and engineering
- turning product ideas into working experiences

---

# 3. Homepage Copy

Use this as the initial homepage copy.

## Hero headline

**I design products and build the systems behind them.**

## Supporting text

**Product designer with an engineering edge, focused on turning complex problems into clear, useful digital experiences.**

## Primary CTA

**Explore work**

## Secondary CTA

**Let's talk**

Keep all homepage copy inside an editable content structure so it can be changed easily after the first UI review.

Do not hard-code important content into many unrelated components.

---

# 4. Website Structure

The homepage is the main converting page.

Use these sections:

1. Header / Navigation
2. Hero
3. Selected Work
4. About / Approach
5. Articles / Thinking
6. More Work
7. Contact
8. Footer

Use dedicated routes for deeper project case studies:

```text
/
 /work/agricon
 /work/pocketwise
 /work/achieve
```

Do not create unnecessary pages for v1.

There should not be a separate About page or Contact page unless there is a strong product reason.

---

# 5. Selected Projects

Use the **three most recent projects currently shown on Valerie's Behance portfolio** as the featured projects:

1. **Agricon**
2. **Pocketwise AI**
3. **ACHIEVE**

Use local structured project data.

Do not scrape Behance at runtime.

Do not invent missing project information.

If information is unavailable, leave it out rather than creating fake details, metrics, research findings, outcomes, users, or responsibilities.

---

# 6. Project Experience

The project interaction should feel more like exploring a product state than opening a generic portfolio modal.

Preferred interaction:

```text
HOME
↓
PROJECT SELECTED STATE
↓
PROJECT PREVIEW
↓
FULL PROJECT ROUTE
```

On the homepage, clicking a project should create a clear focused state.

The preview may use an expanded panel, focused section, or similar interaction.

Do not make a traditional centered modal the primary project experience unless it genuinely produces the best UX.

The selected state should:

- clearly indicate which project is active
- preserve context
- provide a concise project overview
- allow the user to continue to the full case study
- be keyboard accessible
- support Escape where appropriate
- manage focus correctly
- support browser navigation where appropriate
- work on mobile using tap rather than hover

The full case study should have its own shareable URL.

---

# 7. Case Study Structure

Each project page should follow a consistent structure.

Use:

1. Project introduction
2. Problem
3. Context
4. Role
5. Users, if known
6. Goals
7. Process
8. Key decisions
9. Solution
10. Engineering considerations
11. Outcome, if known
12. Lessons learned
13. Behance link
14. Next project navigation

The structure should feel editorial rather than like a rigid corporate report.

Use strong typography, clear hierarchy, large visual moments, and concise writing.

Do not manufacture:

- statistics
- business results
- user research
- conversion improvements
- client statements
- project responsibilities
- technical implementations
- timelines
- team sizes

Only use information that is actually available.

---

# 8. Project Data Architecture

Create a local project data structure.

For example:

```text
src/
  data/
    projects.js
    articles.js
    siteContent.js
```

Each project should support fields similar to:

```text
id
slug
title
shortDescription
category
role
year
featured
coverImage
images
problem
context
users
goals
process
decisions
solution
engineering
outcome
lessons
behanceUrl
tools
```

Use only fields that have real content.

The data structure should make future projects easy to add.

---

# 9. More Work

Do not attempt to reproduce every Behance project on the website.

Use the main portfolio to show curated work.

Add a clear **More Work** section that directs users to Valerie's Behance portfolio for the wider archive.

The website should feel curated rather than overloaded.

---

# 10. Articles

Use the **two most recent articles currently published on Valerie's Medium profile**:

1. **Background Jobs: The Work Your Application Does When You're Not Waiting**
2. **From "Build a Pet Sitter App" to a Better AI Prompt: A Practical Anatomy of Instruction Design**

Articles should be represented naturally inside the portfolio.

Each article card should include:

- title
- short description
- publication date where available
- external article link
- relevant category or topic where useful

Do not duplicate the full article content on the portfolio.

Do not scrape Medium at runtime.

Use local article data.

The article section should communicate that Valerie thinks beyond visual design and understands product engineering, systems, and technology.

---

# 11. Visual Direction

The website must have a strong visual identity.

Primary brand colors:

```text
Light Blue: #ACD6FE
Dark Blue: #07367A
```

Typography:

```text
Display / Attention: Instrument Serif
Body / Interface: Instrument Sans
```

Use the fonts appropriately.

Instrument Serif should create moments of emphasis.

Instrument Sans should handle navigation, body copy, labels, metadata, buttons, and interface elements.

Do not overuse the serif font.

---

# 12. Three Circle Brand Motif

Valerie commonly uses **three circles cutting through text** as a visual motif.

Turn this into a recognizable brand system rather than using circles randomly.

The three circles can appear in:

- hero composition
- project framing
- section transitions
- selected project states
- contact section
- other meaningful visual moments

The circles can vary in:

- size
- position
- clipping
- scale
- opacity
- movement

But they should still feel like the same visual language.

Create the motif as a reusable component.

The component should support properties such as:

```text
size
position
opacity
movement
clipping
theme
responsive behavior
```

Do not turn the circles into decorative noise.

---

# 13. Portrait

Use Valerie's supplied portrait as a genuine brand asset.

Do not force the portrait to use the blue palette.

The portrait can retain its warm pink background and provide human contrast against the structured blue interface.

Use it intentionally.

Do not place the portrait simply because a portfolio template normally contains a profile photo.

Possible uses include:

- About section
- Hero supporting visual
- transition between sections

Choose the placement that produces the strongest product experience.

If the portrait file is available in the project workspace, use it.

If it is not available, create the asset path so it can be added easily:

```text
public/assets/valerie-osuamkpe-portrait
```

Do not generate a replacement portrait.

---

# 14. Visual Personality

The website should feel:

- confident
- editorial
- structured
- experimental but controlled
- intelligent
- human
- modern
- product focused

Use:

- strong typography
- controlled asymmetry
- intentional whitespace
- large visual moments
- interesting composition
- clear hierarchy
- recurring visual motifs
- meaningful interaction
- carefully designed project states

Avoid making the website look like a generic SaaS landing page.

Do not use visual trends simply because they are popular.

---

# 15. Things to Avoid

Do NOT build the portfolio around:

- generic portfolio templates
- excessive gradient blobs
- random 3D objects
- floating glass cards everywhere
- random particles
- developer terminal graphics
- code backgrounds
- excessive glassmorphism
- unnecessary cursor effects
- stock illustrations
- excessive parallax
- animations that delay content
- huge animation libraries
- WebGL or Three.js without a real product reason
- visual effects that reduce readability
- unnecessary dashboards
- unnecessary sidebars
- fake metrics
- fabricated case study information

The site should demonstrate engineering thinking without looking like a developer portfolio.

---

# 16. Motion Philosophy

Motion is important, but motion must support the product experience.

Every animation should have a reason.

Use motion for:

- navigation
- hierarchy
- feedback
- storytelling
- discovery
- transitions
- brand expression

Avoid animation simply because it looks impressive.

Motion should feel:

- intentional
- smooth
- restrained
- responsive
- connected to interaction

Prefer CSS and native browser capabilities.

Do not introduce a large animation library unless the project genuinely needs one.

Implement `prefers-reduced-motion`.

Users who prefer reduced motion should receive a usable experience with substantially reduced animation.

---

# 17. Theme System

Implement:

- Light
- Dark
- System

The user's choice should persist using localStorage.

Light mode should lean into:

```text
#ACD6FE
```

Dark mode should use:

```text
#07367A
```

alongside near-black/dark surfaces where appropriate.

Do not simply invert colors.

Both themes should feel intentionally designed.

The theme switch should be obvious but not visually dominant.

---

# 18. Responsive Design

Design for:

```text
320px
375px
390px
768px
1024px
1280px
1440px
```

The experience must work properly on:

- mobile phones
- tablets
- laptops
- desktop screens

Do not simply shrink the desktop layout.

Reconsider:

- typography
- spacing
- circle placement
- navigation
- project states
- image cropping
- interaction patterns

for smaller screens.

Hover interactions must never be required for core functionality.

Use tap-friendly interactions on mobile.

No horizontal overflow.

---

# 19. Accessibility

Accessibility is required.

Implement:

- semantic HTML
- correct heading hierarchy
- keyboard navigation
- visible focus states
- sufficient color contrast
- meaningful alt text
- accessible buttons
- accessible links
- screen reader support
- accessible project states
- correct focus management
- Escape behavior where relevant
- reduced motion support

Do not use visual elements as the only way to communicate meaning.

All important interactions must remain understandable without animation.

---

# 20. Contact

Include a quick message form.

Fields:

```text
Name
Email
Message
```

Button:

```text
Send message
```

Use a free form handling solution that does not require a custom backend.

Do not build a custom server just to process the form.

Keep provider-specific configuration isolated so it can be changed later.

Never expose private API keys in frontend code.

Also provide direct contact options:

```text
Email: osuamkpevalerie@gmail.com
LinkedIn
Behance
```

The contact experience should feel quick and low friction.

---

# 21. External Links

Use external links for:

- Behance
- Medium articles
- LinkedIn
- Email

Do not pretend these services are part of the portfolio's internal application.

Where useful, open external links in a new tab and use appropriate security attributes.

---

# 22. SEO

Implement basic SEO.

Include:

- meaningful page titles
- meta descriptions
- semantic HTML
- descriptive URLs
- Open Graph metadata
- Twitter/X metadata
- useful project page titles
- sensible image alt text

The website should be understandable to search engines without requiring a CMS.

---

# 23. Performance

Performance matters.

Use:

- optimized images
- responsive image sizes where appropriate
- lazy loading where useful
- minimal dependencies
- CSS/native animation where possible
- no unnecessary runtime data fetching
- no unnecessary JavaScript

Do not add analytics in v1.

Do not add tracking scripts.

The website should load quickly on normal mobile connections.

---

# 24. Technical Requirements

Use:

- React
- JavaScript
- HTML
- CSS
- Vercel

Do not introduce technologies that are not required.

Do NOT add:

- database
- authentication
- custom backend
- CMS
- admin dashboard
- search
- project filtering
- payment system
- global state management library
- analytics
- unnecessary API integrations

Use local structured content files.

The site should remain simple enough for an AI coding agent to maintain.

---

# 25. Recommended Project Structure

Use a structure similar to:

```text
src/
  components/
  sections/
  pages/
  data/
    projects.js
    articles.js
    siteContent.js
  hooks/
  styles/
  assets/
```

Keep responsibilities clear.

For example:

```text
components/
  Header
  Footer
  ThemeToggle
  ThreeCircles
  ProjectCard
  ProjectPreview
  ArticleCard
  ContactForm

sections/
  Hero
  SelectedWork
  About
  Articles
  MoreWork
  Contact

pages/
  Home
  ProjectCaseStudy
```

Adjust the structure if a simpler implementation is better.

Do not create abstractions just for the sake of abstraction.

---

# 26. Content Management Approach

Since there is no database or CMS, content should be stored locally.

Important copy should be easy to find and edit.

Project and article content should live in structured data files.

Avoid scattering content across dozens of components.

The architecture should make it easy to:

- add a project
- remove a project
- change project text
- change article text
- change hero copy
- update links
- update contact details

without rewriting the interface.

---

# 27. Asset Handling

Use real supplied assets when available.

If the supplied visual reference is available, preserve it as a reference for:

- color
- typography
- composition
- visual personality

If it needs to be stored in the project, use:

```text
public/assets/visual-reference
```

Use appropriate image formats and optimize them for the web.

Do not use placeholder stock images where real project assets are available.

Do not fabricate project screenshots.

---

# 28. Product Designer + Engineer Experience

The website itself should demonstrate the engineering edge.

This can appear through:

- thoughtful interaction states
- strong responsive behavior
- well designed transitions
- accessible components
- clear information architecture
- careful handling of state
- structured content architecture
- project previews
- theme persistence
- good loading behavior
- useful error states
- clean URL structure

Do not add engineering features that do not improve the experience.

The goal is not to prove that Valerie can write code by showing code.

The goal is to show that Valerie understands how products behave.

---

# 29. Inspiration

Use high-quality product designer and award-winning portfolio websites as visual inspiration where useful.

Look for inspiration from strong product design portfolios and current high-quality web design examples.

Study:

- typography
- storytelling
- interaction
- hierarchy
- project presentation
- transitions
- responsive behavior
- visual identity

Do not copy layouts, wording, branding, or interactions directly.

The result must feel original and specific to Valerie.

The goal is:

**inspired by high-quality work, not assembled from a trend library.**

---

# 30. Main User Journey

Design the primary hiring-manager journey around:

```text
Land on website
↓
Understand who Valerie is
↓
Understand product designer + engineering edge
↓
See selected work
↓
Preview a project
↓
Open full case study
↓
Understand how Valerie thinks
↓
Read supporting technical/product thinking
↓
Contact Valerie
```

The user should never have to hunt for the main portfolio value.

---

# 31. Navigation

Keep navigation simple.

Suggested navigation:

```text
Work
About
Thinking
Contact
```

The navigation should work as both:

- section navigation on the homepage
- useful navigation from project pages

The current section/state should be clear where appropriate.

On mobile, use a simple accessible navigation pattern.

Do not create a complicated mega menu.

---

# 32. Error and Empty States

Handle basic failures gracefully.

Examples:

- project image fails
- article link unavailable
- contact form fails
- JavaScript fails
- project route does not exist

For JavaScript failure, the core portfolio content should still remain as usable as possible through semantic HTML and normal links.

Do not allow a decorative animation system to become a dependency for accessing the portfolio.

---

# 33. JavaScript Failure Strategy

The website should degrade gracefully.

Core content should exist in the DOM.

Important navigation should use normal links.

Do not make every interaction dependent on JavaScript.

If JavaScript fails:

- users should still see content
- project links should remain accessible
- external links should work
- basic navigation should remain usable
- text should remain readable

---

# 34. Browser Support

Target current major versions of:

- Chrome
- Edge
- Safari
- Firefox

Test both desktop and mobile behavior.

Avoid experimental browser APIs unless there is a strong fallback.

---

# 35. No Runtime Scraping

Do not fetch Behance or Medium content dynamically.

The following should be manually represented in local data:

- featured projects
- project descriptions
- article information
- external URLs

This makes the portfolio faster and more reliable.

---

# 36. Homepage Experience

The homepage should feel like one coherent product.

Do not make every section look like a separate webpage.

Create continuity through:

- typography
- spacing
- circle motif
- color
- transitions
- recurring interaction patterns

The user should feel that the page is telling one story.

---

# 37. Visual Hierarchy

The most important hierarchy should be:

1. Valerie's positioning
2. Selected work
3. Product thinking
4. Engineering edge
5. Articles / thinking
6. Contact

Do not let decoration compete with the work.

The portfolio projects are the product.

---

# 38. Case Study Visuals

Project pages should prioritize visual storytelling.

Use large project imagery where available.

Allow:

- full-width images
- image grids
- detail views
- process visuals
- interface screenshots

Do not place every image inside a small card.

Use whitespace to create rhythm.

---

# 39. Article Presentation

Articles should not look like blog spam.

Use a small number of strong cards.

Make titles prominent.

Use article topics to reinforce Valerie's thinking around:

- product engineering
- systems
- AI
- design
- technology
- building digital products

---

# 40. About Section

Keep the About section concise.

It should communicate:

- who Valerie is
- product design background
- engineering edge
- interest in simplifying complexity
- connection between design and working software

Do not create an unnecessarily long biography.

Do not invent personal details.

---

# 41. Footer

The footer should include:

- Valerie Osuamkpe
- positioning
- email
- LinkedIn
- Behance
- relevant navigation
- copyright

Keep it simple.

---

# 42. Implementation Sequence

Build in this order:

## Phase 1: Foundation

1. Inspect the workspace.
2. Confirm available assets.
3. Set up React application if not already set up.
4. Establish typography.
5. Establish colors.
6. Establish spacing and layout primitives.
7. Create local content data structures.

## Phase 2: Core Experience

8. Build header.
9. Build hero.
10. Build selected work.
11. Build project selection state.
12. Build About section.
13. Build Articles section.
14. Build More Work.
15. Build Contact.
16. Build footer.

## Phase 3: Project Pages

17. Build reusable case study template.
18. Add Agricon.
19. Add Pocketwise AI.
20. Add ACHIEVE.
21. Add Behance links.
22. Add next-project navigation.

## Phase 4: Product Behavior

23. Implement light/dark/system theme.
24. Persist theme preference.
25. Implement meaningful motion.
26. Implement reduced motion.
27. Implement responsive behavior.
28. Implement accessible states.
29. Implement contact form.

## Phase 5: Quality

30. Test keyboard navigation.
31. Test screen reader behavior.
32. Test mobile layouts.
33. Test desktop layouts.
34. Test all routes.
35. Test broken links.
36. Test JavaScript failure/degraded behavior.
37. Optimize images.
38. Check performance.
39. Check SEO.
40. Remove unnecessary dependencies.
41. Fix visual inconsistencies.
42. Fix layout overflow.
43. Test theme switching.
44. Test project preview states.

---

# 43. Definition of Done

The MVP is complete only when:

### Product

- A hiring manager understands Valerie's positioning quickly.
- The website feels like a real product.
- The portfolio does not feel generic.
- Selected work is easy to discover.
- Projects can be previewed and explored.
- Full project routes work.
- Articles are represented naturally.
- More work links to Behance.
- Contact is easy.

### Design

- Brand colors are used intentionally.
- Instrument Serif and Instrument Sans are used correctly.
- Three-circle motif is recognizable but controlled.
- Portrait is used intentionally.
- Light and dark themes both feel designed.
- Typography and spacing are consistent.
- Motion supports the experience.
- Visual hierarchy remains clear.

### Accessibility

- Keyboard navigation works.
- Focus states are visible.
- Screen readers can understand the structure.
- Project states are accessible.
- Reduced motion works.
- Contrast is acceptable.
- Buttons and links are properly labeled.

### Responsive

- Mobile works.
- Tablet works.
- Desktop works.
- No horizontal overflow.
- No core interaction depends on hover.

### Engineering

- React is used appropriately.
- Code is organized.
- Content is structured locally.
- No database exists.
- No custom backend exists.
- No authentication exists.
- No unnecessary stack has been introduced.
- No runtime scraping exists.
- No private credentials are exposed.
- Vercel deployment is straightforward.

### Performance

- Images are optimized.
- Unnecessary dependencies are removed.
- Animations are not excessive.
- Content does not wait unnecessarily for JavaScript.
- The site feels fast.

### Content Integrity

- No project facts are fabricated.
- No fake metrics are created.
- No fake research is created.
- No fake outcomes are created.
- No fake client information is created.

---

# 44. Important Development Rule

Do not stop at generating a visually attractive first pass.

After building the first version, inspect it as:

1. A product designer
2. A frontend engineer
3. A hiring manager

Then fix the problems you find.

Ask:

### Product designer

Does the experience communicate clearly?

### Frontend engineer

Is the implementation clean, resilient, responsive, and maintainable?

### Hiring manager

Can I quickly understand:

- who Valerie is
- what she does
- what she has built
- how she thinks
- why the engineering edge matters
- how to contact her

If any answer is unclear, improve the interface.

---

# 45. Final Principle

The portfolio should not say:

**"I am a product designer with an engineering edge."**

and then behave like a static gallery.

It should demonstrate the statement.

The website should feel like a product that was:

**thought through, designed, engineered, and refined.**

Build the simplest version that achieves that convincingly.

Do not add complexity for the sake of complexity.
Do not add animation for the sake of animation.
Do not add technology for the sake of technology.

Make the experience memorable because it is **clear, intentional, useful, and distinct.**
