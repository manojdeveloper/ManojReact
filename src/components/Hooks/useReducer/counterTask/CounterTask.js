import { useReducer } from "react"

export let CounterTask = ()=>{
    let reducerfunc = (currentState, action)=>{
        if(action.keytype == "Increment"){   
            return currentState + 1;
        }
        if(action.keytype == "Decrement"){
            return currentState - 1;
        }
    };

    let[state, dispature] = useReducer(reducerfunc,0);
    console.log(state);


    return(
        <div align="center">
            <div>{state}</div>
            <div>
                <button type="button" onClick={()=> dispature({keytype: "Increment"})}>Increment</button>
                <button type="button" onClick={()=> dispature({keytype: "Decrement"})}>Decrement</button>
            </div>
        </div>
    )
}