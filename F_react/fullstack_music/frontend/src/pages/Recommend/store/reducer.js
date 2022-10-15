import * as actionTypes from './constants'

const defaultState = {
    bannerList: [],
    recommendList: [],
    enterLoading: true
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_BANNER: 
            return {
                ...state,
                bannerList: action.data
            }
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return {
                ...state,
                recommendList: action.data
            }
        case actionTypes.CHANGE_ENTER_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state
    }
}