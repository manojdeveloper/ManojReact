import {ContextOne} from './ContextOne';

export let ProviderComponent = (props)=>{

    let mydata = {name:"manoj", age:37,};
    let aboutText = "here is about us text";

    return <ContextOne.Provider value={{mydata, aboutText}}>{props.children}</ContextOne.Provider>

}