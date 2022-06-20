import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'
import { isPathPartlyExisted } from '../../utils'

export default function Footer(props) {
    const { pathname } = useLocation()
    // if (['/cities'].indexOf(pathname) != -1) return
    // 公共函数的 在一个数组里  匹配每一项部分匹配pathname
    if(isPathPartlyExisted(pathname)) return
    return (
        <FooterWrapper>
            <Link to="/home" className={classnames({active:pathname == '/home' || pathname == '/' })}>
                <i className="fa fa-home"></i>
                <span>首页</span>
            </Link>
            <Link to="/find" className={classnames({active:pathname == '/find'})}>
                <i className="fa fa-podcast"></i>
                <span>发现</span>
            </Link>
            <Link to="/order" className={classnames({active:pathname == '/order'})}>
                <i className="fa fa-book"></i>
                <span>订单</span>
            </Link>
            <Link to="/mine"  className={classnames({active:pathname == '/mine'})}>
                <i className="fa fa-user"></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
