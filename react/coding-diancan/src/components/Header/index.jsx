/*
 * @Date         : 2022-06-16 15:59:14
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 20:25:00
 * @description  : 
 */
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageTitle } from '../../config'

export default function Header(props) {
  const [title, setTitle] = useState('首页')
  const { pathname = '/' } = useLocation()
  // console.log(location)
  // const {title="饿了么"} = props;
  // let title = "饿了么"
  useEffect(() => {
    // const location = window.location.pathname
    // console.log(location)
    let _title = pageTitle[pathname] || '';
    // if (pathname == '/order') {
    //   _title = '订单'
    // } else if (pathname == '/home' || pathname == '/') {
    //   _title = '首页'
    // }
    setTitle(_title)
  })
  return (
    <header>
      {title}
    </header>
  )
}