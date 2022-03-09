import "./style.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import PokemonDetails from "../PokemonDetails";
import Pokemons from "../Pokemons";
import Header from "../Header";
import Types from "../Types";
import PokemonType from "../Pokemons/pokemonType";
 
export default function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [pokemonTypes, setPokemonTypes] = useState('')

    const getPokemonsTypes = async () => {
        axios
            .get("https://pokeapi.co/api/v2/type")
            .then((response) => response.data.results)
            .then((results) =>
                setPokemonTypes(results)
            )
            .catch((error) => console.log(error));
    };
     const getAllPokemons = async () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=251")
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
        getPokemonsTypes()
    }, []);

    
    const removedType = pokemonTypes.slice(0, -2);

    return (
      <div className="app">
        <Header openFilterWidget={setOpenFilter} closeOrOpen={openFilter}/>
        {openFilter === true ? <Types pokemonTypes={removedType}/> : null}
          <Routes>
              <Route path="/" element={<Pokemons pokemon={allPokemons}/>}/>
              <Route path="/pokemon/types/:slug" element={<PokemonType pokeType={allPokemons}/>}/>
              <Route
                  path="/detail/:slug"
                  element={<PokemonDetails PokemonInformation={allPokemons} />}
              />
          </Routes>
      </div>
  );
}
