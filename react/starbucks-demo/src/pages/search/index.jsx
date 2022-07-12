import React,{useState,useEffect,useRef} from 'react'
import Lazyload, { forceCheck } from 'react-lazyload'
import SearchBox from '../../components/common/search-box';
import Scroll from '../../components/common/Scroll/'
import { connect } from 'react-redux'
import { getHotKeyMenu,getSuggestMenu} from './store/actionCreator'
import { CSSTransition } from 'react-transition-group'
import { Container,ShortcutWrapper} from './style'
import { HotKey,GoodWrapper} from './style';

function Search(props) {
const {hotList,suggestList} = props;
const {getHotKeyMenuDispatch,getSuggestMenuDispatch} = props
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
useEffect(()=>{
    getSuggestMenuDispatch(query);
},[query])
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
                                            src={""}
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
const renderSuggestLsit = () => {
    return (
        <>  
            {suggestList.map((item)=>{
                return (
                    <GoodWrapper key={item.id}>
                    <div className="good">
                        <Lazyload placeholder={
                                        <img width="100%" height="100%"
                                            src={""}
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
            <ShortcutWrapper show={query}>
                <Scroll>
                    <div>
                        {suggestList.length>0 ? renderSuggestLsit() : 
                            <h1 className="title">猜你喜欢</h1>
                            
                        }
                    </div>
                </Scroll>
            </ShortcutWrapper>
        </Container>
    </CSSTransition>
    )
}

const mapStateToProps = (state) => {
return {
    hotList: state.search.hotList,
    suggestList: state.search.suggestList
}
}
const mapDispatchToProps = (dispatch) => {
return {
    getHotKeyMenuDispatch() {
        dispatch(getHotKeyMenu());
    },
    getSuggestMenuDispatch(query){
        dispatch(getSuggestMenu(query));
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))