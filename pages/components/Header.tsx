import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <nav className="flex align-middle justify-between px-4 py-6">
        <span className="flex cursor-pointer justify-center items-center w-12 h-12 bg-background rounded-lg leading-none text-highlight font-bold font-mono text-lg transition-transform hover:scale-105">
          CJ
        </span>
        <ul className="flex justify-center items-center gap-4 text-md leading-relaxed text-gray-200 font-medium">
          <li className="px-4 py-2 rounded-md cursor-pointer transition delay-75 hover:bg-background">
            About
          </li>
          <li className="px-4 py-2 rounded-md cursor-pointer transition delay-75 hover:bg-background">
            Work
          </li>
          <li className="px-4 py-2 rounded-md cursor-pointer transition delay-75 hover:bg-background">
            Projects
          </li>
        </ul>
        <span>kbar</span>
      </nav>
    </header>
  )
}

export default Header
