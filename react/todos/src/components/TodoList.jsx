import React from "react";

const TodoList = ({todos}) =>{
    return (
        <>
            {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </>
    )
}

export default TodoList