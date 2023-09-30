import { useSelector } from "react-redux";
import { selectorName } from "../../redux/selector";
import css from "./ListSearch.module.css";

export const ListSearch = () => {
  const images = useSelector(selectorName);
  if (images.length === 0) {
    return (
      <div className={css.box}>
        <p className={css.text}>OoPs we didn`t find anything</p>
      </div>
    );
  }

  return (
    <ul className={css.listCat}>
      {images.map((item) => (
        <li className={css.itemCAT} key={item.id}>
          <img className={css.ImagesCat} src={item.url} />{" "}
        </li>
      ))}
    </ul>
  );
};
