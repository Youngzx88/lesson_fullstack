import React from 'react'
import { useEffect } from 'react'
import {connect} from 'react-redux'
import {getRankList} from '../../store/actionCreators'

function Rank(props) {
  const {ranklist,getRankListDispatch} = props
  useEffect(()=>{
    getRankListDispatch()
  },[])
  // console.log(ranklist,'jkhjkhkjh')
  return (
    <div>
        
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ranklist: state.rank.ranklist
  }
}


//状态改变的流程
//数据状态变得万无一失
const mapDispatchToProps = (dispatch) =>{
  return {
    getRankListDispatch(){
      // 派action
      dispatch(getRankList())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Rank)