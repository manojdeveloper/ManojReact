import { useState } from "react";
import "./ToggleTask.scss";

export let ToggleTask = () => {

    let [onOff, SetonOff] = useState(false);

    let toggleThis = ()=> {

        SetonOff((prevState)=>{
            prevState = !prevState;

            return prevState;
        });

        console.log(onOff);

    }


    return (
        <div className={`toggleBox ${onOff && "active"}`}>
            <span onClick={toggleThis}>{onOff ? "ON" : "OFF"}</span>
        </div>
    );
}