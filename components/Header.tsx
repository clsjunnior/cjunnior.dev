import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useKBar } from 'kbar'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const { query } = useKBar()
  const router = useRouter()

  const pages: string[] = ['About', 'Career', 'Projects']
  return (
    <header className="w-full flex align-middle justify-between px-6 py-6">
      <Link href="/" passHref>
        <span
          aria-label="Celso Junior"
          className="flex cursor-pointer justify-center items-center w-12 h-12 bg-background rounded-lg leading-none text-highlight font-bold font-mono text-lg transition-transform hover:scale-105"
        >
          CJ
        </span>
      </Link>
      <nav>
        <ul className="hidden sm:flex justify-center items-center gap-4">
          {pages.map((page) => {
            const path = `/${page.toLowerCase()}`
            return (
              <li
                key={page}
                className={clsx(
                  `px-4 py-2 rounded-md cursor-pointer transition-colors text-gray-300 hover:text-gray-500`,
                  [
                    {
                      'underline underline-offset-8 decoration-2 decoration-highlight':
                        path === router.pathname,
                    },
                  ]
                )}
              >
                <Link
                  href={path}
                  passHref
                  className="font-mono text-md leading-relaxed"
                >
                  {page}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <aside>
        <button aria-label="Open Menu" type="button" onClick={query.toggle}>
          <span className="flex justify-center items-center w-12 h-12 rounded-lg cursor-pointer delay-75 bg-background transition-transform hover:scale-105 text-lg">
            <i className="ri-command-line hidden sm:block"></i>
            <i className="ri-menu-line block sm:hidden"></i>
          </span>
        </button>
      </aside>
    </header>
  )
}

export default Header
