import * as actionTypes from '../constants'

export const checkGoodsAction = (goodsId) => ({
    type: actionTypes.CHECK_GOODS,
    data: goodsId
})

// data  {goodsId, status: "add|minus"}
export const changeGoodsNumAction = (data) => ({
    type: actionTypes.CHNAGE_GOODS_NUM,
    data: data
})

export const checkAllGoodsAction = (data) => ({
    type: actionTypes.CHECK_ALL_GOODS,
    data
})
