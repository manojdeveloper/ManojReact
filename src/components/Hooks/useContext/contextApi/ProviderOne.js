import { useState } from "react";
import {ContextOne} from "./ContextOne";

export let ProviderOne = (props)=>{

    let [mycount, Setmycount] = useState(0)

    let userdata1 = {name: "Anjali", age: 30, gender: "female", };
    let userdata2 = {name: "manoj kumar1", age: 37, gender: "male", };
    
    let increase = ()=>{
        Setmycount(mycount + 1);
    }

    console.log("count", mycount);

    return <ContextOne.Provider value={{userdata1, userdata2, mycount, increase}}>{props.children}</ContextOne.Provider>
}