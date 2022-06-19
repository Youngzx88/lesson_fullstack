import React from 'react'
import { ListWrapper,ListItem}  from './style'

export default function QuestionItem(props) {
    const {item} = props
    const {id,title,ans,rate,difficulty} = item
    return (
        <ListWrapper>
            <ListItem>{id}</ListItem>
            <ListItem>{title}</ListItem>
            <ListItem>{ans}</ListItem>
            <ListItem>{rate}</ListItem>
            <ListItem>{difficulty}</ListItem>
        </ListWrapper>
    )
}
