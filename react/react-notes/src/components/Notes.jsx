import React, { useState } from 'react'
import Note from './Note'
import Editor from './Editor'

const Notes = () => {
    // MVVM
    const [notes, setNotes] = useState([
        {body: 'hello~'},
        {body: '你好~'}
    ])
    const destroyEntity = (entry) => {
        // console.log(entry)
        // 不是这一项的就留下 filter
        const _entities = notes.filter(
            item => item.body !== entry.body
        )
        // console.log(_entities)
        setNotes(_entities)
        // setState
    }
    const noteItems = notes.map(
        (note, index) => 
            <Note 
                key={index}
                entity={note}
                destroyEntity={destroyEntity}/>
    )
    const updateEntity = (event) => {
        console.log(event, '------------')
    }

    const createEntity = () => {

    }

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
            <Editor updateEntity={updateEntity} />
        </div>
    )
}

export default Notes;