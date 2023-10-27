import { useSelector } from "react-redux";
import { selectorImages } from "../../redux/selector";
import css from "./GalleryBreeds.module.css";
export const GalleryBreeds = () => {
  const image = useSelector(selectorImages);
  return (
    <ul className={css.listBreed}>
      {image.map((item) => (
        <li key={item.id}>
          <img className={css.images} src={item.url} />
        </li>
      ))}
    </ul>
  );
};
