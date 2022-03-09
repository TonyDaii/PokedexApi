import "./style.scss";
import { useParams } from "react-router";
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

export default function PokemonDetails({ PokemonInformation }) {
  const { slug } = useParams();
  const filterJsxPokemonDetail = PokemonInformation.filter(
    (data) => data.name === slug
  );
  const mapJsxPokemonDetail = filterJsxPokemonDetail.map((data) => (
    <div key={data.id} className="poke">
      <h2 className="poke-title">{`Details of ${data.name
        .toLowerCase()
        .split(" ")
        .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
        .join(" ")}`}</h2>
      <div className="poke-all">
        <div className="poke-src">
          <img
            className="poke-img"
            src={`${data.sprites.front_default}`}
            alt="pokemonimage"
          />
        </div>
        <div className="poke-information">
          <div className="poke-type">
            <p className="poke-name">
              {`#${data.id} `}
              {data.name
                .toLowerCase()
                .split(" ")
                .map(
                  (letter) =>
                    letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join(" ")}
            </p>
            <span
              className="poke-typeone"
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
                  (letter) =>
                    letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join(" ")}
            </span>
            {data.types[1] !== undefined ? (
              <span
                className="poke-typetwo"
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
          <h3>Statistics</h3>
          <div className="poke-stats">
            <div className="poke-list">
              {data.stats.map((element) => (
                <div key={element.stat.name}>
                  {" "}
                  {element.stat.name
                    .toLowerCase()
                    .split(" ")
                    .map(
                      (letter) =>
                        letter.charAt(0).toUpperCase() + letter.substring(1)
                    )
                    .join(" ")}{" "}
                </div>
              ))}
            </div>
            <div>
              {data.stats.map((element) => (
                <div className="progress" key={element.stat.name}>
                  <div style={{ width: element.base_stat }}>
                    {element.base_stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="back">
        <Link style={{ textDecoration: "none" }} to="/" className="back-button">
          Back to the list
        </Link>
      </div>
      
    </div>
  ));

  return <div className="pokemon">{mapJsxPokemonDetail}</div>;
}

PokemonDetails.propTypes = {
  PokemonInformation: PropTypes.array.isRequired,
};
