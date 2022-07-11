import {
  getHotListRequest
} from '../../../api/request'
import * as actionTypes from './constants'



export const changeHotList = (data) =>({
  type:actionTypes.CHANGE_HOT_LIST,
  data:data
})
export const getHotKeyMenu = () =>{
  return (dispatch) => {
    getHotListRequest().then(data => {
          console.log(data)
          dispatch(changeHotList(data.data))
      })
  }
}