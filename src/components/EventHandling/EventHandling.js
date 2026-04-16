import { Fragment } from "react/jsx-runtime";
import "./EventHandling.scss";

export let EventHandling = () => {
    let handleButtonClick =(event)=>{
        console.log(event.currentTarget);
        console.log(event.target);
    }

    let passArgument = (data) => {
        console.log(`hello ${data}`);
    }

    

    return (
        <Fragment>
            <button onClick={handleButtonClick}> click here function</button><br />
            <button onClick={()=> console.log("inline function")}> click here inline function</button>
            
            {/* pass the argument */}
            <button onClick={()=> passArgument("manoj")}> Pass Argument function</button>
        </Fragment>
        
    )
}