import { createSlice } from "@reduxjs/toolkit";

let initialstate = {
    todo: [],
};

export let todoReducer = createSlice({
    name: "Task",
    initialState: initialstate,
    reducers: {
        addTodo(state,action){         
            state.todo = [...state.todo, action.payload];
            //return {...state, todo: [...state.todo, action.payload]}
        },
        deleteTodo(state,action){
            state.todo = state.todo.filter((item, index)=> index !== action.payload);
        },
    }
})

export let {addTodo, deleteTodo} = todoReducer.actions;