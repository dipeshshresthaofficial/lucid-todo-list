import React,{useState} from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../redux/actions';
import { createTodoRequest } from '../redux/thunk';

function TodoAdd({onCreatingNewTodoRequest}) {
    const [newTodo, setNewTodo] = useState('');
    const handleNewTodoDescription = (e)=>{
        // console.log(e.target.value);
        setNewTodo(e.target.value);
    }
    const handleAddNewTodo = ()=>{
        if(newTodo.length === 0){
            alert("Todo task cannot be empty.");
        }else{
            onCreatingNewTodoRequest(newTodo);
            setNewTodo('');
        }
    }
    return (
        <>
            <h3>Add a Todo Task!</h3>
            <div>
                <input 
                    type='text' 
                    value = {newTodo}
                    onChange={(e) => handleNewTodoDescription(e)}
                    onKeyDown={e => e.keyCode===13 ? document.getElementById("add-todo-btn").click():null}
                    style={{ width: '80%', maxHeight: '100px', outline: 'none', padding: '5px', border:'2px solid grey',borderRadius: '5px'}}/>
                <button onClick={handleAddNewTodo} id="add-todo-btn" style={{ cursor: 'pointer',outline: 'none', border: 'none', borderRadius: '5px', padding: '8px', marginLeft: '5px' }}>Add</button>
            </div>
        </>
    )
}
const mapDispatchToProps = dispatch => ({
    onCreatingNewTodoRequest: (description)=>dispatch(createTodoRequest(description)),
})
export default connect(null,mapDispatchToProps)(TodoAdd);
