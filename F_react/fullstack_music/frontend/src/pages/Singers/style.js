import styled from 'styled-components'
import style  from '@/assets/global-style'

export const EnterLoading = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: auto;
`

export const List = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    overflow: hidden;
    .title {
        margin: 0.5rem 0 0.5rem 0.5rem;
        color: ${style["font-color-desc"]};
        font-size:${style["font-size-s"]}
    }
`

export const ListItem = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    margin: 0 0.25rem;
    padding: 0.25rem 0;
    align-items: center;
    border-bottom: 1px solid ${style["border-color"]};
    .img_wrapper {
        margin-right: 1rem;
        img {
            border-radius: 0.15rem;
            width:2.5rem;
            height: 2.5rem;
        }
    }
    .name {
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-desc"]};
        font-weight:500;
    }
`