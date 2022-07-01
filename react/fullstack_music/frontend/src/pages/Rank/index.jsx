import React,{ useEffect } from 'react'
import { connect } from "react-redux";



function Rank(props) {
  const { rankList } = props
  useEffect(() => {
   
    // console.log('1111111111111');
  }, []);
  // console.log(rankList,'-------------------------------------------');
  return (
    <div>
        Rank
    </div>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

// 状态改变的流程
const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Rank)