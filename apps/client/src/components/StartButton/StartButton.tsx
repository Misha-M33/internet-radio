import React from 'react'
import style from './StartButton.module.css'

export const StartButton = ({startFunction, isPlaying}: {startFunction: () => void, isPlaying: boolean}) => {

    const handleClick = (e: React.SyntheticEvent) => {
        e.stopPropagation()
        startFunction()
    }

  return (
    <div className={style.startButtonContainer} onClick={handleClick}>
        <div className={style.startButton}>
            {isPlaying 
            ? <svg height="50" width="50">
                <polygon points="10,0 50,25 10,50" fill="#ffffff" />
            </svg>
            : <svg height="50" width="50">
                <polygon points="0,0 50,0 50,50 0,50" fill="#ffffff" />
            </svg>}
        </div>
    </div>
  )
}
