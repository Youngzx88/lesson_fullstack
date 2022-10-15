import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import _ from 'lodash' 
import { useEffect } from 'react'
import React from 'react'

const Animation = (props) =>{
    // console.log(props)
    const {
        // 如果父组件没传的话，默认为false
        animation = false,
        transitionStyles = { enter:{opacity:1} , leave:{opacity:0} },
        children
    } = props

    // console.log(animation,transitionStyles,children)
    const [status,setStatus] = useState(()=>{
        if(animation) return 'enter'
        else return 'leave'
    }) 
    useEffect(()=>setStatus(animation?'enter':'leave'),[animation])
    //children?.可以防止chilren没有代码出错，没有就不往下执行
    const preStyle = children?.props?.style || {}
    // console.log(preStyle)
    const animateStyle = transitionStyles[status]
    // console.log(animateStyle)
    const transitionStyle = {transition:`all 300ms ease-in-out`}
    const styles = {...preStyle,...animateStyle,...transitionStyle}

    //1.
    // return React.cloneElement(
    //     React.Children.only(children),
    //     {
    //         style:{
    //             ...styles
    //         }
    //     }
    // ) 

    //2.
    return (
        <div style={{...styles}}>{children}</div>
    )
}
function App() {
    const [play,setPlay] = useState(false)
    return (
    <div className="container">
        <button onClick={() => setPlay(!play)}>切换</button>
        <Animation animation={play}>
            <div className="box" style={{fontSize:'20px'}}>组件里自定义</div>
        </Animation>
    </div>
    ) 
}

export default App