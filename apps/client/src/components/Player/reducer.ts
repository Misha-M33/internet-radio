import type { PlayerState } from "./Player"

const SWITCH_PLAY = 'switchPlay'
const CHANGE_VOLUME = 'changeVolume'

export function playerInit(initState?: Partial<PlayerState>) {
if (!initState) {
    return {
    play: false,
    volume: 50,
    songName: '',
    songAuthor: '',
    coverImg: '',
    }
}

return {
    play: initState?.play || false,
    volume: initState?.volume || 50,
    songName: initState?.songName?.toString() || '',
    songAuthor: initState?.songAuthor?.toString() || '',
    coverImg: initState?.coverImg?.toString() || '',
}
}

export function playerReducer(state: PlayerState, action: {type: string, payload?: Partial<PlayerState>}) {
    switch (action.type) {
        case SWITCH_PLAY: {
            return {...state, play: !state.play}
        }
        case CHANGE_VOLUME: {
            return {...state, volume: action?.payload?.volume}
        }
        default: {
            return state
        }
    }
}

export function actionSwitchPlay() {
    return {type: SWITCH_PLAY}
}

export function actionChangeVolume(volume: number) {
    return {type: CHANGE_VOLUME, payload: {volume}}
}