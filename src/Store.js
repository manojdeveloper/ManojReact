import { todoAppReducer } from "./reducers/todoAppReducer";
import { todoReducer } from "./reducers/todoReducer"; 
import { configureStore } from "@reduxjs/toolkit";

export let store = configureStore({
    reducer : {
        todoReducer: todoReducer.reducer,
        todoAppReducer: todoAppReducer.reducer,
    }
})

//console.log(store.getState());
//console.dir(todoReducer.reducer);