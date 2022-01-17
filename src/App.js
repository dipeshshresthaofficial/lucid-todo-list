import React,{useState} from 'react';
import './App.css';

import TodoDashboard from './components/TodoDashboard.js';

function App() {
  const [todo, setTodo] = useState(['This is my 3rd task.','This is my 4th task.']);
  const [newTodo, setNewTodo] = useState('');
  const handleAddNewTodo = ()=>{
    const newTodoList = [newTodo,...todo];
    setNewTodo('');
    setTodo(newTodoList);
  }
  const [completedTodo, setCompletedTodo] = useState(['This is my 1st task.','This is my 2nd task.']);
  return (
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <TodoDashboard todos = {todo} newTodo={newTodo} setNewTodo = {setNewTodo} handleAddNewTodo = {handleAddNewTodo}/>
    </div>
  );
}

export default App;
