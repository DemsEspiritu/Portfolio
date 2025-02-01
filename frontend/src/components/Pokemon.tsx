import axios from "axios"
import { useState, useEffect } from "react";

export default function Pokemon() {
    const [data, setData] = useState<any[]>([]);
    let [pocket, setPocket] = useState<[string]>([]);

    const fetchPokemon = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            if (response.status !== 200) {
                throw new Error('Network response was not ok!');
            }
            const data = response.data;
            setData([data]);
            listing(data.results)
            // console.log(data);
        } catch (error) {
            console.log(error)
        }
    }


    function listing(data) {
            data.forEach((pokmon) => {
                fetchPokemonData(pokmon)
            })
    }



    function fetchPokemonData(pokemon) {
        let url = pokemon.url;
        fetch(url)
            .then(response => response.json())
            .then(function (pockeData) {
                // console.log(pockeData);
                setPocket(prevPocket => [...prevPocket, pockeData])
            })
    }



    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <div>
            <div  className="grid grid-cols-6 gap-2">
                {pocket.map((poke: any) => (
                    <div className="bg-white p-2 rounded-md" key={Math.floor(Math.random() * 400)}>
                        <p>{poke.id}</p>
                        <h1>{poke.name}</h1>
                        <img src={poke.sprites.front_default} alt="Pokemon" className="h-44" />
                    </div>
                ))}
            </div>
        </div>
    )
}
