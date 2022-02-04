import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    all: 0,
    completed: 0,
    todos: []
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false});
            state.all += 1;
        },

        changeStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);

            todo.status = !todo.status;

            todo.status ? state.completed += 1 : state.completed -= 1;
        },

        deleteTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);

            if (state.todos[index].status) state.completed -= 1;

            state.todos.splice(index, 1);
            state.all -= 1;
        }
    }
});

const todoReducer = todoSlice.reducer;

const {addTodo, changeStatus, deleteTodo} = todoSlice.actions;

export const todoActions = {
    addTodo,
    changeStatus,
    deleteTodo
};

export default todoReducer;
