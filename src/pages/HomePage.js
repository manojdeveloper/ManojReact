import { Outlet, useNavigation } from "react-router";
import { ProjectLinks } from "../components/ProjectLinks/ProjectLinks";

export let HomePage = ()=>{
    let mynavigation = useNavigation();

    //console.log(mynavigation)

    if(mynavigation.state === "loading"){
        return <h1>Loading...</h1>
    }

    return (
        <>
        <ProjectLinks />
        <Outlet />
        </>
    )
}