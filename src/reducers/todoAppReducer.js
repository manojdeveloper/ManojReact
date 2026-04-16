import { createSlice } from "@reduxjs/toolkit";

let localdata = localStorage.getItem("TodoApp");
let initialState = localdata && localdata !== "undefined" ? JSON.parse(localStorage.getItem("TodoApp")) : [];


export let todoAppReducer = createSlice({
    name: "Todo App",
    initialState: initialState,
    reducers: {
        addTodo(state, action) {
            if (!state.includes(action.payload)) {
                let newList = [...state, action.payload];
                localStorage.setItem("TodoApp", JSON.stringify(newList));
                return newList;
            }
            return state;

        },
        removeTodo(state, action) {
            let newList = state.filter((item, index) => index !== action.payload);
            localStorage.setItem("TodoApp", JSON.stringify(newList));
            return newList;
        }

    }
});

export let { addTodo, removeTodo } = todoAppReducer.actions;