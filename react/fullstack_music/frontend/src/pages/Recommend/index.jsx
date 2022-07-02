import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from './store/index'
import { Content } from './style'
import Scroll from '@/components/common/Scroll'
import Slider from '@/components/slider'


function Recommend(props) {
  const { bannerList, songsCount } = props;
  const { getBannerDataDispatch, getRecommendListDispatch } = props;
  // let songsCount = 2;
  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDispatch();
  }, []);
  return (
    <Content play={songsCount}>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList}>
          </Slider>
          {/* <RecommendList RecommendList={RecommendList} /> */}
        </div>
      </Scroll>
    </Content>
  )
}

// 把rudux中的数据通过mapStateToProps函数映射到此组件
// 对状态树的读操作
const mapStateToProps = (state) => {
  return {
    bannerList: state.recommend.bannerList,
    recommendList: state.player.playList.recommendList,
    songsCount: state.player.playList.length
  };
};
// 
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionCreators.getBannerList());
    },
    getRecommendListDispatch() {
      dispatch(actionCreators.getRecommendList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
