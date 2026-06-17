import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todoAppReducer";

export let TodoForm = ()=>{
    let [todo, SetTodo] = useState("");
    let dispatch = useDispatch();

    let formSubmit = (event)=>{
        event.preventDefault(event);
        dispatch(addTodo(todo));
        SetTodo("");

    }

    console.log("manoj", todo);

    return(
        <form onSubmit={formSubmit}>
            {todo && "manoj"}
            <input type="text" value={todo} onChange={(e)=> SetTodo(e.target.value)} style={{fontSize:"1.5rem"}} />
            <button type="submit" style={{fontSize:"1.5rem"}} disabled={!todo || todo.trim() === ""}>Add</button>
        </form>
    );
}