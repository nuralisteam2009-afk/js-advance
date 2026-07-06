import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo.reducer';
import postsReducer from './posts.reducer'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        posts: postsReducer
    },
});

export * from './todo.reducer'