// reducer +  combineReducers
import { combineReducers, AnyAction } from 'redux';
import * as ActionTypes from './action-types';
// 但从未读取其值?   后面没用到， 引入没必要 ts  代码正确
// tree-sharking 黄叶子 
const initalState = {
    loading: true,
    home: {
        partitions: {}
    },
    // 分支 
    search: {
        suggest:[],
        hotword: [],
        searchResult: {}
    },
    // 首页
    // 视频
    // 登录
}

const combineSearch = (state = initalState.search, action:AnyAction) => {
    switch(action.type) {
        case ActionTypes.SET_HOTWORD:
            return {
                ...state,
                hotword: action.data
            }
            break;
        case ActionTypes.SET_SUGGEST:
            return {
                ...state,
                suggest: action.data
            }
            break;
        case ActionTypes.SET_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.data
            }
            break;
        default:
            return state
    }
}

const combineLoading = (state = initalState.loading, action: AnyAction) => {
    switch(action.type) {
        default:
            return state
    }
}
const combineHome = (state = initalState.home, action: AnyAction)  => {
    switch(action.type) {
        case ActionTypes.SET_PARTITIONS:
            return {
                ...state.partitions,
                partitions:action.data
            }
        break;
        default:
            return state
    }
}

export default combineReducers({
    search: combineSearch,
    loading: combineLoading,
    home: combineHome
})