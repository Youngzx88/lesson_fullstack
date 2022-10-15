import styled from 'styled-components'
import style from '@/assets/global-style'

export const ListWrapper = styled.div`
    max-width: 100%;
    .title {
        font-weight: 700;
        padding-left: 0.3rem;
        font-size: 0.7rem;
        line-height: 3rem;
        color: ${style["font-color"]}
    }
`
export const List = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-around;
`
export const ListItem = styled.div`
    position: relative;
    width: 32%;
    margin-bottom: 0.2rem;
    .decorate {
        z-index: 1;
        position: absolute;
        top: 0;
        width: 100%;
        height: 1.75rem;
        border-radius: 0.15rem;
        background: linear-gradient(hsla(0, 0%, 43%, .4), hsla(0, 0%, 100%, 0));
    }
    .img_wrapper {
        position: relative;
        height: 0;
        padding-bottom:100%;
        .play-count {
            z-index: 1;
            position: absolute;
            right: 0.1rem;
            top: 0.1rem;
            font-size: ${style["font-size-s"]};
            line-height: 0.75rem;
            color: ${style["font-color-light"]};
            .play {
                vertical-align: top;
            }
        }
        img {
            width: 100%;
            height: 100%;
            border-radius:0.15rem
        }
    }
    .desc{
        overflow:hidden;
        margin-top: 0.1rem;
        padding: 0 0.1rem;
        height: 2.5rem;
        text-align: left;
        font-size: ${style['font-size-s']};
        line-height: 1.4;
        color: ${style['font-color-desc']}
    }
`