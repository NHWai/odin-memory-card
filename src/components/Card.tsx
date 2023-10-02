import { useContext } from "react";
import { CardType } from "../types";
import AppContext from "../context";

export default function Card(props: CardType) {
  const { handleClick } = useContext(AppContext);

  const imgUrl = `https://img.pokemondb.net/artwork/large/${props.name}.jpg`;
  return (
    <div className={`card `} onClick={() => handleClick(props.name)}>
      <img src={imgUrl} alt={`${props.name}-img`} className="card-img" />
      <div className="card-label">
        <div
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          {props.name}
        </div>
        <a
          href={props.url}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          Details
        </a>
      </div>
    </div>
  );
}
