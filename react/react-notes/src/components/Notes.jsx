import React, { useState, useEffect } from 'react'
import Note from './Note'
import { db, loadCollection } from '../database'

const Notes = () => {
    // MVVM
    const [notes, setNotes] = useState([])
    const destroyEntity = (entry) => {
        // console.log(entry)
        // 不是这一项的就留下 filter
        const _entities = notes.filter(
            item => item.$loki !== entry.$loki
        )
        // console.log(_entities)
        setNotes(_entities)
        // 在数据库中和删除
        loadCollection('notes')
            .then((collection)=>{
                collection.remove(entry);
                db.saveDatabase();
            })
    }
    const noteItems = notes.map(
        (note) => 
            <Note 
                key={note.$loki}
                entity={note}
                destroyEntity={destroyEntity}/>
    )
    

    const createEntity = () => {
        
    }

    // useEffect()
    // 先把页面模板显示出来，静态部分先显示出来  
    //  JSX -> babel + html/css渲染  花时间 组件挂载及渲染时间
    // 从数据库里去取     无法保证谁先执行完？ 
    //  useEffect DOMContentLoaded
    // setNotes  列表出来了？  响应
    // console.log('|||||||||||||||||')
    const getInitialData = () => {
        loadCollection('notes')
            .then((collection) => {
                // console.log(collection);
                // collection.insert([
                //     {body: '芜湖 ~'},
                //     {body: 'loremloremloremloremloremloremlorem'}
                // ])
                const entities = collection.chain()
                    .find() // select * from orderby...
                    .simplesort('$loki', 'isdesc')  // 排序 desc 
                    .data()
                // console.log(entities)
                setNotes(entities)
            })

    }
    useEffect(() => {
        // 组件挂载后执行  生命周期
        // console.log('-------')
        getInitialData()  // 数据库
    }, [])

    return (
        <div className="ui container notes">
            <h4 className="ui horizontal divider header">
                <i className="paw icon" />
                Notes App _ React.js
            </h4>
            <button 
                onClick={createEntity} 
                className="ui right floated basic violet button">
            添加笔记
            </button>
            <div className="ui divided items">
            {noteItems}
            </div>
        </div>
    )
}

export default Notes;