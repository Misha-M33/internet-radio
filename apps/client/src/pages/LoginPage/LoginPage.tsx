import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './LoginPage.css'
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
        <label className='labelEmail' htmlFor='email'>Email</label>
        <input className='emailForm' type="text" onChange={(e) => setEmail(e.target.value)}/>
        <label className='labelPass' htmlFor='password'>Password</label>
        <input className='passForm' type="password" onChange={(e) => setPass(e.target.value)}/>
        <button className='buttonLogin' onClick={handleSubmit}>Login</button>
        <div className='register' >
          <Link className='registerLink' to='/register'>to Registration</Link>
        </div>
        
      </div>
    </div>
  )
}
