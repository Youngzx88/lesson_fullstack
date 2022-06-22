import React, { useState,useEffect } from 'react'
import { QList } from './style'
import { getQuesionList } from '../../api/request'
import QuestionItem from './questionItem'
import { List } from 'antd'

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
                // header={<div>购物车</div>}
                // footer={Footer} 
                bordered
                dataSource={qlist}
                renderItem={(item,index) => {
                    return (
                        <List.Item style={{background:index%2==0 ? "#ffffff" : "#f7f8fa"}}>
                            <QuestionItem 
                                item={item} 
                                />
                        </List.Item>
                    )
                }}
            />
        </QList>
    )
}
