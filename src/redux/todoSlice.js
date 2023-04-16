import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos : [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: (state, action) => {
        state.todos.unshift({
            ...action.payload,
            isCompleted: false
        });
    },
    removeTodo: (state, action) => {
        const id = action.payload;
        state.todos = state.todos.filter(todo => todo.id !== id);
    },
    completeTodo: (state,action) => {
        const id = action.payload;
        state.todos.map(todo => {
            if(todo.id === id){
                todo.isCompleted = true;
            }
            return todo;
        })
    }
  },
})

// Action creators are generated for each case reducer function
export const { createTodo, removeTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer