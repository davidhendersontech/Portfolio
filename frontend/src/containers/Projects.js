import React from 'react'
import { useState, useEffect } from 'react'
import Projectcard from '../components/Projectcard'
export default function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/projects')
      .then(response => response.json())
      .then(projects => setProjects(projects))
  }, [])

  const displayProjects = () => {
    return projects.map(project => {
      return <Projectcard project={project} key={project.id} ></Projectcard>
    })
  }

  return (
    <div className="flex flex-1 bg-mygray-light justify-center">
      {projects ? displayProjects() : "loading"}
    </div>
  )
}
