import * as actionTypes from './constants'

let defaultState = {
    hotList: [],
    enterLoading: false,
    suggestList: [],
    songsList: []
}
// redux 中旧状态是会被新状态覆盖的
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_HOT_KEYWORDS:
            return {
                ...state,
                hotList: action.data
            }
        case actionTypes.SET_SUGGEST_LISTL:
            return {
                ...state,
                suggestList: action.data
            }
        case actionTypes.SET_RESULT_SONGS_LIST:
            return {
                ...state,
                songsList: action.type
            }
        case actionTypes.SET_ENTER_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state
    }
}