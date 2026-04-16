import { useState } from "react";

let ChildOne = ({ getval }) => {
    let [text, Settext] = useState("");

    let handleChange = (e) => {
        Settext(e.target.value);
        getval(e.target.value);
    }

    return (
        <div>
            <div>Child One Component : <input type="text" value={text} onChange={handleChange} /></div>
        </div>
    )

}

export default ChildOne;