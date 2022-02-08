import "./style.scss";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

export default function Pokemons({ pokemon }) {
  const jsxPokemon = pokemon.map((data) => (
    <Link
      style={{ textDecoration: "none" }}
      key={data.id}
      to={`/detail/${data.name}`}
    >
      <div className="pokemon-card" key={data.id}>
        <span className="pokemon-number">{`#${data.id}`}</span>
        <img src={`${data.sprites.front_default}`} alt="pokemin" />
        <div className="pokemon-type">
          <span
            className="pokemon-typeone"
            style={{
              backgroundColor: `${
                PokemonTypeColors[`${data.types[0].type.name}`]
              }`,
            }}
          >
            {data.types[0].type.name
              .toLowerCase()
              .split(" ")
              .map(
                (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </span>
          {data.types[1] !== undefined ? (
            <span
              className="pokemon-typetwo"
              style={{
                backgroundColor: `${
                  PokemonTypeColors[
                    `${
                      data.types[1] !== undefined
                        ? data.types[1].type.name
                        : null
                    }`
                  ]
                }`,
              }}
            >
              {data.types[1] !== undefined
                ? data.types[1].type.name
                    .toLowerCase()
                    .split(" ")
                    .map(
                      (letter) =>
                        letter.charAt(0).toUpperCase() + letter.substring(1)
                    )
                    .join(" ")
                : null}
            </span>
          ) : null}
        </div>
        <p className="pokemon-name">
          {data.name
            .toLowerCase()
            .split(" ")
            .map(
              (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
            )
            .join(" ")}
        </p>
      </div>
    </Link>
  ));
  return (
    <div className="pokemon">{jsxPokemon}</div>
  );
}


Pokemons.propTypes = {
  pokemon: PropTypes.array.isRequired,
};
