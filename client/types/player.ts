import { ITrack } from './track';
export interface PlayerState {
    active: null | ITrack
    volume: number
    duraction: number
    currentTime: number
    pause: boolean
}

export enum PlayerActionTypes {
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    SET_ACTIVE = 'SET_ACTIVE',
    SET_DURACTION = 'SET_DURACTION',
    SET_CURRENT_TIME = 'SET_CURRENT_TIME',
    SET_VOLUME = 'SET_VOLUME',
}

interface PlayAction {
    type: PlayerActionTypes.PLAY
}
interface PauseAction {
    type: PlayerActionTypes.PAUSE
}

interface SetActiveAction {
    type: PlayerActionTypes.SET_ACTIVE
    payload: ITrack
}

interface SetDuractionAction {
    type: PlayerActionTypes.SET_DURACTION
    payload: number
}

interface SetVolumeAction {
    type: PlayerActionTypes.SET_VOLUME
    payload: number
}

interface SetCurrentTimeAction {
    type: PlayerActionTypes.SET_CURRENT_TIME
    payload: number
}

export type PlayerAction = 
    PlayAction
    | PauseAction
    | SetActiveAction
    | SetDuractionAction
    | SetVolumeAction
    | SetCurrentTimeAction
