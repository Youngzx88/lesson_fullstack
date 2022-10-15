import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { Content } from './style'
import Scroll  from '@/components/common/Scroll'
import Slider from '@/components/slider/'
import RecommendList from '@/components/list/'
import { forceCheck } from 'react-lazyload'
import { EnterLoading } from '@/pages/Singers/style'
import Loading from '@/components/common/loading-v2/index'

function Recommend(props) {
  const { bannerList, songsCount, recommendList, enterLoading } = props
  const { getBannerDataDispatch, getRecomendListDispatch } = props
  // let songsCount = 2;
  useEffect(() => {
    console.log('?????????????????')
    getBannerDataDispatch();
    getRecomendListDispatch();
  }, [])
  return (
    <Content play={songsCount}>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}/>
        </div>
      </Scroll>
      { enterLoading? <EnterLoading>
        <Loading></Loading></EnterLoading>: null}
    </Content>
  )
}
// state 状态树
const mapStateToProps = (state) => {
  return {
    enterLoading: state.recommend.enterLoading,
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recommendList,
    songsCount: state.player.playList.length
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionCreators.getBannerList())
    },
    getRecomendListDispatch() {
      dispatch(actionCreators.getRecommendList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
