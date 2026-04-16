import { ComponentOne } from "./ComponentOne"
import { ComponentTwo } from "./ComponentTwo"

export let ReactRedux = ()=>{

    console.log("ReactRedux component");

    return(
        <div style={{display:'flex', gap:'1rem', alignItems: 'center', justifyContent: 'center',width:'100dvw', height:'100dvh'}}>
            <ComponentOne />
            <ComponentTwo />
        </div>
    )
}