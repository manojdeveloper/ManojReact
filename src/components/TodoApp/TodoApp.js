import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"

export let TodoApp = ()=>{
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap: "2rem"}}>
            <TodoForm />
            <TodoList />
        </div>
    )
}