// 不做具体的状态，负责分配工作，集结所有reducer
import { combineReducers } from "redux";
// 引入并重新命名
import userReducer from './user';
// import singerReducer from './singer';
import recommenReducer from './recommend'
import rankReducer from './rank'
// combineReducers接受所有reducer并进行对象配置 
export default combineReducers({
    // key  取个名字 value 对应的reducer函数
    user: userReducer,
    // singer: singerReducer,
    recommend: recommenReducer,
    rank:rankReducer
});