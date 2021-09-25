import { useState, useEffect } from "react";
import axios from "axios";
import './AccessoriesView.css'

export const AccessoriesView = () => {
    const limitPokemons = 50;
    const [ServerResponse, setServerResponse] = useState();
    const [isDone, setisDone] = useState(false);
    const [pokemonDetails, setpokemonDetails] = useState([])

    // Listens to any change and if ServerResponse is null
    // the function fetchData is called.
    useEffect(() => {
        if (ServerResponse == null){
            fetchData()
        }
    }, [])

    // If ServerResponse has 50 pokemons, itterate through the array. 
    // For every hockemon in the array the function fetchDetails is called and the data is stored 
    // in pokemonDetails.
    useEffect(() => {
        if (ServerResponse?.length == limitPokemons){
            ServerResponse.map((hockemon) => {fetchDetails(hockemon.url)})
        }
    }, [ServerResponse])
    
    // If pokemonDetails contains 50 pokemons, set setisDone to true.
    useEffect(() => {
        if (pokemonDetails?.length == limitPokemons){
            setisDone(true)
        }
    }, [pokemonDetails])
    // fetcData makes a API call and stores the data of limitPokemons (50) in response. 
    const fetchData = async () => {
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=" + limitPokemons)
            setServerResponse(response.data.results);
        } catch(error){
            alert("Error retriving data from server: " + error);
        }
    };
    
    const fetchDetails = async (url) => {
        try{
            const response = await axios.get(url)
            setpokemonDetails((pokemonDetails) => {return [...pokemonDetails, response.data]})
        } catch(error){
            alert("Error retriving data from server: " + error);
        }
    };

    return (
        <div>
            <main>
                <section>
                    <h1>This is the Accessories view.</h1>
                     { isDone ? pokemonDetails.map((pokemon, i) => 
                     {  return <div key={i}><h2>{pokemon.species.name}</h2><img className="hockemons"src={pokemon.sprites.other['official-artwork'].front_default}></img>
                    </div>}) : <> <div className="loader"></div> <h1>Loading. . .</h1></>}
                    
                </section>
            </main>
        </div>
    )
}