import { useMemo } from "react";

export let ExpensiveCalculation = () => {
    const calculation = () => {
        let total = 0;
        for (let i = 0; i < 5e8; i++) {   // realistic heavy loop
            total += i;
        }
        console.log("expensive loop");
        return total;
    };

    let myvalue = useMemo(() => calculation(), []);

    console.log("expensive component");

    return (
        <h1>calculation {myvalue}</h1>
    )
}