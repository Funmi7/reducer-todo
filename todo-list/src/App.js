import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}

function reducer(state, action) {
  switch (action.type) {
    default:
       return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {state.item}
    </div>
  );
}

export default App;
