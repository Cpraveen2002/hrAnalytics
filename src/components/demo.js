import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        addToddo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
        },

        toggleTodo: (state, action) => {
            const todo = state.todos.find((t) => t.id == action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((t) => t.id != action.payload);
        },

    }
});

export const { addToddo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;