import React from 'react';
import {TiTick,TiDelete} from 'react-icons/ti';

export default function Todo(props) {
    return (
        <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                border: '1px solid green',
                minWidth: '300px',
                maxWidth: '500px',
                marginBottom: '5px',
                maxHeight: '35px'
            }}
        >
            <p style={{ padding: "2px" }}>{props.todo.description}</p>
            <div style={{ fontSize: '28px'}}>
                {
                    !props.todo.isCompleted? 
                        <TiTick onClick={()=>props.handleCompletedTodo(props.todo.id)} style={{ color: 'green', margin: '0 3px', cursor: 'pointer' }} />
                    :
                        <TiTick style={{ color: 'lightgreen', margin: '0 3px', pointerEvents: 'none'}} />
                }
                <TiDelete onClick={()=>props.handleDeleteTodo(props.todo.id)} style={{ color: 'red', margin: '0 3px', cursor: 'pointer' }}/>
            </div>
        </div>
    )
}
