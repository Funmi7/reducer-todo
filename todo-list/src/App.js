import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}];

const initialState =  {todos, input: ''};


const ON_ADD_TODO = 'ON_ADD_TODO';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
const ON_TASK_COMPLETE = 'ON_TASK_COMPLETE';

function reducer(state, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state, input: action.payload
      };

    case ON_ADD_TODO :
      return {
        ...state, todos: [...state.todos, action.payload], input: ''
      };

    case ON_TASK_COMPLETE :
      console.log(state.todos)
      return  {
       ...state, todos: state.todos.map(todo => {
        if (todo.id === action.payload){
          todo.completed = !todo.completed;
          return todo;
        }
          return todo;
      }
      )}
    //   return state.todos.map(todo => {
    //     if (todo.id === action.payload) {
    //         return {...todo, completed: !todo.completed};
    //     }
    //     return todo
    // });
    default:
       return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const onInputChange = event => {
    dispatch({
      type: ON_INPUT_CHANGE,
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
      type: ON_ADD_TODO,
      payload: newTodo
    })
  }

  const onTaskComplete = todo => {
    dispatch({
      type: ON_TASK_COMPLETE,
      payload: todo
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
                  // onClearCompleted={this.onClearCompleted}
                  />
    </div>
  );
}

export default App;
