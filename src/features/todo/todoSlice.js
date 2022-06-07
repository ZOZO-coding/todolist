import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    saveTodo: (state, action) => {
        state.todoList.push(action.payload)
    },

    toggleCheck: (state, action) => {
        state.todoList.forEach(item => {
            if (action.payload === item.id) {
                if (item.done === true) {
                    item.done = false;
                } else {
                    item.done = true;
                }
            }
        })
    },

    deleteTodo: (state, action) => {
        const index = state.todoList.findIndex(item => action.payload === item.id);
        if (index !== -1) {
            state.todoList.splice(index, 1);
        }
    }
  }
});

export const { saveTodo, toggleCheck, deleteTodo } = todoSlice.actions
export const selectTodoList = (state) => state.todos.todoList
export default todoSlice.reducer