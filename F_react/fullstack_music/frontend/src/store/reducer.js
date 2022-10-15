// 模块化 路由模块基本就是数据模块
import { combineReducers } from "redux";
// store 中央 
// 地方
import { reducer as recommendReducer } from
     '@/pages/Recommend/store/index'
import { reducer as playerReducer } from '@/pages/Player/store/index'
import { reducer as searchReducer } from '@/pages/Search/store/index'
import { reducer as rankReducer } from '@/pages/Rank/store/index'
import { reducer as singersReducer } from "@/pages/Singers/store/index";


export default combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    search: searchReducer,
    rank: rankReducer,
    singers: singersReducer
})