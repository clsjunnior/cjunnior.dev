import moment from 'moment'
import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import PageHead from '../components/Head'
import Layout, { PageProps } from '../components/Layout'

import avatar from '../public/static/images/avatar.jpeg'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'About | Celso Junior - Senior Front-end Developer',
      description: 'Senior Front-end Developer',
      image: '/',
    },
  }
}

const Home: NextPage<PageProps> = (props) => {
  return (
    <>
      <PageHead {...props} />
      <Layout>
        <div className="max-w-3xl w-full m-auto flex items-start p-6 sm:p-0">
          <div className="flex flex-col w-full p-4 gap-10">
            <h1 className="text-4xl font-bold text-highlight text-center sm:text-left">
              About Me
              <blockquote className="text-gray-300 dark:text-gray-600 font-bold text-sm italic block mt-1">
                &quot;Difficult is relative&quot;
              </blockquote>
              <span className="text-gray-300 dark:text-gray-600 font-light text-xs block mt-1">
                Senior Software Engineer | Frontend Developer | React |
                JavaScript | Typescript | NextJs
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row rounded-lg bg-gray-900 dark:bg-gray-50 p-5 gap-8 items-center">
              <Image
                className="w-40 h-40 p-1 rounded-xl shadow-md"
                src={avatar}
                alt="Celso Junior avatar"
              />

              <div className="flex flex-col gap-1 items-center sm:items-start">
                <span className="text-gray-300 dark:text-gray-600 font-medium text-xs">
                  Looking for my CV?
                </span>
                <a
                  className="font-bold text-highlight text-sm hover:text-highlight-dark transition-colors"
                  href="https://read.cv/celsojunior"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="My CV at read"
                >
                  There you go!
                </a>
              </div>

              <div className="flex flex-col gap-1 items-center sm:items-start">
                <span className="text-gray-300 dark:text-gray-600 font-medium text-xs">
                  Want to get in touch?
                </span>
                <a
                  className="font-bold text-highlight text-sm hover:text-highlight-dark transition-colors"
                  href="mailto:hello@cjunnior.dev"
                  aria-label="email"
                >
                  hello@cjunnior.dev
                </a>
              </div>

              <div className="flex flex-col gap-1 items-center sm:items-start">
                <span className="text-gray-300 dark:text-gray-600 font-medium text-xs">
                  Want to connect?
                </span>
                <div className="flex gap-4 items-center">
                  <a
                    className="font-bold text-highlight text-sm hover:text-highlight-dark transition-colors"
                    href="https://www.linkedin.com/in/celso-junior"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a
                    className="font-bold text-highlight text-sm hover:text-highlight-dark transition-colors"
                    href="https://github.com/clsjunnior"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-8 text-gray-300 dark:text-gray-600 text-sm font-medium leading-relaxed">
                Hi, I am Celso 👋, a{' '}
                <span className="font-bold text-highlight">
                  Software engineer
                </span>{' '}
                specializing in front-end development and user experience, with
                approximately nine years of experience in technology and web
                development. Throughout my career, I have worked on various
                projects across different industries, contributing to
                large-scale products and services.
              </p>

              <p className="mb-8 text-gray-300 dark:text-gray-600 text-sm font-medium leading-relaxed">
                I hold a degree in Systems Analysis and Development from Centro
                Universitário de Lins (UNILINS), where I had the honor of being
                recognized as the top student in my class.
              </p>

              <p className="mb-8 text-gray-300 dark:text-gray-600 text-sm font-medium leading-relaxed">
                My primary focus has always been{' '}
                <span className="font-bold text-highlight">
                  front-end development and interface design
                </span>
                . However, during my career, I also worked as a full-stack
                developer for a few years, gaining experience with C#, ASP.NET,
                PHP, and relational databases such as MySQL and SQL Server.
              </p>

              <p className="mb-8 text-gray-300 dark:text-gray-600 text-sm font-medium leading-relaxed">
                In recent years, I have been working primarily with
                JavaScript/TypeScript, using React as my main library. Within
                this ecosystem, I have gained experience with retail e-commerce
                platforms integrated with the VTEX CMS, projects involving RPA
                and automation solutions, as well as internal and back-office
                management systems. Over the past two years, I have been
                involved in projects for clients in{' '}
                <span className="font-bold text-highlight">North America</span>.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
