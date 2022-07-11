import React,{useState,useEffect,useRef} from 'react'
import { Container} from './style'
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
                {console.log(query)}
            </SearchBox>
                <ShortcutWrapper show={!query}>
                    {/* <Scroll> */}
                        <div>
                            <HotKey>
                                <h1 className="title">热门搜索</h1>
                                {renderHotKey()}
                            </HotKey>
                        </div>
                    {/* </Scroll> */}
                </ShortcutWrapper>
                <ShortcutWrapper show={query}>
                    {/* <Scroll onScroll={forceCheck}> */}
                        <div>
                            { renderSingers() }
                            { renderAlbum() }
                            { renderSongs() }
                        </div>
                    {/* </Scroll> */}
              </ShortcutWrapper>
        </Container>
  </CSSTransition>
  )
}
