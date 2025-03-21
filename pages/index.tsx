import { CSSProperties, useRef } from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import PageHead from '../components/Head'
import Layout, { PageProps } from '../components/Layout'

import homeIcon from '../public/static/icons/homeMain.json'
import ShortcutHome from '../components/Shortcut'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Celso Junior - Front-end Developer',
      description: 'Front-end Developer',
      image: '/',
    },
  }
}

const iconStyle: CSSProperties = {
  width: '5rem',
  height: '5rem',
  marginLeft: '-10px',
  padding: 0,
}

const Home: NextPage<PageProps> = (props) => {
  const homeRef = useRef<LottieRefCurrentProps>(null)

  return (
    <>
      <PageHead {...props} />
      <Layout>
        <div className="max-w-full sm:max-w-3xl w-full m-auto flex items-center p-6 sm:p-0">
          <div
            className="gap-6 flex flex-col items-start"
            onMouseEnter={() => homeRef?.current?.play()}
            onMouseLeave={() => homeRef?.current?.stop()}
          >
            <Lottie
              lottieRef={homeRef}
              style={iconStyle}
              animationData={homeIcon}
              loop
              autoplay={false}
            />
            <h1 className="text-4xl font-bold text-highlight">
              Celso Junior
              <span className="text-gray-100 dark:text-gray-800 font-bold text-sm block mt-1">
                Senior Front-end Developer
              </span>
            </h1>

            <p className="text-gray-300 dark:text-gray-600 font-medium">
              Hello, nice to have you here. How`s it going? 👋
            </p>
            <ShortcutHome />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
