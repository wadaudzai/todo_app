import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import TryState from './components/TryState';

function App() {
  return (
    <React.StrictMode>
      <TodoContainer />
      <TryState />
    </React.StrictMode>
  );
}

export default App;
