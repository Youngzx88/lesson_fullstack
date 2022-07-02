import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function Rank(props) {
  const {  } = props
  useEffect(() => {
    // setTimeout(() => {
    //   rankList.push({id: 2}) 
    // }, 1000)
   
  }, [])
  
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
// 数据状态变得万无一失
const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rank)
