import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getPartitions } from '@/store/actions/partitions'
interface HomeProps {
  loading: Boolean;
  getPartitionsDispatch: () => void;
}

const Home : React.FC<HomeProps> = (props) => {
  const { loading } = props
  const { getPartitionsDispatch } = props;
  useEffect(() => {
    getPartitionsDispatch();
  }, [])
  return (
    <div>
      {loading && <div>加载中...</div>}
    </div>
  )
}

const mapStateToProps = (state :rootState) => ({
  hotword: state.search.hotword,
  loading: state.loading,
  partitions: state.home.partitions
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPartitionsDispatch() {
    dispatch(getPartitions())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)