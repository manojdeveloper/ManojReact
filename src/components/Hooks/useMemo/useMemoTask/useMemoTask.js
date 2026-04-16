import { useState } from "react";
import { ExpensiveCalculation } from "./expensiveCalculation";

export let UseMemoTask = ()=>{
    let [count, SetCount] = useState(0);

    return(
        <>
        <ExpensiveCalculation />
        <div align="center">
            <div>{count}</div>
            <div align="center">
                <button type="button" onClick={()=>SetCount(count + 1)}>Increase</button>
                <button type="button" onClick={()=>SetCount(Math.max(count - 1, 0))}>Decrease</button>
            </div>
        </div>
        </>
    )
}