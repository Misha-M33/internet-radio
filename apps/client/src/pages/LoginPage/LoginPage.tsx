import React, { useState } from 'react'
import './LoginPage.css'
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
    <div className='loginFormContainer'>
      <div className='loginForm'>
        <label className='labelEmail' >email address</label>
        <input className='emailForm' type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <label className='labelPass' >password</label>
        <input className='passForm' type="password" placeholder='password' onChange={(e) => setPass(e.target.value)}/>
        <button className='buttonLogin' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}
