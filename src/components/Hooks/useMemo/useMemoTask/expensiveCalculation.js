import { useMemo } from "react";

export let ExpensiveCalculation = ()=>{
    let calculation = ()=>{
        let i = 0;
        let j = 0;
        for(i = 0; i < 100000000000000000000; i++){
            i = i * i;
            for(j = 0; j < 100000000000000000000; j++){
                j = j * j;
            }
        }
        console.log("expensive loop");
        return i * j;
    }

    let myvalue = useMemo(()=> calculation(),[]);

    console.log("expensive component");

    return(
        <h1>calculation {myvalue}</h1>
    )
}