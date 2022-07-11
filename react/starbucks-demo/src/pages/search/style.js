import styled from "styled-components";


export const Container = styled.div`
    position:fixed;
    height: 100vh;
    top: 0;
    left:0;
    right:0;
    width: 100%;
    z-index: 100;
    overflow: hidden;
    transform-origin: right bottom;
    /* CSSTranstion 过度类型给children  */
    &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0,0,0)
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
`

export const ShortcutWrapper = styled.div`
    position: absolute;
    color: black;
    top: 8rem;
    width: 100%;
    display: ${props => props.show ? "" : "none"};
`