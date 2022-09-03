import React from 'react'

import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col h-screen w-full relative z-0">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
