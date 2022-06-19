import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 500px;
    height: 50px;
    margin-left: 50px;
    margin-top: 30px;
`


export const NavItem = styled.div`
    border-radius: 9999px;
    width: 80px;
    height: 50px;
    margin-right: 5px;
    background-color: #f2f3f4;
    text-align: center;
    line-height: 50px;
    display: inline-block;
    text-decoration:none;
    a{
        text-decoration:none;
        color: black;
    }
    &.active{
        background-color: #262626;
        a{
            color: white;
        }
    }
`