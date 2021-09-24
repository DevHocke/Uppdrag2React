import { useState, useEffect } from "react";
import axios from "axios";
import './AccessoriesView.css'

export const AccessoriesView = () => {
    const limitPokemons = 50;
    const [ServerResponse, setServerResponse] = useState();
    const [isDone, setisDone] = useState(false);
    const [pokemonDetails, setpokemonDetails] = useState([])

    useEffect(() => {
        if (ServerResponse?.length == limitPokemons){
            ServerResponse.map((hockemon) => {fetchDetails(hockemon.url)})
            
        }
    }, [ServerResponse])
    
    useEffect(() => {
        if (pokemonDetails?.length == limitPokemons){
            setisDone(true)
        }
    }, [pokemonDetails])

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
                    </div>}) : null}
                    <button onClick={() => fetchData()}>Make API call</button>
                </section>
            </main>
        </div>
    )
}
