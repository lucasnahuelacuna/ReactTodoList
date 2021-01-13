import React from 'react'

const TodoItem = ({ item, onClickRemove}) => {
    return (
        <div className="todoItem">
            <p className="todo">{item}</p> 
            <button className="delete" onClick={() => onClickRemove(item)}>x</button>
        </div>
    )
}

export default TodoItem

