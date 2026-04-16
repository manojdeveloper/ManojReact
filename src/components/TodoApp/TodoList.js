import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../reducers/todoAppReducer";

export let TodoList = ()=>{
    let todolist = useSelector((state)=> state.todoAppReducer);
    let dispatch = useDispatch();

    let removeItem = (index)=>{
        dispatch(removeTodo(index));
    }
    
    return(
        <ul>
            {todolist.map((item,index)=> <li key={index}>{item} <button onClick={()=> removeItem(index)}>X</button></li>)}
        </ul>
    );
}