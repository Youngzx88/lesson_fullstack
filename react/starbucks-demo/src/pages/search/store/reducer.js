import * as actionTypes from './constants'

const defaultState = {
    enterLoading: false,
    hotList:[],
}

export default (state = defaultState,action) => {
    switch(action.type){
    case actionTypes.CHANGE_HOT_LIST:
        return {
            ...state,
            hotList: action.data
        }
    case actionTypes.CHANGE_LOADING:
        return {
            ...state,
            enterLoading: action.data
        }
    default:
        return state;
    }
}