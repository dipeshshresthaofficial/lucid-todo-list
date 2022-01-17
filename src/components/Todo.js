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
            <p style={{ padding: "2px" }}>{props.description}</p>
            <div style={{ fontSize: '28px' }}>
                {
                    props.status != 'completed'? 
                        <TiTick style={{ color: 'green', margin: '0 3px' }} />
                    :
                        <TiTick style={{ color: 'lightgreen', margin: '0 3px', pointerEvents: 'none'}} />
                }
                <TiDelete style={{ color: 'red', margin: '0 3px' }}/>
            </div>
        </div>
    )
}
