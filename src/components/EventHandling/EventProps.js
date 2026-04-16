import { Fragment } from "react/jsx-runtime";

export let EventProps = () => {
    let clickFunction = (name)=>{
        alert(`Hello ${name}`);
    }

    let mouseEnterFunction = (name)=>{
        alert("ye mouseover wala hai");
    }

    return (
        
        <ChildComponent clickfunction={()=>clickFunction("manoj ji")} mouseenterfunction={mouseEnterFunction} />
        
    )
}


let ChildComponent = (props)=> {

    console.log(props);

    return (
        <div>
            <button onClick={props.clickfunction}>Click wala</button>
            <button onMouseEnter={props.mouseenterfunction}>mouseover wala</button>
        </div>
    )

}