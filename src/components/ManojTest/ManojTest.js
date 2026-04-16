//Palindrome
//pangram
//Fibonacci Series, Lucas, Tribonacci, Tetranacci, Padovan, Pell, Jacobsthal

import { useState, useEffect, useRef, } from "react";
import { NavLink, useNavigate, useParams } from "react-router";

export let ManojTest = ()=>{
    let [fibona, Setfibona] = useState();
    let [status, Setstatus] = useState([]);

    let {productId} = useParams();
    let mynavigate = useNavigate();
    

    let handleRedirect = ()=>{
            mynavigate("/liftstateUp")
    }


    let fibonaString = (event)=>{
        Setfibona(event.target.value);  
    }

    let pressEnter = (event)=>{
        if(event.key == "Enter"){
            let seriesArray = [];
            for(let i = 0; i <= fibona; i++){
                let val1 = seriesArray.at(-1) ?? i,
                    val2 = seriesArray.at(-2) ?? i;

                    seriesArray.push(val1 + val2);
                
            }

            Setstatus(seriesArray);
        }
    }

    return(
        <div>
            <div>
                <h2>Fibonacci Series <NavLink to="/liftstateUp" >{productId}</NavLink> <strong onClick={handleRedirect}>{productId}</strong></h2>
                <input value={fibona} onChange={fibonaString} onKeyDown={pressEnter} type="number" style={{marginRight:"50px", width: "100px"}} /> 
                {status.join(",")}
                <h1>API: {process.env.REACT_APP_API_URL}</h1>
            </div>
        </div>
    );
}


// export let ManojTest = ()=>{
//     let [pangram, Setpangram] = useState("");
//     let [status, Setstatus] = useState("Check karke batata hu");

//     let pangramString = (event)=>{
//         Setpangram(event.target.value);  
//     }

//     let pressEnter = (event)=>{
//         if(event.key == "Enter"){
//             let pangramtxt = "abcdefghijklmnopqrstuvwxyz";
//             for(let check of pangramtxt){
//                 if(pangram.includes(check)){
//                     Setstatus("ha hai");
//                 }else{
//                     Setstatus("nahi hai");
//                     break;
//                 }
//             }
//         }
//     }

//     return(
//         <div>
//             <div>
//                 <h2>Pangram</h2>
//                 <input value={pangram} onChange={pangramString} onKeyDown={pressEnter} type="text" /> 
//                 {status}
//             </div>
//         </div>
//     );
// }



// export let ManojTest = ()=>{
//     let [palindrome, Setpalindrome] = useState("");

//     let palindromeString = (event)=>{
//         Setpalindrome(event.target.value);        
//     }

//     return(
//         <div>
//             <div><h2>Palindrome</h2> <input value={palindrome} onChange={palindromeString} type="text" /> {palindrome === palindrome.split("").reverse().join("") ? "Palindrome hai" : "Palindrome nahi hai"}</div>
//         </div>
//     );
// }