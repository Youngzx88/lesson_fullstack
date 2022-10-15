import styled from 'styled-components'
import style from '@/assets/global-style'

export const SongItem = styled.ul`
    >li {
        display: flex;
        height: 3rem;
        align-items: center;
        .index {
            width: 3rem;
            height: 3rem;
            line-height: 3rem;
            text-align:center;
        }
        .info {
            box-sizing: border-box;
            flex: 1;
            display: flex;
            height: 100%;
            padding: 0.25rem 0;
            flex-direction: column;
            justify-content: space-around;
            border-bottom: 1px solid ${style['border-color']};
            >span:first-child{
                color: ${style["font-color-desc"]}
            }
            >span:last-child{
                font-size: ${style["font-size-s"]};
                color: #bba8a8;
            }
        }
    }
`