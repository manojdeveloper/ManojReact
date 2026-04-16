import { useEffect, useState } from "react";
import "./PokemonAppTask.scss";

export let PokemonAppTask = () => {

    let [pokemon, SetPokemon] = useState([]);
    let [search, SetSearch] = useState('');
    let [currentPage, setCurrentPage] = useState(1);


    let fetchData = async () => {
        try {
            let apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=13";
            let fetchData = await fetch(apiUrl);

            if (!fetchData.ok) {
                throw new Error("Network response was not ok");
            }

            let response = await fetchData.json();
            let finalArray = response.results;

            let subdata = response.results.map(async (curr) => {
                let subApiUrl = await fetch(curr.url);
                let subresponse = await subApiUrl.json();
                return subresponse;
            });

            let subdataPromise = await Promise.all(subdata);

            subdataPromise.map((current, index) => {
                finalArray[index].imgurl = current.sprites.other["official-artwork"].front_default
                finalArray[index].weight = current.weight;
                finalArray[index].height = current.height;
                finalArray[index].base_experience = current.base_experience;
                finalArray[index].types = current.types;
            });


            SetPokemon(finalArray);


        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    let searchMethod = (searchKey) => {
        SetSearch((prev) => {
            return searchKey;
        })
    }


    let itemsPerPage = 3,
        totalPages = Math.ceil(pokemon.length / itemsPerPage),
        startIndex = (currentPage - 1) * itemsPerPage,
        paginationData = pokemon.slice(startIndex, startIndex + itemsPerPage);

    let clickNext = () => {
        setCurrentPage((page) => Math.min(page + 1, totalPages));
        console.log(pokemon.slice(startIndex, startIndex + itemsPerPage));
    };

    let clickPrev = () => {
        setCurrentPage((page) => Math.max(page - 1, 1));
        console.log(pokemon.slice(startIndex, startIndex + itemsPerPage));
    };


    let filteredUsers = pokemon.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
    });

    if (pokemon) {
        return (
            <div className="pokemonSection">
                <div className="pokemonContainer">
                    <h2>Lets catch Pokemon</h2>

                    <div>
                        <button type="button" onClick={clickPrev}>Prev</button>
                        <button type="button" onClick={clickNext}>Next</button>
                    </div>

                    <SearchPokemon serachVal={search} searchmethod={searchMethod} />

                    <div className="pokemonCardListing">
                        {
                            filteredUsers.map((currentData, index) => {
                                return <PokemonCard key={index} pokemonProp={currentData} />
                            })
                        }
                    </div>
                </div>
            </div>
        )

    }
}



let SearchPokemon = (props) => {
    return (
        <div className="searchBar">
            {props.serachVal}
            <input type="search" value={props.serachVal} onChange={(event) => props.searchmethod(event.target.value)} placeholder="Search here" />
        </div>
    )
}


let PokemonCard = (props) => {
    let { pokemonProp } = props;


    return (
        <div className="pokemonCard">
            <div className="cardImg">
                <img src={pokemonProp.imgurl} />
            </div>
            <h3>{pokemonProp.name}</h3>
            <div className="cardTag">
                {pokemonProp.types.map((curr) => curr.type.name).join(", ")}
            </div>
            <div className="detailListing">
                <div className="deatilBox"><span>{pokemonProp.weight}</span> <strong>Weight</strong></div>
                <div className="deatilBox"><span>{pokemonProp.height}</span> <strong>Height</strong></div>
                <div className="deatilBox"><span>{pokemonProp.base_experience}</span> <strong>Experience</strong></div>
            </div>
        </div>
    )
}