import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import CommandBar from '../components/CommandBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CommandBar>
        <Component {...pageProps} />
      </CommandBar>
      <Analytics />
    </>
  )
}

export default MyApp
