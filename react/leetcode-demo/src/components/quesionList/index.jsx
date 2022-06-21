import React, { useState,useEffect } from 'react'
import { Table} from 'antd'
import { QList } from './style'
import { getQuesionList,columns } from '../../api/request'

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
            <Table
             dataSource={qlist} 
             columns={columns} 
             rowClassName={(record, index) => {
                let className = 'light-row';
                if (index % 2 === 1) className = 'dark-row';
                return className;
            }}
            />;
        </QList>
    )
}
