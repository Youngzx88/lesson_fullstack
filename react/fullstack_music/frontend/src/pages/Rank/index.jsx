import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {Container} from './style'
import Scroll from '@/components/common/Scroll'
import {EnterLoaing} from '@/pages/Singers/style'
import Loading from '@/components/common/loading'

function Rank(props) {
  const { enterLoaing,songsCount } = props
  useEffect(() => {
    // setTimeout(() => {
    //   rankList.push({id: 2}) 
    // }, 1000)
  }, [])
  
  return (
      <Container play={songsCount}>
          <Scroll>
            <div>
              {enterLoaing && <EnterLoaing> <Loading></Loading></EnterLoaing>}
            </div>
          </Scroll>
      </Container>
  )
}
const mapStateToProps = (state) => {
  
  return {
    songsCount:state.player.playList.length,
    enterLoaing: state.rank.enterLoaing
  }
}
// 状态改变的流程 
// 数据状态变得万无一失
const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rank)
