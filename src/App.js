import React,{useState} from 'react';
import './App.css';

import TodoDashboard from './components/TodoDashboard.js';

function App() {
  const [todo, setTodo] = useState(['This is my 3rd task.','This is my 4th task.']);
  return (
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <TodoDashboard todos = {todo}/>
    </div>
  );
}

export default App;
