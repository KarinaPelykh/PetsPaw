import icon from "../../images/sprite.svg";

import css from "./SortCat.module.css";

export const SortCat = ({ asc, desc }) => {
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
