import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container } from './style'
import Scroll from '@/components/common/Scroll'
import { EnterLoading } from '@/pages/Singers/style'
import Loading from '@/components/common/loading'
import { getRankList } from './store/actionCreators'
import { filterIndex  } from '@/api/utils'


function Rank(props) {
  const { 
    enterLoading,
    songsCount,
    rankList 
  } = props
  const {
    getRankListDispatch
  } = props

  useEffect(() => {
    // setTimeout(() => {
    //   rankList.push({id: 2}) 
    // }, 1000)
    getRankListDispatch()
  }, [])
  let globalStartIndex = filterIndex(rankList)
  let officalList = rankList.slice(0, globalStartIndex);
  let globalList = rankList.slice(globalStartIndex);
  // console.log(globalStartIndex, officalList, rankList)
  const renderRankList = () => {
    return (
      <div>
      </div>
    )
  }
  let displayStyle = enterLoading?{"display": "none"}: {"display": ""};
  return (
    <Container play={songsCount}>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}>官方榜</h1>
          { renderRankList(officalList) }
          <h1 className="global" style={displayStyle}>全球榜</h1>
            { renderRankList(globalList, true) }
        {enterLoading && <EnterLoading><Loading></Loading></EnterLoading>}
        </div>
      </Scroll>
    </Container>
  )
}
const mapStateToProps = (state) => {
  
  return {
    rankList: state.rank.rankList,
    songsCount: state.player.playList.length,
    enterLoading: state.rank.enterLoading
  }
}
// 状态改变的流程 
// 数据状态变得万无一失
const mapDispatchToProps = (dispatch) => {
  return {
    getRankListDispatch() {
      dispatch(getRankList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank))
