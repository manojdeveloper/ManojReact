import { useRouteError } from "react-router"

export let ErrorPage = ()=>{

    let errorDetail = useRouteError();

    console.log(errorDetail);

    return <h1>{errorDetail.status}, {errorDetail.data}</h1>
}