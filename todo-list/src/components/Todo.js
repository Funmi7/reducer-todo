import React from 'react';
import './Todo.css';


function Todo(props){
    const {todo, onTaskComplete} = props;
    return(
        <div
        className={`${todo.completed? 'finished-task': null}`}
        onClick={() => onTaskComplete(todo.id)}
        >
        {todo.item}
        </div>
    ) 
}

export default Todo;