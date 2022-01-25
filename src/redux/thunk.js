import { completeTodo, createTodo, loadTodoSuccessful, removeTodo } from "./actions";

export const displayAlert = () => (source,message) =>{
    alert(message);
}

export const loadTodos = () => async (dispatch, getState)=>{
    try{
        const response = await fetch('http://localhost:2000/');
        const data = await response.json();
        dispatch(loadTodoSuccessful(data));
    }catch(e){
        dispatch(displayAlert(e));
    }
    
}

export const createTodoRequest = (description) => async (dispatch) =>{
    const body = JSON.stringify({description});
    try{
        const response = await fetch('http://localhost:2000/add-todo',{
            headers: {
                "Content-Type":"application/json"
            },
            method: 'post',
            body
        })
        const todo = await response.json();
        console.log(todo);
        dispatch(createTodo(todo));
    }catch(e) {
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = id => async (dispatch) =>{
    try{
        const response = await fetch(`http://localhost:2000/todo/${id}/delete`,{
            method: 'delete'
        });
        const todo = await response.json();
        dispatch(removeTodo(todo.id));
    }catch(e){
        dispatch(displayAlert('removeTodoRequestThunk',e));
    }    
}

export const completeTodoRequest = id => async (dispatch) => {
    try{
        const response = await fetch(`http://localhost:2000/todo/${id}/completed`,{
            method: 'put'
        });
        const todo = await response.json();
        dispatch(completeTodo(todo.id));
    }catch(e){
        dispatch(displayAlert(e));
    }
}