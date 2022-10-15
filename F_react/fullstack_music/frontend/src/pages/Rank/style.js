import styled from 'styled-components';
import style from '@/assets/global-style';

export const Container = styled.div`
    position: fixed;
    top: 4.5rem;
    bottom:${props => props.play > 0? "3rem": 0};
    width: 100%;
    .offical, .global {
        margin: 0.5rem 0.25rem;
        padding-top: 0.75rem;
        font-weight: 700;
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-desc"]};
    }
`
