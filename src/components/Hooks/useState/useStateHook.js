import { Fragment } from "react/jsx-runtime";
import { ToggleTask } from './ToggleTask/ToggleTask';
import { TodoListTask } from './TodoListTask/TodoListTask';
import { UseStateTask } from './UseStateTask/UseStateTask';
import { FormTask } from './FormTask/FormTask';

export let UseStateHook = () => {
    return (
        <Fragment>
            {/* <ToggleTask /> */}
            {/* <TodoListTask /> */}
            <UseStateTask />
            <FormTask />
        </Fragment>
    )
}