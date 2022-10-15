import * as actionTypes from './constants'

export const changePlayList = (data) => ({
    type: actionTypes.SET_PLAYLIST,
    data: data
})