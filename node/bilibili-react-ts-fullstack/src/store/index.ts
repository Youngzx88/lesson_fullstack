import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers' // 合并
import thunk, { ThunkMiddleware } from 'redux-thunk'
// window  interface  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// ts  as  断言 
const composeEnhancers = 
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, 
    composeEnhancers(
        applyMiddleware(
            // 断言   dispath 异步action  ts -> ThunkMiddleware 
            thunk as ThunkMiddleware
        )
    )    
)

//type和interface都是ts中的类型声明
export type rootState = ReturnType<typeof reducers>

export default store;
