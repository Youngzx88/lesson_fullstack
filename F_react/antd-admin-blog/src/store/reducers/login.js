import * as actionTypes from '../constants'

const initState = false; // 是否登录
export default function loginReducer(preState = initState, action) {
    const { type, data } = action
    switch(type) {
        case actionTypes.SET_LOGGIN:
            return data  // 简版
            break;
        default:
            return preState
    }
}