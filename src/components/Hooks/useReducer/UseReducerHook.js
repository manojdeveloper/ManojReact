import {CounterTask} from './counterTask/CounterTask';
import {FormTask} from './formTask/FormTask';

//this is alternative of useState Hook
export let UseReducerHook = ()=>{

    return (
        <>
            <CounterTask />
            {/* <FormTask /> */}
        </>
    )

}