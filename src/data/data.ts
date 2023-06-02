import obuce from '@/assets/images/projects/obuce/obuce.webp'
import obucePersona from '@/assets/images/projects/obuce/obuce-persona.webp'
import obuceJourney from '@/assets/images/projects/obuce/obuce-journey.webp'
import obuceWireframe from '@/assets/images/projects/obuce/obuce-wireframe.webp'
import obuceHifi from '@/assets/images/projects/obuce/obuce-hifi.webp'

import dramagon from '@/assets/images/projects/dramagon/dramagon.webp'
import dramagonAD from '@/assets/images/projects/dramagon/dramagon-ad.webp'
import dramagonERD from '@/assets/images/projects/dramagon/dramagon-erd.webp'
import dramagonMedfi from '@/assets/images/projects/dramagon/dramagon-medfi.webp'
import dramagonHifi from '@/assets/images/projects/dramagon/dramagon-hifi.webp'

import bkkbn from '@/assets/images/projects/bkkbn/bkkbn.webp'
import bkkbnShirt from '@/assets/images/projects/bkkbn/bkkbn-shirt.webp'
import bkkbnLogo from '@/assets/images/projects/bkkbn/bkkbn-logo.webp'

import tutor from '@/assets/images/projects/tutor/tutor.webp'
import tutorHifi from '@/assets/images/projects/tutor/tutor-hifi.webp'

import cda from '@/assets/images/projects/cda/cda.webp'
import cda0 from '@/assets/images/projects/cda/cda-0.webp'
import cda1 from '@/assets/images/projects/cda/cda-1.webp'
import cda2 from '@/assets/images/projects/cda/cda-2.webp'
import cdaLowfi from '@/assets/images/projects/cda/cda-lowfi.webp'
import cdaERD from '@/assets/images/projects/cda/cda-erd.webp'

import boongeon from '@/assets/images/projects/boongeon/boongeon.webp'
import boongeon1 from '@/assets/images/projects/boongeon/boongeon-1.webp'
import boongeon2 from '@/assets/images/projects/boongeon/boongeon-2.webp'
import boongeon3 from '@/assets/images/projects/boongeon/boongeon-3.webp'

