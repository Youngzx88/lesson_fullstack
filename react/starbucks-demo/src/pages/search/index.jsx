import React,{useState,useEffect,useRef} from 'react'
import { Container,ShortcutWrapper} from './style'
import { CSSTransition } from 'react-transition-group'
import SearchBox from '../../components/common/search-box';

export default function Search() {
  const [query, setQuery] = useState('')
  const [show, setShow] = useState(false);
  useEffect(()=>{
    setShow(true)
  },[])

  const handleQuery = (q) =>{
    setQuery(q)
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
                {/* <Scroll> */}
                    <div className='first'>
                        {/* <HotKey> */}
                            {/* <h1 className="title">热门搜索</h1>
                            {renderHotKey()} */}
                        {/* </HotKey> */}
                        111
                    </div>
                {/* </Scroll> */}
            </ShortcutWrapper>
            <ShortcutWrapper show={query}>
                {/* <Scroll onScroll={forceCheck}> */}
                    <div>
                        {/* { renderSingers() }
                        { renderAlbum() }
                        { renderSongs() } */}
                        222
                    </div>
                {/* </Scroll> */}
            </ShortcutWrapper>
        </Container>
  </CSSTransition>
  )
}
