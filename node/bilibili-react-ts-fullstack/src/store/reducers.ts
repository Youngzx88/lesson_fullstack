// reducer + combineReducers
import * as ActionTypes from './action-types'
import { combineReducers, AnyAction } from 'redux'
// ts 除了类型检测  也会检查没有引用的变量
// tree-shaking 树上的黄叶子，不有必要在树上，要掉落（删掉）

const initalState = {
    loading: true,
    // 搜索数据分支：
    search: {
        suggest: [],
        hotword: [],
        searchResult: {}
    }
    // 首页数据分支
    // 视频数据分支
    // 登录数据分支
}

const combineSearch = (state = initalState.search, action: AnyAction) => {
    switch (action.types) {
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

const combineLoading = (state = initalState.loading,action: AnyAction)=>{
    switch(action.type){
        default:
            return state
    }
}

export default combineReducers({
    search: combineSearch,
    loading: combineLoading
})