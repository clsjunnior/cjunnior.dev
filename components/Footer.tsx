import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const footerLinks = [
    {
      href: `/contact`,
      name: `email`,
      icon: `ri-mail-line`,
      internal: true,
    },
    {
      href: `https://github.com/clsjunnior`,
      name: `github`,
      icon: `ri-github-line`,
    },
    {
      href: `https://www.linkedin.com/in/celso-junior`,
      name: `linkedin`,
      icon: `ri-linkedin-line`,
    },
    {
      href: `https://github.com/clsjunnior/cjunnior.dev`,
      name: `source`,
      icon: `ri-code-line`,
    },
  ]

  return (
    <footer className="w-full p-6 flex flex-col justify-center items-center gap-4">
      <ul className="flex gap-6 sm:gap-12 justify-between sm:justify-center items-center">
        {footerLinks.map((link, key) => (
          <li
            className="text-sm tracking-wide text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-highlight transition-colors hover:cursor-pointer"
            key={key}
          >
            {link.internal ? (
              <Link href={link.href}>
                <span className="flex items-center gap-2">
                  {link.name}
                  <i className={link.icon}></i>
                </span>
              </Link>
            ) : (
              <a
                href={link.href}
                target={`blank`}
                rel={'noreferrer'}
                className="flex items-center gap-2"
              >
                {link.name}
                <i className={link.icon}></i>
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <span className="text-[0.7rem] font-mono tracking-wide text-gray-400">
          2023 - by myself
        </span>
      </div>
    </footer>
  )
}

export default Footer
