import { useEffect, useState } from "react";
import "./PokemonAppTask.scss";

export let PokemonAppTask = () => {

    let [pokemon, SetPokemon] = useState(null);

    let fetchData = async () => {
        try {
            let apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=50";
            let fetchData = await fetch(apiUrl);

            if (!fetchData.ok) {
                throw new Error("Network response was not ok");
            }

            let response = await fetchData.json();
            
            SetPokemon(response);

            // let subdata = response.results.map(async (curr)=>{

            //     let subApiUrl = await fetch(curr.url);
            //     let subresponse = await subApiUrl.json();

            //     return subresponse;

            // });
            // console.log(subdata);


        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    if (pokemon) {
        return (
            <div className="pokemonSection">
                <div className="pokemonContainer">
                    <h2>Lets catch Pokemon</h2>
                    <SearchPokemon />
                    <div className="pokemonCardListing">
                        {
                            pokemon.results.map((currentData, index) => {
                                return <PokemonCard key={index} pokemonProp={currentData} />
                            })
                        }
                    </div>
                </div>
            </div>
        )

    }
}



let SearchPokemon = () => {
    return (
        <div className="searchBar">
            <input type="search"  placeholder="Search here" />
        </div>
    )
}


let PokemonCard = (props) => {
    let { pokemonProp } = props;
    let [pokemonCard, SetPokemonCard] = useState(null);
    let [catchError, SetcatchError] = useState();

    let fetchData = async () => {
        try {
            let apiUrl = pokemonProp.url;
            let fetchData = await fetch(apiUrl);

            if (!fetchData.ok) {
                throw new Error("Network response was not ok");
            }

            let response = await fetchData.json();
            SetPokemonCard(response);

            console.log(response);

        } catch (error) {
            SetcatchError(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if(catchError){
        return(
            <h3>{catchError.message}</h3>
        );
    }

    if (pokemonCard) {
        return (
            <div className="pokemonCard">
                <div className="cardImg">
                    <img src={pokemonCard.sprites.other["official-artwork"].front_default} />
                </div>
                <h3>{pokemonProp.name}</h3>
                <div className="cardTag">
                    {pokemonCard.types.map((curr)=> curr.type.name).join(", ")}
                    </div>
                <div className="detailListing">
                    <div className="deatilBox"><span>{pokemonCard.weight}</span> <strong>Weight</strong></div>
                    <div className="deatilBox"><span>{pokemonCard.height}</span> <strong>Height</strong></div>
                    <div className="deatilBox"><span>{pokemonCard.base_experience}</span> <strong>Experience</strong></div>
                </div>
            </div>
        )
    }


}