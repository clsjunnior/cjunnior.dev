import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { useRef, CSSProperties } from 'react'
import PageHead from '../components/Head'
import Layout from '../components/Layout'
import PrimaryButton from '../components/PrimaryButton'

import notFoundIcon from '../public/static/icons/404.json'

type PageProps = {
  title: string
  description: string
  image: string
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: '404 - Not Found',
      description: 'Front-end Developer',
      image: '/',
    },
  }
}

const iconStyle: CSSProperties = {
  width: '10rem',
  height: '10rem',
  padding: 0,
}

const NotFound: NextPage<PageProps> = (props) => {
  const notFoundRef = useRef<LottieRefCurrentProps>(null)

  return (
    <>
      <PageHead {...props} />
      <Layout>
        <div className="max-w-3xl w-full h-full m-auto flex items-center justify-center">
          <div
            className="flex flex-col justify-center items-center "
            onMouseEnter={() => notFoundRef?.current?.play()}
            onMouseLeave={() => notFoundRef?.current?.stop()}
          >
            <Lottie
              lottieRef={notFoundRef}
              style={iconStyle}
              animationData={notFoundIcon}
              loop
              autoplay={false}
            />
            <h1 className="text-2xl font-bold text-gray-200 mb-4">
              404 - Page not found
            </h1>
            <Link passHref href="/">
              <PrimaryButton type="button">Go Back to Home</PrimaryButton>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NotFound
