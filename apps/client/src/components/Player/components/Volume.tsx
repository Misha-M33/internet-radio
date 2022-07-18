import React from 'react'
import style from '../Player.module.css'

export const Volume = ({changeVolumeFunc}: {changeVolumeFunc: (volume: number) => void}) => {

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    changeVolumeFunc(Number(e.currentTarget?.value))
  }

  return (
    <div className={style.volumeContainer}>
      <div>
        <input type="range" min="0" max="100" step="1" onChange={handleChange} />
      </div>
    </div>
  )
}
