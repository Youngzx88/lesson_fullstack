import React from 'react'

const Note = (props) => {
    const { entity, destroyEntity } = props
    const { body } = entity

    return (
        <div className="item">
            <div className="meta">
                meta
            </div>
            <div className="content">
                <div className="header">
                {body}
                </div>
            </div>
            <div className="extra">
                <i 
                    className="right floated trash outline icon" 
                    onClick={()=>destroyEntity(entity)}
                />
            </div>
        </div>
    )
}

export default Note;