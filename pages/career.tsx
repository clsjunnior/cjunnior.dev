import clsx from 'clsx'
import type { NextPage, GetStaticProps } from 'next'
import Image, { ImageProps } from 'next/image'
import PageHead from '../components/Head'
import Layout, { PageProps } from '../components/Layout'
import ToolsList from '../components/ToolsList'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Career | Celso Junior - Front-end Developer',
      description: 'Front-end Developer',
      image: '/',
    },
  }
}

type workListType = {
  startDate: string
  endDate?: string
  title: string
  location: string
  descriptions: string[]
  link?: string
}

const Home: NextPage<PageProps> = (props) => {
  const workList: workListType[] = [
    {
      startDate: 'Oct 2022',
      title: 'Front-End Developer at NTConsult',
      location: 'Porto Alegre, Brazil',
      descriptions: [
        'Acting as a front-end developer building a back-office platform for the client Destaxa. Using mainly the best practices of React in conjunction with Next for the development of the platform.',
        'Main technologies used: React, Next, Typescript, Keycloak SSO, Jest, design system, monorepo, NodeJs, git, gitflow, Figma, Jira and Code review.',
      ],
      link: 'https://ntconsult.com.br/',
    },
    {
      startDate: '2021',
      endDate: '2022',
      title: 'Front-End Developer at Roberty Automation',
      location: 'Ribeirão Preto, Brazil',
      descriptions: [
        `Acting as front-end developer and UI/UX designer for the Roberty Automation platform. Mainly using React best practices for the development and maintenance of the platform. In my day-to-day, I design the UI and develop new features for our RPA building tool, the Roberty Studio, and maintain the project's institutional website and blog.`,
        'Main technologies used: React, Typescript, Gatsby + Netlify CMS, SEO, git, gitflow, Figma and Code review.',
      ],
      link: 'https://www.roberty.app/',
    },
    {
      startDate: '2020',
      endDate: '2021',
      title: 'Front-End Developer at SHIFT INC',
      location: 'Sao Paulo, Brazil',
      descriptions: [
        `Shift Inc is a software consulting company and I was allocated to the client Vitrio, to work with VTEX in Cecilia Prado, NKStore, Projeto Verão, Ricardo Almeida, Mundo Pet and the three largest stores of the Vulcabras group: Under Armour, Mizuno and Olympikus. I also worked with building middleware APIs in Node for integrations with the stores.`,
        'The main technologies were ReactJS - with class and hooks, Javascript, Typescript, Node, webpack, git, gitflow, kanban, runrunit and code review. Helping in the adaptation and aiming to decrease the learning curve of new developers, transmitting not only project knowledge but also technical',
      ],
      link: 'https://www.shiftinc.com.br/',
    },
    {
      startDate: '2017',
      endDate: '2020',
      title: 'Full-stack Developer at Sodré Laboratory',
      location: 'Lins, Brazil',
      descriptions: [
        `Full-stack developer at Laboratorio Sodré, a clinical analysis company based in Lins, São Paulo. During 3 years, I participated in the most important projects for the management of the laboratory, automation and commercialization of toxicology tests.`,
        'Main technologies used: C#, .NET, PHP, Javascript, React, SQL Server, Scrum.',
      ],
      link: 'https://laboratoriosodre.com.br/',
    },
    {
      startDate: '2017',
      endDate: '2017',
      title:
        'Graphic Designer at Paulista Foundation for Technology and Education',
      location: 'Lins, Brazil',
      descriptions: [
        `Development of printed and digital materials. Also working in web development, social networks and dissemination tools.`,
        'Main technologies used: Adobe PhotoShop, Adobe Illustrator, WordPress, HTML, CSS, PHP, Facebook ADS and SEO.',
      ],
    },
    {
      startDate: '2014',
      endDate: '2017',
      title: 'Web developer and Graphic Designer at CETECLins',
      location: 'Lins, Brazil',
      descriptions: [
        `Development and maintenance of websites and creation of printed and digital advertising material.`,
        'Main technologies used: Adobe PhotoShop, Adobe Illustrator, WordPress, HTML, CSS, PHP, ASP.NET, SQL Server, Mysql, Facebook ADS and SEO.',
      ],
    },
  ]

  return (
    <>
      <PageHead {...props} />
      <Layout>
        <div className="max-w-3xl w-full m-auto flex items-start">
          <div className="flex flex-col w-full p-4 gap-10">
            <h1 className="text-4xl font-bold text-highlight">
              My Career
              <blockquote className="text-gray-300 font-bold text-sm italic block mt-1">
                as a software engineer during 7 years and counting.
              </blockquote>
            </h1>

            <ToolsList />

            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {workList.map((workItem) => (
                <li className="mb-10 ml-4" key={workItem.title}>
                  <div
                    className={clsx(
                      `absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border`,
                      [
                        { 'bg-highlight border-highlight': !workItem.endDate },
                        { 'bg-gray-700 border-gray-900': workItem.endDate },
                      ]
                    )}
                  ></div>
                  <time
                    className={clsx('mb-1 text-sm font-normal leading-none ', [
                      { 'text-highlight': !workItem.endDate },
                    ])}
                  >
                    {workItem.startDate}{' '}
                    {!workItem.endDate ? `— Now` : `— ${workItem.endDate}`}
                  </time>
                  <h3 className="text-lg font-semibold text-gray-100 leading-relaxed mb-3">
                    {workItem.link ? (
                      <a
                        href={workItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors flex gap-2 items-center"
                      >
                        {workItem.title}
                        <i className="ri-link"></i>
                      </a>
                    ) : (
                      workItem.title
                    )}
                    <span className="text-xs font-medium italic text-gray-400 block">
                      {workItem.location}
                    </span>
                  </h3>
                  {workItem.descriptions.map((f) => (
                    <p
                      className="mb-4 text-sm font-mono text-gray-400"
                      key={f.length}
                    >
                      {f}
                    </p>
                  ))}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
