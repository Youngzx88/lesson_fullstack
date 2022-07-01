import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from './store/index'
import { getBannerList } from "./store/actionCreators";
import { Content } from './style'
import Scroll  from '@/components/common/Scroll'
import Slider from '@/components/slider'

function Recommend(props) {
  const { banners, getBannerDataDispatch } = props;
  let songsCount = 2;
  useEffect(() => {
    getBannerDataDispatch();
  }, []);
  return (
    <Content play={songsCount}>
      <Scroll className="list">
        <div>
          <Slider bannerList={banners}></Slider>
        </div>
      </Scroll>
    </Content>
  )
}

// 把rudux中的数据通过mapStateToProps函数映射到此组件
// 对状态树的读操作
const mapStateToProps = (state) => {
  return {
    banners: state.recommend.banners,
  };
};
// 
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionCreators.getBannerList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
