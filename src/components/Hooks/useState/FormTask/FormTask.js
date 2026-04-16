import { useState } from "react";
import "./FormTask.scss";

export let FormTask = ()=>{
    let userObj = {firstname: "", lastname: "", emailid: "", phonenumber: "", password: ""}
    let [user, SetUser] = useState(userObj);

    const phoneRegex = /^\d*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let handleChange = (event)=>{

        SetUser((prevUser)=>{
            let keyName = event.target.name;
            let newUser = {...prevUser, [keyName]:event.target.value};
            
            // if(keyName == "phonenumber"){
            //     if (phoneRegex.test(event.target.value)){
            //         newUser[keyName] = event.target.value;
            //     }
            // } else{
            //     newUser[keyName] = event.target.value;
            // }
            
            return newUser;
        });
    }

    let submitForm = (event)=>{
        event.preventDefault();
        console.log(user);
    }

    return(
        <div className="formTaskSection">
            <div className="formTaskBox">
                <h2>Registration Form</h2>
                <p>Please fill this form to create an account.</p>

                <form onSubmit={submitForm} >
                    <ul>
                        <li>
                            <label>First Name</label>
                            <input type="text" value={user.firstname} name="firstname" onChange={handleChange} required />
                        </li>
                        <li>
                            <label>Last Name</label>
                            <input type="text" value={user.lastname} name="lastname" onChange={handleChange} required />
                        </li>
                        <li>
                            <label>Email Id</label>
                            <input type="text" value={user.emailid} name="emailid" onChange={handleChange} required />
                        </li>
                        <li>
                            <label>Phone Number</label>
                            <input type="text" maxLength="10" value={user.phonenumber} name="phonenumber" onChange={handleChange} required />
                        </li>
                        <li>
                            <label>Password</label>
                            <input type="password" value={user.password} name="password" onChange={handleChange} required />
                        </li>
                    </ul>

                    <button className="submitButton" type="submit">Register</button>

                </form>
            </div>

            <div className="formTaskBoxPrev">
                <p>First Name : {user.firstname}</p>
                <p>Last Name : {user.lastname}</p>
                <p>Email Id : {user.emailid}</p>
                <p>Phone Number : {user.phonenumber}</p>
                <p>Password : {user.password}</p>
            </div>
        </div>
    )

}