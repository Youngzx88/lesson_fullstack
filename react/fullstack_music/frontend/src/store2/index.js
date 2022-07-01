// 初始化仓库
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducer from './reducer';
// 激活redux devtool 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 实例化一个仓库 
// reducer? Array.reduce 名词 
// 第二个参数
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));
export default store