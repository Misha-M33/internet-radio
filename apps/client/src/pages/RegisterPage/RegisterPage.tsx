import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Register.module.css'
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
            <label className={style.labelName} htmlFor='email'>Name</label>
            <input className={style.nameForm} onChange={(e) => setName(e.target.value)} type="text" name="name"/>
            <label className={style.labelEmail}  htmlFor='email'>Email</label>
            <input className={style.emailForm} onChange={(e) => setEmail(e.target.value)} type="text" name="email"/>
            <label className={style.labelPass} htmlFor='password'>Password</label>
            <input className={style.passForm} onChange={(e) => setPass(e.target.value)} type="password" name="password"/>
            <label className={style.labelPass} htmlFor='password'>Password Confirm</label>
            <input className={style.passForm} onChange={(e) => setPassConfirm(e.target.value)} type="password" name="confirm_password"/>
            <button className={style.buttonRegister} >Registration</button>
            <div className={style.toLogin} >
                <Link className={style.toLoginLink} to={'/login'}>to Login</Link>
            </div>           
        </form>
    </div>
  )
}
