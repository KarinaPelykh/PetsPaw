// import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import icon from "../../images/sprite.svg";
// import { selectorBreeds } from "../../redux/selector";
import css from "./SortCat.module.css";
// import { selectorSort } from "../../redux/selector";
// import { useEffect, useState } from "react";
// import { sortIncrement } from "../../redux/operation";

export const SortCat = ({ asc, desc }) => {
  // const breeds = useSelector(selectorBreeds);
  // const [order, setOrder] = useState("ASC");

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(sortIncrement(order));
  // }, [dispatch, order]);

  // const filterAlfabetUp = () => {
  //   // const sortA = [...breeds].sort();
  //   dispatch(sortIncrement(sortA));
  //   // console.log(sortA);
  // };

  // const filterAlfabetDown = () => {
  //   // const sortZ = [...breeds].sort().reverse();
  //   dispatch(sortIncrement(sortZ));
  //   // console.log(sortZ);
  // };

  // const asc = () => {
  //   setOrder("ASC");
  // };

  // const desc = () => {
  //   setOrder("DESC");
  // };
  return (
    <>
      <button onClick={asc} className={css.buttonFilter}>
        <svg className={css.sortSvg}>
          <use xlinkHref={icon + "#icon-Group-up"}></use>
        </svg>
      </button>
      <button onClick={desc} className={css.buttonFilter}>
        <svg className={css.sortSvg}>
          <use xlinkHref={icon + "#icon-Group-down"}></use>
        </svg>
      </button>
    </>
  );
};
