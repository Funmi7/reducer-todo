const todos = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }];
  
  export const initialState =  {todos, input: ''};
  
  
  export const ON_ADD_TODO = 'ON_ADD_TODO';
  export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
  export const ON_TASK_COMPLETE = 'ON_TASK_COMPLETE';
  export const ON_CLEAR_COMPLETED = 'ON_CLEAR_COMPLETED';
  
 export default function reducer(state, action) {
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
  
      case ON_CLEAR_COMPLETED: 
        return {
          ...state, todos: state.todos.filter(todo => todo.completed === false)
        }
  
      default:
         return state;
    }
  }