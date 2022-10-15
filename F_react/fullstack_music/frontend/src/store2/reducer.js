// 不做具体的状态， 分配工作
import { combineReducers } from "redux";
// 一个redecer文件 放一类数据
import userReducer from './user';
// 每个reducer文件负责返回一个函数
// 固定的返回值 页面需要的状态
// 页面不在管理数据 
import singerReducer from './singer';
import recommendReducer from './recommend';
import rankReducer from './rank';

// combineReducers接受对象配置 
export default combineReducers({
    // key  取个名字 value 对应的reducer函数
    user: userReducer,
    singer: singerReducer,
    recommend: recommendReducer,
    rank: rankReducer
});