export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (todo) =>({
    type: CREATE_TODO,
    payload: { todo }
})

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {id}
})

export const COMPLETE_TODO = "COMPLETE_TODO";
export const completeTodo = (id) => ({
    type: COMPLETE_TODO,
    payload: {id}
})

export const LOAD_TODO_SUCCESSFUL = "LOAD_TODO_SUCCESSFUL";
export const loadTodoSuccessful = (todos) =>({
    type: LOAD_TODO_SUCCESSFUL,
    payload: { todos }
})