import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'
import { isPathPartlyExisted } from '../../utils'


export default function Footer(props) {
  const { pathname } = useLocation()
  // 选择城市，商品详情时不需要Footer
  // 动态路由就识别不了，indexOf不能判断数组元素一部分
  // if (['/cities','/homedetail'].indexOf(pathname) != -1) return
  // 公共函数的 实现在一个数组里面匹配每一项部分匹配pathname就可以了，不如封装一个函数
  // if (pathname.indexOf('') ) return
  // console.log(pathname,isPathPartlyExisted(pathname))    // /homedetail/7345078523695097 false
  if(isPathPartlyExisted(pathname)) return 


  return (
    <FooterWrapper>
      <Link to="/home" className={classnames({ active: pathname == '/home' || pathname == '/' })}>
        {/* <Link to="/home" className={}> */}
        <i className='fa fa-home'></i>
        {/* <i className='iconfont icon-shouye'></i> */}
        <span>首页</span>
      </Link>
      <Link to="/find" className={classnames({ active: pathname == '/find' })}>
        <i className='fa fa-podcast'></i>
        {/* <i className='iconfont icon-faxian'></i> */}
        <span>发现</span>
      </Link>
      <Link to="/order" className={classnames({ active: pathname == '/order' })}>
        <i className='fa fa-book'></i>
        {/* <i className='iconfont icon-dingdan'></i> */}
        <span>订单</span>
      </Link>
      <Link to="/mine" className={classnames({ active: pathname == '/mine' })}>
        <i className='fa fa-user'></i>
        {/* <i className='iconfont icon-wode'></i> */}
        <span>我的</span>
      </Link>
    </FooterWrapper>
  )
}