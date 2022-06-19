import React, { useState,useEffect } from 'react'
import { List } from 'antd'
import { QList } from './style'
import { getQuesionList } from '../../api/request'
import QuestionItem from './QuestionItem/QuestionItem'

export default function QuestionList() {
    const [qlist,setQlist] = useState([])
    useEffect(()=>{
        (async()=>{
            let {data} = await getQuesionList()
            setQlist(data)
          })()
    })
    return (
        <QList>
            <List 
                bordered
                // header={Header}
                dataSource={qlist}
                split={true}
                renderItem={item => {
                    return (
                    <List.Item>
                        {/* 要给item再套一层组件写样式 */}
                        <QuestionItem
                            item = {item}
                        />
                    </List.Item>
                    )
                }}
                />
        </QList>
    )
}
