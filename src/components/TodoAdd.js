import React from 'react'

export default function TodoAdd() {
    return (
        <>
            <h3>Add a Todo Task!</h3>
            <div>
                <input type='text' style={{ width: '80%', maxHeight: '100px', outline: 'none', padding: '5px', border:'2px solid grey',borderRadius: '5px'}}/>
                <button style={{ cursor: 'pointer',outline: 'none', border: 'none', borderRadius: '5px', padding: '8px', marginLeft: '5px' }}>Add</button>
            </div>
        </>
    )
}
