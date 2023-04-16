import {CREATE_TODO, REMOVE_TODO, COMPLETE_TODO} from './actions.js';

export const todos = (state=[],action)=>{
    const {type, payload} = action;
    switch(type){
        case CREATE_TODO: {
            const {id,description} = payload;
            const newTodo = {
                id,
                description,
                isCompleted: false,
            }
            return state.concat(newTodo);

        }
        case REMOVE_TODO: {
            const {id} = payload;
            return state.filter(todo=>todo.id !==id);
        }
        case COMPLETE_TODO: {
            const {id} = payload;
            return state.map(todo=>{
                if(todo.id === id){
                    todo.isCompleted = true;
                }
                return todo;
            })
        }
        default: {
            return state;
        }
    }
}