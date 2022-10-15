import * as actionTypes from './constants'

const defaultState = {
    playList: []
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case actionTypes.SET_PLAYLIST:
            return {
                ...state,
                playList: action.data
            }
            break;
        default:
            return state
    }
}