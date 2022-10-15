import React, {useEffect, useState} from "react";
import WeUI from 'react-weui'
import {ContestTabWrapper} from './style.js'

const {
    Toast,
  } = WeUI


const ContestTab = () =>{
    const [tab, setTab] = useState('all');
    const [loading, setLoading] = useState(true)
    const changeTab = (tab)=>{
        setTab(tab)
    }
    return (
        <ContestTabWrapper>
            <a href="#" className={tab == 'all'?'current':''}  onClick={changeTab.bind(null, 'all')}>全部</a>
            <a href="#" className={tab == 'dj'? 'current':''} onClick={changeTab.bind(null, 'dj')}>电竞赛事</a>
            <a href="#" className={tab == 'sport'?'current':''} onClick={changeTab.bind(null, 'sport')}>体育赛事</a>
        </ContestTabWrapper>
    )
}

export default ContestTab