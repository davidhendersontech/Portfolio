import React from 'react'
import { Link } from 'react-router-dom'

export default function Top() {
  return (
    <header className="lg:px-16 px-6 bg-black flex flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/" className="font-black text-white text-6xl ">David Henderson</Link>
      </div>

      <div className="flex items-center w-auto">
        <nav>
          <ul className="flex items-center justify-between text-base text-gray-700 pt-0">
            <li><Link to="/projects" className="p-4 text-lg block border-b-4 border-transparent hover:border-orange-dark text-white">Projects</Link></li>
            <li><Link to="/blog" className="p-4 text-lg block border-b-4 border-transparent hover:border-orange-dark text-white">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
