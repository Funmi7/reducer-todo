import React from 'react';
// import './Todo.css';


function Todo(props){
    const {todo} =props;
    return(
        <div
        // className={`${this.props.todo.completed? 'finished-task': null}`}
        // onClick={() => onTaskComplete(this.props.todo.id)}
        >
        {todo.item}
        </div>
    ) 
}

export default Todo;