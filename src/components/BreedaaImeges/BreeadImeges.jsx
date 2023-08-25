import css from "./BreedaaImeges.module.css";
import PropTypes from "prop-types";

export const BreedaaImeges = ({ images }) => {
  console.log(images);
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
    { width: "420px", height: "300px", maginTop: "320px" },
  ];
  return (
    <div className={css.imgCat}>
      <ul className={css.list}>
        {images.map((item, index) => (
          <li className={css.item} key={item.id}>
            <img
              style={imageStyles[index % imageStyles.length]}
              src={item.image.url}
              alt={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

BreedaaImeges.propTypes = {
  images: PropTypes.object,
};
