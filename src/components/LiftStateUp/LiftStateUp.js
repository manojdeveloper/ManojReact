import { Fragment } from "react/jsx-runtime";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import { useState } from "react";

export let LiftStateUp = () => {
    let [mydata, setMydata] = useState("");

    let getValue = (value)=>{
        setMydata(value);
    }



    return (
        <Fragment>
            <ChildOne getval={getValue} />
            <ChildTwo manojval={mydata} />
        </Fragment>
    );
}