import { useReducer } from "react";
import "./FormTask.scss";

export let FormTask = ()=>{

    let formValues = {fname: "", lname: "", emailid: "", phonenumber: "", password: ""}

    let reduserFun = (currentvalues, getaction)=>{
        let {keyname, keyvalue} = getaction;
        if(keyname == "fname"){
            return {...currentvalues, fname: keyvalue}
        }
        if(keyname == "lname"){
            return {...currentvalues, lname: keyvalue}
        }
        if(keyname == "emailid"){
            return {...currentvalues, emailid: keyvalue}
        }
        if(keyname == "phonenumber"){
            return {...currentvalues, phonenumber: keyvalue}
        }
        if(keyname == "password"){
            return {...currentvalues, password: keyvalue}
        }

        
    }

    let [formData, setFormData]= useReducer(reduserFun, formValues);

    let submitForm = (e)=>{
        //console.log("a", formData);
    }


    return (
        <div className="formTaskSection">
            <div className="formTaskBox">
                <h2>Registration Form</h2>
                <p>Please fill this form to create an account.</p>

                <form onChange={submitForm}>
                    <ul>
                        <li>
                            <label>First Name</label>
                            <InputFeild keyname="fname" inputval={formData.fname} changeFunc={setFormData} />
                        </li>
                        <li>
                            <label>Last Name</label>
                            <InputFeild keyname="lname" inputval={formData.lname} changeFunc={setFormData} />
                        </li>
                        <li>
                            <label>Email Id</label>
                            <InputFeild keyname="emailid" inputval={formData.emailid} changeFunc={setFormData} />
                        </li>
                        <li>
                            <label>Phone Number</label>
                            <InputFeild keyname="phonenumber" inputval={formData.phonenumber} changeFunc={setFormData} />
                        </li>
                        <li>
                            <label>Password</label>
                            <InputFeild keyname="password" inputval={formData.password} changeFunc={setFormData} />
                        </li>
                    </ul>

                    <button className="submitButton" type="submit">Register</button>

                </form>
            </div>

            <div className="formTaskBoxPrev">
                <p>First Name : <span>{formData.fname}</span></p>
                <p>Last Name : <span>{formData.lname}</span></p>
                <p>Email Id : <span>{formData.emailid}</span></p>
                <p>Phone Number : <span>{formData.phonenumber}</span></p>
                <p>Password : <span>{formData.password}</span></p>
            </div>
        </div>
    )
}

let InputFeild = (props) => { 
    return (
        <input type="text" name={props.keyname} value={props.inputval} onChange={(e)=> props.changeFunc({keyname: e.target.name, keyvalue: e.target.value})} />
    )
}