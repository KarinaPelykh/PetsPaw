import { useDispatch, useSelector } from "react-redux";
import icon from "../../images/sprite.svg";
import { selectorBreeds } from "../../redux/selector";
import { addSort } from "../../redux/sortCat";
import css from "./SortCat.module.css";
export const SortCat = () => {
  const breeds = useSelector(selectorBreeds);
  const dispatch = useDispatch();
  const breedsName = [];

  for (const breed of breeds) {
    breedsName.push(breed.name);
  }
  const filterAlfabetUp = (e) => {
    e.preventDefault();
    const sortA = [...breedsName].sort();
    dispatch(addSort(sortA));
    console.log(sortA);
  };

  const filterAlfabetDown = (e) => {
    e.preventDefault();
    const sortZ = [...breedsName].sort().reverse();
    dispatch(addSort(sortZ));
    console.log(sortZ);
  };
  return (
    <>
      <button onClick={filterAlfabetUp} className={css.buttonFilter}>
        <svg className={css.sortSvg}>
          <use xlinkHref={icon + "#icon-Group-up"}></use>
        </svg>
      </button>
      <button onClick={filterAlfabetDown} className={css.buttonFilter}>
        <svg className={css.sortSvg}>
          <use xlinkHref={icon + "#icon-Group-down"}></use>
        </svg>
      </button>
    </>
  );
};
