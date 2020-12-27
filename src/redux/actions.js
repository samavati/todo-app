import { ADD_TODO, SELECT_TODO, TOGGLE_TODO, UPDATE_TODO } from "./actionTypes";

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: Date.now(),
        content: content
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const selectTodo = todo => ({
    type: SELECT_TODO,
    payload: { todo }
});

export const updateTodo = (id, content) => ({
    type: UPDATE_TODO,
    payload: { id, content }
});