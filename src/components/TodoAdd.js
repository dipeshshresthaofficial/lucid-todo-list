import React,{useState} from 'react'

export default function TodoAdd(props) {
    const [cnt, setCnt] = useState(0);
    const handleNewTodoDescription = (e)=>{
        // console.log(e.target.value);
        props.setNewTodo(e.target.value);
    }
    return (
        <>
            <h3>Add a Todo Task!</h3>
            <div>
                <input type='text' onChange={(e)=>handleNewTodoDescription(e)} value = {props.newTodo} style={{ width: '80%', maxHeight: '100px', outline: 'none', padding: '5px', border:'2px solid grey',borderRadius: '5px'}}/>
                <button onClick={()=>{ setCnt(cnt+1); return (props.handleAddNewTodo(cnt))}} style={{ cursor: 'pointer',outline: 'none', border: 'none', borderRadius: '5px', padding: '8px', marginLeft: '5px' }}>Add</button>
            </div>
        </>
    )
}
