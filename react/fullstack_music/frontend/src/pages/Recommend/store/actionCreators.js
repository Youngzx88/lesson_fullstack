import { getBannerRequest, getRecommendListRequest } from "@/api/request"
import * as actionTypes from './constants'



export const changeBannerList = (data) => ({
    // 同步
    type: actionTypes.CHANGE_BANNER,
    data: data
})
// 异步请求数据  api  一定放在action中
export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest()
            .then(data => {
                const action = changeBannerList(data.banners)
                dispatch(action)
            })
    }
}
// 同步
export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data: data
})
// 异步
export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest()
            .then(data => {
                const action = changeRecommendList(data.result)
                dispatch(action)
            })
    }
}