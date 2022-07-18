import React, { useCallback, useReducer } from 'react'
import { StartButton } from './components/StartButton';
import { Volume } from './components/Volume';
import { playerInit, playerReducer, actionSwitchPlay, actionChangeVolume } from './reducer';

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
  const changeVolume = useCallback((volume: number) => dispatch(actionChangeVolume(volume)), [])

  return (
    <div>
      <StartButton startFunction={switchPlay} isPlaying={state.play}/>
      <Volume changeVolumeFunc={changeVolume}/>
    </div>
  )
}
