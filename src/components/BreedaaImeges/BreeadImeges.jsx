import { useSelector } from "react-redux";
import css from "./BreedaaImeges.module.css";
// import PropTypes from "prop-types";
import { selectorBreeds } from "../../redux/selector";

export const BreedaaImeges = () => {
  const breeds = useSelector(selectorBreeds);
  // if (breeds.length === 0) {
  //   return (
  //     <div style={{ marginLeft: "80px", marginTop: "120px" }}>Loading...</div>
  //   );
  // }
  const imageStyles = [
    { width: "200px", height: "300px" },
    { width: "200px", height: "140px" },
    { width: "200px", height: "140px" },
    { width: "200px", height: "140px", marginTop: "160px" },
    { width: "420px", height: "300px" },
    { width: "200px", height: "140px", marginTop: "160px" },
    { width: "200px", height: "140px", marginTop: "160px" },
    { width: "200px", height: "300px", marginTop: "160px" },
    { width: "420px", height: "300px", marginTop: "160px" },
    { width: "200px", height: "140px", marginTop: "320px" },
    { width: "200px", height: "300px", marginTop: "320px" },
    { width: "200px", height: "140px", marginTop: "320px" },
    { width: "200px", height: "140px", marginTop: "320px" },
    { width: "200px", height: "140px", marginTop: "320px" },
    { width: "420px", height: "300px", marginTop: "160px" },
    { width: "420px", height: "300px", marginTop: "320px" },
    { width: "200px", height: "140px", marginTop: "320px" },
    { width: "200px", height: "140px", marginTop: "480px" },
    { width: "200px", height: "140px", marginTop: "480px" },
    { width: "200px", height: "300px", marginTop: "320px" },
    { width: "420px", height: "300px", marginTop: "320px" },
  ];
  return (
    <div className={css.imgCat}>
      <ul className={css.list}>
        {breeds.map((item, index) => (
          <li className={css.item} key={item.id}>
            <img
              style={imageStyles[index % imageStyles.length]}
              src={item.image ? item.image.url : item.url}
              alt={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// BreedaaImeges.propTypes = {
//   images: PropTypes.array.isRequired,
// };
