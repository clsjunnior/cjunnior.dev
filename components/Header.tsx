import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useKBar } from 'kbar'
import { useRouter } from 'next/router'
import { SwitchTheme } from './ThemeSwitcher'

const Header: React.FC = () => {
  const { query } = useKBar()
  const router = useRouter()

  const pages: string[] = ['About', 'Career', 'Contact']
  return (
    <header className="w-full flex align-middle justify-between px-6 py-6">
      <Link href="/" passHref>
        <span
          aria-label="Celso Junior"
          className="flex cursor-pointer justify-center leading-normal items-center w-12 h-12 bg-background dark:bg-light-mode rounded-lg  text-highlight font-bold font-mono text-lg transition-transform hover:scale-105"
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
                  `px-4 py-2 rounded-md cursor-pointer transition-colors text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-highlight`,
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
      <aside className="flex gap-4">
        <SwitchTheme />
        <button aria-label="Open Menu" type="button" onClick={query.toggle}>
          <span className="flex justify-center items-center w-12 h-12 rounded-lg cursor-pointer delay-75 bg-background dark:bg-light-mode transition-transform hover:scale-105 text-lg">
            <i className="ri-command-line hidden sm:block"></i>
            <i className="ri-menu-line block sm:hidden"></i>
          </span>
        </button>
      </aside>
    </header>
  )
}

export default Header
