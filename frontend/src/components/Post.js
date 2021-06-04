import React from 'react'
import { useState, useEffect } from 'react'

export default function Post({ match }) {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [uploadDate, setUploadDate] = useState('')

  useEffect(() => {
    const postId = match.params.postid
    fetch(`http://localhost:3001/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        setTitle(post.title)
        setBody(post.body)
        const formattedDate = formatDate(post.updated_at)
        setUploadDate(formattedDate)
      })
  }, [match])

  const formatDate = (date) => {
    const newDate = new Date(date)
    return newDate.toDateString()
  }

  return (
    <div className="shadow w-5/6 border-blue flex flex-col">
      <div className="flex-row px-10 py-10">
        <span className="font-bold text-3xl">{title}</span>
        <span className="text-gray-700 text-xs font-bold pl-2"> last updated at: {uploadDate}</span>
      </div>

      <span className="px-40">{body}</span>
      {/* TODO: fetch call using blog id to grab blog body and title */}
    </div>
  )
}
