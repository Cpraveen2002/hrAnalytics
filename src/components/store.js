import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './demo.js'
const todoStore = configureStore({
    reducer: {
        todo: todoReducer,
    }
});

export default todoStore;