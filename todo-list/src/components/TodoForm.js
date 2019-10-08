import React from 'react';

function TodoForm(props) {
    const {onInputChange, onAddTodo, onClearCompleted} = props;
        return (
            <form>
                <input value ={props.item}
                type='text' placeholder='...todo' onChange={onInputChange}/>
                <button onClick={onAddTodo}>Add Todo</button>
                <button onClick={onClearCompleted}>Clear Completed</button>
            </form>
        );
    }

    export default TodoForm;