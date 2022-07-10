import React, { useState } from 'react'
// const BASE_URL = process.env
const API_URL = import.meta.env.VITE_API_BASE_URL

export const LoginPage = () => {
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');

  const handleSubmit = async () => {
    const result = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({email, pass})
    })
  }
  return (
    <div>
      <div>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='password' onChange={(e) => setPass(e.target.value)}/>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}
