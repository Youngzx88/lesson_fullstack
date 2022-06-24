import React from 'react'
import classnames from 'classnames'
import {Link,useLocation} from 'react-router-dom'
import { Wrapper } from './style'

export default function NavBar() {
  const { pathname } = useLocation()
  return (
    <Wrapper>
        <div className="display-1">菜单</div>
        <div className="tabs-wrapper">
                <Link to="/all" className={classnames({active:pathname == '/all' || pathname == '/' })}>
                    <span>全部</span>
                </Link>
                <Link to="/beverages" className={classnames({active:pathname == '/beverages'})}>
                    <span>饮料</span>
                </Link>
                <Link to="/food" className={classnames({active:pathname == '/food'})}>
                    <span>美食</span>
                </Link>
                <Link to="/coffee" className={classnames({active:pathname == '/coffee' })}>
                    <span>咖啡</span>
                </Link>
                <Link to="/merchandise" className={classnames({active:pathname == '/merchandise' })}>
                    <span>产品</span>
                </Link>
        </div>
    </Wrapper>
  )
}
