import {getBannerRequest} from '@/api/request'
import * as  actionTypes from './constants'
//同步
export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: data
})

//处理api请求的 异步请求一定放在action当中
export const getBannerList = () =>{
  return (dispatch) => {
      getBannerRequest()
        .then(data=>{
          const action = changeBannerList(data.banners);
          dispatch(action)
        })
  }
}