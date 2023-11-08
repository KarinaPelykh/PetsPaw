import { useSelector } from "react-redux";
import { BreedsForm } from "../../../components/BreedsForm/BreedsForm";
import { Button } from "../../../components/Button/Button";
import { votinSelector } from "../../../redux/selector";
import css from "./FAvourites.module.css";

export const Favourites = () => {
  const favorite = useSelector(votinSelector);
  console.log(favorite);
  return (
    <div className={css.section}>
      <BreedsForm />
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
                  <img src={item.image.url} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
