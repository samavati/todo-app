import { combineReducers } from "redux";
import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

function todoReducer(state = [
    {
        id: Date.now(),
        content: {
            title: 'anjame takalif',
            discription: 'anjam dadane takalife marboot be dars'
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
            newTodoes[index].completed = !newTodoes[index].completed
            return newTodoes;
        }
        default:
            return state;
    }
}

export default combineReducers({
    todoes: todoReducer
})
