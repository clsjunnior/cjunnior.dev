import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import PageHead from '../components/Head'
import Layout, { PageProps } from '../components/Layout'

import avatar from '../public/static/images/avatar.jpeg'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'About | Celso Junior - Front-end Developer',
      description: 'Front-end Developer',
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
            <h1 className="text-4xl font-bold text-highlight text-center">
              About Me
              <blockquote className="text-gray-300 font-bold text-sm italic block mt-1">
                &quot;Difficult is relative&quot;
              </blockquote>
            </h1>

            <div className="flex flex-col sm:flex-row rounded-lg bg-gray-900 p-5 gap-8 items-center">
              <Image
                className="w-40 h-40 p-1 rounded-xl shadow-md"
                src={avatar}
                alt="Celso Junior avatar"
              />

              <div className="flex flex-col gap-1 items-center sm:items-start">
                <span className="text-gray-300 font-medium text-xs">
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
                <span className="text-gray-300 font-medium text-xs">
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
                <span className="text-gray-300 font-medium text-xs">
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
              <p className="mb-8 text-gray-300 text-sm font-medium leading-relaxed">
                Hi, I am Celso 👋, a{' '}
                <span className="font-bold text-highlight">
                  Software engineer
                </span>{' '}
                with focus on{' '}
                <span className="font-bold text-highlight">Front-end</span> and
                User Experience. I have about 7 years of experience with
                technology and web development. During these years I worked in
                several projects and companies in various segments, I could
                contribute to products and services used on a large scale.
              </p>

              <p className="mb-8 text-gray-300 text-sm font-medium leading-relaxed">
                I have a formal graduation in technology, my course was Analise
                and System Development by Centro Universitário de Lins / Sao
                Paulo - UNILINS. Course in which I had the honor to be elected
                the best student of the class.
              </p>

              <p className="mb-8 text-gray-300 text-sm font-medium leading-relaxed">
                My focus in the development area has always been the{' '}
                <span className="font-bold text-highlight">
                  front-end and interface development
                </span>
                , however in these years of experience I had the opportunity to
                work as a full-stack for a few years, in this period I had
                contact with C#, ASP.NET, PHP and relational databases such as
                MySQL and SQL Server.
              </p>

              <p className="mb-8 text-gray-300 text-sm font-medium leading-relaxed">
                And in recent years, I`ve had opportunities in which I`ve been
                working with{' '}
                <span className="font-bold text-highlight">
                  Javascript/Typescript with React
                </span>{' '}
                as the main library. In this ecosystem, I had contact with
                retail e-commerce integrated with VTEX CMS, projects involving
                RPA products and services and automation and internal and
                back-office management systems.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
