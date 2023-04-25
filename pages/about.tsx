import { CSSProperties, useRef } from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import PageHead from '../components/Head'
import Layout, { PageProps } from '../components/Layout'

import homeIcon from '../public/static/icons/homeMainDuo.json'
import ShortcutHome from '../components/Shortcut'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'About | Celso Junior - Front-end Developer',
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
        <div className="max-w-3xl w-full h-full m-auto flex items-center"></div>
      </Layout>
    </>
  )
}

export default Home
