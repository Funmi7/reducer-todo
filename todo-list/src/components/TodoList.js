import React from 'react';
import Todo from './Todo';


function TodoList(props){
        const {todoList, onTaskComplete} = props;
        return (
            todoList.map((todo) =>(
             <Todo 
            onTaskComplete={onTaskComplete}
             key={todo.id}
             todo={todo}
             />
        ))
        )
}
export default TodoList;