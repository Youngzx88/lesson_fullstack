import { 
    getBannerRequest,
    getRecommendListRequest 
} from '@/api/request'
import * as actionTypes from './constants'

export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: data
})
// api请求 一定放在action中 
export const getBannerList = () => {
    return (dispatch) => {
        console.log('|||||||||||||||')
        getBannerRequest()
            .then(data => {
                // console.log(data.banners, '////')
                const action = changeBannerList(data.banners);
                dispatch(action)
            })
    }
}

export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data
})
export const getRecommendList = () => {
    return (dispatch) => {
        getRecommendListRequest().then(data => {
            dispatch(changeRecommendList(data.result))
            // 改变enterLoading的默认true的状态
            dispatch(changeEnterLoading(false))
        })
    }
}


export const changeEnterLoading = (data) =>({
    type:actionTypes.CHANGE_ENTER_LOADING,
    data
})
