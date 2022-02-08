import "./style.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [allPokemons, setAllPokemons] = useState([]);
    const getAllPokemons = async () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then((response) => response.data.results)
            .then((results) =>
                Promise.all(results.map((response) => axios.get(response.url)))
            )
            .then((results) => {
                setAllPokemons(results.map((res) => res.data));
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
        <div className="app">
            hello world
        </div>
    );
}
