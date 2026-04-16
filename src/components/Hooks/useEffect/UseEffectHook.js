import { Fragment } from "react/jsx-runtime";
import {CountNameTask} from "./CountNameTask/CountNameTask";
import {FetchApiTask} from "./FetchApiTask/FetchApiTask";


export let UseEffectHook = () => {
    return (
        <Fragment>
            <CountNameTask />
            {/* <FetchApiTask /> */}
        </Fragment>
    )
}