import React, { memo, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import style from '@/assets/global-style';
import { debounce } from '@/api/utils';

const SearchBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;
    padding-right: 1rem;
    height: 2rem;
    background: ${style["theme-color"]};
    .icon-back{
        font-size: 1.2rem;
        color: ${style["font-color-light"]};
    }
    .box {
        flex: 1;
        margin: 0 0.25rem;
        line-height: 0.9rem;
        background:${style["theme-color"]};
        color: ${style["highlight-background-color"]};
        font-size: ${style["font-size-m"]};
        outline: none;
        border: none;
        border-bottom: 1px solid ${style["border-color"]};
        &::placeholder{
            color: ${style["font-color-light"]};
        }
    }
    .icon-delete{
        font-size: 16px;
        color: ${style["background-color"]};
    }
`

const SearchBox = (props) => {
    const queryRef = useRef();
    console.log(queryRef);
    // 解构父组件props时， 分两部分， 
    // 读props
    // 方法
    const { newQuery } = props;
    const { handleQuery, back } = props;
    const [query, setQuery] = useState('');

    // let handleQueryDebounce =  

    useEffect(()=>{
        queryRef.current.focus();
    },[])

    useEffect(() => {

    }, [query])

    const clearQuery = () =>{
        setQuery('');
    }
    const displayStyle = query?{display:'block'}:{display:'none'};

    return (
        <SearchBoxWrapper>
            <i className="iconfont icon-back" onClick={() => back()}>&#xe655;</i>
            <input type="text" className='box'
            placeholder='搜索歌曲、歌手、专辑' 
            ref={queryRef}/>
            <i 
                className="iconfont icon-delete" 
                style={displayStyle}
                onClick={()=>{clearQuery()}}>
                    &#xe600;
            </i>
        </SearchBoxWrapper>
    )
}

export default memo(SearchBox)