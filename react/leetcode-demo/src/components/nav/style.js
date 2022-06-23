import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    padding: 12px;
    top: 0;
    left: 0;
    bottom: 0;
    margin: 30px auto;
    margin-left: 120px;
`


export const NavItem = styled.div`
    border-radius: 9999px;
    width: 90px;
    height: 50px;
    :not(:first-child){
        margin-left: 16px;
    }
    /* margin-left: 16px; */
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