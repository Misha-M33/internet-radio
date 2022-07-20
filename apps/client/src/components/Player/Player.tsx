import React, { useCallback, useReducer } from 'react'
import { StartButton } from '../StartButton/StartButton';
import { playerInit, playerReducer, actionSwitchPlay } from './reducer';

export interface PlayerState {
  play: boolean;
  volume: number;
  songName: string;
  songAuthor: string;
  coverImg: string;
}

export const Player = () => {
  const [state, dispatch] = useReducer(playerReducer, playerInit(), playerInit);
  const switchPlay = useCallback(() => dispatch(actionSwitchPlay()), [])

  return (
    <div>
      <StartButton startFunction={switchPlay} isPlaying={state.play}/>
    </div>
  )
}
