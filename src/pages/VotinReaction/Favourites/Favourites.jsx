import { useSelector } from "react-redux";
import { BreedsForm } from "../../../components/BreedsForm/BreedsForm";
import { Button } from "../../../components/Button/Button";
import { votinSelector } from "../../../redux/selector";
import css from "./FAvourites.module.css";
import { useState } from "react";
import { SearchCat } from "../../SearchCat/SearchCat";

export const Favourites = () => {
  const favorite = useSelector(votinSelector);

  const [opneComp, setOpenComp] = useState(false);
  const toggle = () => {
    if (!opneComp) {
      setOpenComp(!opneComp);
    }
  };
  return (
    <div className={css.section}>
      <BreedsForm toggle={toggle} />

      {opneComp ? (
        <SearchCat />
      ) : (
        <div className={css.container}>
          <div className={css.cont}>
            <Button />
            <button type="button" className={css.btnBreeds}>
              FAVOURITES
            </button>
          </div>
          <ul className={css.list}>
            {favorite.map((item) => {
              if (item.value !== 1 && item.value !== -1) {
                return (
                  <li className={css.list} key={item.id}>
                    <img className={css.images} src={item.image.url} />
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
// export default Favourites;
