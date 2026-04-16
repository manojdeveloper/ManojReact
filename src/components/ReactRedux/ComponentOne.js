import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../reducers/todoReducer";

export let ComponentOne = () => {

    console.log("One component");

    let [todoValue, SettodoValue] = useState("");
    let mystate = useSelector((state) => state.todoReducer.todo);
    let dispatch = useDispatch();

    let handleAdd = () => {
        return dispatch(addTodo(todoValue))
    }

    let handleDelete = (index) => {
        return dispatch(deleteTodo(index))
    }
    return (
        <div style={{ background: 'rgba(0,0,0,0.05)', padding: '1rem' }}>
            <input type="text" value={todoValue} onChange={(e) => SettodoValue(e.target.value)} /> <button type="button" onClick={handleAdd} >add</button>
            <div>
                <ul>
                    {mystate?.map((data, index) => {
                        return <li key={index}>{data} <button onClick={() => handleDelete(index)}>x</button></li>
                    })}
                </ul>
            </div>
        </div>
    )
}