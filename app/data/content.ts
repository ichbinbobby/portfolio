export const page = {
  seo: {
    title: 'ichbinbobby – Frontend Developer',
    description: 'Frontend specialist based in Berlin, Germany. 5+ years of Vue.js experience, modernizing legacy web apps at STRATO AG.'
  },
  title: 'Hey, I\'m Bobby – Frontend Developer',
  description: 'I build fast, accessible web applications with Vue.js. Based in Berlin, crafting clean code and thoughtful UIs since 2017.',
  hero: {
    links: [
      {
        label: 'Resume',
        to: 'https://resume.ichbinbobby.de/',
        icon: 'i-lucide-file-user',
        color: 'neutral' as const,
        target: '_blank' as const
      }
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=400&fit=crop&auto=format', alt: 'Code on a screen' },
      { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop&auto=format', alt: 'Laptop with code editor' },
      { src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=400&fit=crop&auto=format', alt: 'Code editor close-up' },
      { src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=400&fit=crop&auto=format', alt: 'Developer workspace' },
      { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&auto=format', alt: 'Code on monitor' },
      { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop&auto=format', alt: 'MacBook with code' },
      { src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=400&h=400&fit=crop&auto=format', alt: 'Technology workspace' },
      { src: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&h=400&fit=crop&auto=format', alt: 'Developer at work' },
      { src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=400&fit=crop&auto=format', alt: 'Software development' }
    ]
  },
  about: {
    title: 'About Me',
    description: 'Frontend developer with 5+ years at STRATO AG in Berlin, specializing in Vue.js and the modernization of legacy web applications.\n\nMy path into development is unconventional — I started with a Biology degree at Humboldt-Universität, then found my calling through a dual-education apprenticeship. Since then I\'ve led framework migrations from AngularJS → Vue 2 → Vue 3 with Composition API, introduced Pinia for state management, and established unit testing with Vitest. I also use AI-assisted development tools like Claude Code in my daily workflow.'
  },
  experience: {
    title: 'Work Experience',
    items: [
      {
        date: '2020 – Present',
        position: 'Frontend Developer at',
        company: {
          name: 'STRATO AG',
          logo: 'i-lucide-building-2',
          url: 'https://www.strato.de',
          color: '#FF6600'
        }
      },
      {
        date: '2017 – 2020',
        position: 'App Developer Apprentice at',
        company: {
          name: 'STRATO AG',
          logo: 'i-lucide-graduation-cap',
          url: 'https://www.strato.de',
          color: '#FF6600'
        }
      },
      {
        date: 'Jun – Aug 2019',
        position: 'IT Service Desk Intern at',
        company: {
          name: 'Health Service Executive',
          logo: 'i-lucide-heart-pulse',
          url: 'https://www.hse.ie',
          color: '#005EB8'
        }
      }
    ]
  },
  faq: {
    title: 'Frequently Asked Questions',
    description: 'Common questions about my work, approach, and background.',
    categories: [
      {
        title: 'Technical Skills',
        questions: [
          {
            label: 'What is your primary tech stack?',
            content: 'My core stack is Vue.js 3 (Composition API) and Nuxt for the frontend. I use TypeScript for type safety, Pinia for state management, and Vitest for unit testing. For styling I work with Tailwind CSS, Vuetify, and vanilla CSS/SCSS.'
          },
          {
            label: 'Do you have backend experience?',
            content: 'During my apprenticeship I rotated through backend teams and worked with Python/Django, Perl, and Golang. My primary expertise is frontend, but I can read and collaborate effectively on backend code.'
          },
          {
            label: 'How do you approach large-scale legacy migrations?',
            content: 'Incrementally. I\'ve led AngularJS → Vue 2 → Vue 3 migrations at STRATO, always running old and new code side-by-side. The key is establishing test coverage before refactoring, migrating one component at a time, and keeping the team aligned throughout.'
          }
        ]
      },
      {
        title: 'Work & Background',
        questions: [
          {
            label: 'Are you available for freelance projects?',
            content: 'I\'m currently employed full-time at STRATO AG. For freelance or consulting inquiries, feel free to reach out via LinkedIn or GitHub.'
          },
          {
            label: 'What do you enjoy most about frontend development?',
            content: 'The intersection of logic and craft. Writing code that is both correct and feels great to use — that feedback loop between writing a component and seeing it come alive in the browser is what keeps me motivated.'
          },
          {
            label: 'What are your hobbies outside of work?',
            content: 'I\'m an active Pokémon GO community ambassador, into sustainability, and enjoy traveling. I also build side projects — my Pokémon GO Code Card Generator (Nuxt 3) generates print-ready QR code PDF sheets for community events.'
          }
        ]
      }
    ]
  }
}

export type PageContent = typeof page
