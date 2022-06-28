import React from 'react'
import {connect} from 'react-redux'

function Recommend(props) {
  return (
    <div>
        Rank
    </div>
  )
}

// 把rudux中的数据通过mapStateToProps函数映射到此组件
const mapStateToProps = (state) =>{
  return {
    banners: state.recommend.banners
  }
}
export default connect(mapStateToProps)(Recommend)