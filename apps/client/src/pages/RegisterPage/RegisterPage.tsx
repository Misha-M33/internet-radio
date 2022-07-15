import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <div>
        <form>
            <input type="text" name="name"/>
            <input type="text" name="email"/>
            <input type="password" name="password"/>
            <input type="password" name="confirm_password"/>
            <button>Register</button>
            <Link to={'/login'}>Log in</Link>
        </form>
    </div>
  )
}
