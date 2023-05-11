import React from 'react'
import Head from 'next/head'

type PageHeadProps = {
  title: string
  description: string
  image: string
}

const PageHead: React.FC<PageHeadProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={title} property="og:title" />
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      <meta content="https://cjunnior.dev" property="og:url" />
      <meta content={`https://cjunnior.dev${image}`} property="og:image" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon/favicon-16x16.png"
      />
    </Head>
  )
}

export default PageHead
