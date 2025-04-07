import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface todoState {
  todos: object[]
}
const initialState: todoState = {
  todos: []
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<object | undefined>) => {
       state.todos.push({ text: action.payload })
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
       state.todos.splice(action.payload, 1)
    },
    clearTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(0, action.payload)
    }
  }
})

export const { addTodo, deleteTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;