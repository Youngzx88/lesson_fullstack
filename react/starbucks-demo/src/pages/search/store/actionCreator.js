import {
  getHotListRequest,
  getSuggestListRequest
} from '../../../api/request'
import * as actionTypes from './constants'



export const changeHotList = (data) =>({
  type:actionTypes.CHANGE_HOT_LIST,
  data:data
})
export const getHotKeyMenu = () =>{
  return (dispatch) => {
    getHotListRequest().then(data => {
          dispatch(changeHotList(data.data))
      })
  }
}

export const changeSuggestList = (data) => ({
  type: actionTypes.CHANGE_SUGGEST_LIST,
  data: data
})

export const getSuggestMenuList = (query) =>{
  return (dispatch) => {
    getSuggestListRequest().then(data => {
          let res = data.data.filter(item => {
          return item.goods.indexOf(query)!=-1
        })
        dispatch(changeSuggestList(res))
    })
  }
}
