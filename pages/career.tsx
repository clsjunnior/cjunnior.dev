import clsx from 'clsx'
import moment from 'moment'
import type { NextPage, GetStaticProps } from 'next'
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

interface DateRange {
  startDate: string
  endDate?: string
}

const calculateYearsAndMonths = ({ startDate, endDate }: DateRange): string => {
  const start = moment(startDate, 'MMM YYYY')
  const end = endDate ? moment(endDate, 'MMM YYYY') : moment()

  const years = end.diff(start, 'years')
  const months = end.diff(start.clone().add(years, 'years'), 'months')

  if (years === 0) {
    return `${months} mos`
  }

  return `${years} yrs ${months} mos`
}

const Home: NextPage<PageProps> = (props) => {
  const workList: workListType[] = [
    {
      startDate: 'Oct 2022',
      title: 'Senior Front-End Developer at NTConsult',
      location: 'Porto Alegre, Brazil',
      descriptions: [
        `Working as a senior front-end developer on international projects, always focusing on React and its ecosystem.`,
        `It is part of my routine to build reusable and testable components, to be close and aligned with UI/UX to build interfaces, teamwork, code review, help with technical decisions and contact with the business area to understand and develop new features and improvements.`,
        'React, Redux, Next, SSR, Drupal, Typescript, SSO, Jest, React testing library, Design System, Front-end Architecture, NodeJs, Docker, GIT, Gitflow, Figma, Jira and Code review.',
      ],
      link: 'https://ntconsult.com.br/',
    },
    {
      startDate: 'Aug 2021',
      endDate: 'Oct 2022',
      title: 'Front-End Developer at Roberty Automation',
      location: 'Ribeirão Preto, Brazil',
      descriptions: [
        `Acting as front-end developer and UI/UX designer for the Roberty Automation platform. Mainly using React best practices for the development and maintenance of the platform. In my day-to-day, I design the UI and develop new features for our RPA building tool, the Roberty Studio, and maintain the project's institutional website and blog.`,
        'Main technologies used: React, Typescript, Gatsby + Netlify CMS, SEO, git, gitflow, Figma and Code review.',
      ],
      link: 'https://www.roberty.app/',
    },
    {
      startDate: 'Oct 2020',
      endDate: 'Aug 2021',
      title: 'Front-End Developer at SHIFT INC',
      location: 'Sao Paulo, Brazil',
      descriptions: [
        `Shift Inc is a software consulting company and I was allocated to the client Vitrio, to work with VTEX in Cecilia Prado, NKStore, Projeto Verão, Ricardo Almeida, Mundo Pet and the three largest stores of the Vulcabras group: Under Armour, Mizuno and Olympikus. I also worked with building middleware APIs in Node for integrations with the stores.`,
        'The main technologies were ReactJS - with class and hooks, Javascript, Typescript, Node, webpack, git, gitflow, kanban, runrunit and code review. Helping in the adaptation and aiming to decrease the learning curve of new developers, transmitting not only project knowledge but also technical',
      ],
      link: 'https://www.shiftinc.com.br/',
    },
    {
      startDate: 'Aug 2017',
      endDate: 'Oct 2020',
      title: 'Full-stack Developer at Sodré Laboratory',
      location: 'Lins, Brazil',
      descriptions: [
        `Full-stack developer at Laboratorio Sodré, a clinical analysis company based in Lins, São Paulo. During 3 years, I participated in the most important projects for the management of the laboratory, automation and commercialization of toxicology tests.`,
        'Main technologies used: C#, .NET, PHP, Javascript, React, SQL Server, Scrum.',
      ],
      link: 'https://laboratoriosodre.com.br/',
    },
    {
      startDate: 'Oct 2014',
      endDate: 'Aug 2017',
      title:
        'Web Developer and Graphic Designer at Paulista Foundation for Technology and Education',
      location: 'Lins, Brazil',
      descriptions: [
        `Development of printed and digital materials. Also working in web development, social networks and dissemination tools.`,
        'Main technologies used: Adobe PhotoShop, Adobe Illustrator, WordPress, HTML, CSS, PHP, Facebook ADS and SEO.',
      ],
    },
  ]

  return (
    <>
      <PageHead {...props} />
      <Layout>
        <div className="max-w-3xl w-full m-auto flex items-start p-6 sm:p-0">
          <div className="flex flex-col w-full p-4 gap-10">
            <h1 className="text-4xl font-bold text-highlight">
              My Career
              <blockquote className="text-gray-300 dark:text-gray-600 font-bold text-sm italic block mt-1">
                as a software engineer during{' '}
                {moment().diff(moment('Jan 2016', 'MMM YYYY'), 'years')} years
                and counting.
              </blockquote>
            </h1>

            <ToolsList />

            <ol className="relative border-l border-gray-600 dark:border-gray-600">
              {workList.map((workItem) => (
                <li className="mb-10 ml-4" key={workItem.title}>
                  <div
                    className={clsx(
                      `absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border`,
                      [
                        { 'bg-highlight border-highlight': !workItem.endDate },
                        { 'bg-gray-600 border-gray-900': workItem.endDate },
                      ]
                    )}
                  ></div>
                  <time
                    className={clsx('mb-1 text-sm font-normal leading-none ', [
                      { 'text-highlight': !workItem.endDate },
                    ])}
                  >
                    {workItem.startDate}{' '}
                    {!workItem.endDate ? `— Now` : `— ${workItem?.endDate}`} -{' '}
                    {calculateYearsAndMonths({
                      startDate: workItem.startDate,
                      endDate: workItem?.endDate,
                    })}
                  </time>
                  <h1 className="text-lg font-semibold text-gray-100 dark:text-gray-600 leading-relaxed mb-3">
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
                  </h1>
                  {workItem.descriptions.map((f) => (
                    <p
                      className="mb-4 text-sm font-mono text-gray-400 dark:text-gray-500"
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
