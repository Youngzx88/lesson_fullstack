// 模块化  路由模块基本就是数据模块
// 不做具体的状态，负责分配工作，集结所有reducer
import { combineReducers } from "redux";
// store 中央
// 地方
import { reducer as recommenReducer } from "@/pages/Recommend/store/index";
import { reducer as playerReducer } from "@/pages/Player/store/index";

export default combineReducers({
    recommend:recommenReducer,
    player:playerReducer,
});
