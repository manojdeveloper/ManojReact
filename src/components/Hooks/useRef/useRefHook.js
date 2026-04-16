import { useRef } from "react";
import "./useRefHook.scss";

//useRef use for uncontroll component

export let UseRefHook = () => {

    let firstname = useRef(),
        lastname = useRef(),
        emailid = useRef(),
        phonenumber = useRef(),
        password = useRef();

    let disFirstname = useRef(),
        disLastname = useRef(),
        disEmailid = useRef(),
        disPhonenumber = useRef(),
        disPassword = useRef();


    let submitForm = (event) => {
        event.preventDefault();
        disFirstname.current.innerText = firstname.current.value;
        disLastname.current.innerText = lastname.current.value;
        disEmailid.current.innerText = emailid.current.value;
        disPhonenumber.current.innerText = phonenumber.current.value;
        disPassword.current.innerText = password.current.value;
    }

    console.log(firstname, disFirstname)


    return (
        <div className="formTaskSection">
            <div className="formTaskBox">
                <h2>Registration Form</h2>
                <p>Please fill this form to create an account.</p>

                <form onChange={submitForm} >
                    <ul>
                        <li>
                            <label>First Name</label>
                            <InputFeild ref={firstname} />
                        </li>
                        <li>
                            <label>Last Name</label>
                            <InputFeild ref={lastname} />
                        </li>
                        <li>
                            <label>Email Id</label>
                            <InputFeild ref={emailid} />
                        </li>
                        <li>
                            <label>Phone Number</label>
                            <InputFeild ref={phonenumber} />
                        </li>
                        <li>
                            <label>Password</label>
                            <InputFeild ref={password} />
                        </li>
                    </ul>

                    <button className="submitButton" type="submit">Register</button>

                </form>
            </div>

            <div className="formTaskBoxPrev">
                <p>First Name : <span ref={disFirstname}></span></p>
                <p>Last Name : <span ref={disLastname}></span></p>
                <p>Email Id : <span ref={disEmailid}></span></p>
                <p>Phone Number : <span ref={disPhonenumber}></span></p>
                <p>Password : <span ref={disPassword}></span></p>
            </div>
        </div>
    )
}

let InputFeild = (props) => { 
    return (
        <input type="text" ref={props.ref} />
    )
}



// export let UseRefHook = () => {

//     let formType = {fname: "", lname: "", emailid: "", phonenumber: "", password: ""}

//     let fromData = useRef(formType);


//     let submitForm = (keyname, keyvalue) => {
//         fromData.current = {...fromData.current, [keyname]: keyvalue}
//     }

//     console.log(fromData.current)



//     return (
//         <div className="formTaskSection">
//             <div className="formTaskBox">
//                 <h2>Registration Form</h2>
//                 <p>Please fill this form to create an account.</p>

//                 <form>
//                     <ul>
//                         <li>
//                             <label>First Name</label>
//                             <InputFeild inputname="fname" inputval={fromData.fname} chanefn={submitForm} />
//                         </li>
//                         <li>
//                             <label>Last Name</label>
//                             <InputFeild inputname="lname" inputval={fromData.fname} chanefn={submitForm} />
//                         </li>
//                         <li>
//                             <label>Email Id</label>
//                             <InputFeild inputname="emailid" inputval={fromData.emailid} chanefn={submitForm} />
//                         </li>
//                         <li>
//                             <label>Phone Number</label>
//                             <InputFeild inputname="phonenumber" inputval={fromData.phonenumber} chanefn={submitForm} />
//                         </li>
//                         <li>
//                             <label>Password</label>
//                             <InputFeild inputname="password" inputval={fromData.password} chanefn={submitForm} />
//                         </li>
//                     </ul>

//                     <button className="submitButton" type="submit">Register</button>

//                 </form>
//             </div>

//             <div className="formTaskBoxPrev">
//                 <p>First Name : <span>{fromData.current.fname}</span></p>
//                 <p>Last Name : <span></span></p>
//                 <p>Email Id : <span></span></p>
//                 <p>Phone Number : <span></span></p>
//                 <p>Password : <span></span></p>
//             </div>
//         </div>
//     )
// }

// let InputFeild = (props) => { 
//     return (
//         <input type="text" name={props.inputname} value={props.inputval} onChange={(e)=> props.chanefn(e.target.name,e.target.value)}  />
//     )
// }