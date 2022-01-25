import {CREATE_TODO, REMOVE_TODO, COMPLETE_TODO, LOAD_TODO_SUCCESSFUL} from './actions.js';

export const todos = (state=[],action)=>{
    const {type, payload} = action;
    switch(type){
        case CREATE_TODO: {
            const { todo } = payload;
            return [todo,...state];

        }
        case REMOVE_TODO: {
            const {id} = payload;
            return state.filter(todo=>todo.id !== id);
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
        case LOAD_TODO_SUCCESSFUL:{
            const { todos } = payload;
            return todos;
        }
        default: {
            return state;
        }
    }
}