import React from 'react'
import { Wrapper } from './style'
import {NavBar,Icon} from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

export default function HomeDetail() {
    const navigate = useNavigate()
        
    return (
        <Wrapper>
            {/* 路由出栈 */}
            <div className='detail-top'>
                <NavBar className="detail-left"  onLeftClick={()=>navigate(-1)}  icon={<Icon type="left"/>}>
                    详情
                </NavBar>
            </div>
        </Wrapper>
  )
}
