import React from 'react'
import {connect} from 'react-redux'
import {getBannerRequest} from '@/api/request'
import { useEffect } from 'react'

function Recommend(props) {
  useEffect(()=>{
    (async function(){
      let res = await getBannerRequest();
      console.log(res);
    })()
  },[])
  return (
    <div>
        Recommend
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