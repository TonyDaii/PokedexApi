import "./style.scss";
import { Link } from "react-router-dom";

const PokemonTypeColors = {
    fire: "#EE8130",
    grass: "#7AC74C",
    electric: "#F7D02C",
    water: "#6390F0",
    ground: "#E2BF65",
    rock: "#B6A136",
    fairy: "#D685AD",
    poison: "#A33EA1",
    bug: "#A6B91A",
    dragon: "#6F35FC",
    psychic: "#F95587",
    flying: "#A98FF3",
    fighting: "#C22E28",
    normal: "#A8A77A",
    ice: "#96D9D6",
    ghost: "#735797",
    dark: "#705746",
    steel: "#B7B7CE",
};
  
export default function Types({pokemonTypes}) {

    const jsxTypes = pokemonTypes.map((data) => (
        <Link to={`/pokemon/types/${data.name}`} key={data.name} style={{ textDecoration: "none" }}>
            <div className="selection-one" style={{backgroundColor:`${PokemonTypeColors[`${data.name}`]}`}}>{data.name.charAt(0).toUpperCase() + data.name.substring(1)}</div>
        </Link>
    ));
    return(
        <div className="widget-body">
            <p className="text">Search by types...</p>
            <div className="selection">
                {jsxTypes}
            </div> 
        </div>
    )
}