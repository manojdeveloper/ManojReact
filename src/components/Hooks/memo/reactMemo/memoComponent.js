import { useMemo, useState } from "react";
import ChildComponent from "./childComponent"

export let MemoComponent = ()=>{
    let mydata = 2;
    let myobj = {name: "manoj", age: 30}
    let myarray = [1,2,3,4,5]

    let [state, SetState] = useState(myobj);

    // let myUseMemo = useMemo(()=>{
    //     return state;
    // },[state.age]);

    

    console.log("parent");

    return(
        <>
        <div align="center">
            <div>{state.age}</div>
            <div align="center">
                <button type="button" onClick={()=>SetState({...state, age: state.age + 1})}>Increase</button>
                <button type="button" onClick={()=>SetState({...state, age: state.age - 1})}>Decrease</button>
            </div>
        </div>

        <ChildComponent />
        
        </>
    )
}