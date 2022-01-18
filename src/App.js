import React,{useState} from 'react';
import { connect } from 'react-redux';
import { createTodo, removeTodo, completeTodo } from './redux/actions';
import './App.css';

import TodoDashboard from './components/TodoDashboard.js';

function App({todos, onAddingNewTodo, onRemovingTodo, onCompletingTodo}) {
  const [todo, setTodo] = useState(['This is my 3rd task.','This is my 4th task.']);
  const [newTodo, setNewTodo] = useState('');
  const [completedTodo, setCompletedTodo] = useState([]);
  const handleAddNewTodo = (id)=>{
    onAddingNewTodo(id,newTodo);
    setNewTodo('');
  }
  const handleDelete = id =>{
    onRemovingTodo(id);
  }
  const handleCompletedTodo = (id)=>{
    // const newTodoList = todo.filter((item,index)=>(
    //   key!==index
    // ));
    // setTodo(newTodoList);
    // setCompletedTodo([todoDescription,...completedTodo]);
    onCompletingTodo(id);
  }
  return (
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <TodoDashboard todos = {todos} newTodo={newTodo} setNewTodo = {setNewTodo} completedTodos={completedTodo} handleAddNewTodo = {handleAddNewTodo} handleDelete = {handleDelete} handleCompletedTodo={handleCompletedTodo}/>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  onAddingNewTodo: (id,description)=>dispatch(createTodo(id,description)),
  onRemovingTodo: (id)=>dispatch(removeTodo(id)),
  onCompletingTodo: id => dispatch(completeTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
