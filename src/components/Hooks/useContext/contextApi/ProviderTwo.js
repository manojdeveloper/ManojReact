import { ContextTwo } from "./ContextTwo";

export let ProviderTwo = (props)=>{
    let userText = "this is the text from 2nd context"
    return <ContextTwo.Provider value={userText}>{props.children}</ContextTwo.Provider>

}