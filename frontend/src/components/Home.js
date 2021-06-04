import React from 'react'

export default function Home() {
  return (
    <div className="bg-mygray-light flex flex-col flex-1 text-center font-bold text-3xl ">

      <img src='https://files.catbox.moe/l7mqlp.png' className="h-60 w-60 mx-auto my-10"></img>
      <h1 className="py-10">Is creating:</h1>
      <ul >
        <li className="py-2">
          <p>Full Stack Apps</p>
        </li>
        <li className="py-2">
          <p>Beautiful Blogs</p>
        </li>
        <li className="py-2">
          <p>A Friendlier World</p>
        </li>
      </ul>
      <div className="flex flex-row mx-auto">
        <a href="https://github.com/notDavidHenderson">
          <i className="fab fa-github-square fa-2x p-10"></i>
        </a>
        <a href="https://www.linkedin.com/in/davidhendersontech/">
          <i className="fab fa-linkedin fa-2x p-10"></i>
        </a>
      </div>
    </div >
  )
}
