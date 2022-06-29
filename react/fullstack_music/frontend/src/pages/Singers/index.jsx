import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {getSingerList} from '../../store/actionCreators'

function Singers(props) {
  const {singers,getSingerListDispatch} = props 
  useEffect(()=>{
    getSingerListDispatch();
  },[])
  console.log(singers,"====")
  return (
    <div>
        Singers
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    singer: state.singer.singers
  }
}
const mapDispatchToProps = (dispatch) =>{
    return {
      getSingerListDispatch(){
        dispatch(getSingerList())
      }
  } 
}
export default connect(mapStateToProps,mapDispatchToProps)(Singers)