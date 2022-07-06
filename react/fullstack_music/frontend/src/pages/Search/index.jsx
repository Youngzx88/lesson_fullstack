// useRef 用来获取DOM元素对象，保存数据
// useRef DOM相关
// useCallback 性能相关
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {useNavigate} from 'react-router-dom'
import { connect } from 'react-redux'
import { getHotKeyWords } from './store/actionCreators'
import { CSSTransition} from 'react-transition-group'
import { Container } from './style'
const Search = (props) => {
    const navigate = useNavigate();
    const { hotList,songsCount } = props
    const { getHotKeyWordsDispatch } = props
    // 搜索内容 redux解决共享状态问题 
    // 1. 搜索列表 api action redux
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false);
    // const musicNoteRef = useRef();
    useEffect(()=> {
        setShow(true)
        if(!hotList.length){
            getHotKeyWordsDispatch()
        }
        setTimeout(()=>{
            setShow(false)
        },3000)
    },[])

    return (
        // 当dom ready组件挂载上去，应用css transition效果
        <CSSTransition in={show} timeout={300} appear={true} classNames="fly" unmountOnExit onExit={()=>{navigate(-1)}}>
            <Container play={songsCount}>
                <div className="search_box_wrapper">
                    
                </div>
            </Container>
        </CSSTransition>
    )

}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    // 通过api请求  热搜 
    hotList: state.search.hotList,
    enterLoading: state.search.enterLoading,
    // 搜索建议  卖广告
    suggestList: state.search.suggestList,
    // redux 就为跨模块共享数据而来
    songsCount: state.player.playList.length,
    songsList: state.search.songsList
    });
    // 映射dispatch到props上
    const mapDispatchToProps = (dispatch) => {
        return {
        getHotKeyWordsDispatch() {
            dispatch(getHotKeyWords());
    },
    //   changeEnterLoadingDispatch(data) {
    //     dispatch(changeEnterLoading(data))
    //   },
    //   getSuggestListDispatch(data) {
    //     dispatch(getSuggestList(data));
    //   },
    //   getSongDetailDispatch(id) {
    //     dispatch(getSongDetail(id));
    //   }
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(Search);