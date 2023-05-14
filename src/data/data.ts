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
    id: '1',
    type: 'ui/ux',
    year: '2020-07',
    title: 'Obuce',
    subtitle: 'Obuce - Obese Reducing App',
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
    id: '2',
    type: 'web',
    year: '2020-01',
    title: 'Dramagon',
    subtitle: 'Dramagon - Dramaga Online Forum',
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
    id: '3',
    type: 'design',
    year: '2020-03',
    title: 'BKKBN Logo Concept',
    subtitle: 'BKKBN Logo Concept',
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
    id: '4',
    type: 'web',
    year: '2020-12',
    title: 'Sahabat Tutor',
    subtitle: 'Sahabat Tutor - Admin Management Website ',
    image: tutor,
    madeAt: 'Codepanda',
    buildWith: ['NextJs', 'Redux Toolkit', 'MaterialUI', 'ExpressJs', 'MongoDB'],
    link: '',
    github: '',
    descriptions: [
      'Sahabat Tutor is a mobile app providing college students to book their tutors for the lectures.',
      'But I worked for the development of the admin management website.'
    ],
    process: [
      {
        image: tutorHifi,
        desc: ''
      }
    ]
  },
  {
    id: '5',
    type: 'web',
    year: '2021-01',
    title: 'IPB Internship Management System',
    subtitle: 'IPB Internship Management System - MBKM',
    image: cda,
    madeAt: 'Codepanda',
    buildWith: ['NextJs', 'MaterialUI', 'ExpressJs', 'MongoDB'],
    link: '',
    github: '',
    descriptions: [
      'The website provides IPB students to manage their internship activities and to communicate with their supervisors.',
      'This project is considered huge for me with almost 6 months of development. And this project consisting 3 type of roles: admin, student and supervisor. It has around 29 pages with multiple popup dialog in most of each pages. '
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
    id: '6',
    type: 'game',
    year: '2020-10',
    title: 'Boongeon',
    subtitle: 'Boongeon - Unity 3D PC Game',
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
    id: '7',
    type: 'web',
    year: '2022-11',
    title: 'Portal Plus Profile - Webview',
    subtitle: 'Portal Plus Profile - Webview for Flutter',
    image: '',
    madeAt: 'Enb Mobile Care',
    buildWith: ['NextJs', 'MaterialUI', 'PHP', 'MySQL'],
    link: '',
    github: '',
    descriptions: [
      'Portal Plus Profile is a webview for the mobile app. It provides the user to manage their profile and to communicate with the admin.'
    ],
    process: []
  },
  {
    id: '8',
    type: 'web',
    year: '2023-01',
    title: 'TradeInPlus Marketplace',
    subtitle: 'TradeInPlus Marketplace - E-Commerce Website for electronics',
    image: '',
    madeAt: 'Enb Mobile Care',
    buildWith: ['Vue3', 'TailwindCSS', 'Storybook', 'Cypress', 'PHP', 'MySQL'],
    link: 'https://tradeinplus.co.id/',
    github: '',
    descriptions: [
      'TradeInPlus Marketplace is an e-commerce website for electronics.',
      'It provides 3 main features: Want to Buy, Want to Sell, and EcoExchange.',
      'Want to Buy is a feature to buy mobile phones by posting the phones that the user want',
      'Want to Sell is a feature to sell mobile phones by posting the phones that the user want to sell',
      'EcoExchange is a feature to buy used electronics from the EcoExchange online store and physical store.'
    ],
    process: []
  },
  {
    id: '9',
    type: 'web',
    year: '2023-03',
    title: 'Samsung Service Plus',
    subtitle: 'Samsung Service Plus - Mobile first website',
    image: '',
    madeAt: 'Enb Mobile Care',
    buildWith: ['NextJs', 'MaterialUI', 'PHP', 'MySQL'],
    link: 'samsungserviceplus.id',
    github: '',
    descriptions: [
      'Samsung Service Plus is a mobile first website for Samsung Service Plus.',
      `It's main feature is to trade in an old mobile phone and get a discount voucher to buy a new Samsung mobile phone.`
    ],
    process: []
  }
]
