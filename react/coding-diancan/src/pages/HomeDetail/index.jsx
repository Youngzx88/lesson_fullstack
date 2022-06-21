import React from 'react'
import { Wrapper } from './style'
import {NavBar} from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

export default function HomeDetail() {
    const navigate = useNavigate()
        
    return (
        <Wrapper>
            {/* 路由出栈 */}
            <div className='detail-top'>
                <NavBar back="返回" onBack={()=>navigate(-1)}>
                    详情
                </NavBar>
            </div>
        </Wrapper>
  )
}
