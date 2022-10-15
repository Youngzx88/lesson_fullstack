import styled from 'styled-components'

export const Content = styled.div`
    position: fixed;
    top: 4.7rem;
    left: 0;
    bottom: ${props => props.play > 0 ? "3rem": 0};
    width: 100%;
`