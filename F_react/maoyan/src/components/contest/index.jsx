import React from "react";
import noContest from '../../assets/images/no_contest.jpg'
import classnames from 'classnames'
import {
    ContestWrapper,
    Tab,
    TabItem,
    NoData
}   from './style'

const Contest = ({data,tab}) =>{
    return (
        // 切页面
        <ContestWrapper>
            <h2>热门赛事</h2>
            <a href="#" className={classnames('item', {current:tab == 'all'})}>全部</a>
            <Tab>
                {
                    data.map(item=> <TabItem key={item.id}>
                        <span>{item.title}-{item.desc}</span>
                    </TabItem>)
                }
            </Tab>
            {data.length == 0 && <NoData>
                                    <img src={noContest} alt="" />
                                    <span>暂无赛事，看看更多演出</span>
                                </NoData>}
        </ContestWrapper>
    )
}

export default Contest