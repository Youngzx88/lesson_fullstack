import React from 'react'
import { Wrapper } from './style'

export default function QuestionItem(props) {
    const {item} = props
    const {id,status,title,ans,rate,difficulty} = item
    return (
        <Wrapper>
            <div className="listStatus">{status}</div>
            <div className="listTitle">{id}.{title}</div>
            <div className="listAns">{ans}</div>
            <div className="listRate">{rate}</div>
            <div className="listItem">{difficulty}</div>
        </Wrapper>
            
    )
}
