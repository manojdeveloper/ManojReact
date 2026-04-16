import React from "react";

let ChildComponent = (props)=>{

    console.log("child")

    return(
        <>
        <p>child component</p>
        </>
    );
}

export default React.memo(ChildComponent);