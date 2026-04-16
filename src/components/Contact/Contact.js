import { Form } from "react-router"

export let myformdata = async(manojRequest)=>{
    try {
        let req = await manojRequest.request.formData();
        //let data = req.json();
        let data = Object.fromEntries(req);

        console.log(data);

    } catch (error) {
        
    }
}

export let Contact = ()=>{
    return(
        <Form method="POST">
            <div style={{margin:"1rem"}}>
                <label>Name</label><br></br>
                <input type="text" name="fullname" />
            </div>
            <div style={{margin:"1rem"}}>
                <label>Email</label><br></br>
                <input type="text" name="emailid" />
            </div>
            <div style={{margin:"1rem"}}>
                <label>phone</label><br></br>
                <input type="text" name="phonenumber" />
            </div>
            <div style={{margin:"1rem"}}>
                <label>age</label><br></br>
                <input type="text" name="age" />
            </div>
            <button type="submit">submit</button>
        </Form>
    )
}