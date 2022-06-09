import React from 'react'
import { List, Icon } from 'antd';
const { Item } = List;

const TodoList = ({todos,onDelete}) => {
    return (
        <div className="list-wrap">
            { todos.length === 0 ? (
                <p>暂无代办事项</p>
            ) : (
                // List组件来自antd  
                // 逻辑 配置数据源 
                // renderItem 每一个jsx输出
                <List 
                    itemLayout='horizontal'
                    dataSource={todos}
                    renderItem={({ id, text, finished}, idx) => {
                        return (
                            <Item>
                                <div className="list-item-wrap">
                                    <span className="list-item-text">{text}</span>
                                    <Icon type="delete" onClick={onDelete}/>
                                </div>
                            </Item>
                        )
                    }}
                />
            )}
        </div>
    )
}

export default TodoList