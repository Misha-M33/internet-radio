import React from 'react'
import { Player } from '../Player/Player'
import { StartButton } from '../StartButton/StartButton'
import styles from './style.module.css'

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Player />
      Something
    </div>
  )
}
