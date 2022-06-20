import styled from 'styled-components'

export const FooterWrapper = styled.div`
    z-index: 9999;
    width: 100%;
    height: 50px;
    background: #e9d8d8;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a{
        flex: 1;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-around;
        text-decoration: none;
        /* &:父级选择器 */
        &.actice{
            color:#de8232;
        }
        i{
            font-size: 1.5em;
        }
    }
`