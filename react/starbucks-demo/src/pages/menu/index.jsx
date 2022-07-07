import React,{useState,useEffect}from 'react'
import { Wrapper } from './style.js'
import { Toast } from 'react-weui'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import NavBar from '../../components/navbar'
import ListItem from '../../components/listitem'
import EmptyItem from '../../components/emptylist'
import LoadingV2 from '../../components/common/loading-v2/index.jsx'
import Loading from '../../components/common/loading/index'


function Menu(props) {
  const {loading,menuList,tab} = props
  const {setMenuListDispatch,setTabDispatch} = props
  useEffect(()=>{
    setMenuListDispatch()
  },[tab])
  return (
    <Wrapper>
      <NavBar tab={tab}  setTabDispatch={setTabDispatch}/>
      {/* 过渡动画 */}
      {/* {loading ? <Toast show={loading} icon="loading">加载中...</Toast> : null} */}
      {loading ? <LoadingV2/> : null}
      {menuList.length>0 ? <ListItem menuList={menuList} tab={tab}/> : <EmptyItem/>}
      <div className="frap">
        <button id="featured-campaign-search" className="button_primary" rel="menu-search-overlay">搜索菜单</button>
      </div>
    </Wrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    loading: state.menu.loading,
    menuList: state.menu.menuList,
    tab: state.menu.tab
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setMenuListDispatch() {
      dispatch(actionCreators.getMenuList())
    },
    setTabDispatch(tabname){
      dispatch(actionCreators.getTab(tabname))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)