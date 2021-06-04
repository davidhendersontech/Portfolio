import React from 'react'
import { Link } from 'react-router-dom'
export default function BlogTitleSide({ posts }) {

  const displayTitles = () => {
    return posts.map(post => {
      return <Link
        className=" hover:bg-orange-light w-full py-5 shadow-sm font-bold text-l"
        to={`/blog/${post.id}`}>
        {post.title}
      </Link>
    })
  }

  return (
    <nav className="bg-mygray w-1/6 py-10 text-center flex flex-col ">
      {displayTitles()}
    </nav>
  )
}

