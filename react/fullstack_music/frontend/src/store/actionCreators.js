// 组件不可以染指数据请求，页面级别组件中看不到api
// 在action中，redux 指定可以数据流动开始的地方
// redux之后，UI更纯粹
// 应用开发分成 UI + 数据管理

import { getBannerRequest } from "../api/request"
import { getRankListRequest } from "../api/request"
import { getSingerRequest } from "../api/request"
// store  redux defaultState -> action api 
//                  -> reducer 重新计算 -> 通知connnect UI更新

// action 函数
export const changeBannerList = (data) => ({
    type:'CHANGE_BANNER',
    data
})
export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest().then(data => {
            const action = changeBannerList(data.banners)
            dispatch(action)
        })
    }
}

export const changeRankList = (data) => ({
    type:'CHANGE_RANKLIST',
    data
})
export const getRankList = () =>{
    //api请求，异步
    return (dispatch) =>{
        getRankListRequest().then(data=>{
            const action = changeRankList(data.list)
            dispatch(action)
            // dispatch参数为{type:'修改tag',data},只有dispatch这种格式的对象，才能重新触发reducer
        })
    }
}

export const changeSingerList = (data) => ({
    type:'CHANGE_SINGER',
    data
})
export const getSingerList = () =>{
    return (dispatch) =>{
        getSingerRequest().then(data=>{
            const action = changeSingerList(data.artists)
            dispatch(action)
        })
    }
}


