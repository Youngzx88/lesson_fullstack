import React from 'react'
import { connect } from 'react-redux'
import { rootState } from '@/store'

interface HomeProps{
  loading: Boolean;

}
const Home : React.FC<HomeProps> = (props) => {
  const {loading} = props 
  return (
    <div>
      {loading && <div>加载中</div>}
    </div>
  )
}

const mapStateToProps= (state:rootState) => ({
  hotword: state.search.hotword
})

export default connect(mapStateToProps)(Home);