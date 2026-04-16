import { NavLink } from "react-router";
import "./ProjectLinks.scss";

export let ProjectLinks = ()=>{
    return(
        <div className="projectLinks">
            <ul>
            <li><NavLink to="storecardslist">StoreCardsList </NavLink></li>
            <li><NavLink to="eventhandling">EventHandling </NavLink></li>
            <li><NavLink to="eventprops">EventProps </NavLink></li>
            <li><NavLink to="eventpropagation">EventPropagation </NavLink></li>
            <li><NavLink to="liftstateUp">LiftStateUp </NavLink></li>
            <li><NavLink to="manojtest/manoj123">ManojTest </NavLink></li>
            <li><NavLink to="imageslidertask">ImageSliderTask </NavLink></li>
            <li><NavLink to="pokemonapptask">PokemonAppTask </NavLink></li>
            <li><NavLink to="usestatehook">UseStateHook </NavLink></li>
            <li><NavLink to="useeffecthook">UseEffectHook </NavLink></li>
            <li><NavLink to="userefhook">UseRefHook </NavLink></li>
            <li><NavLink to="useidhook">UseIdHook </NavLink></li>
            <li><NavLink to="usecontexthook">UseContextHook </NavLink></li>
            <li><NavLink to="customhookcomponent">CustomHookComponent </NavLink></li>
            <li><NavLink to="useapi">UseApi </NavLink></li>
            <li><NavLink to="usereducerhook">UseReducerHook </NavLink></li>
            <li><NavLink to="reactmemo">ReactMemo </NavLink></li>
            <li><NavLink to="usememohook">UseMemoHook </NavLink></li>
            <li><NavLink to="usecallbackhook">UseCallbackHook </NavLink></li>
            <li><NavLink to="contact">Contact us </NavLink></li>
            <li><NavLink to="accordian">Accordian </NavLink></li>
            <li><NavLink to="tanstack">TanstackQuery</NavLink></li>
            <li><NavLink to="reactredux">ReactRedux</NavLink></li>
            <li><NavLink to="highordercomponent">HOC</NavLink></li>
            <li><NavLink to="todoapp">TodoApp</NavLink></li>
            <li><NavLink to="proptype">Prop Type</NavLink></li>
        </ul>
        </div>
    )
}