import { useId } from "react"

//it will not use for the key of map
export let UseIdHook = ()=>{

    let nameId = useId();
    let passwordId = useId();

    return(
        <form>
            <div>
                <label htmlFor={nameId}>username</label> <input id={nameId} type="text" />
            </div>
            <div>
                <label htmlFor={passwordId}>password</label> <input id={passwordId} type="text" />
            </div>
        </form>
    )
}