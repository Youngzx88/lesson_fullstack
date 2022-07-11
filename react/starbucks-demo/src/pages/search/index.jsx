import React,{useState,useEffect,useRef} from 'react'
import { Container,ShortcutWrapper} from './style'
import { CSSTransition } from 'react-transition-group'
import SearchBox from '../../components/common/search-box';
import Scroll from '../../components/common/Scroll/'
import { HotKey,GoodWrapper} from './style';
import { connect } from 'react-redux'
import { getHotKeyMenu } from './store/actionCreator'
import Lazyload, { forceCheck } from 'react-lazyload'

function Search(props) {
const {hotList} = props;
const {getHotKeyMenuDispatch} = props
const [query, setQuery] = useState('')
const [show, setShow] = useState(false);

useEffect(()=>{
    setShow(true)
},[])
useEffect(()=>{
    if(hotList.length == 0){
        getHotKeyMenuDispatch();
    }
},[])

//用于在子组件searchBox执行，更新父组件的query
const handleQuery = (q) =>{
    setQuery(q)
}
const renderHotKey = () =>{
return (
    <>  
        {hotList.map((item)=>{
            return (
                <GoodWrapper key={item.id}>
                <div className="good">
                    <Lazyload placeholder={
                                    <img width="100%" height="100%"
                                        src={"https://huaban.com/pins/4834592535"}
                                    />}>
                        <img src={item.img} alt=""/>
                    </Lazyload>
                    <div className="name">{item.goods}</div>
                </div>
                </GoodWrapper>
            )
        })}
    </>
)
}

//主体jsx
return (
    <CSSTransition
    in={show}
    timeout={400}
    appear={true}
    classNames="fly"
    unmountOnExit
    onExit={() => {
        navigate(-1)
    }}
    > 
        <Container>
            <SearchBox
                newQuery={query}
                handleQuery={handleQuery}>
            </SearchBox>
            <ShortcutWrapper show={!query}>
                <Scroll>
                        <HotKey>
                            <h1 className="title">大家都在搜</h1>
                            {renderHotKey()}
                        </HotKey>
                </Scroll>
            </ShortcutWrapper>
            {/* <ShortcutWrapper show={query}> */}
                {/* <Scroll> */}
                    {/* <div> */}
                        {/* { renderSingers() }
                        { renderAlbum() }
                        { renderSongs() } */}
                        {/* 222 */}
                    {/* </div> */}
                {/* </Scroll> */}
            {/* </ShortcutWrapper> */}
        </Container>
    </CSSTransition>
    )
}

const mapStateToProps = (state) => {
return {
    hotList: state.search.hotList,
    // enterLoading: state.search.enterLoading,
}
}
const mapDispatchToProps = (dispatch) => {
return {
    getHotKeyMenuDispatch() {
        dispatch(getHotKeyMenu());
    },
}
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))