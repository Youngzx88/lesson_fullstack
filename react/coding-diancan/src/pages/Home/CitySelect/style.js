/*
 * @Date         : 2022-06-16 16:00:50
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 21:33:02
 * @description  : 
 */
import styled from 'styled-components'

export const Wrapper = styled.div`
    // 0.8*16也不行，所以要做自适应
    width: 100%;
    height: .8rem;
    background: skyblue;
    .citygps {
        width: 100%;
        height: 0.4rem;
        font-size: 18px;
        line-height: 0.4rem;
        color: #fff;
        i {
            padding: 0 5px;
            font-size: 22px;
        } 
    }
    .header_search {
        width: 98%;
        height: 0.3rem;
        input {
            width: 100%;
            height: 100%;
            border: 0;
            margin-left: 1%;
            padding-left: 5px;
        }
    }
    
`