import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  todo: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const fetchTodo = createAsyncThunk(
  "todo/fetch",
  async (thunkAPI) => {
    const response = await fetch("http://localhost:8000/todo", {
      method: "GET",
    });
    const data = response.json();
    return data;
  },
);

export const saveTodo = createAsyncThunk(
  "todo/save",
  async (todo: string, thunkAPI) => {
    const response = await fetch("http://localhost:8000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo,
      }),
    });
    const data = await response.json();
    return data;
  },
);

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ todo: string }>) => {
      state.todos.push({
        id: state.todos.length,
        todo: action.payload.todo,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
    });

    builder.addCase(saveTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
  },
});

export default TodoSlice.reducer;
export const { addTodo } = TodoSlice.actions;
