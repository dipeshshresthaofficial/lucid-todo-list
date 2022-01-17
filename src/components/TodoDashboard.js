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
                <TodoAdd />
            </div>
            <div style={{
                    maxHeight: '40%',
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
                {
                    props.todos.map(todo => (
                        <Todo todo = {todo} />
                    ))
                }
                </div>
            </div>
            <div style={{
                    maxHeight: '40%'
                }}
            >
                <h3>Completed: </h3>
                <div style={{
                    maxHeight: '80%',
                    overflowY: 'scroll',
                    padding: '2px',
                    border: '2px solid grey',
                    borderRadius: '5px'
                }}
            >
                <Todo status='completed'/>
                <Todo status='completed'/>
                <Todo status='completed'/>
                <Todo status='completed'/>
                <Todo status='completed'/>
                <Todo status='completed'/>
                </div>
            </div>        

        </div>
    )
}
