import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

export default function QuestionItem(props) {
    const {item} = props
    const {id,status,title,ans,rate,difficulty} = item
    return (
        <Link to={"/twoSum"}>
        <Wrapper>  
            <div className="listStatus">{status}</div>
            <div className="listTitle">{id}.{title}</div>
            <div className="listAns">{ans}</div>
            <div className="listRate">{rate}</div>
            <div className="listItem">{difficulty}</div>
        </Wrapper>
        </Link>
        
    )
}
