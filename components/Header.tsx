import React from 'react'
import Link from 'next/link'
import { useKBar } from 'kbar'

const Header: React.FC = () => {
  const { query } = useKBar()

  const pages: string[] = ['About', 'Work Timeline', 'Projects']

  return (
    <header className="w-full flex align-middle justify-between px-6 py-6">
      <Link href="/" passHref>
        <span className="flex cursor-pointer justify-center items-center w-12 h-12 bg-background rounded-lg leading-none text-highlight font-bold font-mono text-lg transition-transform hover:scale-105">
          CJ
        </span>
      </Link>
      <nav>
        <ul className="flex justify-center items-center gap-4">
          {pages.map((page) => {
            const path = `/${page.toLowerCase()}`
            return (
              <li
                key={page}
                className="px-4 py-2 rounded-md cursor-pointer transition delay-75 hover:bg-background"
              >
                <Link
                  href={path}
                  passHref
                  className="text-gray-200 font-mono text-md leading-relaxed"
                >
                  {page}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <aside>
        <button type="button" onClick={query.toggle}>
          <span className="flex justify-center items-center w-12 h-12 rounded-lg cursor-pointer delay-75 bg-background transition-transform hover:scale-105 text-lg">
            <i className="ri-command-line"></i>
          </span>
        </button>
      </aside>
    </header>
  )
}

export default Header
