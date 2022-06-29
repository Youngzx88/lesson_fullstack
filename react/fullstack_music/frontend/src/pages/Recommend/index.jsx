import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBannerList } from '@/store/actionCreators'

function Recommend(props) {
  const { banners, getBannerDataDispatch } = props
  useEffect(() => {
    getBannerDataDispatch()
  }, [])
  return (
    <div>
      Recommend
    </div>
  )
}
// state 状态树
const mapStateToProps = (state) => {
  return {
    banners: state.recommend.banners
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(getBannerList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
