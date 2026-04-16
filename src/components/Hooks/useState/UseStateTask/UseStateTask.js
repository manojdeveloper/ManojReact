import { useState } from "react";
import "./UseStateTask.scss";


export let UseStateTask = () => {

    let [count, SetCount] = useState(1);

    let getInputVal = ()=>{
        let inputVal = document.querySelector("#stepVal").value;
        return parseInt(inputVal);
    }


    let incrementVal = ()=>{
        SetCount((prevVal)=>{
            if((prevVal + getInputVal()) > 100){
                return 100;
            }
            return (prevVal + getInputVal());
        });
    }

    let decrementVal = ()=>{
        SetCount((prevVal)=>{
            if((prevVal - getInputVal()) < 0){
                return 0;
            }
            return (prevVal - getInputVal());
        });
    }


    return(
        <div className="useStateSection">
            <div className="useStateBox">
                <h2>useState challange</h2>
                <p>Count : {count}</p>
                <p>Step <input type="number" id="stepVal" min="1" max="100" defaultValue="1" step="1" /></p>
                <div className="footerButtons">
                    <button type="button" onClick={incrementVal} disabled={count >= 100}>Increase</button>
                    <button type="button" onClick={decrementVal} disabled={count <= 0}>Decrease</button>
                    <button type="button" onClick={()=> SetCount(1)}>Reset</button>
                </div>
            </div>
        </div>
    );
}