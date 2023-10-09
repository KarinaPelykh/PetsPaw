import { useSelector } from "react-redux";
import { selectorName } from "../../redux/selector";
import css from "./ListSearch.module.css";
import { NameCat } from "../NameCat/NameCat";
// import { Link } from "react-router-dom";

export const ListSearch = () => {
  const images = useSelector(selectorName);
  if (images.length === 0) {
    return (
      <div className={css.box}>
        <p className={css.text}>OoPs we didn`t find anything</p>
        <img
          style={{ position: "absolute", top: "240px", left: " 198px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpc-IGtxvZSt1iSsCyci10D2tZ6WBbWywJw&usqp=CAU"
        />
        <p>
          <NameCat />
          {/* Click me!
          <Link target="blank">
          
          </Link> */}
        </p>
      </div>
    );
  }

  return (
    <ul className={css.listCat}>
      {images.map((item) => (
        <li className={css.itemCAT} key={item.id}>
          <img className={css.ImagesCat} src={item.url} />
        </li>
      ))}
    </ul>
  );
};
