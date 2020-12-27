import { combineReducers } from "redux";
import { ADD_TODO, SELECT_TODO, TOGGLE_TODO, UPDATE_TODO } from "./actionTypes";

export const EMPTY_TODO = {
    id: null,
    content: {
        title: '',
        description: ''
    },
    completed: false
};

function todoReducer(state = [
    {
        id: Date.now(),
        content: {
            title: 'anjame takalif',
            description: 'anjam dadane takalife marboot be dars'
        },
        completed: true
    }
], action) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return [
                ...state,
                {
                    id,
                    content,
                    completed: false
                }
            ];
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            const newTodoes = [...state];
            const index = newTodoes.findIndex(t => t.id === id);
            const todo = newTodoes[index];
            newTodoes[index] = Object.assign({}, todo, { completed: !todo.completed })
            return newTodoes;
        }
        case UPDATE_TODO: {
            const { id, content } = action.payload;
            const newTodoes = [...state];
            const index = newTodoes.findIndex(t => t.id === id);
            const todo = newTodoes[index];
            newTodoes[index] = Object.assign({}, todo, { content: content })
            return newTodoes;
        }
        default:
            return state;
    }
}

function selectTodoReducer(lastSelected = EMPTY_TODO, action) {
    switch (action.type) {
        case SELECT_TODO: {
            const { todo } = action.payload;
            return todo;
        }
        default:
            return lastSelected;
    }
}

export default combineReducers({
    selectedTodo: selectTodoReducer,
    todoes: todoReducer
})
