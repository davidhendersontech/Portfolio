import React from 'react'
import { useState, useEffect } from 'react'
import Post from '../components/Post'
import Sidebar from './BlogTitleSide'
import { Route } from 'react-router-dom'
export default function BlogPosts() {

  const [posts, setPosts] = useState([])



  useEffect(() => {
    fetch('http://localhost:3001/posts/')
      .then(response => response.json())
      .then(posts => setPosts(posts))

  }, [])



  return (
    <div className="flex flex-row flex-1 bg-mygray-light">
      <Sidebar posts={posts}></Sidebar>
      <Route path="/blog/:postid" component={Post} ></Route>
    </div>
  )
}
