import { memo } from "react"

export let ButtonComponent = memo((props)=>{
    console.log("render", props.children)
    return(
        <button onClick={props.action}>{props.children}</button>
    )
})