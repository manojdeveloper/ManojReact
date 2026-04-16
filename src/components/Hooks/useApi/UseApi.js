import {ProviderComponent} from './ProviderComponent';
import {ChildComponent} from './ChildComponent';

export let UseApi = ()=>{
    return(
        <ProviderComponent>
            <ChildComponent></ChildComponent>
        </ProviderComponent>
    )
}