import React from 'react';
import Todo from './Todo';


function TodoList(props){
        const {todoList} = props;
        return (
            <div>{
            todoList.map((todo) =>(
             <Todo 
            //  onTaskComplete={onTaskComplete}
             key={todo.id}
             todo={todo}
             />
        ))}
        </div>
        )
}
export default TodoList;