import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from './LoginPage.module.less'
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
    <div className={style.loginFormContainer}>
      <div className={style.loginForm}>
        <label htmlFor='email'>Email</label>
        <input type="text" name='email' onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor='password'>Password</label>
        <input type="password" name='password' onChange={(e) => setPass(e.target.value)}/>
        <button className={style.buttonLogin} onClick={handleSubmit}>Login</button>
        <div className={style.register}>
          <Link className={style.registerLink} to='/register'>to Registration</Link>
        </div>
        
      </div>
    </div>
  )
}
