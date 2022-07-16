import { Link } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar'
import style from './mainPage.module.css'

export const MainPage = () => {
  return (
    <div className={style.mainContainer}>
      <NavBar />
      <div>Other Content</div>
      <div>Some charts</div>
      <Link to={'/account'}>Acount</Link>
    </div>
  )
}
