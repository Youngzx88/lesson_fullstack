import React,{useEffect} from 'react'
import { connect } from 'react-redux'



function Singers(props) {
  const { singerList } = props
  useEffect(()=>{
    
  },[])
  return (
    <div>
        Singers
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    
  }
}
const maspDispatchToProps = (dispatch) => {
  return {
   
  }
}
export default connect(mapStateToProps,maspDispatchToProps)(Singers)