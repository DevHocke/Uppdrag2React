import { useState } from "react";
import axios from "axios";

export const AccessoriesView = () => {
    const [ServerResponse, setServerResponse] = useState();

    const fetchData = async () => {
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
            setServerResponse(response);
        } catch(error){
            alert("Error retriving data from server pappskalle: " + error);
        }
    };

    return (
        <div>
            <main>
                <section>
                    <h1>This is the Accessories view.</h1>
                    <h2>{ServerResponse?.data?.name}</h2>
                    <button onClick={() => fetchData()}>Make API call</button>
                </section>
            </main>
        </div>
    )
}
