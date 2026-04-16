import { useEffect, useState } from "react";
import "./FetchApiTask.scss";

export let FetchApiTask = () => {

    let [apiData, SetApiData] = useState({});
    let [loading, SetLoading] = useState(true);
    let [checkerror, Setcheckerror] = useState();

    let fetchData = async () => {
        try {
            let url = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
            let data = await url.json();

            if(!url.ok){
                throw new Error("Network response was not ok") 
            }

            console.log(url);

            SetApiData(data);
            SetLoading(false);

        } catch (error) {

            SetLoading(false);
            Setcheckerror(error);

        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="fetchSection">
                <div className="fetchBox">
                    <h3>Loading</h3>
                </div>
            </div>
        )
    }

    if (checkerror) {
        return (
            <div className="fetchSection">
                <div className="fetchBox">
                    <h3>{checkerror.message}</h3>
                </div>
            </div>
        )
    }

    return (
        <div className="fetchSection">
            <div className="fetchBox">
                <img src={apiData.sprites.other.dream_world.front_default} />
                <h3>{apiData.name}</h3>
            </div>
        </div>
    )

}