export const data: IProject[] = [
  {
    id: Math.random().toString(36).substr(2, 9),
    type: 'ui/ux',
    year: '2020-7-1',
    title: 'Obese Reducing App',
    subtitle: 'UX Research Competition',
    image: obuce,
    madeAt: 'UX Research Competition',
    buildWith: ['Figma'],
    link: 'https://www.figma.com/file/mMKMx6uGYs7KhKrbUkxqoL/Mamen-Today?node-id=0%3A1&t=mXHmxL16ycwtspn4-1',
    github: '',
    descriptions: [
      'OBUCE - An application that could automatically determine the best diet to help the obese to do a diet based on their body needs such as calories and nutrition. The users will get their very own recommended meals and may differ from every other user. The user can cook their meal with the provided recipe or order the meal then it will be delivered in no time.',
      'This project was created for a UX Research competition with “well-being” as the main topic. It was created by me and both of my friends, Ali and Ojan. I and Ali participated as the UX Designer and Ojan as the UX Researcher. The research of this project was carried out by interviewing a few friends from our group and was conducted online due to the pandemic.',
      'First, we did a brainstorm to zoom out of the given topic. It was done to make it easier to determine the discussion for ideation. And we define food and health as our living space. Then we perform a problem search from the linkup space that we have specified. And it was found that many obese people are still confused about having suitable and optimal diet. After that, we started doing research and also doing interviews. In the next stage, I did a medium-fidelity design to facilitate the following design process. And then I continued the hi-fi design with my friends.',
      'Conducting interviews during this pandemic is a challenge that occurs because of the lack of essence that we can achieve. In the end, we conducted online interviews using video call and chat interviews. Currently, we are still waiting for the preliminary round for this competition.'
    ],
    process: [
      {
        image: obucePersona,
        desc: 'User Persona'
      },
      {
        image: obuceJourney,
        desc: 'User Journey'
      },
      {
        image: obuceWireframe,
        desc: 'Wireframe'
      },
      {
        image: obuceHifi,
        desc: 'High Fidelity Prototype'
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    type: 'web',
    year: '2020-1-1',
    title: 'Dramagon',
    subtitle: 'Dramaga Online Forum',
    image: dramagon,
    link: '',
    github: 'https://github.com/rayhanendra/Dramagon',
    madeAt: 'University Project',
    buildWith: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    descriptions: [
      'Dramagon is an online forum for the dramaga people to advertise their business and for the newcomers like the new students to get to know better to the city. The user also could read the latest information about Dramaga city.',
      'This project was created because of the lack of media to promote business and information around dramaga. And people often get confused about the latest event happened in Dramaga city.',
      'This project was created for a software engineering task from the collage that asked the students to build a software whether it’s web-based or mobile-based. The project was conducted by me and both of my colleges, Luthfi and Ikhsan. In the team, I worked as the front-end developer and UI designer. Luthfi worked as the full-stack developer and Ikhsan as the back-end developer.',
      'In the project, we used agile development because it helps us to iterate every work that has to be improved. First of all, we started to do research on the people in the Dramaga. We used the double diamond method to complete the project. After that, we started to make the flows of the app. As we started the research I started learning to create the website from scratch. I had been exploring from the start of the project for a few months, so as soon as the development time comes, I’ll just implement the knowledge I had learned before.',
      'In the end, we deployed the web and submitted our project to be scored. In this project, telling other workers to make the same kind of style in design and CSS is quite a challenge. Eventually, we had meetings to talk about the style guide and the CSS and discussed it while we were implementing it. '
    ],
    process: [
      {
        image: dramagonAD,
        desc: 'Activity Diagram'
      },
      {
        image: dramagonERD,
        desc: 'Entity Relationship Diagram'
      },
      {
        image: dramagonMedfi,
        desc: 'Medium Fidelity Prototype'
      },
      {
        image: dramagonHifi,
        desc: 'High Fidelity Prototype'
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    type: 'design',
    year: '2020-3-1',
    title: 'BKKBN Logo Concept',
    subtitle: 'Logo Concept',
    image: bkkbn,
    madeAt: 'Personal Project',
    buildWith: ['Adobe Illustrator'],
    link: '',
    github: '',
    descriptions: [
      'A BKKBN logo that gives a warm and supporting atmosphere for the BKKBN and also provides the youth and millennial feels.',
      'This logo was created when the BKKBN started a contest to recreate their current logo to be more Millenials and youth-oriented.',
      "In general, the meaning of the logo is about youth. First, it looks like an energetic person, it's also a pen that writes. It means that the youth needs to prepare and get ready for the future. And the green means to support.",
      'Being able to recreate a logo that doesn’t look similar as any other logo is quite a challenge. If I had the chance, i’ll make it simpler and more meaningful.'
    ],
    process: [
      {
        image: bkkbnShirt,
        desc: 'T-Shirt'
      },
      {
        image: bkkbnLogo,
        desc: 'Logo'
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    type: 'web',
    year: '2020-12',
    title: 'Sahabat Tutor',
    subtitle: 'Admin Management Website',
    image: tutor,
    madeAt: 'Codepanda',
    buildWith: ['NextJs', 'Redux Toolkit', 'MaterialUI', 'ExpressJs', 'MongoDB'],
    link: '',
    github: '',
    descriptions: [
      'Sahabat Tutor is a mobile app providing college students to book their tutors for the lectures.',
      'Developed the development of the admin management website.'
    ],
    process: [
      {
        image: tutorHifi,
        desc: ''
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    type: 'web',
    year: '2021-01',
    title: 'IPB Internship Management System',
    subtitle: 'Multiple Role System',
    image: cda,
    madeAt: 'Codepanda',
    buildWith: ['NextJs', 'MaterialUI', 'ExpressJs', 'MongoDB'],
    link: '',
    github: '',
    descriptions: [
      'The website allows IPB students to manage their internship activities and communicate with their supervisors.',
      'This project was a huge undertaking for me, taking almost 6 months to develop. It consists of 3 types of roles: admin, student, and supervisor, with around 29 pages and multiple popup dialogs on most of them.'
    ],
    process: [
      {
        image: cda0,
        desc: ''
      },
      {
        image: cda1,
        desc: ''
      },
      {
        image: cda2,
        desc: ''
      },
      {
        image: cdaERD,
        desc: 'Entity Relationship Diagram'
      },
      {
        image: cdaLowfi,
        desc: 'Low Fidelity Prototype'
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    type: 'game',
    year: '2020-10',
    title: 'Boongeon Game',
    subtitle: 'Unity 3D PC Game',
    image: boongeon3,
    madeAt: 'University Project',
    buildWith: ['Unity', 'Blender'],
    link: '',
    github: 'https://github.com/rayhanendra/Boongeon-Grafkom',
    descriptions: [
      'Boongeon Is a 3D PC game. The task as a player is to defeat all enemies for getting  the elemental books used to eliminate the last boss.',
      'I took the role as a game developer, visual effects developer, and model creator. This project was built using Unity and Blender.'
    ],
    process: [
      {
        image: boongeon1,
        desc: 'Sketch'
      },
      {
        image: boongeon2,
        desc: 'Models'
      },
      {
        image: boongeon3,
        desc: 'Development'
      },
      {
        image: boongeon,
        desc: 'Final Release'
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    year: '2022-9-19',
    title: 'NikahSaja Admin',
    subtitle: 'Admin Website',
    image: '',
    madeAt: 'ENB Mobile Care',
    link: '',
    github: '',
    buildWith: ['VueJs', 'Vuex', 'Bootstrap', 'Vuexy Template'],
    descriptions: [
      'Maintain admin dashboard for NikahSaja Mobile App',
      'Implement web socket for notifications'
    ],
    type: 'web',
    process: [
      {
        image: '',
        desc: ''
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    year: '2022-10-6',
    title: 'Wowfone Landing Page',
    subtitle: 'Landing Page',
    image: '',
    madeAt: 'ENB Mobile Care',
    link: 'https://wowfone.com/',
    github: '',
    buildWith: ['Nuxt3', 'Vuetify', 'Aos', 'Swiper'],
    descriptions: [
      'This is the landing page of the Wowfone app, designed for people who want to earn money by selling mobile phones from the comfort of their own home.'
    ],
    type: 'web',
    process: [
      {
        image: '',
        desc: ''
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    year: '2022-9-23',
    title: 'NikahSaja Landing Page',
    subtitle: 'Landing Page',
    image: '',
    madeAt: 'ENB Mobile Care',
    link: 'https://nikahsaja.id',
    github: '',
    buildWith: ['NextJs', 'Tailwind CSS'],
    descriptions: ['Maintain the landing page of NikahSaja Mobile App'],
    type: 'web',
    process: [
      {
        image: '',
        desc: ''
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    year: '2022-9-27',
    title: 'ENB Mobile Care',
    subtitle: 'Company Profile',
    image: '',
    madeAt: 'ENB Mobile Care',
    link: 'https://www.enbmobilecare.co.id',
    github: '',
    buildWith: ['Typescript', 'NextJs', 'MaterialUI', 'Figma'],
    descriptions: [
      'The old company profile has been redesigned and remade with the latest technology.'
    ],
    type: 'web',
    process: [
      {
        image: '',
        desc: ''
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    year: '2022-11-1',
    title: 'Portal Plus Profile - Webview',
    subtitle: 'Webview for mobile app',
    image: '',
    madeAt: 'ENB Mobile Care',
    link: '',
    github: '',
    buildWith: ['Typescript', 'NextJs', 'React Global State', 'MaterialUI'],
    descriptions: [
      'Portal Plus Profile is a webview for the mobile app. It allows users to manage their profile and communicate with the admin.'
    ],
    type: 'web',
    process: [
      {
        image: '',
        desc: ''
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    year: '2023-1-1',
    title: 'Trade In Plus Marketplace',
    subtitle: 'Responsive E-Commerce Website for Electronics',
    image: '',
    madeAt: 'ENB Mobile Care',
    link: 'https://development.tradeinplus.co.id',
    github: '',
    buildWith: ['TypeScript', 'Vue3', 'Pinia', 'TailwindCSS', 'Storybook', 'Cypress', 'Figma'],
    descriptions: [
      'TradeInPlus Marketplace is an e-commerce website for electronics.',
      'It provides three main features: Want to Buy, Want to Sell, and EcoExchange.',
      'Want to Buy is a feature that allows users to purchase mobile phones by posting the phone models they want.',
      'Want to Sell is a feature that allows users to sell mobile phones by posting the phone models they want to sell.',
      'EcoExchange is a feature that allows users to purchase used electronics from the EcoExchange online and physical stores.'
    ],
    type: 'web',
    process: [
      {
        image: '',
        desc: ''
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    year: '2023-1-27',
    title: 'Samsung Trade-In System Store',
    subtitle: 'Mobile-first website with Samsung UI',
    image: '',
    madeAt: 'ENB Mobile Care',
    link: '',
    github: '',
    buildWith: ['TypeScript', 'NextJs', 'Zustand', 'MaterialUI', 'Cypress'],
    descriptions: [
      'Samsung Service Plus is a mobile-first website for Samsung customers.',
      'Its main feature is to trade in an old mobile phone and receive a discount voucher for a new Samsung mobile phone.'
    ],
    type: 'web',
    process: [
      {
        image: '',
        desc: ''
      }
    ]
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    year: '2023-3-13',
    title: 'Samsung Trade-In System User',
    subtitle: 'Mobile-first website with Samsung UI',
    image: '',
    madeAt: 'ENB Mobile Care',
    link: 'https://registrasi-tpss.tradeinplus.id/',
    github: '',
    buildWith: ['TypeScript', 'ReactJs', 'Vite', 'MaterialUI', 'Cypress'],
    descriptions: [
      'This website allows users to register their trade-ins.',
      'Users can track the progress of their trade-in.',
      "The UI is modeled after Samsung's official page."
    ],
    type: 'web',
    process: [
      {
        image: '',
        desc: ''
      }
    ]
  }
]
