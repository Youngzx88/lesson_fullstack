import React from "react";
import WeUI from 'react-weui'
import ContestTab from './ContestTab'
import ContestList from './ContestList'
import { ContestWrapper }  from './style.js'

const Contest = () =>{
    return (
        <ContestWrapper>
            <h2>热门赛事</h2>
            <ContestTab/>
            <ContestList/>
        </ContestWrapper>
    )
}

export default Contest