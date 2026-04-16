import { useCallback, useState, useMemo } from 'react';
import {ButtonComponent} from './ButtonComponent';

export let CallbackTask = ()=>{
    let [count, SetCount] = useState(0);

    let increment = useCallback(()=>{
            SetCount((prevcount) => prevcount + 1);
    },[]);

    let decrement = useCallback(()=>{
            SetCount((prevcount) => prevcount - 1);
    },[]);

    return(
        <>
        <div align="center">
            <h1>{count}</h1>
            <div>
                <ButtonComponent action={increment}>Increment</ButtonComponent>
                <ButtonComponent action={decrement}>Decrement</ButtonComponent>
            </div>
        </div>
        </>
    )
}