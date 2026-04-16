import { use } from "react"
import { ContextOne } from "./ContextOne"

export let ChildComponent = ()=>{
    let data;
    if(true){
        data = use(ContextOne);
    }
    

    

    return(
        <p>My name is {data.mydata.name} <br></br> {data.aboutText}</p>
    )
}