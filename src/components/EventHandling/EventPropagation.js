export let EventPropagation = () => {

    let fn1 = (event)=>{
        console.log("outer click");
    }
    let fn2 = (event)=>{
        console.log("middle click");
        event.stopPropagation();
    }
    let fn3 = (event)=>{
        console.log("inner click");
    }

    return (
        <div onClickCapture={fn1} style={{background:"blue", padding:"40px", display: "inline-block",}}>
            <div onClickCapture={fn2} style={{background:"#ff0000", padding:"40px", display: "inline-block",}}>
                <div onClickCapture={fn3} style={{background:"green", padding:"40px", display: "inline-block",}}>

                </div>
            </div>
        </div>
    );

}