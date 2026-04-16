import { useSelector } from "react-redux"

export let ComponentTwo = () => {
    console.log("Two component");
    let statevalues = useSelector(state => state.todoReducer.todo);
    //console.log(statevalues);
    return (
        <ul>
            {statevalues.map((current, index) => {
                return <li key={index}>{current}</li>

            })}
        </ul>
    )
}