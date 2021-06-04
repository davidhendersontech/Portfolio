import React from 'react'

export default function Projectcard({ project }) {

  console.log(project)

  return (
    <div className="shadow-lg w-1/3 h-1/2 bg-gray-200 border border-blue-dark m-20 flex flex-col p-10 hover:bg-gray-300 hover:scale-150 ">
      <h1 className=" text-center text-2xl font-bold">{project.title}</h1>
      <p className="py-10 text-center text-xl font-medium">{project.description}</p>
      <a href={project.link} className="text-center text-l border-2 border-blue-dark shadow-m ">Check it out!</a>
    </div>
  )
}
