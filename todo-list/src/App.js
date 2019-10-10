import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import reducer from './reducers/reducer';
import * as actionTypes from './reducers/reducer';



function App() {
  const [state, dispatch] = useReducer(reducer, actionTypes.initialState);
  
  const onInputChange = event => {
    dispatch({
      type: actionTypes.ON_INPUT_CHANGE,
      payload:  event.target.value
    });
  }


  const onAddTodo = event => {
    event.preventDefault();
    const newTodo = {
      item: state.input,
      completed: false,
      id: Date.now()
    } 
    dispatch({
      type: actionTypes.ON_ADD_TODO,
      payload: newTodo
    })
  }

  const onTaskComplete = todo => {
    dispatch({
      type: actionTypes.ON_TASK_COMPLETE,
      payload: todo
    })
  }

  const clearCompleted = event => {
    event.preventDefault();
    dispatch({
      type: actionTypes.ON_CLEAR_COMPLETED
    })
    

  }
  return (
    <div className="App">
      {/* {state.item} */}
      <TodoList 
      onTaskComplete={onTaskComplete}
      todoList={state.todos}/>
      <TodoForm 
                  item={state.input}
                  onInputChange={onInputChange}
                  onAddTodo={onAddTodo}
                  clearCompleted={clearCompleted}
                  />
    </div>
  );
}

export default App;
