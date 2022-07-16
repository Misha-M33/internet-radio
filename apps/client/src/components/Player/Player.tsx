import React, { useReducer } from 'react'
import { StartButton } from '../StartButton/StartButton';
import { playerInit, playerReducer, switchPlay } from './reducer';

export interface PlayerState {
  play: boolean;
  volume: number;
  songName: string;
  songAuthor: string;
  coverImg: string;
}

export const Player = () => {
  const [state, dispatch] = useReducer(playerReducer, playerInit(), playerInit);

  return (
    <div>
      <StartButton startFunction={() => dispatch(switchPlay())} isPlaying={state.play}/>
    </div>
  )
}
