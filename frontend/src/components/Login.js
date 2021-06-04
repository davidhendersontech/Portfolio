import React from 'react'
import { useState } from 'react'

export default function Login() {

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleChange = (event) => {
    event.target.id === 'user' ? setUser(event.target.value) : setPass(event.target.value)

  }


  return (
    <>
      <h1 className="text-center text-4xl font-bold">Login</h1>
      <div className="flex flex-col border-2 border-blue-light m-10 shadow-lg">
        <form className="flex flex-col text-center justify-items-center p-10">
          <label for="user" className="font-medium text-2xl text-blue-dark">User:</label>
          <input onChange={handleChange} type="text" id="user" name="user" placeholder="Who are you" className="border-2 border-blue text-center mx-auto"></input>
          <label for="password" className="font-medium text-2xl text-blue-dark">Password:</label>
          <input onChange={handleChange} type="password" id="password" name="password" placeholder="What's the code?" className="border-2 border-blue text-center mx-auto"></input>
          <button type="submit" className="border-2 border-blue-dark bg-white mx-auto my-5 px-5 py-2 hover:bg-blue  ">Log In</button>
        </form>
      </div>
    </>
  )
}
