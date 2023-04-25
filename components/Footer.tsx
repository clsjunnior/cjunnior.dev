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
  ]

  return (
    <footer className="w-full p-6">
      <ul className="flex gap-12 justify-center">
        {footerLinks.map((link, key) => (
          <li
            className="text-sm tracking-wide text-gray-500 hover:text-white transition-colors hover:cursor-pointer"
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
    </footer>
  )
}

export default Footer
