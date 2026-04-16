import { useEffect, useState } from "react";

export let useCustomHook =()=>{

    let [windowWidth, SetwindowWidth] = useState(window.innerWidth);

    window.addEventListener('resize', ()=>{
        SetwindowWidth(window.innerWidth);
    });
    
    // useEffect(()=>{

    //     let resizeHandler =()=>{
    //         SetwindowWidth(window.innerWidth);
    //     }

    //     window.addEventListener('resize', resizeHandler);

        

    //     return ()=>{
    //         window.removeEventListener('resize', resizeHandler);
    //     }
        
    // },[windowWidth]);

    return (windowWidth);
}


export let useToggle = (getval)=>{
    let [value, SetValue] = useState(getval);

    return [value, SetValue]
}