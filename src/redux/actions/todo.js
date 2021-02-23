import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
   
    deleteTodo: (state, { payload }) => {
      // console.log(payload, state.todos);

      state.todos.tasks.splice(payload.task);
    },
    addTodo: (state, {payload}) => {
      console.log(payload);

      state.todos = payload.tasks;
    }

  }
});


export const { deleteTodo, addTodo } = todoSlice.actions;
export default todoSlice;