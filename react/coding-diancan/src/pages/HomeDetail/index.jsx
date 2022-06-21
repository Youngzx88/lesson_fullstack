import React, { useEffect } from 'react'
import { Wrapper } from './style'
import { NavBar } from 'antd-mobile'
// Outlet 二级路由
import { useNavigate, Outlet, useParams } from 'react-router-dom'
// 快捷方式 @ 代表 /src   工程化  alias
import HomeDetailNav from '@/components/HomeDetailNav'
// import HomeDetailNav from '../../components/HomeDetailNav'

export default function HomeDetail() {
    // console.log('-----------------')
    // 点击返回上一个页面
    const navigate = useNavigate()
    let { id } = useParams()
    // console.log(id)
    // 如果id没有的话，回到首页
    if(!id){
        navigate('/home');
        return;
    }

    useEffect(()=>{
        console.log('----------------')
    })

    return (
        <Wrapper>
            {/* 路由出栈需求,返回*/}
            <div className="detail-top">
                <NavBar
                    // className="detail-left"
                    back='返回'
                    onBack={() => navigate(-1)}
                // 出栈
                // onLeftClick={() => navigate(-1)}
                // icon={<Icon type="left" />}
                >
                    详情
                </NavBar>
                <div className="detail-title-box">
                    <div className="title-detail">
                        <h2>
                            <span>中国好凉皮</span>
                            <i className="fa fa-arrow-right"></i>
                        </h2>
                        <div className="detail-box">
                            <span>评价4.3</span>
                            <span>月售</span>
                            <span>商家配送</span>
                        </div>
                    </div>
                    <div className="sum-detail">
                        <div className="img-deatil">
                            <span className="sale-detail">"满减"</span>
                            <span className="num-detail">"满四十减一</span>
                        </div>
                        <div className="sale">
                            3个优惠
                        </div>
                    </div>
                    <p>公告：本店香锅不单炒，套餐必点！单加菜品需与套餐同时点</p>
                </div>
                <HomeDetailNav />
                <Outlet />
            </div>
        </Wrapper>
    )
}
