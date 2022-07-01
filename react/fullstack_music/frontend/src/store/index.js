// 1. 管理数据 createStore
// 2. 模块化管理数据 多个reducer
// 3. 修改数据？
//      dispath({ action：})  重新计算reducer

// 初始化仓库
import { createStore, compose, applyMiddleware } from "redux";
// 组件  中间件（redux-thunk）  数据
import thunk from "redux-thunk";   // 异步数据管理
import reducer from "./reducer";

// 激活redux devtool 
const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    // 组合函数
    // devtool
    composeEnhancers(
        // 异步
        applyMiddleware(thunk)
    )
)
export default store

