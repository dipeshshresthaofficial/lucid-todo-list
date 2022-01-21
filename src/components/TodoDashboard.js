import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from '../redux/actions.js';
import Todo from './Todo.js';
import TodoAdd from './TodoAdd.js';

function TodoDashboard({todos, onRemovingTodo, onCompletingTodo}) {
    let flagForCompletedTodo = 0;
    let flagForNewTodo = 0;
    const markupForNewTodo = () =>{
        if(todos.length === 0){
            return {__html: "<i>No task created yet.</i>"};
        }else if(flagForNewTodo === 0){
            return {__html: "<i>No pending tasks.</i>"}
        }
    }
    const markupForCompletedTodo = () =>{
        if(todos.length === 0){
            return {__html: "<i>No any task to be completed.</i>"};
        }else if(flagForCompletedTodo===0){
            return {__html: "<i>None of the task is completed yet.</i>"};
        }
    }

    const handleDeleteTodo = id => {
        onRemovingTodo(id);
      }
      const handleCompletedTodo = id => {
        onCompletingTodo(id);
      }
    return (
        <div
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100vh',
                alignItems: 'center',
                margin: '5px 0',
                maxWidth: '400px',
            }}
        >
            <div style={{ 
                    width: '100%',
                }}
            >
                <TodoAdd />
            </div>
            
            <div style={{
                    maxHeight: '40%',
                    minWidth: '300px',
                    width: '100%',
                    marginBottom: '10px'
                }}
            >
                <h3>To Do: </h3>
                <div style={{
                    minHeight: '40%',
                    maxHeight: '80%',
                    overflowY: 'scroll',
                    padding: '2px',
                    border: '2px solid grey',
                    borderRadius: '5px'
                    }}
                >
                {   todos.length === 0 ? 
                        <></>
                    :
                        todos.map((todo,index) => {
                            if(!todo.isCompleted){
                                flagForNewTodo = 1;
                                return <Todo todo = {todo} key={index} handleDeleteTodo = {handleDeleteTodo} handleCompletedTodo={handleCompletedTodo}/>
                            }
                        })
                }
                {
                    <div dangerouslySetInnerHTML={markupForNewTodo()} />
                }
                </div>
            </div>
            <div style={{
                    maxHeight: '40%',
                    minWidth: '300px',
                    width: '100%'
                }}
            >
                <h3>Completed: </h3>
                <div 
                    id="completed-todo-list"
                    style={{
                        minHeight: '40%',
                        maxHeight: '80%',
                        overflowY: 'scroll',
                        padding: '2px',
                        border: '2px solid grey',
                        borderRadius: '5px'
                    }}
            >
                {   todos.length !== 0 ? 
                        todos.map((todo,index) =>{
                            if(todo.isCompleted){
                                flagForCompletedTodo=1;
                                return <Todo todo = {todo} key={index} handleDeleteTodo = {handleDeleteTodo} handleCompletedTodo={handleCompletedTodo}/>
                            }
                        })
                    :
                        <></>
                }
                {
                    <div dangerouslySetInnerHTML={ markupForCompletedTodo()} />
                }
                </div>
            </div>        

        </div>
    )
}


const mapStateToProps = state => ({
    todos: state.todos
})
  
  const mapDispatchToProps = dispatch => ({
    onRemovingTodo: id => dispatch(removeTodo(id)),
    onCompletingTodo: id => dispatch(completeTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoDashboard);
