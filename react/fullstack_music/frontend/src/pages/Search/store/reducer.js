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
        // case actionTypes.CHANGE_BANNER:
        //     return {
        //         ...state,
        //         bannerList: action.data
        //     }
        default:
            return state
    }
}