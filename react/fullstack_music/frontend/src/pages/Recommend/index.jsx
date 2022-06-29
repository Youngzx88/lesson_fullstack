import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBannerRequest } from "@/api/request";
import { changeBannerList } from "@/store/actionCreators";

function Recommend(props) {
  const { banners, getBannerDataDispatch } = props;
  useEffect(() => {
    getBannerDataDispatch([1,2,3]);
  }, []);
  return <div>Recommend</div>;
}

// 把rudux中的数据通过mapStateToProps函数映射到此组件
const mapStateToProps = (state) => {
  return {
    banners: state.recommend.banners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch(data) {
      dispatch(changeBannerList(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
