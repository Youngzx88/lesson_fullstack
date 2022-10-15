import React, {useState} from 'react'
import { Input } from 'antd'

const TodoInput = ({ placeholder, onSetQuery }) => {
    const [value, setValue] = useState("")
    const onAdd = () => {
        onSetQuery(value)
    }
    return (
        <section className="input-wrap">
            <Input 
                onPressEnter={onAdd}
                value={value}
                className="input"
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
            />
        </section>
    )
}

export default TodoInput