import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import Layout from './components/Layout'

type PageProps = {
  title: string
  description: string
  image: string
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Celso Junior',
      description: 'Front-end Developer',
      image: '',
    },
  }
}

const Home: NextPage<PageProps> = (props) => {
  const { title, description, image } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://cjunnior.dev" property="og:url" />
        <meta content={`https://cjunnior.dev${image}`} property="og:image" />
      </Head>

      <Layout>
        <div className="w-full h-full"></div>
      </Layout>
    </>
  )
}

export default Home
