import React from 'react'
import { Wrapper,NavItem } from './style'
import {Link,useLocation} from 'react-router-dom'
import classnames from 'classnames'
export default function Nav() {
    const {pathname} = useLocation()
    return (
        <Wrapper>
            <NavItem  className={(classnames({active:pathname=='/'}))}>
            <Link to={"/"}>全部题目</Link>
            </NavItem>
            <NavItem  className={(classnames({active:pathname=='/algorithm'}))}>
            <Link to={"/algorithm"}>算法</Link>
            </NavItem>
            <NavItem className={(classnames({active:pathname=='/database'}))}>
            <Link to={"/database"} >数据库</Link>
            </NavItem>
            <NavItem className={(classnames({active:pathname=='/shell'}))}>
            <Link to={"/shell"} >Shell</Link>
            </NavItem>
            <NavItem className={(classnames({active:pathname=='/concurrency'}))}>
            <Link to={"/concurrency"} >多线程</Link>
            </NavItem>
        </Wrapper>
  )
}
