import type { PlayerState } from "./Player"

const SWITCH_PLAY = 'switchPlay'

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

export function playerReducer(state: PlayerState, action: {type: string, payload?: unknown}) {
    switch (action.type) {
        case SWITCH_PLAY: {
            return {...state, play: !state.play}
        }
        default: {
            return state
        }
    }
}

export function switchPlay() {
    return {type: SWITCH_PLAY}
}