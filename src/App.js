import React,{useState} from 'react';
import './App.css';

import TodoDashboard from './components/TodoDashboard.js';

function App() {
  const [todo, setTodo] = useState(['This is my 3rd task.','This is my 4th task.']);
  const [newTodo, setNewTodo] = useState('');
  const [completedTodo, setCompletedTodo] = useState(['This is my 1st task.','This is my 2nd task.']);
  const handleAddNewTodo = ()=>{
    const newTodoList = [newTodo,...todo];
    setNewTodo('');
    setTodo(newTodoList);
  }
  const handleDelete = (key, status) =>{
    console.log(status)
    if(status==='completed'){
      const newCompletedTodoList = completedTodo.filter((item,index) =>(
        key!==index
      ))
      setCompletedTodo(newCompletedTodoList);
    }else{
      const newTodoList = todo.filter((item,index) =>(
        key!==index
      ))
      setTodo(newTodoList);
    }
  }
  const handleCompletedTodo = (key,todoDescription)=>{
    const newTodoList = todo.filter((item,index)=>(
      key!==index
    ));
    setTodo(newTodoList);
    setCompletedTodo([todoDescription,...completedTodo]);
  }
  return (
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <TodoDashboard todos = {todo} newTodo={newTodo} setNewTodo = {setNewTodo} completedTodos={completedTodo} handleAddNewTodo = {handleAddNewTodo} handleDelete = {handleDelete} handleCompletedTodo={handleCompletedTodo}/>
    </div>
  );
}

export default App;
