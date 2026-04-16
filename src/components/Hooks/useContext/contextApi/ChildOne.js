import { useContext, useState } from "react"
import { ContextOne } from "./ContextOne";
import { ContextTwo } from "./ContextTwo";

export let ChildOne = (props)=>{
    //console.log(useContext(TestContext))
    console.log(props);
    //let mydata = useContext(TestContext);
     
    let mydata = useContext(ContextOne);
    let userText = useContext(ContextTwo);

    console.log(mydata);

    return(
        <div>
            <p>my name is {mydata.userdata1.name} , {props.propdata}</p>
            <p>{userText}</p>
            {props.children[1]}
            <p>counts {mydata.mycount}</p>
            <button type="button" onClick={()=>mydata.increase()}>increase</button>

        </div>
    )
}