import React from 'react'
import './todo-list-item.css'

const TodoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black'
    }
    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label" style={style}>{label}</span>
            <button type="button" className="btn button-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"></i>
            </button>
            <button type="button" className="btn button-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"></i>
            </button>
        </span>
    )
};

export default TodoListItem;