import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Register.module.less'
const API_URL = import.meta.env.VITE_API_BASE_URL

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');

  const handleSubmit = async () => {
    const result = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name,email, pass, passConfirm})
    })
  }

  return (
    <div className={style.register} >
        <form  className={style.registerForm} >
            <label htmlFor='name'>Name:</label>
            <input onChange={(e) => setName(e.target.value)} type="text" name="name"/>
            <label htmlFor='email'>Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" name="email"/>
            <label htmlFor='password'>Password:</label>
            <input onChange={(e) => setPass(e.target.value)} type="password" name="password"/>
            <label htmlFor='confirm_password'>Confirm password:</label>
            <input onChange={(e) => setPassConfirm(e.target.value)} type="password" name="confirm_password"/>
            <button className={style.buttonRegister} >Register</button>
            <div className={style.toLogin} >
                <Link className={style.toLoginLink} to={'/login'}>to Login</Link>
            </div>
        </form>
    </div>
  )
}
