import { useSelector } from "react-redux";
import { selectorBreeds } from "../../redux/selector";

export const InfoSliderCat = () => {
  const breeds = useSelector(selectorBreeds);

  //   const { name, description, temperament, origin, weight, life_span } = breeds;

  return (
    <>
      <div
        style={{
          border: "solid 2px rgba(251, 224, 220, 1)",
          borderRadius: "20px",
          width: "640px",
          height: "204px",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button>{breeds.name}</button>
        <h2>{breeds.description}</h2>
        <wraper>
          <p>{breeds.temperament}</p>
        </wraper>
        <wraper>
          <ul>
            <li>{breeds.origin}</li>
            <li>{breeds.weight}</li>
            <li>{breeds.life_span}</li>
          </ul>
        </wraper>
      </div>
    </>
  );
};
