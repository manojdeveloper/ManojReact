import { useEffect, useState } from "react";
import "./CountNameTask.scss";

export let CountNameTask = () => {
    let [counts, SetCounts] = useState(0);
    let [heading, Setheading] = useState("Set heading");

    let countIncrease = () => {
        document.title = counts;
        SetCounts((prevVal) => {
            return prevVal + 1;
        })
    }

    let changeHeading = (event) => {
        document.title = event.target.value;
        Setheading(() => {
            return event.target.value;
        })
    }

    useEffect(() => {

        let interval = setInterval(() => {
            SetCounts((prevVal) => {
                document.title = prevVal + 1;
                return prevVal + 1;
            })
        }, 1000);

        return (() => {
            clearInterval(interval);
            //console.log("Cleanup done");
        })




    }, [heading]);

    return (
        <div className="countNameTask">
            <div className="countNameBox">
                <h2>{heading}</h2>
                <button onClick={countIncrease}>increase count : {counts}</button>
                <input type="text" value={heading} onChange={changeHeading} />
            </div>
        </div>
    )

}