import {useCustomHook, useToggle} from "./useCustomHook";

export let CustomHookComponent = ()=>{
    let mywidth = useCustomHook();

    let [toggleVal, SetToggleVal] = useToggle(true);
    let [toggleVal1, SetToggleVal1] = useToggle(true);

    let student = [];
    

    return(
        <div style={{fontSize:'2rem', width:'100dvw', height:"100dvh", display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div>{mywidth} <br></br>
            {mywidth > 1200 ? "badi screen hai" : "choti screen hai"}</div>

            <div>
                <p>{!student.length && "no result found"}</p>
                <p>num of student : {student.length}</p>
                
                </div>

            <div>
                {toggleVal && <h1>manoj kumar</h1>}
                <button type="button" onClick={()=>SetToggleVal(!toggleVal)}>toggle</button>
                <button type="button" onClick={()=>SetToggleVal(true)}>Show</button>
                <button type="button" onClick={()=>SetToggleVal(false)}>Hide</button>

                {toggleVal1 && <h1>manoj kumar1</h1>}
                <button type="button" onClick={()=>SetToggleVal1(!toggleVal1)}>toggle</button>
                <button type="button" onClick={()=>SetToggleVal1(true)}>Show</button>
                <button type="button" onClick={()=>SetToggleVal1(false)}>Hide</button>
            </div>
        </div>        
    )
}