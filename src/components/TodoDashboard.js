import React from 'react';

import Todo from './Todo.js';
import TodoAdd from './TodoAdd.js';

export default function TodoDashboard(props) {
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
                <TodoAdd newTodo = {props.newTodo} setNewTodo = {props.setNewTodo} handleAddNewTodo={props.handleAddNewTodo}/>
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
                {   props.todos.length === 0 ? 
                        <div>No Tasks are left.</div>
                    :
                    props.todos.map((todo,index) => (
                        <Todo description = {todo} key={index} index={index} handleDelete = {props.handleDelete}/>
                    ))
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
                <div style={{
                    minHeight: '40%',
                    maxHeight: '80%',
                    overflowY: 'scroll',
                    padding: '2px',
                    border: '2px solid grey',
                    borderRadius: '5px'
                }}
            >
                {   props.completedTodos.length === 0 ? 
                        <div>None of the Task is completed.</div>
                    :
                        props.completedTodos.map((completedTodo,index) => (
                            <Todo status='completed' description={completedTodo} key={index} index={index} handleDelete={props.handleDelete}/>
                        ))
                }
                </div>
            </div>        

        </div>
    )
}
